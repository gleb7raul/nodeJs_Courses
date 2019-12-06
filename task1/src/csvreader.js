const csvFilePath = './data/readFile.csv';
const outputForTxt = './resultsData/csvToTxt.txt';
const outputForJson = '../csvToJson.json';
const csv = require('csvtojson');
const csvParser = require('csv-parser');
const fs = require('fs');

class CSVreader {
    constructor(){}
    init() {
        try {
            this.checkingFileAvailability();
            this.readCSV();
            
            //file has been saved 1 level above the root folder
            this.csvToJsonObj();
            //file has been saved in resultsData folder
            this.csvToTxtWithLineParse();
        } catch {
            this.handleError();
        };
    }

    checkingFileAvailability() {
        fs.access(csvFilePath, fs.constants.F_OK, (err) => {
            console.log(`Our file of path:${csvFilePath} ${err ? 'does not exist' : 'exists'}`);
          });
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
            let json = JSON.stringify(jsonObj);
            fs.writeFile(outputForJson, json, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
        });
    }

    csvToTxtWithLineParse() {
        csv({
            noheader: false,
            headers: ['book','author','Amount','price'],
            output: "json",
            ignoreColumns: /(Amount)/,
            checkType: true
        })
        .fromFile(csvFilePath)
        .subscribe((jsonObjLine)=>{
            const newLine = JSON.stringify(jsonObjLine);
            fs.appendFileSync(outputForTxt, `${newLine}\n`, (err) => {
                if(err) {
                    console.log("Sorry, file was not append!");
                };
            });
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