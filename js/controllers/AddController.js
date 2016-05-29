(function () {

    var app = angular.module('Tracker');

    app.controller("AddController", [
        "AuthenticationService", "TransactionService", "$scope",
        function (AuthenticationService, TransactionService, $scope) {

            $scope.addTransaction = function () {
                var transaction = {
                    'id': TransactionService.getIncome().length + 1,
                    'date': $scope.newTransaction.date,
                    'title': $scope.newTransaction.title,
                    'price': $scope.newTransaction.price,
                    'type': $scope.newTransaction.type
                };
                TransactionService.update(transaction)
                console.log("added");
                $scope.newTransaction = {};
            };

            $scope.isLoggedIn = AuthenticationService.isLoggedIn();

        }]);
})();
