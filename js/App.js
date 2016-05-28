(function () {
    var app = angular.module('Tracker', ['ngRoute', 'chart.js', 'json-server-auth', 'json-server-users']);
    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        }).when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        }).when('/income', {
            templateUrl: 'income.html',
            controller: 'IncomeController'
        }).when('/expense', {
            templateUrl: 'expense.html',
            controller: 'ExpenseController'
        }).when('/add', {
            templateUrl: 'add.html',
            controller: 'AddController'
        }).when('/edit/:editTransaction', {
            templateUrl: 'edit.html',
            controller: 'EditController'
        }).otherwise({
            redirectTo: '/'
        });
    });

})();