;(function(){
    var app = angular.module('hsymq', ['ngRoute'])

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'views/index.html'
            })
            .when('/sign-notbegin/:msg', {
                controller: 'signNotBegin',
                templateUrl: 'views/sign-notbegin.html'
            })
            .when('/sign-success/:msg', {
                controller: 'signSuccess',
                templateUrl: 'views/sign-success.html'
            })
            .when('/act-users/:placeNo', {
                controller: 'actUsers',
                templateUrl: 'views/act-users.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    window.app = app;
})();

