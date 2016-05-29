(function () {

    var app = angular.module('Tracker');

    app.controller("HomeController", [
        "AuthenticationService", "TransactionService", "$scope", "$window",
        function (AuthenticationService, TransactionService, $scope, $window) {

            $scope.transactions = [];
            $scope.types = ["Income", "Expense"];
            $scope.chartData = [0, 0];
            $scope.balance = 0;

            TransactionService.getIncome().then(function (transactions) {
                    $scope.transactions = transactions;
                },
                function (error) {
                    console.log("error: " + error);
                });
            TransactionService.getExpense().then(function (transactions) {
                    $scope.transactions = $scope.transactions.concat(transactions);
                },
                function (error) {
                    console.log("error: " + error);
                });

            $scope.$watch('transactions', function (newValue, oldValue) {
                var income = 0;
                newValue.forEach(function (transaction) {
                    if (transaction.type === 'income') {
                        income += (1 * transaction.price);
                    }
                })
                var expense = 0;
                newValue.forEach(function (transaction) {
                    if (transaction.type === 'expense') {
                        expense += (1 * transaction.price);
                    }
                })
                $scope.chartData = [income, expense];
                var balance = income - expense;
                $scope.balance = Math.round(balance * 100) / 100;
            });

            $scope.isLoggedIn = AuthenticationService.isLoggedIn();
        }]);
})();
