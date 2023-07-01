// Get the button 
var topButton = document.getElementById("topButton");
  
// Set initial opacity to 0 (invisible)
topButton.style.opacity = 0;  

// On scroll, calculate opacity and update 
window.onscroll = function() {
  // Calculate how far user has scrolled (in %)
  var scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  
  // Set opacity based on scroll percentage
  if (scrollPercentage > 0 && scrollPercentage < 10) {
    topButton.style.opacity = scrollPercentage / 10; 
  } else if (scrollPercentage >= 10 && scrollPercentage < 20) {
    topButton.style.opacity = 1; 
  } 
}  
  
topButton.addEventListener("click", function() {
  document.querySelector("body").scrollIntoView({ 
    behavior: "smooth", 
    block: "start" 
  });
});
