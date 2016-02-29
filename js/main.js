;(function(){
    var app = angular.module('hspingpang', ['ngRoute'])

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

