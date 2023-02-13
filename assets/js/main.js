const navToggle= document.querySelector(".nav__toggle")
const navMenu= document.querySelector(".nav__menu")
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__menu__not__visible")
})
//==============================================
const experience=document.querySelector(".experience")
const work=document.querySelector(".work")
const photography=document.querySelector(".photography")
const contact=document.querySelector(".contact")
const removeVisible =(element) =>{
    element.addEventListener("click",()=> {
        navMenu.classList.remove("nav__menu__not__visible")
    })
}
removeVisible(experience)
removeVisible(work)
removeVisible(photography)
removeVisible(contact)
//==============================================
window.addEventListener("scroll", () =>{
    if(window.scrollY> 0 & window.innerWidth < 768) {
        navToggle.classList.add("nav__toggle__fixed")
        navMenu.classList.add("nav__menu__fixed")
    } else {
        navToggle.classList.remove("nav__toggle__fixed")
        navMenu.classList.remove("nav__menu__fixed")
    }
})