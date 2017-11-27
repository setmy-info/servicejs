var jsdi = {
    services: {
    }
};

jsdi.service = function (serviceName, serviceObject) {
    var obj;
    if (typeof serviceObject === 'function') {
        obj = serviceObject();
    } else {
        obj = serviceObject;
    }
    jsdi.services[serviceName] = obj;
};

jsdi.initServices = function () {
    jsdi.resolveDependencies();
    var serviceObject, serviceObjectPropertyName;
    for (serviceObjectPropertyName in jsdi.services) {
        serviceObject = jsdi.services[serviceObjectPropertyName];
        if (serviceObject.init) {
            serviceObject.init();
        }
    }
};

jsdi.resolveDependencies = function () {
    var serviceObject, serviceObjectPropertyName;
    for (serviceObjectPropertyName in jsdi.services) {
        serviceObject = jsdi.services[serviceObjectPropertyName];
        jsdi.resolveServiceDependencies(serviceObject);
    }
};

jsdi.resolveServiceDependencies = function (serviceObject) {
    if (serviceObject.inject) {
        var depNamePosition, serviceName;
        for (depNamePosition in serviceObject.inject) {
            serviceName = serviceObject.inject[depNamePosition];
            serviceObject[serviceName] = jsdi.services[serviceName];
        }
    }
};

function getService(serviceName) {
    return jsdi.services[serviceName];
}

function getObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
