var slideIndex = 1;
let i = false;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("home-slider-img");

    if (n > x.length) {
        slideIndex = 1
    };

    if (n < 1) {
        slideIndex = x.length
    };

    for (let i = 0; i < x.length; i++) {
        x[i].style.opacity = "1";
    };

    x[slideIndex-1].style.opacity = "0";
}

setInterval( () => {
    if(i == true) {
        showDivs(slideIndex += 1)
    }
    if(i == false) {
        showDivs(slideIndex += -1)
    }

    i = !i;
    
}, 7000);


showDivs(slideIndex);