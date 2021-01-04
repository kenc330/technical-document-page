window.onload = function () {

  // Adding event listener to hamburger menu icon. 
  var click = document.getElementById("click-event");
  click.addEventListener('click', myFunction);

  // Function to toggle hamburger menu icon.
  function myFunction() {

    var x = document.getElementById("links");
    var y = document.getElementById("fa-bars");

    if (x.style.display === "block") {
      x.style.display = "none";
      y.className = "fas fa-bars";

    }
    else {
      x.style.display = "block";
      y.className = ("fas fa-times");
    }
  }

  // Creating HTMLCollection of drop down sections for Hello World tutorial. 
  var guidesLinks = document.getElementsByClassName("clickable-div");

  function addListener(event) {

    // Toggle right and left arrow icon for drop down menus.
    event.target.parentNode.getElementsByTagName("i")[0].classList.toggle("fa-angle-right");
    event.target.parentNode.getElementsByTagName("i")[0].classList.toggle("fa-angle-down");
    
    // Toggle class for each drop down menu header "div" element. 
    var headerDiv = event.target.closest("div");
    if (headerDiv.classList[1] == "guide-steps-header-hidden" || headerDiv.classList[1] == "guide-steps-header-visible") {
      headerDiv.classList.toggle("guide-steps-header-visible");
      headerDiv.classList.toggle("guide-steps-header-hidden");
    }

    if (headerDiv.classList[1] == "drop-down-header-hidden" || headerDiv.classList[1] == "drop-down-header-visible") {
      headerDiv.classList.toggle("drop-down-header-visible");
      headerDiv.classList.toggle("drop-down-header-hidden");
    }

    // Toggle hidden content for drop down menus.
    event.target.closest('div').nextSibling.nextSibling.classList.toggle("hide-drop-down-content");
    event.target.closest('div').nextSibling.nextSibling.classList.toggle("show-drop-down-content");


  }

  // Allowing elements to lose focus when mouse is used. 
  function loseFocus(event) {
    event.target.blur();
  }

  // Adding click event to each element of "clickable-div" class. 
  for (var i = 0; i < guidesLinks.length; i++) {

    guidesLinks[i].addEventListener('click', addListener);
    guidesLinks[i].addEventListener('keydown', checkKey);
    guidesLinks[i].addEventListener('mouseout', loseFocus);

  }

  // Checking for Enter key press. 
  function checkKey(event) {
    if (event.keyCode === 13) {
      event.target.addEventListener('keyup', addListener);
    }
    else {
      event.target.removeEventListener('keyup', addListener);
    }
  }

};

// Preventing Navbar display issues if window is resized. 
window.addEventListener("resize", myFunction);

function myFunction() {

  var mediaQuery = window.matchMedia('(max-width: 850px)');
  var x = document.getElementById("fa-bars");

  if (mediaQuery.matches) {
    document.getElementById("links").style.display = "none";
    x.className = "fas fa-bars";
  }
  else {
    document.getElementById("links").style.display = "block";
  }
}

