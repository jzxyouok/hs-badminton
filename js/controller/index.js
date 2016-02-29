;(function(){
  app.controller('index',function($scope,$http,API){
    API.getAvailableTime(function(data){
      $scope.times = data.data;
    });

    $scope.today=new Date().getTime();

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
      API.book({
        userId:"10555",
        weixinId:"10555",
        phone:"123456789101",
        signUpId:time.id
      },function(data){
        console.log(data)
      })
    }
  });
})();