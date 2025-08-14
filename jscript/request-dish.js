const modal2 = document.getElementsByClassName("background-blured")[1];
let scrollY = 0;

function openModal2() {
    modal2.classList.remove("hide2");

    scrollY = window.scrollY;

    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflowY = 'hidden';
    body.style.width = '100%';
}

function closeModal2() {
    modal2.classList.add("hide2");

    const body = document.body;
    const scrollTop = parseInt(body.style.top || '0') * -1;

    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    body.style.overflowY = '';
    body.style.width = '';
    

    window.scrollTo(0, scrollTop);
}