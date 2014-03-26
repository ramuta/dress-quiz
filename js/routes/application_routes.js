App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        this.store.push('item', {
            id: 1,
            image_url: "http://w.fashiocdn.com/images/entities/0/X/o/u/s/1395438109.365x365.Tfafafa.jpg",
            brand: "Burberry"
        });

        this.store.push('item', {
            id: 2,
            image_url: "http://static.zara.net/photos//2013/I/1/1/p/7222/201/040/2/w/1024/7222201040_2_1_1.jpg",
            brand: "Zara"
        });

        this.store.push('item', {
            id: 3,
            image_url: "http://cdn.madamenoire.com/wp-content/uploads/2012/01/L.jpg",
            brand: "Louboutin"
        });
    }
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('item', 2);
    }
});