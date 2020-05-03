var csv=require('csv');
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

module.exports.createcsv=function(story)
{

    console.log(story);

    console.log("into building csv file");

    var users=[];

    var user={
       name:'meghraj',
       dsa:22,
       web:33,
       college:'modern',
       status:'pass',
         
        
    };
    users=story;

    writeToCSVFile(users)
    function writeToCSVFile(users) {
        const filename = 'output.csv';
        fs.writeFile(filename, extractAsCSV(users), err => {
          if (err) {
            console.log('Error writing to csv file', err);
          } else {
            console.log(`saved as ${filename}`);
          }
        });
      }
      
      function extractAsCSV(users) {
        const header = ["Name  ,  College  ,  Status , Dsa, Web, React"];
        const rows = users.map(user =>
           `${user.StdId.name},${user.StdId.college},${user.StdId.status},${user.Dsa}, ${user.Web}, ${user.React}, `
        );
        return header.concat(rows).join("\n");
      }
 
 

}