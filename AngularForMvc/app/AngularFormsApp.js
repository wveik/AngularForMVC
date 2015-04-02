﻿
var angularFormsApp = angular.module('angularFormsApp', ["ngRoute", "ui.bootstrap"]);

angularFormsApp.config(
    function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/Home.html",
                controller: "HomeController"
            })
            .when("/newEmployeeForm", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .when("/updateEmployeeForm/:id", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .otherwise({
                redirectTo: "/home"
            });

    });

angularFormsApp.controller("HomeController",
    ["$scope", "$location", "$modal", "DataService",
    function ($scope, $location, $modal, DataService) {

        $scope.showCreateEmployeeForm = function () {
            //$location.path('/newEmployeeForm');
            
            $modal.window = $modal.open({
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            });
        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id)
        };

    }]);