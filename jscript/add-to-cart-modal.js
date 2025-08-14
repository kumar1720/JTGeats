const modal = document.getElementsByClassName("background-blured")[0];

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

function openModal() {
  const scrollY = window.scrollY;

  document.documentElement.style.setProperty('--scroll-y', scrollY + 'px');
  modal.classList.remove("hide1");
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function closeModal() {
  modal.classList.add("hide1");
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, parseInt(scrollY || '0'));
}