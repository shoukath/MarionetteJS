var AppLayoutView = Marionette.LayoutView.extend({
  template: "#layout-view-template",
  el: '#addressContainer',

  regions: function(options){
    return {
      address: "#address",
      content: "#content"
    };
  }

});