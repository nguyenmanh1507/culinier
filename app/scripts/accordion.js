(function() {

  const acc = document.querySelectorAll('.acc')

  if (acc) {

    acc.forEach(el => {
      const trigger = el.firstElementChild

      trigger.addEventListener('click', () => {
        el.classList.toggle('is-show')
        console.log('click')
      })
    })
  }


})()
