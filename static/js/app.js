var tableData = data;

//save a reference to the table body
var tbody = d3.select("tbody");

// use d3 to append one table row for each object
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

