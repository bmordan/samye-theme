(function ($, undefined) {
  var $document = $(document)
  $document.ready(function () {
    $('#hamburger').on('click', function (e) {
      e.preventDefault()
      var y = e.pageY + 'px'
      $('#navigation').css('top', y)
      $('#navigation').toggleClass('nav-hide').animate({top: y}, 750)
      $('#hamburger').toggleClass('relative')
    })
  })
  var scrollEventHandler = function() {
    window.scroll(0, window.pageYOffset)
  }
  window.addEventListener("scroll", scrollEventHandler, false)
})(jQuery);
