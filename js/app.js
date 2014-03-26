App = Ember.Application.create();

App.Store = DS.Store.extend({
    adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  // put your routes here
});