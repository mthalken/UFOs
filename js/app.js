// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create a function to loop through the data
function buildTable(data) {
    // clear the existing data
    tbody.html("");
    
    // loop through each data row
    data.forEach((dataRow) => {

        // add a row to the table 
        let row = tbody.appendl("tr");

        // loop through each dataRow and add to table
        Object.values(dataRow).forEach((val) => {
            
            // add each value as a table cell
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};

// create a function with a filter button
function handleClick() {

    // grab the datetime from the filter
    let date = d3.select("#datatime").property("value");
    let filteredData = tableData;
    
    // use the date to filter the data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // build the table using the filtered data
    buildTable(filteredData);
};

// have d3 listen for the click 
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table
buildTable(tableData);