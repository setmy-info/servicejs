/*!
 * MIT License
 *
 * Copyright (c) 2017-2019 Imre Tabur <imre.tabur@eesti.ee>
 */
"use strict";

(function (global) {

    var jsdi = global.jsdi = global.jsdi || {};

    var isInitialized = false;

    jsdi.services = {
    };

    jsdi.service = function (serviceName, serviceObject) {
        var instance;
        if (typeof serviceObject === 'function') {
            instance = serviceObject();
        } else {
            instance = serviceObject;
        }
        jsdi.services[serviceName] = instance;
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
        isInitialized = true;
    };

    jsdi.resolveDependencies = function () {
        var serviceObject, serviceObjectPropertyName;
        for (serviceObjectPropertyName in jsdi.services) {
            serviceObject = jsdi.services[serviceObjectPropertyName];
            jsdi.resolveServiceDependenciesFromList(serviceObject);
            jsdi.resolveServiceDependenciesFromObject(serviceObject);
        }
    };

    jsdi.resolveServiceDependenciesFromList = function (serviceObject) {
        if (serviceObject.inject) {
            var depNamePosition, serviceName;
            for (depNamePosition in serviceObject.inject) {
                serviceName = serviceObject.inject[depNamePosition];
                serviceObject[serviceName] = jsdi.services[serviceName];
            }
        }
    };

    jsdi.resolveServiceDependenciesFromObject = function (serviceObject) {
        var propertyName, property;
        for (propertyName in serviceObject) {
            property = serviceObject[propertyName];
            if (property === null) {
                serviceObject[propertyName] = jsdi.services[propertyName];
            }
        }
    };

    jsdi.getObject = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    var getReplacement = function (serviceName) {
        if (serviceName) {
            return this.services[serviceName];
        }
        return this.services;
    };

    jsdi.get = function (serviceName) {
        if (!isInitialized) {
            this.initServices();
        }
        jsdi.get = getReplacement;
        return jsdi.get(serviceName);
    };

})(typeof window === 'undefined' ? global : window);
