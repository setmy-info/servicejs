jsdi.service("serviceA", function () {

    var serviceA = {
        inject: ['serviceB']
    };

    serviceA.init = function () {
        console.log("initalizing serviceA");
    };

    serviceA.getElement = function (id) {
        return document.getElementById(id);
    };

    serviceA.getName = function () {
        return "serviceA";
    };

    serviceA.getText = function () {
        return "From services: " + this.getName() + " " + this.serviceB.getName();
    };

    return serviceA;
});
