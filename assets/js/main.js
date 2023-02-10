const navToggle= document.querySelector(".nav__toggle")
const navMenu= document.querySelector(".nav__menu")
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__menu__visible")
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
const navContainer = document.querySelector(".nav__container");
const navBtn=document.querySelector(".nav__toggle")
window.addEventListener("scroll", function() {
  if (window.pageYOffset === 0) {
    navContainer.style.backgroundColor = "black";
  } else {
    navContainer.style.backgroundColor = "transparent";
    navBtn.style.backgroundColor="transparent"
  }
});