var addressViewInstance = new AddressView({
    model: new Address()
  })

  headOfFamily = new Person(),

  headItemInstance = new HeadItemView({
    model: headOfFamily
  }),

  headOfFamily2 = new Person({
    firstName: 'Aaliya',
    lastName: 'Khanum',
    email: 'aaliya@gmail.com'
  }),
  
  collection = new HeadsCollection([headOfFamily, headOfFamily2]),

  headsOfFamilyView = new HeadsCollectionView({
    collection: collection
  });







var app = new Marionette.Application();

app.on('start', function() {
  // Backbone.history.start();
  var layoutView = new AppLayoutView();
  layoutView.render();

  layoutView.getRegion('address').show(addressViewInstance);
  layoutView.content.show(headsOfFamilyView);
});

// Load some initial data, and then start our application
app.start();


// headOfFamily.set('email', 'shoukhan@yahoo.com')
