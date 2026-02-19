window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },2000);
});

const toggle=document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});
