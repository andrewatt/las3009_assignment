(function () {

    var app = angular.module('Tracker');

    app.controller("HomeController", [
        "AuthenticationService", "TransactionService", "$scope", "$window",
        function (AuthenticationService, TransactionService, $scope, $window) {

            $scope.transactions = [];
            $scope.types = ["Income", "Expense"];

            //$scope.incomePrice = 0;
            //$scope.expencePrice = 0;
            TransactionService.getIncome().then(function (transactions) {
                    $scope.transactions = transactions;
                    /*transactions.forEach(function (transaction) {
                     $scope.incomePrice += transaction.price;
                     })
                     console.log($scope.incomePrice);*/
                },
                function (error) {
                    console.log("error: " + error);
                });
            TransactionService.getExpense().then(function (transactions) {
                    $scope.transactions = $scope.transactions.concat(transactions);
                    /*transactions.forEach(function (transaction) {
                     $scope.expencePrice += transaction.price;
                     })
                     console.log($scope.expencePrice);*/
                },
                function (error) {
                    console.log("error: " + error);
                });
            $scope.prices = [$scope.incomePrice, $scope.expencePrice];

            $scope.getBalance = function () {
                var income = 0;
                this.transactions.forEach(function (transaction) {
                    if (transaction.type === 'income') {
                        income += (1 * transaction.price);
                    }
                })
                var expense = 0;
                this.transactions.forEach(function (transaction) {
                    if (transaction.type === 'expense') {
                        expense += (1 * transaction.price);
                    }
                })
                this.prices = [income, expense];
                // console.log($scope.prices);
                var balance = income - expense;
                balance = Math.round(balance * 100) / 100;
                return balance;
            }

            $scope.isLoggedIn = function () {
                return AuthenticationService.isLoggedIn();
            }

        }]);
})();
