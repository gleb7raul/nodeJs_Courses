const csvFilePath = './data/readFile.csv';
const csv = require('csvtojson');
const csvParser = require('csv-parser');
const fs = require('fs');

class CSVreader {
    constructor(){}
    init() {
        try {
            this.readCSV();
            this.csvToJsonObj();
            this.csvToTxt();
           // this.lineParser();
        } catch {
            this.handleError();
        };
    }

    readCSV() {
        fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', function(data){
            try {
                console.log(data);
            }
            catch(err) {
                console.log(err);
            }
        })
        .on('end',function(){
            console.log('CSV file successfully processed');
        }); 
    }

    csvToJsonObj() {
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj);
        });
    }

    csvToTxt() {
        csv({
            ignoreColumns: /(Amount)/,
            checkType: true
        })
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            const newFile = JSON.stringify(jsonObj);
            fs.writeFileSync('test.txt', newFile);
            console.log(newFile);
        });
    }

    lineParser() {
        csv()
        .preRawData((csvFilePath)=>{
            var newData=csvRawData.replace('some value','another value');
            console.log(newData);
            return newData;
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