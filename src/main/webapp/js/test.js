function onBodyLoad() {
    var element = jsdi.services.serviceA.getElement('output');
    element.innerHTML = jsdi.services.serviceA.getText();
}
