function startVideo() {
  const video = document.getElementById('mainVideo');
  const container = document.querySelector('.container');

  container.style.display = 'none';
  video.style.display = 'block';
  video.muted = false;

  video.play().catch((e) => {
    console.log("Autoplay falhou:", e);
    alert("Clique necessário para iniciar o vídeo com som.");
  });
}
