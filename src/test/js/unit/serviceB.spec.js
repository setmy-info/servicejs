
describe('serviceB', function () {

    var serviceB;

    beforeEach(function () {
        serviceB = jsdi.services.serviceB;
    });

    it('should be created for testing', function () {
        expect(serviceB).toBeDefined();
    });

    it('should return text for self and sub service', function () {
        expect(serviceB.getName()).toEqual("serviceB serviceC");
    });
});
