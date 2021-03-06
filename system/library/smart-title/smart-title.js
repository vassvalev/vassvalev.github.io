if ($) $ (function () {

  // live updates window title

  var originalTitle = document.title

  $ ('input.e2-smart-title').bind ('input', function () {
    if (this.value) document.title = this.value
    else if (originalTitle) document.title = originalTitle
  })

  // retitle on scrolling
  
  var e2UpdateWindowTitleFromScrollPosition = function () {

    var y = $ (window).scrollTop ()
    var title = originalTitle
    if (y > 0) {
      $ ('.e2-smart-title').each (function () {
        if ($ (this).position ().top > y + window.innerHeight) return false
        title = $ (this).text ()
        if ($ (this).position ().top > y) return false
      })
    }
    document.title = title

  }
  
  if ($ ('.e2-smart-title').length > 1) {
  
    $ (window).bind ('scroll resize', e2UpdateWindowTitleFromScrollPosition)
    e2UpdateWindowTitleFromScrollPosition ()

  }

})