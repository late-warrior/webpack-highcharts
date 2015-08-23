$(function(){
    $("#message").text("In jquery land");
    var ch = require("./chart");
    var st = require("./plugins/trial");
    st.plot();
    ch.annotateChart();
    ch.exportToExcel();
});