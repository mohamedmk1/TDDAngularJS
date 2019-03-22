function customerListCtrl() {
  console.log("aaaaa");
}

module.exports = {
  template: require('./customer-list.template.html'),
  controller: customerListCtrl,
  bindings: {
    // pokemons: '='
  }
}
