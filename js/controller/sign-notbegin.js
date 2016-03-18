;(function(){
  app.controller('signNotBegin',function($scope,$http,API,$routeParams,$location){
    
    $scope.msg=$routeParams.msg;

    /**
     * 返回主页
     */
    $scope.back=function(){
      $location.path("/");
    }
  });
})();