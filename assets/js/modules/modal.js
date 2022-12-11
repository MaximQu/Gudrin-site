const modalWindow = () => {
  const modal = document.getElementById('modal'),
    overflow = document.getElementById('overflow'),
    btns =  document.querySelectorAll('.modal-open'),
    modalSubmit =  document.getElementById('modal-btn');

    overflow.addEventListener('click', modalClose);
    // modalSubmit.addEventListener('click', e => {
    //   e.preventDefault();
    //   modalClose();
    // });

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