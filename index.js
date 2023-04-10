

const scrollUp = document.getElementById('scrollUp')

scrollUp.style.display = "none"
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUp.style.display = "block"
    } else {
        scrollUp.style.display = "none"
    }
}

scrollUp.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})








