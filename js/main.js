const navMobile = document.querySelector('.navbar-mobile');
const navBtn = document.querySelector('.hamburger');
// const footerYear = document.querySelector('.hamburger');

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('navbar-mobile--active')
}


navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();