var fs = require('fs');

module.exports.get = function(req, res) {
    var communaute = fs.readFileSync('app/json/communaute/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(communaute);
};

module.exports.save = function(req, res) {
    var communaute = req.body;
    fs.writeFileSync('app/json/communaute/' + req.params.id + '.json', JSON.stringify(communaute));
    res.send(communaute);
}

module.exports.getAll = function(req, res) {
    var path = 'app/json/communaute/';

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
