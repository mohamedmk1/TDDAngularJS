import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should be defined', () => {
      expect(ctrl).toBeDefined();
    });

    it('should return -1 if one or more customer infomrations are not set', () => {
      // Arrange
      ctrl.customerForm = {
        name: 'john',
        email: '',
        accountNumber: '3456'
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(-1);
    });

    it('should return -2 if order don\'t have at least one product', () => {
      // Arrange
      ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: '3456'
      };
      ctrl.currentProducts = [];

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(-2);
    });

    it('should return -3 if address informations are not set', () => {
      // Arrange
      ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: '3456'
      };
      ctrl.currentProducts = [{reference: "PR01", label: "Ecouteurs", price: 14.65, quantity: 3}];
      ctrl.addressForm = {
        street: '',
        postalCode: '',
        country: ''
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(-3);
    });

    it('should return -4 if street is not valid', () => {
      // Arrange
      ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: '3456'
      };
      ctrl.currentProducts = [{reference: "PR01", label: "Ecouteurs", price: 14.65, quantity: 3}];
      ctrl.addressForm = {
        street: 'rue de Paris',
        postalCode: '94230',
        country: 'France'
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(-4);
    });

    it('should return -5 if postal code is not valid', () => {
      // Arrange
      ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: '3456'
      };
      ctrl.currentProducts = [{reference: "PR01", label: "Ecouteurs", price: 14.65, quantity: 3}];
      ctrl.addressForm = {
        street: '2 rue de Paris',
        postalCode: 'a9423',
        country: 'France'
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(-5);
    });

  });
});
