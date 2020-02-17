// ctrl +alt +T: add region
// ctrl+shift+/: comment and uncomment block
// ctrl +alt + L: format file

// Dans le cadre de notre présentation, nous allons implémenter
// la validation d'un bon de service en suivant l'approche TDD
// 1 bon de service contient un client, 1 ou xieurs produits et 1 adresse de livraison

//region first test: check if customer informations are not set
// un test est divisé en 3 parties (3A)

// écrire un test pour retourner 0

import _ from "lodash";

it('should return -1 if customer informations are not set', () => {
    // Arrange
    ctrl.customerForm = {};

    // Act
    var result = ctrl.onValidate();

    // Assert
    expect(result).toEqual(-1);
});

//implementation
return -1;

//Refacto

// créer une enum contenant une erreur au lieu de retourner -1 qui n'est significatif
this.VALIDATION_ERROR = {
    CUSTOMER_INFORMATIONS_NOT_SET: "-1"
};

//modifier le code
return this.VALIDATION_ERROR.CUSTOMER_INFORMATIONS_NOT_SET;
//endregion

//region second test: check if we have missed customer informations
it("should return CUSTOMER_MISSED_INFORMATIONS if one or more customer informations are not defined", () => {
  // Arrange
  ctrl.customerForm = {
    name: "john",
    email:"",
    accountNumber: "3456"
  };

  // Act
  var result = ctrl.onValidate();

  // Assert
  expect(result).toEqual(ctrl.VALIDATION_ERROR.CUSTOMER_MISSED_INFORMATIONS);
});

//Implementation
if(this.customerForm.name === "" || this.customerForm.email === "" || this.customerForm.accountNumber === ""){
  return this.VALIDATION_ERROR.CUSTOMER_MISSED_INFORMATIONS;
}

//Refacto
//utiliser la fonction isEmpty de la librarire lodash isEmpty
if (_.isEmpty(this.customerForm.name) || _.isEmpty(this.customerForm.email) || _.isEmpty(this.customerForm.accountNumber))
  //1 test ne passe pas, maj ligne
if(!_.isEmpty(this.customerForm.name) && (_.isEmpty(this.customerForm.name) || _.isEmpty(this.customerForm.email) || _.isEmpty(this.customerForm.accountNumber)))
//endregion

  //region check if we have products
//test
// it("should return MISSING_PRODUCTS if we don't have products", () => {
//   //Arrange
//   ctrl.customerForm = {
//     name: "john",
//     email: "john.eliott@gmail.com",
//     accountNumber: "3456"
//   };
//   ctrl.addressForm = {
//     street: "2 rue du commerce",
//     postalCode: "94250",
//     country: "FR"
//   };
//   ctrl.currentProducts = [];
//
//   // Act
//   const result = ctrl.onValidate();
//
//   // Assert
//   expect(result).toEqual(ctrl.VALIDATION_ERROR.MISSING_PRODUCTS);
// });
// //implementation
// if(this.currentProducts.length === 0){
//   return this.VALIDATION_ERROR.MISSING_PRODUCTS;
// }
//
// //refcato
//
// //endregion

//region third test: check if address informations are not set
  it("should return ADDRESS_INFORMATIONS_NOT_SET if address informations are not set", () => {
      //Arrange
      ctrl.customerForm = {
        name: "john",
        email: "john.eliott@gmail.com",
        accountNumber: "3456"
      };
      ctrl.addressForm = {};
      //Act
      var result = ctrl.onValidate();
      //Assert
      expect(result).toEqual(this.VALIDATION_ERROR.ADDRESS_INFORMATIONS_NOT_SET);
    });
//implementation
if(_.isEmpty(this.addressForm)){
  return this.VALIDATION_ERROR.ADDRESS_INFORMATIONS_NOT_SET;
}
//2 tests cassés
if(_.isEmpty(this.customerForm)){
  return this.VALIDATION_ERROR.CUSTOMER_INFORMATIONS_NOT_SET;
}
if(!_.isEmpty(this.customerForm.name) && (_.isEmpty(this.customerForm.name) || _.isEmpty(this.customerForm.email) || _.isEmpty(this.customerForm.accountNumber))){
  return this.VALIDATION_ERROR.CUSTOMER_MISSED_INFORMATIONS;
}
if(_.isEmpty(this.addressForm)){
  return this.VALIDATION_ERROR.ADDRESS_INFORMATIONS_NOT_SET;
}
//endregion

//region fourth test: check if we have missed address form
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

//implementation
if(_.isEmpty(this.addressForm.postalCode) || _.isEmpty(this.addressForm.street) || _.isEmpty(this.customerForm.country)){
  return this.VALIDATION_ERROR.ADDRESS_MISSED_INFORMATIONS;
}
//endregion

//region fifth test: check if street is valid
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

//implementation
//expliquer la regex, ça doit commencer par un nombre, espace, une suite de caractéres, espace suite de caractéres
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_exec2
/*<!DOCTYPE html>
<html>
<body>

<p>The exec() method returns the matched text if it finds a match, otherwise it returns null.</p>
<p>Click the button to search a string for the character "e".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

  <script>
  function myFunction() {
    var str = "2 rue de paris";
    var res = str.match();
    document.getElementById("demo").innerHTML = res;
  }
  </script>

  </body>
  </html>*/

//implementation
if(!this.addressForm.street.match(/^\d+(\s[a-zA-Z]+)+/g)){
  return this.VALIDATION_ERROR.ADDRESS_STREET_NOT_VALID;
}

// Refacto
//extraire la vérification du street code dans un service (app.service)
//TODO: extract function in a service

export default class AppService {
  isValidStreet(streetAddress) {
    return streetAddress.match(/^\d+(\s[a-zA-Z]+)+/g);
  }
}
//dans app.js
//ajouter .service('AppService', AppService);
//import AppService from './app.service';
//Ajouter AppService dans constructeur
//this.service = AppService;
if(!this.service.isValidStreet(this.addressForm.street)){
  return this.VALIDATION_ERROR.ADDRESS_STREET_NOT_VALID;
}


//endregion

//region sixth test: check if postal code is valid
//test
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

//implementation
if(!this.addressForm.postalCode.match(/\d{5}/g)){
  return this.VALIDATION_ERROR.ADDRESS_POSTAL_CODE_NOT_VALID;
}

//refacto
//extract in a service function
if(!this.service.isValidPostalCode(this.addressForm.postalCode)){
  return this.VALIDATION_ERROR.ADDRESS_POSTAL_CODE_NOT_VALID;
}
//endregion

//region service
import app from './app';

describe('app service', () => {
  let service;

  beforeEach(() => {
    angular.mock.module(app);

    angular.mock.inject((AppService) => {
      service = AppService;
    });
  });

  it('should return null if street is not valid', () => {
    // Arrange
    const street = 'rue du commerce';

    // Act
    const result = service.isValidStreet(street);

    //Assert
    expect(result).toEqual(null);
  });

  it('should return null if postal code is not valid', () => {
    // Arrange
    const postalCode = 96512;

    // Act
    const result = service.isValidPostalCode(postalCode);

    //Assert
    expect(result).toEqual('gesg');
  });
})
//endregion

