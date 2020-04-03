
function playVideo() {
  var video = document.querySelector("video");
  video.setAttribute("controls", "controls");
  video.play();
  document.getElementById('play').style = "display: none";
}
