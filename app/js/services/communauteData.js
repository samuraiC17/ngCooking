cookingApp.factory('communauteData', function($resource, CONFIG, $http) {
    var resource = $resource(CONFIG['END_POINT'] + 'communities/:id', { id: '@id' },
        { "getAll": { method: "GET", isArray: true } });
    return {
        getCommunaute: function(communauteId) {
            return resource.get({ id: communauteId });
        },
        getAllCommunaute: function() {
            return resource.query();
        },
        getAuth: function(email, password) {
            return $http({
                method: 'POST',
                url: CONFIG['END_POINT'] + 'communities?email=' + email + '&password=' + password
            });
        },
    };
});  