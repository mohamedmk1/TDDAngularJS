import angular from 'angular';
import 'bootstrap';
import customerList from './components/custsomer-list.component'
import productList from './components/product-list.component';
import $ from "jquery";
import _ from "lodash";

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../node_modules/toastr/build/toastr.css';
import AppService from './app.service';


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'vm'
  }
};

class AppCtrl {


  constructor() {
    this.onSelectedCustomer = this.onSelectedCustomer.bind(this);
    this.onSelectedProduct = this.onSelectedProduct.bind(this);
    this.customerForm = {
      name: '',
      email: '',
      accountNumber: ''
    };
    this.addressForm = {
      street: '',
      postalCode: '',
      country: ''
    };
    this.paymentCredentials = {};
    this.customersList = [];
    this.currentProducts = [];
    this.url = 'https://github.com/preboot/angular-webpack';
  }

  $onInit()
  {
    this.setCustomersList(this.getCustomersList());
    this.setProductsList(this.getProductsList());
    this.currentProducts = [];

  }

  getProductsList()
  {
    return [
      {
        "reference": "PR01",
        "label": "Ecouteurs",
        "price": "19.66",
        "quantity": "1"
      },
      {
        "reference": "PR02",
        "label": "Enceinte",
        "price": "99.87",
        "quantity": "1"
      }
    ]
  }

  getCustomersList()
  {
    return [
      {
        "Nom": "EL Mabrouk",
        "Prenom": "Mohamed",
        "Email": "lmabrouk.mohamed@gmail.com",
        "AccountNumber": "123456",
        "Phone": "07 12 11 36 13",
        "Adresse": "2 Rue de Provigny - Cachan (94230)"
      },
      {
        "Nom": "Le grand",
        "Prenom": "Stephane",
        "Email": "legrand.stephane@gmail.com",
        "AccountNumber": "365412",
        "Phone": "07 13 01 36 13",
        "Adresse": "13 Rue Mendes - Paris (75003)"
      },
      {
        "Nom": "Goutalier",
        "Prenom": "Pierre",
        "Email": "goutalier.pierre@gmail.com",
        "AccountNumber": "987456",
        "Phone": "06 12 11 37 13",
        "Adresse": "21 Rue Jean - Paris (75019)"
      },
      {
        "Nom": "Mendes",
        "Prenom": "Jean Christophe",
        "Email": "cristophe.jc@gmail.com",
        "AccountNumber": "658734",
        "Phone": "06 01 11 02 13",
        "Adresse": "104 Rue France - Paris (75018)"
      },
      {
        "Nom": "Petit",
        "Prenom": "Jen",
        "Email": "petit.jean@gmail.com",
        "AccountNumber": "654123",
        "Phone": "06 62 20 98 00",
        "Adresse": "203 Rue Leclerc - Paris (75002)"
      }
    ];
  }

  setCustomersList(customers)
  {
    this.customersList = customers;
  }

  setProductsList(products)
  {
    this.productsList = products;
  }

  getCustomer()
  {
    return this.customerForm;
  }

  setCustomer(customer)
  {
    this.customerForm.name = customer.Prenom + " " + customer.Nom;
    this.customerForm.email = customer.Email;
    this.customerForm.accountNumber = customer.AccountNumber;
  }

  searchCustomer()
  {
    this.setCustomersList(this.getCustomersList());

    if (_.isEmpty(this.customerForm)) {
      toastr.error("Veuillez saisir un critére de recherche client");
    } else {

      if (this.customerForm.name) {
        var searchFullName = this.customerForm.name;
        this.customersList = _.filter(this.customersList, function (item) {
          var fullName = item.Prenom + " " + item.Nom;
          return _.includes(fullName, searchFullName)
        });
      }
      if (this.customerForm.email) {
        this.customersList = _.filter(this.customersList, o => o.Email.includes(this.customerForm.email));
      }
      if (this.customerForm.accountNumber) {
        this.customersList = _.filter(this.customersList, o => o.AccountNumber.includes(this.customerForm.accountNumber));
      }

      if (this.customersList.length === 0) {
        toastr.error("Aucun client ne correspond aux critéres recherchés");
      } else if (this.customersList.length === 1) {
        this.setCustomer(this.customersList[0]);
      } else {
        $('#clientModal').modal('show');
      }

    }
  }

  onValidate()
  {
    const ValidationErrorsEnum = Object.freeze(
      {
        CUSTOMER_MISSING_INFORMATIONS: -1,
        EMPTY_PRODUCTS: -2,
        ADDRESS_MISSING_INFORMATIONS: -3,
        STREET_NOT_VALID: -4,
        POSTAL_CODE_NOT_VALID: -5
      });
    if (_.isEmpty(this.customerForm.name) || _.isEmpty(this.customerForm.accountNumber) || _.isEmpty(this.customerForm.email)) {
      console.log('veuillez saisir toutes les informations client');
      return ValidationErrorsEnum.CUSTOMER_MISSING_INFORMATIONS;
    }
    if (this.currentProducts.length == 0) {
      console.log('veuillez choisir un produit');
      return ValidationErrorsEnum.EMPTY_PRODUCTS;
    }
    if(_.isEmpty(this.addressForm.country) || _.isEmpty(this.addressForm.postalCode) || _.isEmpty(this.addressForm.street)){
      return ValidationErrorsEnum.ADDRESS_MISSING_INFORMATIONS;
    }
    if(!this.addressForm.street.match(/^\d+(\s[a-zA-Z]+)+/g)){
      return ValidationErrorsEnum.STREET_NOT_VALID;
    }
    if(!this.addressForm.postalCode.match(/\d{5}/g)){
      return ValidationErrorsEnum.POSTAL_CODE_NOT_VALID;
    }
  }

  onReset()
  {
    this.customerForm = {};
    this.currentProducts = [];
    this.addressForm = {};
    this.paymentCredentials = {};
  }

  chooseCustomer()
  {
    this.setCustomersList(this.getCustomersList());
    $('#clientModal').modal('show');
  }

  chooseProduct()
  {
    $('#productModal').modal('show');
  }

  resetSearchCustomer()
  {
    this.customerForm = {};
  }

  onSelectedCustomer(customer)
  {
    this.setCustomer(customer);
  }

  onSelectedProduct(product)
  {
    this.currentProducts.push(product);
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .component('customerList', customerList)
  .component('productList', productList)
  .controller('AppCtrl', AppCtrl)
  .service('AppService', AppService);

export default MODULE_NAME;
