// var DestroyWarn = Marionette.Behavior.extend({
//   // You can set default options
//   // just like you can in your Backbone Models.
//   // They will be overridden if you pass in an option with the same key.
//   defaults: {
//     "message": "You are destroying!"
//   },

//   // Behaviors have events that are bound to the views DOM.
//   events: {
//     "click @ui.row": "warnBeforeDestroy"
//   },

//   warnBeforeDestroy: function() {
//     alert(this.options.message);
//     // Every Behavior has a hook into the
//     // view that it is attached to.
//     this.view.destroy();
//   }
// });

// Marionette.Behaviors.behaviorsLookup = function() {
//   return window.Behaviors;
// }

// window.Behaviors.DestroyWarn = DestroyWarn;