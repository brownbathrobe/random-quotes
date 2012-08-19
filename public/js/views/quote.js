define([
  'jquery',
  'underscore',
  'backbone',
  'models/quote',
  'text!templates/quote_view.html'
  ], function ($, _, Backbone, Quote, QuoteTemplate) {

  var QuoteView = Backbone.View.extend({

    tagName: 'li',

    className: 'quote',

    events: {
      "click" : "toggleFave"
    },

    initialize: function () {
      this.model.on("change", this.render, this)
    },

    toggleFave: function () {
      console.log("log it")
      this.model.toggleFave()
    },

    render: function () {
      var template = _.template(QuoteTemplate)
      this.$el.html(template(this.model.toJSON()))
      return this
    }
  })

  return QuoteView
})
