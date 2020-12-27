
// from data.js
var tableData = data;
var date = tableData["datetime"];
var city = tableData["city"];

console.log(tableData[1]);


//
//https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-09-2020-u-c/blob/master/14-Intro-To-JavaScript/2/Activities/05-Evr_Map/Solved/static/js/map.js

//i think I want to use a MAP function?

// actually I think I want to do a for each, like this -- 
//princesses.forEach(function(princess) {
  //  console.log(`${princess.name}: ${princess.age}`);
 // });
  
 //i think this is what I want for the table
// princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

// i also need this exercise.

//https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-09-2020-u-c/blob/master/14-Intro-To-JavaScript/2/Activities/10-Stu_Filters/Solved/index.js

// i think i need this for formatting the return?
//https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-09-2020-u-c/blob/master/14-Intro-To-JavaScript/2/Activities/07-Ins_Object_Iteration/Solved/static/js/index.js

// this is the activity i can use to create a table.
// https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-09-2020-u-c/blob/master/14-Intro-To-JavaScript/3/Activities/02-Stu_D3_Select/Solved/static/js/app.js

//this is possibly useful for creating the table.

// https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-09-2020-u-c/blob/master/14-Intro-To-JavaScript/3/Activities/02-Stu_D3_Select/Solved/Bonus/static/js/app.js

//this will help me loop through data?
//https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-09-2020-u-c/blob/master/14-Intro-To-JavaScript/3/Activities/03-Evr_D3_Table/Solved/static/js/index.js

//this is how you append a table using javascript so it appears on an html page.


data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");

Object.entries(weatherReport).forEach(function([key, value]) {
   console.log(key, value);
   // Append a cell to the row for each value
//     // in the weather report object
   var cell = row.append("td");
  });
});

data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

this will give me the button search stuff

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

function handleClick() {
  console.log("A button was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});

var text = d3.select("#text");
var output = d3.select(".output");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;
 // reverse the input string
  var reversedInput = reverseString(inputText);

  // Set the output text to the reversed input string
  output.text(reversedInput);
}

text.on("change", handleChange);


//wait -- do I want to count the number of ufo sightings?
//Then -- 
// grab references to the input element and the output div
var text = d3.select("#text");
var output = d3.select(".output");

function counter(text) {

  // convert text to lowercase characters (chars)
  var chars = text
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("");

  var counts = {};
  chars.forEach((char) => {
    if (char in counts) {
      counts[char] += 1;
    }
    else {
      counts[char] = 1;
    }
  });

  return counts;
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var value = d3.event.target.value;

  // clear the existing output
  output.html("");

  var frequencyCounts = counter(value);
  Object.entries(frequencyCounts).forEach(([key, value]) => {
    var li = output.append("li").text(`${key}: ${value}`);
  });

}

text.on("change", handleChange);

//this is the star wars gif that i want to use:
https://tenor.com/view/star-wars-galaxy-stars-space-gif-15793359

i might need this:

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
}
