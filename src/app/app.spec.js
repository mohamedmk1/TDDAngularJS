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

    it('should return CUSTOMER_INFORMATIONS_NOT_SET value if customer informations are not set', () => {
      // Arrange
      ctrl.customerForm = {};

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.CUSTOMER_INFORMATIONS_NOT_SET);
    });

    it("should return CUSTOMER_MISSED_INFORMATIONS if one or more customer informations are not defined", () => {
      // Arrange
      ctrl.customerForm = {
        name: "john",
        email: "",
        accountNumber: "3456"
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.CUSTOMER_MISSED_INFORMATIONS);
    });

    it("should return ADDRESS_INFORMATIONS_NOT_SET if address informations are not set", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email: "john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {};

      //Act
      const result = ctrl.onValidate();

      //Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.ADDRESS_INFORMATIONS_NOT_SET);
    });

    it("should return ADDRESS_MISSED_INFORMATIONS if one or more address informations are not set", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email: "john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {
        street: "2 rue de Paris",
        postalCode: "",
        country: "FR"
      };

      //Act
      const result = ctrl.onValidate();

      //Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.ADDRESS_MISSED_INFORMATIONS);
    });

    it("should return ADDRESS_STREET_NOT_VALID if street is not valid", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email: "john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {
        street: "rue du commerce",
        postalCode: "36543",
        country: "FR"
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.ADDRESS_STREET_NOT_VALID);
    });

    it("should return ADDRESS_POSTAL_CODE_NOT_VALID if postal code is not valid", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email: "john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {
        street: "2 rue du commerce",
        postalCode: "RT456",
        country: "FR"
      };

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.ADDRESS_POSTAL_CODE_NOT_VALID);
    });

    it("should return MISSING_PRODUCTS if we don't have products", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email: "john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {
        street: "2 rue du commerce",
        postalCode: "94250",
        country: "FR"
      };
      ctrl.currentProducts = [];

      // Act
      const result = ctrl.onValidate();

      // Assert
      expect(result).toEqual(ctrl.VALIDATION_ERROR.MISSING_PRODUCTS);
    });


  });
});
