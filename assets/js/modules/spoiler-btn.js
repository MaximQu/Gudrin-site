const spoilerBtn = () => {
  const items = document.querySelectorAll('.spoiler-btn');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
    });
  });
};

export default spoilerBtn;
