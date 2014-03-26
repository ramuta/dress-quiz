App.IndexController = Ember.ArrayController.extend({
    alternatives: ['ena', 'dva', 'tri'],

    model: function() {
        return this.store.find('item', 2);
    },

    allItems: function() {
        return this.store.all('item');
    },

    itemsNumber: Ember.computed.alias('item.length')
});