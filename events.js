

// ✏️ Output target is the output-target element.


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

document.body.addEventListener('click', function(event){
	// console.log("click event", event);
	// console.log('click event', event.target.parentNode.parentNode.parentNode);
		if (event.target.className === 'article-section')  {
			var articles = document.getElementById("output-target");
			articles.innerHTML = '<p>' + "You clicked on the"  + '</p>';
		}
		//need to do the part where I clicked on the text of the section section to print out
})


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header" ('mouseover').

	var overH1 = document.getElementById("page-title").addEventListener('mouseover', function(){
	var hoverOver = document.getElementById("output-target");
	hoverOver.innerHTML = '<p>"You moved your mouse over the header"</p>';

	

});


// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!". ('mouseleaves')

var outH1 = document.getElementById("page-title").addEventListener('mouseout', function(){
	var hoverOut = document.getElementById("output-target");
	hoverOut.innerHTML = '<p>"You left me!!!"</p>';
});




// When you type characters into the input field, the output element should mirror the text in the input field.


var inputBox = document.getElementById("keypress-input");
var outputMirror =  document.getElementById("output-target");
inputBox.addEventListener('keypress', function(e){
	console.log(e);

	 outputMirror.innerHTML = inputBox.value + e.key;

})




// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var addColor = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig");


addColor.addEventListener("click", function(e){
	console.log(e);
	guineaPig.classList.toggle("blue");

})


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

var hulkifyWords = document.getElementById("make-large");
var guineaPig = document.getElementById("guinea-pig");

hulkifyWords.addEventListener("click", function(e){
	guineaPig.classList.toggle("big");


})

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

var captureIt = document.getElementById("add-border");
var guineaPig = document.getElementById("guinea-pig");

captureIt.addEventListener("click", function(e){
	guineaPig.classList.toggle("around");

})


// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var roundEdge = document.getElementById("add-rounding");
var guineaPig = document.getElementById("guinea-pig");

roundEdge.addEventListener("click", function(e){
	guineaPig.classList.toggle("rounded");

})

// The first section's text should be bold.


// The last section's text should be bold and italicized.


// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.


