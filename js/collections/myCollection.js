// Namespace your yourApp
var app = app || {};

// A group (array) of models
app.myCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.myModel

});