;(function(){
    var app = angular.module('hsymq', ['ngRoute'])

    app.config(function ($routeProvider){
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'views/index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

    window.app = app;
})();

