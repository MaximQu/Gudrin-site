const programModal = () => {
  const btns = document.querySelectorAll('[data-program-open]'),
  modals = document.querySelectorAll('[data-program-modal]'),
  closeBtns = document.querySelectorAll('.close-program-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const el = e.target.hasAttribute('data-program-open') ? e.target : e.target.closest('[data-program-open]');
      const unicModal = Array.from(modals).filter(modal => modal.dataset.programModal === el.getAttribute('data-program-open'))[0]
      console.log(el)
      modalOpen(unicModal)
    })

  })

  closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click',modalClose)
  })

  function modalOpen(el) {
    el.classList.add('active')
  }

  function modalClose() {
    modals.forEach(modal => {
      modal.classList.remove('active')
    })
  }


}

export default programModal;