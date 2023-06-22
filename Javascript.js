// Get the H1 heading
var h1 = document.querySelector('div');

// Get it's position in the viewport
var bounding = h1.getBoundingClientRect();

// Log the results
console.log(bounding);