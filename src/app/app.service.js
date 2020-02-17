
export default class AppService {
  checkValidStreet(street) {
    return street.match(/^\d+(\s[a-zA-Z]+)+/g);
  }
}



