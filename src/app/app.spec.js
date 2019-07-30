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
  });
});
