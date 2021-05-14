
// animation scripts 
// Note: you must give the elements an id and also the class animation-element

let boxElement;
var animatedElements;
var arrAnimAdded = [];      

// Set things up
window.addEventListener("load", (event) => {
  animatedElements = document.getElementsByClassName("animation-element");

  createObserver();
}, false);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px"
  };

  observer = new IntersectionObserver(handleIntersect, options);

  for (var i = 0; i < animatedElements.length; i++) {
      observer.observe(animatedElements[i]);
  }

}

function handleIntersect(entries, observer) {

    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    entries.forEach((entry) => {
    	
        if (entry.intersectionRatio <= 0) {
        	return;
        } else if (arrAnimAdded.indexOf(entry.target.id) == -1) {
            entry.target.classList.add("w3-animate-zoom");
            arrAnimAdded.push(entry.target.id);
            //console.log(arrAnimAdded);
        }

    });
}


// CODE THAT WILL INCLUDE ONE HTML PAGE INSIDE ANOTHER 
// NOTE THIS WILL ONLY WORK ON THE SERVER
function incHTMLFile() {
  var z, i, elmnt, file, pageHeading, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("custom-inc-html");
    if (file) {

      // if there is a pageHeading attribute get it and fill it //
      pageHeading = elmnt.getAttribute("pageHeadingVar");
      if (pageHeading) {
        window.document.getElementById("pageHeadingDiv").innerText = pageHeading;
        console.log('got it');
      }

      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("custom-inc-html");
          incHTMLFile();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
incHTMLFile();


