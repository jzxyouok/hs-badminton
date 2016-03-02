;(function(){
  app.controller('actUsers',function($scope,$http,API,$routeParams){

    $scope.index=function(){
      window.location.href="#/"
    }

    $scope.choosePlace=function(placeNo){
      window.location.href="#/act-users/"+placeNo;
    }

    $scope.placeIcon=['fa-reddit-alien','fa-modx','fa-mortar-board','fa-rocket'];

    var placeNo = $routeParams.placeNo;
    
    $scope.tab=placeNo;
    API.getActivitieUsers(placeNo,function(data){
      $scope.acts=data;
    })
  });
})();