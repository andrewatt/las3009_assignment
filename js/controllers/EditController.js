(function () {

    var app = angular.module('Tracker');

    app.controller(
        "EditController",
        ["TransactionService", "$scope", "$routeParams", "$location",
            function (TransactionService, $scope, $routeParams, $location) {
                $scope.editTransaction = JSON.parse($routeParams.editTransaction);
                $scope.edit = function () {
                    var transaction = {
                        'id': $scope.editTransaction.id,
                        'date': $scope.editTransaction.date,
                        'title': $scope.editTransaction.title,
                        'price': $scope.editTransaction.price,
                        'type': $scope.editTransaction.type
                    };
                    TransactionService.update(transaction);
                    $location.path('/' + $scope.editTransaction.type)
                };
            }]);
})();
