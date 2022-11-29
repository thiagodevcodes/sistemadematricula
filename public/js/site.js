const buttonMobile = document.getElementById("button-mobile");
const menuMobile = document.getElementById("menu-mobile");

let stats = true; 

buttonMobile.addEventListener("click", () => {

    if(stats == true) {
        menuMobile.style.top = "60px";
    } else {
        menuMobile.style.top = "-50%"
    }
    
    stats = !stats
})






