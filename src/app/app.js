import angular from 'angular';
import 'bootstrap';
import customerList from './components/custsomer-list.component'

import '../style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'vm'
  }
};

class AppCtrl {
  constructor() {
    var vm = this;
    vm.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .component('customerList', customerList)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
