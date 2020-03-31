import $ from "jquery";

class productListCtrl {
  constructor(){};
  $onInit() {
  }

  onSelectProduct(product){
    $('#productModal').modal('hide');
    this.onSelectedProduct(product);
  }
}

module.exports = {
  template: require('./product-list.template.html'),
  controller: productListCtrl,
  controllerAs: 'vm',
  bindings: {
    list: '=',
    onSelectedProduct: '<'
  }
}
