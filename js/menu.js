const menu = document.getElementById('menu');
const abrir = document.getElementById('abrir_menu');
const link = document.querySelectorAll('.link');

abrir.addEventListener('click', () => {
    menu.classList.toggle('aparece_menu');
    for(let i = 0; i < link.length; i++){
        link[i].addEventListener('click', () =>{
          menu.classList.remove('aparece_menu')
      })
    }
})

const sub = document.getElementById("sub");
const submenu = document.getElementById("submenu");

sub.addEventListener("click", () => {
  submenu.classList.toggle("open");
});