document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.gallery-container');

  containers.forEach(container => {
    const closeBtn = container.querySelector('.exit-fullscreen');
    const prevNextButtons = container.querySelectorAll('.flickity-prev-next-button');

    function escHandler(e) {
      if (e.key === 'Escape') {
        exitFullscreen();
      }
    }

    function enterFullscreen() {
      container.classList.add('fullscreen');
      document.addEventListener('keydown', escHandler);
    }

    function exitFullscreen() {
      container.classList.remove('fullscreen');
      document.removeEventListener('keydown', escHandler);
    }

    container.addEventListener('click', function(e) {
      if (container.classList.contains('fullscreen')) {
        if (e.target === container || e.target.closest('.exit-fullscreen')) {
          exitFullscreen();
        }
      } else {
        if (!e.target.closest('.flickity-prev-next-button')) {
          enterFullscreen();
        }
      }
    });
  });
});
