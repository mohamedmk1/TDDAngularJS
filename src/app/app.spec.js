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

    it("should return -1 if customer informations are not set", () => {
      //Arrange
      ctrl.customerForm = {};

      //Act
      var result = ctrl.onValidate();

      //Assert
      expect(result).toEqual(-1);
    });

    it("should return -2 if one or more customer informations are not defined", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email:"",
        accountNumber: "3456"
      };

      //Act
      var result = ctrl.onValidate();

      //Assert
      expect(result).toEqual(-2);
    });


    it("should return -3 if address informations are not set", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email:"john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {};

      //Act
      var result = ctrl.onValidate();

      //Assert
      expect(result).toEqual(-3);
    });

    it("should return -4 if one or more address informations are not defined", () => {
      //Arrange
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email:"john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {
        street: "2 rue de Paris",
        postalCode:"",
        country: "FR"
      };

      //Act
      var result = ctrl.onValidate();

      //Assert
      expect(result).toEqual(-4);
    });


  });
});
