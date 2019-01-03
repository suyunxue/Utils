/**
 * @file 本地mock路由
 */

const fs = require('fs');
const path = require('path');

module.exports = function (app) {
    fs.readFile(path.join(__dirname, './mockConf.json'), 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            let dataObject = JSON.parse(data);
            for (let key in dataObject) {
                app.all(dataObject[key].url, function (req, res) {
                    fs.readFile(path.join(__dirname, dataObject[key].path), 'utf-8', function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(JSON.parse(data));
                        }
                    })
                });
            }
        }
    });
}