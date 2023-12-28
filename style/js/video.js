var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtubePlayer", {
    height: "360",
    width: "640",
    videoId: "hRAj21s6BQQ",
    playerVars: { autoplay: 0, controls: 0 },

    events: {
      onReady: onPlayerReady,
    },
  });
}
// onYouTubeIframeAPIReady();
// debugger;
function onPlayerReady(event) {
  // Воспроизвести видео при готовности
  // event.target.playVideo();
}

function openVideo() {
  var videoFrame = document.getElementById("videoFrame");
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  videoFrame.style.display = "block";

  // Запрет прокрутки страницы
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  var videoFrame = document.getElementById("videoFrame");
  var overlay = document.querySelector(".overlay");
  overlay.parentNode.removeChild(overlay);
  videoFrame.style.display = "none";

  // Останавливаем воспроизведение медиа
  // if (player) {
  player.pauseVideo();
  // }

  // Разрешение прокрутки страницы
  document.body.style.overflow = "auto";
}
