
describe('serviceA', function () {

    var serviceA;

    beforeEach(function () {
        serviceA = jsdi.services.serviceA;
    });

    it('should be created for testing', function () {
        expect(serviceA).toBeDefined();
    });

    it('should return text by all sub services', function () {
        expect(serviceA.getText()).toEqual("From services: serviceA serviceB serviceC");
    });
});
