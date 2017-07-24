console.log('events.js');

var outputElement = document.getElementById("output-target")


var articleElement = document.getElementsByClassName("article-section");

//mouseclick function
function handleSectionClick (MouseClick) {
    var elementText = MouseClick.target.innerHTML;
    outputElement.innerHTML = "You clicked on the " + elementText + " section"
}


//for loop to iterate over the array and add eventt listener to each item in array
 for (var i = 0; i < articleElement.length; i++) {
     articleElement[i].addEventListener("click", handleSectionClick);
 }


//get reference to the header element with if of page-header
 var header = document.getElementById("page-title");


 //function to handle mouseover event
 function handleHeaderMouseOver(event) {
    outputElement.innerHTML = "You moved your mouse over the header ";

 }

function hadleHeaderMouseOut(event) {
    outputElement.innerHTML = "You left me";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", hadleHeaderMouseOut);



var textFieldEl = document.getElementById("keypress-input");

textFieldEl.addEventListener("keyup", function(event){
    outputElement.innerHTML = event.target.value;
});

//get reference to add color button
var colorButtonClick = document.getElementById("add-color");

//get reference to guinea pig
var pigElement = document.getElementById("guinea-pig");

//add event listener to color button
colorButtonClick.addEventListener("click", function(){
    pigElement.style.color = "blue";

} );

//add reference to hulkify button
var hulkButtonEl = document.getElementById("make-large");

//add event listener to hulkify button
hulkButtonEl.addEventListener("click", function(){
   pigElement.style.fontSize = "large";

});


//add reference to add border button
var borderButtonEl = document.getElementById("add-border");

//add event listener to add border button
borderButtonEl.addEventListener("click", function(){
    pigElement.style.border = " solid #0000FF";

});

//add referencet to rounded button
var roundButtonEl = document.getElementById("add-rounding");

//add event listener to rounded button 
// borderButtonEl.addEventListener("click", function(){
//     pigElement.style.border-radius : 20px;
    
// });


