var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtubePlayer", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // Воспроизвести видео при готовности
  event.target.playVideo();
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
  if (player) {
    player.pauseVideo();
  }

  // Разрешение прокрутки страницы
  document.body.style.overflow = "auto";
}
