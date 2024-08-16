//!SSS SECTION AND PLUS ICON CLICKED OPENED THE SSS MENU
let dropdownClick = document.querySelectorAll("#dropdownOpen");
dropdownClick.forEach(open => {
    open.addEventListener("click", (e) => {
        open.classList.toggle("dropdown")
        e.preventDefault();
    })
})

//!THEME MOD LİGTH AND DARK
document.querySelector("#mode").addEventListener("click", function(){
    document.querySelector(".theme").classList.toggle("mode")
});

document.querySelector("#mode").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("dark")
});

document.querySelector("#hamburgerMenu").addEventListener("click", function(e){
    document.querySelector("#responsiveNavbar").classList.toggle("responsive-navbar")
    e.preventDefault();
});