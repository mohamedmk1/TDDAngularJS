// 1 ére itération
// tester si tous les informations du client ont été bien choisi
it('should return -2 if one or more customer informations are not set', () => {
    //Arrange
    ctrl.customerForm = {
        name: 'john',
        email: '',
        accountNumber: "3654"
    };

    //Act 
    const result = ctrl.onValidate();

    //Assert
    expect(result).toEqual(-1);
});
//code 
onValidate(){
    return -1;
}


//2 éme itération
// tester si notre bon de commande contient au moins un produit
it('should return -2 if order don\'t have at least one product', () => {
    //Arrange
    ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: "3654"
    };
    ctrl.currentProducts = [];

    //Act 
    const result = ctrl.onValidate();

    //Assert
    expect(result).toEqual(-3);
});

// code (le plus simple c'est de retourner -3)
if (_.isEmpty(this.customerForm)) {
    return ValidationErrorsEnum.CUSTOMER_INFORMATIONS_NOT_SET;
}
if (_.isEmpty(this.customerForm.name) || _.isEmpty(this.customerForm.email) || _.isEmpty(this.customerForm.accountNumber)) {
    return ValidationErrorsEnum.CUSTOMER_MISSING_INFORMATIONS;
}
return ValidationErrorsEnum.EMPTY_PRODUCTS;;
// Refacto: ras 

//3 éme itération
//tester si tous les informations de l'adresse ont été bien saisis
it('should return -3 if address informations are not set', () => {
    //Arrange
    ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: "3654"
    };
    ctrl.currentProducts = [{ reference: "PR01", label: "Ecouteurs", price: 14.65, quantity: 3 }];
    ctrl.addressForm = {
        street: '',
        postalCode: '',
        country: ''
    };

    //Act 
    const result = ctrl.onValidate();

    //Assert
    expect(result).toEqual(-3);
});

// code
if (_.isEmpty(this.addressForm.street) || _.isEmpty(this.addressForm.postalCode) || _.isEmpty(this.addressForm.country)) {
    return ValidationErrorsEnum.ADDRESS_INFORMATIONS_MISSING;
}

//4 éme itération
//tester si la rue est correcte
it('should return -4 if street is not valid', () => {
    //Arrange
    ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: "3654"
    };
    ctrl.currentProducts = [{ reference: "PR01", label: "Ecouteurs", price: 14.65, quantity: 3 }];
    ctrl.addressForm = {
        street: 'rue de Paris',
        postalCode: '75016',
        country: 'France'
    };

    //Act 
    const result = ctrl.onValidate();

    //Assert
    expect(result).toEqual(-4);
});

// code
if (!this.addressForm.street.match(/^\d+(\s[a-zA-Z]+)+/g)) {
    return ValidationErrorsEnum.ADDRESS_STREET_NOT_VALID;
}

//5 éme itération
//tester si le code postal est correct
it('should return -5 if postal code is not valid', () => {
    //Arrange
    ctrl.customerForm = {
        name: 'john',
        email: 'lmabrouk.mohamed@gmail.com',
        accountNumber: "3654"
    };
    ctrl.currentProducts = [{ reference: "PR01", label: "Ecouteurs", price: 14.65, quantity: 3 }];
    ctrl.addressForm = {
        street: '2 rue de Paris',
        postalCode: '75016f',
        country: 'France'
    };

    //Act 
    const result = ctrl.onValidate();

    //Assert
    expect(result).toEqual(-5);
});

// code
if (!this.addressForm.street.match(/^\d+(\s[a-zA-Z]+)+/g)) {
    return ValidationErrorsEnum.ADDRESS_POSTAL_CODE_NOT_VALID;
}

