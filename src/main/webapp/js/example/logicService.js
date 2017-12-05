jsdi.service("logicService", function () {

    /**
     * This like code is usually in controllers.
     * 
     * jsdi.services.logicService.loadPerson();
     * 
     * jsdi.services.personsService;
     * 
     * 1. JS console.
     * 2. JS debug.
     * 3. Data check.
     * 
     * */
    var logicService = {
        personsService: null
    };

    logicService.init = function () {
        console.log("initalizing logicService");
    };

    logicService.loadPerson = function () {
        var that = this;
        this.personsService.loadPerson(function (name) {//Currenlty with callback. Can be rewriten to promises.
            that.setElementText('person', name);
        });
    };

    logicService.setElementText = function (id, person) {
        this.getElement(id).innerHTML = person.name + " as " + person.role;
    };

    logicService.getElement = function (id) {
        return document.getElementById(id);
    };

    return logicService;
});
