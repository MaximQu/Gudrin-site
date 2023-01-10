const modalWindow = () => {
  const modal = document.getElementById('modal'),
    overflow = document.getElementById('overflow'),
    btns =  document.querySelectorAll('.modal-open'),
    closeBtn = document.querySelector('.modal-close');
    
    overflow.addEventListener('click', modalClose);
    closeBtn.addEventListener('click', modalClose);


    btns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        modalOpen();
      })
    })

    function modalOpen() {
      modal.classList.add('active')
    }
    function modalClose() {
      modal.classList.remove('active')
    }

}

export default modalWindow;