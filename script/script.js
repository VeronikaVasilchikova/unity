//slider
let polosa = document.querySelector('.polosa');
let left = 0;

document.querySelector(".arrow-left").onclick = arrowLeft;
function arrowLeft(){
	left = left - 300;
	if (left < -600) {
		left = 0;
	}
	polosa.style.left = left +'px';
}

document.querySelector(".arrow-right").onclick = arrowRight;
function arrowRight(){
	if(left <= -300){
	    left = left + 300;
		  polosa.style.left = left + 'px';
	}
}

// scrolling pictures with screen width = 320px
let dots = document.getElementsByClassName('dot');
let work1 = document.querySelector('.work1');
let work2 = document.querySelector('.work2');
let work3 = document.querySelector('.work3');
let work4 = document.querySelector('.work3');
console.log(dots);

dots[0].onclick = function(e){
  polosa.style.left = 0 + 'px';
  dots[0].style.backgroundColor = "white";
  dots[1].style.backgroundColor = "transparent";
  dots[2].style.backgroundColor = "transparent";
  dots[3].style.backgroundColor = "transparent";
}
dots[1].onclick = function(e){
  polosa.style.left = -320 + 'px';
  dots[1].style.backgroundColor = "white";
  dots[0].style.backgroundColor = "transparent";
  dots[2].style.backgroundColor = "transparent";
  dots[3].style.backgroundColor = "transparent";
}
dots[2].onclick = function(e){
  polosa.style.left = -600 + 'px';
  dots[2].style.backgroundColor = "white";
  dots[0].style.backgroundColor = "transparent";
  dots[1].style.backgroundColor = "transparent";
  dots[3].style.backgroundColor = "transparent";
}
dots[3].onclick = function(e){
  polosa.style.left = -870 + 'px';
  dots[3].style.backgroundColor = "white";
  dots[0].style.backgroundColor = "transparent";
  dots[1].style.backgroundColor = "transparent";
  dots[2].style.backgroundColor = "transparent";
}


// arrow up-down
let main = document.querySelector('main');
let arrowUpDown = document.createElement('div');
main.appendChild(arrowUpDown);
let pageYLabel = 0;

arrowUpDown.onclick = function(){
  	let pageY = window.pageYOffset || document.documentElement.scrollTop;

    switch (this.className) {
        case 'arrow-up':
          pageYLabel = pageY;
          window.scrollTo(0, 0);
          this.className = 'arrow-down';
          break;
        case 'arrow-down':
          window.scrollTo(0, pageYLabel);
          this.className = 'arrow-up';
      }
  }

 window.onscroll = function() {
      let pageY = window.pageYOffset || document.documentElement.scrollTop;
      let innerHeight = document.documentElement.clientHeight;

      switch (arrowUpDown.className) {
        case '':
          if (pageY > innerHeight) {
            arrowUpDown.className = 'arrow-up';
          }
          break;

        case 'arrow-up':
          if (pageY < innerHeight) {
            arrowUpDown.className = '';
          }
          break;

        case 'arrow-down':
          if (pageY > innerHeight) {
            arrowUpDown.className = 'arrow-up';
          }
          break;
      }
    }



