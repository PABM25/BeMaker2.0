export function initModals() {
  const playButtons = document.querySelectorAll(".play-button");
  const videoModal = document.getElementById("video-modal");
  const videoPlayer = document.getElementById("video-player");
  const closeButton = document.getElementById("close-button");

  if (videoModal && videoPlayer) {
    function openModal(videoSrc) {
      videoPlayer.src = videoSrc;
      videoModal.classList.add("open");
      videoPlayer.play();
    }
    function closeModal() {
      videoModal.classList.remove("open");
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
    playButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const videoSrc = event.currentTarget.getAttribute("data-video-src");
        if (videoSrc) openModal(videoSrc);
      });
    });
    if (closeButton) closeButton.addEventListener("click", closeModal);
    videoModal.addEventListener("click", (event) => {
      if (event.target === videoModal) closeModal();
    });
  }
}
