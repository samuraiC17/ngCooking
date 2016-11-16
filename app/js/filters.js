'use strict'

cookingApp.filter("betweenCalories", function() {
    return function(data, min, max) {
        var res = [];
        angular.forEach(data, function(i) {
            if ((i.calories > min && i.calories < max))
                res.push(i);
        });
        return res;
    };
});

cookingApp.filter("byCategory", function () {

    return function (data, category) {
        if (category != '*') {
            var res = [];
            angular.forEach(data, function (i) {
                if (i.category == category)
                    res.push(i);
            });
            return res;
        }
        return data;
    };
});

cookingApp.filter("searchFor", function () {
    return function (data, str) {
        if (!str)
            return data;
        var res = [];
        str = str.toLowerCase();
        angular.forEach(data, function (i) {
            if (i.name.toLowerCase().substring(0, str.length) == str)
                res.push(i);
        });
        return res;
    };
});

cookingApp.filter("contains", function () {
    return function (data, ing) {
        if (ing != '') {
            var res = [];
            angular.forEach(data, function (i) {
                if (_.contains(i.ingredients, ing))
                    res.push(i);
            });
            return res;
        }
        return data;
    };
});