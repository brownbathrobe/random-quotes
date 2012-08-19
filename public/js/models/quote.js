define([
  'underscore',
  'backbone'
], function (_, Backbone) {

  var Quote = Backbone.Model.extend({

    urlRoot: "/random_quote",

    toggleFave: function () {
      this.set("favorite", !this.get("favorite"))
    }

  })
  return Quote
})
