window.addEventListener("load", function(){
setTimeout(function(){
document.getElementById("loader").style.display="none";
},1200);
});

const toggle=document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{
document.body.classList.toggle("dark");
});
