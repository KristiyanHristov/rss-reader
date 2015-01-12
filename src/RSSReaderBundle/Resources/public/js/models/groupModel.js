
var GroupModel = Backbone.RelationalModel.extend({
    
    //relations: [{
    //    type: Backbone.HasMany,
    //    key: 'feeds',
    //    relatedModel: 'FeedModel',
    //    collectionType: 'FeedCollection',
    //    reverseRelation: {
    //        key: 'group'
    //    }
    //}],
    
    defaults: {
        id: null,
        title: "FeedGroupTitle"
    }
    
});
