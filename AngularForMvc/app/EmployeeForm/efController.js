﻿angularFormsApp.controller('efController',
    function EmployeeFormController($scope, $window, $routeParams, DataService, $modal) {
        
        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
                "Инжинер",
                "Маркетинг",
                "Финансовый",
                "Администратор",
        ];

        $scope.programmingLanguages = [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "Java",
            "Pascal",
            "Perl",
            "PHP"
        ];

        $scope.shouldShowFullName = function () {
            return true;
        }

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                //Вставка нового сотрудника
                DataService.insertEmployee($scope.editableEmployee).then(
                    function (results) {
                        //on success - успешный вызов
                        $scope.employee = angular.copy($scope.editableEmployee);
                        if ($modal.IsModal) {
                            $modal.window.dismiss();
                        } else {
                            $window.history.back();
                        }
                    },
                    function (results) {
                        //on error - ОШИБКА вызова
                        console.log(results);
                    }
                );
            } else {
                //Редактирование сотрудника
                DataService.updateEmployee($scope.editableEmployee).then(
                    function (results) {
                        //on success - успешный вызов
                        $scope.employee = angular.copy($scope.editableEmployee);
                        if ($modal.IsModal) {
                            $modal.window.dismiss();
                        } else {
                            $window.history.back();
                        }
                    },
                    function (results) {
                        //on error - ОШИБКА вызова
                        console.log(results);
                    }
                );
            }
        }

        $scope.cancelForm = function () {
            if($modal.IsModal) {
                $modal.window.dismiss();
            } else {
                $window.history.back();
            }
        }

        $scope.checkFullName = function () {
            return (!$scope.editableEmployee.fullName || $scope.editableEmployee.fullName.length === 0);
        }
    }
); 