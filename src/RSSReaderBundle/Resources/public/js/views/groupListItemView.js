var GroupListItemView = Backbone.View.extend({

    globalEvents: '',
    
    tagName: 'li',

    template: _.template($('#groupListItemView-template').html()),
    
    events: {
        'click .feed-group': 'detailedGroupView',
        'click .btn-delete': 'remove',
        'click .list-group-item .title': 'editTitle',
        'keypress #editTitle': 'confirmEditTitle',
        'blur #editTitle': 'cancelEditTitle'
    },
    
    initialize: function(options) {
        this.globalEvents = options.globalEvents;
        
        this.listenTo(this.model, 'change', this.render);

        var self = this;
//        this.model.get('feeds').each(function(feed){
//            feed.bind('change', self.updateGroupListItemView, this);
//        },this);

        this.render();
    },

    updateGroupListItemView: function() {
        //this.model.set('unread', this.model.get('feeds').where({read: false}).length);
        this.model.save();
        this.render();
    },
    
    render: function() {
        this.$el.html('');
        this.$el.html(this.template({'item': this.model}));
        return this;
    },
    
    remove: function() {
        this.model.destroy({
            wait: true
        });
    },

    editTitle: function(ev) {
        ev.stopPropagation();
        var title = this.model.get("title");

        this.$el.find('.btn-edit, .btn-delete').remove();
        this.$el.find('.title').remove();

        this.$el.prepend('<input type="text" id="editTitle" />');
        this.$el.find('input').focus().val(title);
    },
    
    confirmEditTitle: function(ev) {
        ev.stopPropagation();

        if(ev.keyCode == '13') {
            this.model.set("title", this.$el.find("input").val());
            this.model.save(["title"]);
        }
    },
    
    cancelEditTitle: function(ev) {
        ev.stopPropagation();
        this.render();
    }
    

    /*detailedGroupView: function(e) {

        $('.feed-categories .selected .feed-list').html('');
        $('.feed-categories .selected').removeClass('selected');

        if ( !this.$el.hasClass('selected') ) {
            this.$el.toggleClass('selected');
            
            this.$el.find('.feed-list').html('');

            var feed = new FeedListView({
                'model': new FeedCollection(this.model.get('feeds')),
                'globalEvents': this.globalEvents
            });

            this.$el.find('.feed-list').append(feed.el);
        } else {
            this.$el.toggleClass('selected');
            this.$el.find('.feed-list').html('');
        }
        

//        this.globalEvents.trigger('loadFeed', this.model);
    }*/
    
});
