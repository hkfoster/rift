/**
 * Rift v1.0.0
 * @author Kyle Foster
 * MIT license
 */
;(function ( $, window, document, undefined ) {

  $.fn.rift = function () {

    return this.each(function () {

      // Vurribles
      var element = $(this),
        elemImg = element.find('img'),
        imgSrc  = elemImg.attr('src');

      // We be chainin'
      element
        .prepend('<span class="top-span"></span>')
        .append('<span class="btm-span"></span>')
        .find('span.top-span')
        .css('background', 'url(' + imgSrc + ') no-repeat center top')
        .css('background-size', '100%')
        .parent()
        .find('span.btm-span')
        .css('background', 'url(' + imgSrc + ') no-repeat center bottom')
        .css('background-size', '100%');

      // Easy fallback for touch devices
      var isTouchDevice = 'ontouchstart' in document.documentElement;
      if(isTouchDevice) {
        element.on('click', function(e) {
          $(this).toggleClass('open');
        })
      }
    });

  };
})( jQuery, window, document );
