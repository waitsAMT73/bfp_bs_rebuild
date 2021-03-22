
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