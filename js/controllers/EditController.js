(function () {

    var app = angular.module('Tracker');

    app.controller(
        "EditController",
        ["TransactionService", "$scope", "$routeParams", "$location",
            function (TransactionService, $scope, $routeParams, $location) {
                $scope.editTransaction = JSON.parse($routeParams.editTransaction);
                $scope.dateFormated = new Date($scope.editTransaction.date);
                $scope.edit = function () {
                    var transaction = {
                        'id': $scope.editTransaction.id,
                        'date': $scope.dateFormated,
                        'title': $scope.editTransaction.title,
                        'price': $scope.editTransaction.price,
                        'type': $scope.editTransaction.type
                    };
                    TransactionService.update(transaction);
                    $location.path('/' + $scope.editTransaction.type)
                };
            }]);
})();
