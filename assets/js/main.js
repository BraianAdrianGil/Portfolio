const navToggle= document.querySelector(".nav__toggle")
const navMenu= document.querySelector(".nav__menu")
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__menu__not__visible")
})
// ============================================
const experience=document.querySelector(".experience")
const work=document.querySelector(".work")
const photography=document.querySelector(".photography")
const contact=document.querySelector(".contact")
const removeVisible =(element) =>{
    element.addEventListener("click",()=> {
        navMenu.classList.remove("nav__menu__visible")
    })
}
removeVisible(experience)
removeVisible(work)
removeVisible(photography)
removeVisible(contact)
//==============================================