// Gumb - povratak na vrh
let mojgumb = document.getElementById("vrh-gumb");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mojgumb.style.display = "block";
    } else {
        mojgumb.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}