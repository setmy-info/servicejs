jsdi.service("rolesService", function () {

    var rolesService = {
    };

    rolesService.init = function () {
        console.log("initalizing rolesService");
    };

    rolesService.getPersonRole = function (name, callback) {
        var db = {
            Imre: "Java Dev"
        };
        callback(db[name]);
    };

    return rolesService;
});
