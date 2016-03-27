var AddressView = Marionette.ItemView.extend({
  template: '#my-address-template',
  // el: '#address',
  initialize: function() {
    this.model.on('change', this.render, this);
  }
});