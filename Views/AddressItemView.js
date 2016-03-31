var AddressView = Marionette.ItemView.extend({
  template: '#my-address-template',
  // el: '#address',
  onDomRefresh: function(){
    // manipulate the `el` here. it's already
    // been rendered, and is full of the view's
    // HTML, ready to go.
    console.log('Rendered');
  },
  initialize: function(options) {
    this.listenTo(this.model, "change", this.render);
  }
});