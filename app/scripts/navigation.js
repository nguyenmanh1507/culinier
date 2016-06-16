(function() {
  'use strict'

  const navList = document.querySelector('.site-nav__list')
  const hamBtn = document.querySelector('.site-nav__ham')

  let isShow = false

  // Check if hamBtn exist
  if (hamBtn) {
    hamBtn.addEventListener('click', function() {
      if (!isShow) {
        navList.classList.add('is-show')
        hamBtn.classList.add('is-nav-open')
        isShow = !isShow
      } else {
        navList.classList.remove('is-show')
        hamBtn.classList.remove('is-nav-open')
        isShow = !isShow
      }
    })
  }

})()
