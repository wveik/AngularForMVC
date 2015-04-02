
angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Михаил Катаев",
                    notes: "Лучший сотрудник месяца =)",
                    department: "Администратор",
                    dateHired: "July 11 2014",
                    breakTime: "July 11 2014 3:00 PM",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });