var Quote = Backbone.Model.extend({

  urlRoot: "/random_quote",

  randomize: function () {
    this.fetch()
  }

})

var QuoteView = Backbone.View.extend({

  el: "#quote",

  events: {
    "click #new-one" : "newQuote"
  },

  initialize: function () {
    this.model.on("change", this.render, this)
  },

  newQuote: function () {
    this.model.randomize()
  },

  render: function () {
    var template = _.template($("#quote-template").html())
    this.$el.html(template(this.model.toJSON()))
  }
})

$(function () {
  var quote = new Quote()
  var quoteView = new QuoteView({ model : quote })
  quote.randomize()
})
