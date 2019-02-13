var tableData = data;

//save a reference to the table body
var tbody = d3.select("tbody");

// loop through and append one table row for each object
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    // use d3 to append 1 cell per weather report value
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        //add text
        cell.text(value);
    });
});
function filterdata() {
    //stops refresh
    d3.event.preventDefault();
    //get date time from filter
    var date = d3.select("#datetime").property("value");
    let filteredtable = tableData;

    if (date) {
        filteredtable = filteredtable.filter(function(row) {
            return row.datetime === date;
        })
    }
}
