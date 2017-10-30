
var JSInjectConfigItem = (function () {
    function JSInjectConfigItem(attributeName, className) {
        this.instance = null;
        this.attributeName = attributeName;
        this.className = className;
    }
    return JSInjectConfigItem;
}());
var JSInject = (function () {
    function JSInject() {
        this.instances = {};
        this.configItems = [];
    }
    JSInject.prototype.add = function (attributeName, className) {
        this.configItems.push(new JSInjectConfigItem(attributeName, className));
    };
    JSInject.prototype.init = function () {
        var configItem, i, attrName, global = (window || GLOBAL);
        for (i = 0; i < this.configItems.length; i++) {
            var clazz = (global[this.configItems[i].className]);
            this.configItems[i].instance = new clazz();
            if (this.configItems[i].instance.setClassName) {
                this.configItems[i].instance.setClassName(this.configItems[i].className);
            }
            if (this.configItems[i].instance.setInstanceName) {
                this.configItems[i].instance.setInstanceName(this.configItems[i].attributeName);
            }
            this.instances[this.configItems[i].attributeName] = this.configItems[i].instance;
        }
        for (i = 0; i < this.configItems.length; i++) {
            configItem = this.configItems[i];
            var attribute;
            for (attrName in configItem.instance) {
                attribute = this.instances[attrName];
                if (attribute) {
                    configItem.instance[attrName] = this.instances[attrName];
                }
                attribute = null;
            }
        }
        for (i = 0; i < this.configItems.length; i++) {
            if (this.configItems[i].instance.init) {
                this.configItems[i].instance.init();
            }
        }
    };
    JSInject.configure = function (injectConfig) {
        var pos, instanceName, className;
        for (pos in injectConfig) {
            instanceName = injectConfig[pos].instanceName;
            className = injectConfig[pos].className;
            inject.add(instanceName, className);
        }
        inject.init();
    };
    JSInject.inject = new JSInject();
    return JSInject;
}());
var Abc = (function () {
    function Abc() {
        this.name = "Abc";
        this.def = null;
    }
    Abc.prototype.log = function () {
        console.log("From abc def.name: " + this.def.name);
    };
    return Abc;
}());
var Def = (function () {
    function Def() {
        this.name = "Def";
        this.abc = null;
    }
    Def.prototype.log = function () {
        console.log("From def abc.name: " + this.abc.name);
    };
    return Def;
}());
var inject = JSInject.inject;
JSInject.configure([
    { instanceName: "sessionStorage", className: "JSStorage", deps: null },
    { instanceName: "localStorage", className: "JSStorage", deps: null },
    { instanceName: "jsDomain", className: "JSDomain", deps: null },
    { instanceName: "resource", className: "Resource", deps: null },
    { instanceName: "objectService", className: "ObjectService", deps: ["resource"] },
    { instanceName: "log", className: "JSLog", deps: null },
    { instanceName: "applicationVisibility", className: "JSApplicationVisibility", deps: ["jsDomain"] },
    { instanceName: "scopes", className: "JSScopes", deps: null }
]);
