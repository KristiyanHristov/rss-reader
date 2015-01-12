var GroupListView = Backbone.View.extend({
    
    globalEvents: '',
    
    el: '.feed-categories',

    initialize: function(options) {
        this.globalEvents = options.globalEvents;
        this.listenTo(this.collection, 'sync', this.render);
        this.listenTo(this.collection, 'destroy', this.render);
    },
    
    render: function() {
        this.$el.html('');
        
        var self = this;
        this.collection.each(function(item) {
            self.$el.append(new GroupListItemView({
                "model": item, 
                "globalEvents": self.globalEvents
            }).el);
        });

        return this;
    },

    toggleManageButtons: function() {
        if(this.$el.has("input").length) {
            return;
        }

        this.$el.find('.badge').toggle();
        this.$el.find('.btn-edit').toggle();
        this.$el.find('.btn-delete').toggle();
    }
});
