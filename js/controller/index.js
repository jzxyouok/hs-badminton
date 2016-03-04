;(function(){
  app.controller('index',function($scope,$http,API){
    
    ////////////////////////
    //根据访客进入的时间判断是否显示预订界面 //
    ////////////////////////
    $scope.today=new Date();
    $scope.daysOfWeek=$scope.today.getDay()==0?7:$scope.today.getDay();

    /**
     * 跳转到活动列表页面
     */
    $scope.actUsers=function(){
     window.location.href='#act-users/1';
    }

    /**
     * 签到
     */
    $scope.sign=function(){
      API.sign(function(data){
        if(data.return_msg=="活动未开始，请稍后再签到"||data.return_msg=="您没报名或没报名成功"){
          window.location.href='#sign-notbegin/'+data.return_msg;
        }else{
          window.location.href='#sign-success/'+data.return_msg;
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
              window.location.href="#/?redo"

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
              window.location.href="#/?done"
            })
          }else{
            alert("请选择一个时间段后再提交!");
          }
        }
      }
    });
  });
})();