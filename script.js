var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		window.alert('bababooey');
    const andrew_tate = document.createElement('img')
    andrew_tate.src = "andrewtate.jpg"
    andrew_tate.style.position = "absolute"
    andrew_tate.style.zIndex = 100
    
    document.body.appendChild(andrew_tate)
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);


function listener(event) {
  switch(event.type) {
    case "animationend":
      console.log(`Ended: elapsed time is ${event.elapsedTime}`)
      let foo = document.getElementById("box");
      foo.remove();
      document.getElementById('blank').style.animation="leftpanel 2s";
      
      
      
      
      break;

  }
}

const element = document.getElementById("box");
element.addEventListener("animationend", listener, false);
element.className = "box";



function listener2(event) {
  switch(event.type) {
    case "animationend":
      console.log(`Ended: elapsed time is ${event.elapsedTime}`)
      let foe = document.getElementById("blank");
      foe.remove();
      
      
      
      break;

  }
}

const element2 = document.getElementById("blank");
element2.addEventListener("animationend", listener2, false);
element2.className = "blank";
