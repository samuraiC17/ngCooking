cookingApp.factory('communauteData', function($resource,CONFIG) {
    var resource = $resource(CONFIG['END_POINT'] + 'communities/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
    return {
        getCommunaute: function(communauteId) {
            return resource.get({ id: communauteId });
        },
        getAllCommunaute: function() {
            return resource.query();
        },
    };
});  