
document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';

document.body.onkeydown = function (e) {
	var el = document.getElementById('player');


  // key codes move player
  var KEYCODE_LEFT = 37;
  var KEYCODE_UP = 38;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_DOWN = 40;

  // key codes fire
  var KEYCODE_ENTER = 32;
  var KEYCODE_SPACE = 13;

  // moving player
  if (e.keyCode == KEYCODE_LEFT) {
  	el.style.left = (parseInt(el.style.left) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	el.style.left = (parseInt(el.style.left) + 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_UP) {
  	el.style.top = (parseInt(el.style.top) - 10) + 'px';
  }
  else if (e.keyCode == KEYCODE_DOWN) {
  	el.style.top = (parseInt(el.style.top) + 10) + 'px';
  }

  // if key fire
  if ( e.keyCode == KEYCODE_ENTER || e.keyCode == KEYCODE_SPACE ) {
    // generate color
    var colorHash= "";
    for (var c = 0; c < 6; c++ ) {
      var randNum = Math.floor( Math.random() * 10 );
      colorHash += randNum;
    }
    // console.log( colorHash )

    // create span
    var span = document.createElement('span');
    span.setAttribute('class', 'core');
    span.style.background = "#" + colorHash;

    document.body.appendChild(span);

    // computed style elements
    var getComputedStypeCore = getComputedStyle( span );
    var getComputedStypeEl = getComputedStyle( el );

    // coords
    var top = parseInt(getComputedStypeEl.top) + parseInt(getComputedStypeEl.width)/2 - parseInt(getComputedStypeCore.height)/2 + "px";
    var left = parseInt(getComputedStypeEl.left) + parseInt(getComputedStypeEl.width) + "px";

    // add style for core
    span.style.top = top;
    span.style.left = left

    // move core
    var length = window.innerWidth - parseInt( getComputedStypeEl.left ) - parseInt( getComputedStypeEl.width ) - parseInt( getComputedStypeCore.width ) - 30;

    for ( var i = 0; i < length; i++ ) {
      // console.log( i + " < " + length)
      setTimeout( function () {

        span.style.left = parseInt( getComputedStypeCore.left ) + 1 + "px";

      }, 500)
    }
  }

}
