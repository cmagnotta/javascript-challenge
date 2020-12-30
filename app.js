// from data.js
var tableData = data;

console.log(tableData[1]);
//okay, so the data is being pulled correctly.

//so i want to write a function where that searches tableData
//and if it equals form-control, it will print as a table.

//first we have to create the button.
var button = d3.select("#button");

var form = d3.select("#form");

var tbody = d3.select("tbody")

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  d3.event.preventDefault();
  tbody.html("");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var formattedDate = moment(inputValue);
    if (formattedDate.day() < 10) {
      formattedDate = formattedDate.format("M/D/YYYY");
    console.log(formattedDate);
    }
    else {
      formattedDate = formattedDate.format("M/DD/YYYY");
    }
  var UFOdata = tableData.filter(({datetime}) => datetime === formattedDate);

  UFOdata.forEach(function(dataItem){
    var row = tbody.append("tr");
    console.log(row);
    var datetime = row.append("td");
    datetime.text(dataItem.datetime);
    var city = row.append("td");
    city.text(dataItem.city);
    var state = row.append("td");
    state.text(dataItem.state);
    var country = row.append("td");
    country.text(dataItem.country);
    var shape = row.append("td");
    shape.text(dataItem.shape);
    var durationMinutes = row.append("td");
    durationMinutes.text(dataItem.durationMinutes);
    var comment = row.append("td");
    comment.text(dataItem.comments);
  })
  console.log(UFOdata);
};



