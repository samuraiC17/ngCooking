cookingApp.factory('rankingHelper', function () {
    return {
        initCommunaute: function (communaute) {
            communaute.stars = new Array(communaute.level);
            for (var i = 0; i < communaute.level; i++) {
                communaute.stars[i] = i;
            }
            communaute.status = setDescription(communaute.level);
            communaute.name = setName(communaute.firstname, communaute.surname);
        },

        initRecette: function (recette) {
            recette.hearts = new Array(recette.note);
            for (var i = 0; i < recette.note; i++) {
                recette.hearts[i] = i;
            }
        },

        initHearts: function (note) {
            var hearts = new Array(note);
            for (var i = 0; i < note; i++) {
                hearts[i] = i;
            }
            return hearts;
        }
    }
    function setDescription(level) {
        if (level === 1)
            return 'Novice';
        if (level === 2)
            return 'Confirmé';
        if (level === 3)
            return 'Expert';
    };

    function setName(firstname, surname) {
        return firstname + ' ' + surname;
    };
});