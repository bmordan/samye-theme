(function ($, undefined) {
  var $document = $(document)
  $document.ready(function () {
    $('#hamburger').on('click', function (e) {
      e.preventDefault()
      $('#navigation').toggleClass('nav-hide')
    })
  })
})(jQuery);
