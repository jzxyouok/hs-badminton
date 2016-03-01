;(function(){
  app.controller('index',function($scope,$http,API){
    
    ////////////////////////
    //根据访客进入的时间判断是否显示预订界面 //
    ////////////////////////
    $scope.today=new Date();

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
      //如果页面访问时间在17:30之前,那么不允许签到和查看
      //
      var now = new Date();
      now.setHours(17);
      now.setMinutes(30);
      if($scope.today.getTime()-now.getTime()>0){
        //sign
        //
        API.sign(function(data){
          window.location.href='#sign-success/'+data.return_msg;
        })
      }else{
        window.location.href='#sign-notbegin/'+"您的活动时间未开始,请稍后签到!";
      }
    }

    //先查询预订结果,然后判断下一步操作
    API.queryResult(function(data){
      
      if($scope.today.getHours()>16){
        $scope.bookdisable=data.return_msg;
      }else{
        
        //TODO
        //应该有一个参数与判断今天我有没有预订
        if(data.return_msg=="您的报名已提交，请在16点后再查询结果"){
          $scope.bookdisable=data.return_msg;

          /**
           * 取消报名
           */
          $scope.cancelSignUp=function(){
            API.cancelSignUp(function(data){
              window.location.reload();
              alert("您的报名已经取消,可以重新开始预订了.");
            })
          }

          return;
        }

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
              window.location.reload();
            })
          }else{
            alert("请选择一个时间段后再提交!");
          }
        }
      }
    });
  });
})();