App.Item = DS.Model.extend({
    image_url: DS.attr('string'),
    brand: DS.belongsTo('brand')
});