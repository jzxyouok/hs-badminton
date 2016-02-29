;(function(){
  app.controller('index',function($scope,$http,API){
    
    ////////////////////////
    //根据访客进入的时间判断是否显示预订界面 //
    ////////////////////////
    $scope.today=new Date();

    $scope.sign=function(){
      window.location.href='#sign';
    }

    API.queryResult(function(data){
      console.log(data)
    });

    if($scope.today.getHours()>16){
      //无法预订
      

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
        API.book(time.id,function(data){
          console.log(data)
        })
      }
    }
  });
})();