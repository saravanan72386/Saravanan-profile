/* NAV TOGGLE */
const toggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if(toggle){
toggle.onclick = () => {
toggle.classList.toggle("active");
navMenu.classList.toggle("active");
};
}

/* HERO LOAD */
window.addEventListener("load",()=>{
document.querySelector(".hero")?.classList.add("animate");
});

/* INFINITE SCROLL ANIMATION */
const animatedElements = document.querySelectorAll(
"#about, #skills, #projects, .project-card, #contact, .portfolio-footer"
);

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("animate");
}else{
entry.target.classList.remove("animate");
}
});
},{threshold:0.25});

animatedElements.forEach(el=>observer.observe(el));