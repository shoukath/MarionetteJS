var HeadItemView = Marionette.ItemView.extend({
  template: '#my-view-template',
  tagName: 'li',
  initialize: function() {
    this.model.on('change', this.render, this);
  }
});