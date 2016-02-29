;(function(){
    var app = angular.module('hsymq', ['ngRoute'])

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'views/index.html'
            })
            .when('/sign', {
                controller: 'sign',
                templateUrl: 'views/sign.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    window.app = app;
})();

