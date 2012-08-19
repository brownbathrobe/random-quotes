define([
  'jquery',
  'underscore',
  'backbone',
  'views/quote',
  'collections/quotes',
  'text!templates/quotes_view.html'
  ], function ($, _, Backbone, QuoteView, Quotes, QuotesTemplate) {

    var QuotesView = Backbone.View.extend({
      el: '#quotes',

      initialize: function () {
        _.bindAll(this, 'addOne')
        this.collection.on("reset", this.addAll, this)
        this.collection.on("change:favorite", this.updateFaves, this)
        this.updateFaves()
      },

      updateFaves: function () {
        $('#faves').html(this.collection.faves())
      },

      addAll: function () {
        this.collection.each(this.addOne)
      },

      addOne: function (quote) {
        var view = new QuoteView({ model : quote })
        this.$el.append(view.render().el)
      }
    })
    return QuotesView
  }
)
