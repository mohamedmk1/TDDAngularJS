
export default class AppService {
  isValidStreet(streetAddress) {
    return streetAddress.match(/^\d+(\s[a-zA-Z]+)+/g);
  }
  isValidPostalCode(postalCode){
    return postalCode.match(/\d{5}/g)
  }
}



