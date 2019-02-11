// from data.js
var tableData = data;

var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes" ,"comments"];

function create_table(data, columns) {
    var table = d3.select('#table-append').append('table').attr("class", "table table-bordered table-hover");
    var tableHead = table.append('thead');
    var tableBody = table.append('tbody');

