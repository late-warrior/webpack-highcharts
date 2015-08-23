var xlsx = require('xlsx.js');

function exportToExcel(chart, options) {
    console.log("we are going to use xlsx ", xlsx, " and export data");
}

module.exports = {"export" : exportToExcel};

// Also attach it to a global
