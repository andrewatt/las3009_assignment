(function () {

    var app = angular.module('Tracker');

    app.controller("LoginController",
        [
            "AuthenticationService", "$scope", function (AuthenticationService, $scope) {

            $scope.isLoggedIn = AuthenticationService.isLoggedIn();

            $scope.Login = function (username, password) {
                console.log("Login " + username + " " + password);
                AuthenticationService.Login(username, password).then(function () {
                    console.log("Login ok");
                })
            }

            $scope.getCurrentUser = function () {
                if (this.isLoggedIn()) {
                    return AuthenticationService.getCurrentUser().username;
                }
                return "";
            }

            $scope.Logout = function () {
                AuthenticationService.Logout().then(function () {
                    console.log("Logout ok");
                })
            }

        }]);
})();
