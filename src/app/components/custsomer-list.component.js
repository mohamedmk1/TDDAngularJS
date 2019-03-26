import $ from "jquery";

class customerListCtrl {
  constructor(){};
  $onInit() {
  }

  onSelectCustomer(customer){
    $('#clientModal').modal('hide');
    this.onSelectedCustomer(customer);
  }
}

module.exports = {
  template: require('./customer-list.template.html'),
  controller: customerListCtrl,
  controllerAs: 'vm',
  bindings: {
    list: '=',
    onSelectedCustomer: '<'
  }
}
