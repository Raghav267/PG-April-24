const fs = require("fs");

function readFile() {

    fs.readFile("doc.txt", {
        encoding: 'utf-8'
    }, (err, data) => {
        if (err) throw err;
        console.log(data);
    })

}

readFile();