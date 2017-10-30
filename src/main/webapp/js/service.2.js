HAS.services = {};

HAS.service = function (serviceName, serviceObject) {
    HAS.services[serviceName] = serviceObject;
    //HAS.resolveDependencies();
};

HAS.initServices = function () {
    HAS.resolveDependencies();
    var serviceObject, serviceObjectPropertyName;
    for (serviceObjectPropertyName in HAS.services) {
        serviceObject = HAS.services[serviceObjectPropertyName];
        if (serviceObject.init) {
            serviceObject.init();
        }
    }
};

HAS.resolveDependencies = function () {
    var serviceObject, serviceObjectPropertyName;
    for (serviceObjectPropertyName in HAS.services) {
        serviceObject = HAS.services[serviceObjectPropertyName];
        HAS.resolveServiceDependencies(serviceObject);
    }
};

HAS.resolveServiceDependencies = function (serviceObject) {
    if (serviceObject.dependencies) {
        var depNamePosition, serviceName;
        for (depNamePosition in serviceObject.dependencies) {
            serviceName = serviceObject.dependencies[depNamePosition];
            serviceObject[serviceName] = HAS.services[serviceName];
        }
    }
};