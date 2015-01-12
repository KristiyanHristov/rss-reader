var SidebarView = Backbone.View.extend({
    
    groupCollection: '',
    
    groupListView: '',
    
    el: '#main-sidebar',

    events: {
        'click #addGroup': 'createGroup',
        'click #addFeed': 'createFeed',
        'click #manageGroups': 'manageGroups'
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.groupCollection = new GroupCollection();

        var self = this;
        this.groupCollection.fetch({
            success: function () {
                this.groupListView = new GroupListView({
                    collection: self.groupCollection
                });
            }
        });
    },
    
    createGroup: function() {
        var name = $('#groupName');
        
        this.groupCollection.create({
            title: name.val()
        });
        
        //clear modal field
        name.val("");
    },
    
    createFeed: function() {
        var name = $('#feedName').val();
        var url = $('#feedUrl').val();

        this.groupListView.createFeed({
            id: url,
            title: name,
            feedUrl: url
        });
    },

    manageGroups: function() {
        this.$el.find('.badge').toggle();
        this.$el.find('.btn-edit').toggle();
        this.$el.find('.btn-delete').toggle();
    }
    
});
