let hits = 0;

document.getElementById("timesclicked").innerHTML = "Times Clicked: 0"

document.body.onkeyup = function(e) {
    if( e.keyCode == 32 ) {
      addHit();
    }
  }

function addHit(){
  hits++;
  document.getElementById("timesclicked").innerHTML = "Times Clicked: " + hits;
}