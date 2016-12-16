cookingApp.factory('commentsData', function ($resource, CONFIG) {
    var resource = $resource(CONFIG['END_POINT'] + 'comments/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
        
    return {
        getComment: function (commentId) {
            return resource.get({ id: commentId });
        },

        save: function (comment) {
            return resource.save(comment);
        },

        getComments: function () {
            return resource.query();
        },
    };
});