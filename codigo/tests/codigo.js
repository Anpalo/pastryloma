// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  
  player = new OO.Player.create('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    OO.Player.play();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    window.pp.pause();
  });
  
}

// Inject API script
//var tag = document.createElement('script');
//tag.src = "https://api.ooyala.com/v2/players";
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



var playerParam = {
	       'autoplay':true,
	       'loop':true
	     };
	  OO.ready(function() {window.pp = OO.Player.create('container_1514747405', 'IzaGV0ZDE6YOnkErHEb8WSIGqN1X3F_F', playerParam);});

