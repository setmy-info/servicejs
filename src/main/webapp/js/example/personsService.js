jsdi.service("personsService", function () {

    var personsService = {
        rolesService: null
    };

    personsService.init = function () {
        console.log("initalizing personsService");
    };

    personsService.person = null;

    personsService.loadPerson = function (callback) {
        var that = this;
        setTimeout(function () {
            if (personsService.person) {
                callback(person);
            }
            personsService.person = {
                name: "Imre"
            };
            that.rolesService.getPersonRole(personsService.person.name, function (role) {
                personsService.person.role = role;
                callback(personsService.person);
            });
        }, 3000);
    };

    return personsService;
});
