;(function(){
  var week=['日','一','二','三','四','五','六']
  app.controller('index',function($scope,$http,API,$location){
    ////////////////////////
    //根据访客进入的时间判断是否显示预订界面 //
    ////////////////////////
    $scope.today=new Date();
    $scope.daysOfWeek=week[$scope.today.getDay()];

    /**
     * 跳转到活动列表页面
     */
    $scope.actUsers=function(){
     $location.path( '/act-users/1');
    }

    /**
     * 签到
     */
    $scope.sign=function(){
      API.sign(function(data){
        if(data.return_code!=0){
          $location.path( '/sign-notbegin/'+data.return_msg);
        }else{
          $location.path( '/sign-success/'+data.return_msg);
        }
      })
    }

    //先查询预订结果,然后判断下一步操作
    API.queryResult(function(data){
      
      if($scope.today.getHours()>16||data.return_msg!="今天您没有报名"){
        $scope.bookdisable=data.return_msg;

        if(data.return_msg=="您的报名已提交，请在16点后再查询结果"){
          /**
           * 取消报名
           */
          $scope.cancelSignUp=function(){
            API.cancelSignUp(function(data){
              // $location.path( "/" );
              window.location.href="#/?cancel"

              alert("您的报名已经取消,可以重新开始预订了.");
            })
          }
        }
      }else{
        API.getAvailableTime(function(data){
          $scope.times = data.data;
        });

        /**
         * 选择
         */
        $scope.chooseTime=function(time){
          $scope.choose=time;
        }

        /**
         * 预订
         */
        $scope.book=function(time){
          if(time){
            API.book(time.id,function(data){
              if(data.return_code!=0){
                alert(data.return_msg);
              }else{
                // $location.path( "/")
                window.location.href="#/?done"
              }
            })
          }else{
            alert("请选择一个时间段后再提交!");
          }
        }
      }
    });
  });
})();