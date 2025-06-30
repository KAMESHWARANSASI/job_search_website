const bar=document.getElementById("bar");
const menu=document.getElementById("nav-menu");

if(bar){
    bar.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});
}