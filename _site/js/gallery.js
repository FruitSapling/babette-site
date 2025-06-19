document.addEventListener('DOMContentLoaded', function() {
  var galleryElem = document.querySelector('.js-flickity');
  if (!galleryElem) return;
  var flkty = Flickity.data(galleryElem);
  if (!flkty) {
    var options = galleryElem.getAttribute('data-flickity');
    try { options = options ? JSON.parse(options) : {}; } catch(e) { options = {}; }
    flkty = new Flickity(galleryElem, options);
  }
  galleryElem.addEventListener('staticClick', function(event, pointer, cellElem, cellIndex) {
    if (typeof cellIndex === 'number' && flkty.viewFullscreen) {
      flkty.viewFullscreen();
    }
  });
});
