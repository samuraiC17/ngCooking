var fs = require('fs');

module.exports.get = function (req, res) {
    var recette = fs.readFileSync('app/json/recettes.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(recette);
};

module.exports.save = function (req, res) {
    var recette = req.body;
    fs.writeFileSync('app/json/recettes.json', JSON.stringify(recette));
    res.send(recette);
}

module.exports.getAll = function (req, res) {
    var path = 'app/json/recettes.json';

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



// var fs = require('fs');

// module.exports.get = function (req, res) {
//     var recette = fs.readFileSync('app/json/recettes/' + req.params.id + '.json', 'utf8');
//     res.setHeader('Content-Type', 'application/json');
//     res.send(recette);
// };

// module.exports.save = function (req, res) {
//     var recette = req.body;
//     fs.writeFileSync('app/json/recettes/' + req.params.id + '.json', JSON.stringify(event));

//     res.send(recette);
// }

// module.exports.getAll = function (req, res) {
//     var path = 'app/json/recettes/';

//     var files = [];
//     try {

//         files = fs.readdirSync(path);
//         console.log(files)
//     }
//     catch (e) {
//         console.log(e)
//         res.send('[]');
//         res.end();
//     }
//     var results = "[";
//     for (var idx = 0; idx < files.length; idx++) {
//         if (files[idx].indexOf(".json") == files[idx].length - 5) {
//             results += fs.readFileSync(path + "/" + files[idx]) + ",";
//         }
//     }
//     results = results.substr(0, results.length - 1);
//     results += "]";

//     res.setHeader('Content-Type', 'application/json');
//     res.send(results);
//     res.end();
// };