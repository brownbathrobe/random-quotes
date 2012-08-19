require.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'underscore': {
      exports: '_'
    },

    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],

      exports: 'Backbone'
    }
  },
  paths: {
    jquery:     'lib/jquery.min',
    underscore: 'lib/underscore',
    backbone:   'lib/backbone',
    text:       'lib/text'
  }
})

require([
  'views/quotes',
  'collections/quotes'
], function( QuotesView, Quotes ) {
  var quotes = new Quotes()
  new QuotesView({ collection : quotes })
  quotes.fetch()
})
