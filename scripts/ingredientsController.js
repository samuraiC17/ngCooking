var fs = require('fs');

module.exports.get = function(req, res) {
    var ingredient = fs.readFileSync('app/json/ingredients/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(ingredient);
};

module.exports.save = function(req, res) {
    var ingredient = req.body;
    fs.writeFileSync('app/json/ingredients/' + req.params.id + '.json', JSON.stringify(ingredient));
    res.send(ingredient);
}

module.exports.getAll = function(req, res) {
    var path = 'app/json/ingredients/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};
