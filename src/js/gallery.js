document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.gallery-container');

  containers.forEach(container => {
    const galleryElem = container.querySelector('.js-flickity');
    const dataAttr = galleryElem.getAttribute('data-flickity');
    let flkty = Flickity.data(galleryElem);
    if (!flkty) {
      try {
        flkty = new Flickity(galleryElem, dataAttr ? JSON.parse(dataAttr) : {});
      } catch (err) {
        flkty = new Flickity(galleryElem, {});
      }
    }

    function escHandler(e) {
      if (e.key === 'Escape') {
        exitFullscreen();
      }
    }

    function enterFullscreen() {
      container.classList.add('fullscreen');
      document.addEventListener('keydown', escHandler);
      if (flkty) {
        flkty.resize();
      }
    }

    function exitFullscreen() {
      container.classList.remove('fullscreen');
      document.removeEventListener('keydown', escHandler);
      if (flkty) {
        flkty.resize();
      }
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
