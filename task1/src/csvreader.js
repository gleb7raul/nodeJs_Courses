const csvFilePath = './data/readFile.csv';
const csv = require('csvtojson');
//const converter=csv(parserParameters, streamOptions);
const fs = require('fs');

class CSVreader {
    constructor(){}
    init() {
        try {
            csv()
            .fromFile(csvFilePath)
            .then((jsonObj)=>{
                console.log(jsonObj);
            });
            this.csvToTxt();
        } catch {
            this.handleError();
        };
    }

    csvToTxt() {
        csv({
            ignoreColumns: /(Amount)/,
            checkType: true
        })
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            const txtFile = JSON.stringify(jsonObj);
            //fs.writeFileSync('test.json', txtFile.join(", "));
            console.log(txtFile);
        });
    }

    handleError() {
        csv()
        .on('error',(err)=>{
            console.log(err)
        });
    }
};

module.exports = CSVreader;