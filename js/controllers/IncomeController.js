(function () {

    var app = angular.module('Tracker');

    app.controller("IncomeController", [
        "AuthenticationService", "TransactionService", "$scope", "$location",
        function (AuthenticationService, TransactionService, $scope, $location) {

            $scope.transactions = [];

            TransactionService.getIncome().then(function (transactions) {
                    $scope.transactions = transactions;
                },
                function (error) {
                    console.log("error: " + error);
                });

            $scope.deleteTransaction = function (transaction) {
                TransactionService.destroy(transaction.id, transaction.type);
            };

            $scope.editTransaction = function (transaction) {
                $location.path('/edit/' + JSON.stringify(transaction));
            };

            $scope.$watchCollection(function () {
                return TransactionService.income;
            }, function (newValue, oldValue) {
                $scope.transactions = newValue;
            });

            $scope.isLoggedIn = AuthenticationService.isLoggedIn();
        }]);
})();
