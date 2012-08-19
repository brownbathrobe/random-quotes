define([
  'underscore',
  'backbone',
  'models/quote'
  ], function (_, Backbone, Quote) {

  var Quotes = Backbone.Collection.extend({
    url: '/quotes',

    model: Quote,

    faves: function () {
      faveCount = 0
      _(this.models).each(function (model) {
        faveCount += model.get("favorite") ? 1 : 0
      })

      if (faveCount === 0) {
        return "none"
      } else if (faveCount === this.models.length) {
        return "all"
      } else {
        return faveCount
      }
    }

  })

  return Quotes
})
