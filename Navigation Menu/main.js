const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', function () {
    navbar.classList.toggle('active')
});