var fs = require('fs');
var path = require('path');

var ObjTree = (dir, done) => {
    var results = [];

    fs.readdir(dir, (err, list) => {
        if (err)
            return done(err);

        var pending = list.length;

        if (!pending)
            return done(null, {name: path.basename(dir), type: 'folder', subfiles: results});

        list.forEach((file) => {
            file = path.resolve(dir, file);
            fs.stat(file, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    ObjTree(file, (err, res) => {
                        results.push({
                            name: path.basename(file),
                            type: 'folder',
                            subfiles: res
                        });
                        if (!--pending)
                            done(null, results);
                    });
                }
                else {
                    results.push({
                        type: 'file',
                        name: path.basename(file)
                    });
                    if (!--pending)
                        done(null, results);
                }
            });
        });
    });
};
var dir = ('/Users/himankjain/Desktop/JS/notes_maker');

ObjTree(dir, (err, res) => {
    if(err)
        console.error(err);

    console.log(JSON.stringify(res,null,2));
});