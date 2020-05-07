

const toggle =document.getElementById("toggle")
const toggle2 =document.getElementById("toggle2")
const nav =document.getElementById("nav")
const main =document.getElementById("main")

toggle.addEventListener('click', () => {

nav.classList.toggle('show-nav');
main.classList.toggle('mask');
// toggle.classList.toggle("hide-btn");

})

toggle2.addEventListener('click', () => {

    nav.classList.toggle('show-nav');
    main.classList.toggle('mask');

    // toggle.classList.toggle("hide-btn");
    
    })