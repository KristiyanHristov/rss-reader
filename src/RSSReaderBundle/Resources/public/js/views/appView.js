var AppView = Backbone.View.extend({
    
    globalEvents: '',

    el: "#rss-reader",
    
    events: {
        'loadFeed': 'loadFeed'
    },
    
    initialize: function() {
        // create a Global Event Listener and pass it to all views
        this.globalEvents = _.extend({}, Backbone.Events);
        
        // We need this to abort all pending Requests (when switching feeds)
        this.createRequestPool();
        
        //this.globalEvents.on( 'loadFeed', this.loadFeed, this );

        new SidebarView();

        //var groups = new GroupCollection();
        //groups.fetch();
        
        //console.log(groups);
        
        //var groups = new GroupCollection();
        //
        //var group = new GroupModel({'title': 'Test'});
        //var group2 = new GroupModel({'title': 'Test2'});
        //
        //var feed = new FeedModel({'title': 'Kaldata', 'url': 'http://www.kaldata.com/rosebud/rss.php?catid=1', 'group': group});
        //var feed2 = new FeedModel({'title': 'TechCrunch', 'url': 'http://feeds.feedburner.com/TechCrunch/', 'group': group2});
        //
        //groups.sync('create', group);
        //groups.sync('create', group2);
        
        //var GroupList = new GroupListView({"model": groups, "globalEvents": this.globalEvents});
        
        //new GroupListView({"model": groups, "globalEvents": this.globalEvents});
        
    },
    
    createRequestPool: function() {
        $.xhrPool = [];
        $.xhrPool.abortAll = function() {
            $(this).each(function(idx, jqXHR) {
                jqXHR.abort();
            });
            $.xhrPool.length = 0
        };

        $.ajaxSetup({
            beforeSend: function(jqXHR) {
                $.xhrPool.push(jqXHR);
            },
            complete: function(jqXHR) {
                var index = $.inArray(jqXHR, $.xhrPool);
                if (index > -1) {
                    $.xhrPool.splice(index, 1);
                }
            }
        });
    },
    
    loadFeed: function(model) {
        // abort pending requests
        $.xhrPool.abortAll();

//        model.set('unread', model.get('articles').where({read: false}).length);
        
        //console.log(model);
        
        // display Articles from LocalStorage
        //var articles = new ArticleListView({ "model": model.get('articles'), "globalEvents": this.globalEvents});

        var self = this;
        
        // get new Articles from Web
        $.ajax({
            url: '/feed/?url=' + encodeURIComponent(model.get('url'))
        }).success(function(data) {

            //var articles = new ArticleCollection(JSON.parse(data));
            
            //for(var i= 0; i<JSON.parse(data).length; i++) {
            //    var article = new ArticleModel(JSON.parse(data)[i]);
            //    article.set({'feed': model});
            //    articles.sync('create', article);
            //}
            
            //model.get('articles').sync('update', JSON.parse(data));
            
            //model.get('articles').sync('create', JSON.parse(data));
            //model.save();
            //new ArticleListView({ "model": model.get('articles'), "globalEvents": self.globalEvents});
//            
//            model.set('unread', model.get('articles').where({read: false}).length);
            
        });
    }
    
});
