document.addEventListener('DOMContentLoaded', function() {
  var galleryElem = document.querySelector('.js-flickity');
  if (!galleryElem) return;
  var flkty = Flickity.data(galleryElem);
  if (!flkty) return;
  flkty.on('change', function() {
    galleryElem.querySelectorAll('video').forEach(function(video) {
      video.pause();
    });
  });
});
