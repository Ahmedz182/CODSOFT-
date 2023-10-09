// Initialize AOS
AOS.init();
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.loader-wrapper').classList.add('loaded');
    }, 5000);
});


window.onscroll = function () {
    showGoHomeButton();
};

function showGoHomeButton() {
    var button = document.querySelector('.home-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

var form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
});

