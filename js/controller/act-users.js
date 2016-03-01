;(function(){
  app.controller('actUsers',function($scope,$http,API,$routeParams){

    $scope.index=function(){
      window.location.href="#/"
    }

    $scope.choosePlace=function(placeNo){
      $scope.tab=placeNo;
      API.getActivitieUsers($routeParams.placeNo,function(data){
        $scope.acts=data;
      })
    }

    $scope.choosePlace($routeParams.placeNo);
  });
})();