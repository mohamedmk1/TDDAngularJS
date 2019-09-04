// import app from './app';

// describe('app', () => {

//   describe('AppCtrl', () => {
//     let ctrl;

//     beforeEach(() => {
//       angular.mock.module(app);

//       angular.mock.inject(($controller) => {
//         ctrl = $controller('AppCtrl', {});
//       });
//     });

//     it("should return -1 if customer informations are not set", () => {
//       // Arrange
//       ctrl.customerForm = {};

//       // Act
//       var result = ctrl.onValidate();

//       // Assert
//       expect(result).toEqual(-1);
//     });

//     it("should return -2 if one or more customer informations are not defined", () => {
//       // Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"",
//         accountNumber: "3456"
//       };

//       // Act
//       var result = ctrl.onValidate();

//       // Assert
//       expect(result).toEqual(-2);
//     });


//     it("should return -3 if address informations are not set", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "3456"
//       };
//       ctrl.addressForm = {};

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-3);
//     });

//     it("should return -4 if one or more address informations are not defined", () => {
//       //Arrange
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "3456"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"",
//         country: "FR"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-4);
//     });

//     it("should return -5 if street is not valid", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "3456"
//       };
//       ctrl.addressForm = {
//         street: "rue du commerce",
//         postalCode:"36543",
//         country: "FR"
//       };

//       // Act
//       var result = ctrl.onValidate();

//       // Assert
//       expect(result).toEqual(-5);
//     });

//      it("should return -6 if postal code is not valid", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "3456"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"123456",
//         country: "FR"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-6);
//     });



//     it("should return null if street is not valid", () => {
//       //Arrange
//       var street ="rue du commerce";

//       //Act
//       var result = ctrl.isValidStreet(street);

//       //Assert
//       expect(result).toEqual(null);
//     });


//     it("should return false if postal code is not valid", () => {
//       //Arrange
//       var postalCode ="123456";

//       //Act
//       var result = ctrl.isValidPostalCode(postalCode);

//       //Assert
//       expect(result).toEqual(false);
//     });

//     it("should return -7 if payment credentials are not set", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "12345"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"12345",
//         country: "FR"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-7);
//     });

//     it("should return -8 if card number is not valid", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "12345"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"12345",
//         country: "FR"
//       };
//       ctrl.paymentCredentials = {
//         cardNumber: "1234g",
//         name:"med",
//         expirationDate: "13/06/2021",
//         cryptogramme:"350"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-8);
//     });

//     it("should return -9 if card name is not valid", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "12345"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"12345",
//         country: "FR"
//       };
//       ctrl.paymentCredentials = {
//         cardNumber: "1234567812345678",
//         name:"med12",
//         expirationDate: "13/06/2021",
//         cryptogramme:"350"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-9);
//     });

//     it("should return -10 if card expiration date is not valid", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "12345"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"12345",
//         country: "FR"
//       };
//       ctrl.paymentCredentials = {
//         cardNumber: "1234567812345678",
//         name:"mohamed el mabrouk",
//         expirationDate: "13f/06/2021",
//         cryptogramme:"350"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-10);
//     });

//     it("should return -11 if card cryptogramme is not valid", () => {
//       //Arrange
//       ctrl.customerForm = {
//         name: "john",
//         email:"john.eliott@gmail.com",
//         accountNumber: "12345"
//       };
//       ctrl.addressForm = {
//         street: "2 rue de Paris",
//         postalCode:"12345",
//         country: "FR"
//       };
//       ctrl.paymentCredentials = {
//         cardNumber: "1234567812345678",
//         name:"mohamed el mabrouk",
//         expirationDate: "13/06/2021",
//         cryptogramme:"350d"
//       };

//       //Act
//       var result = ctrl.onValidate();

//       //Assert
//       expect(result).toEqual(-11);
//     });
//   });
// });
