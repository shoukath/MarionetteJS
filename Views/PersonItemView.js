var HeadItemView = Marionette.ItemView.extend({
  ui: {
    "row": ".row"
  },

  // events: {
  //   "click @ui.rowClicked": "warnBeforeDestroy"
  // },
  template: '#my-view-template',
  tagName: 'li',
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  // },
  // // warnBeforeDestroy: function() {
  // //   console.log('Clicked');
  // // },
  // behaviors: {
  //   DestroyWarn: {
  //     message: "you are destroying all your data is now gone!"
  //   }
  }
});