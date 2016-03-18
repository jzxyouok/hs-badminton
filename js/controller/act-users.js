;(function(){
  app.controller('actUsers',function($scope,$http,API,$routeParams,$location){

    $scope.index=function(){
      $location.path("/")
    }

    $scope.choosePlace=function(placeNo){
      $location.path("/act-users/"+placeNo);
    }

    $scope.placeIcon=['fa-reddit-alien','fa-modx','fa-mortar-board','fa-rocket'];

    var placeNo = $routeParams.placeNo;
    
    $scope.tab=placeNo;
    API.getActivitieUsers(placeNo,function(data){
      $scope.acts=data;
    })
  });
})();