const todo = document.getElementById('todo');
const endodoncia =  document.getElementById('endodoncia');
const endo = document.getElementById('endo');
const inner = document.querySelector('.engloba_todo');
const descripcion = document.querySelector('.descripcion_especialidades');
const cerrarUno = document.querySelector('#cerrarUno');
const cerrarDos = document.querySelector('#cerrarDos');
const cerrarTres = document.querySelector('#cerrarTres');
const cerrarCuatro = document.querySelector('#cerrarCuatro');
const cerrarCinco = document.querySelector('#cerrarCinco');
const cerrarSeis = document.querySelector('#cerrarSeis');
const ortondoncia =  document.getElementById('ortondoncia');
const odontopediatria =  document.getElementById('odontopediatria');
const extracciones =  document.getElementById('extracciones');
const implantes =  document.getElementById('implantes');
const orto = document.getElementById('orto');
const cirmax = document.getElementById('cirmax');
const imp = document.getElementById('imp');
const odon = document.getElementById('odon');
const perio = document.getElementById('perio');
const periodoncia = document.getElementById('periodoncia');


endodoncia.addEventListener('click', function(){
    inner.style.transform = "rotateY(180deg)";
    endo.style.display = "block";
    descripcion.style.display = "block";
    
    cerrarUno.addEventListener('click', function(){
        inner.style.transform = "rotateY(0deg)";
    endo.style.display = "none";
    descripcion.style.display = "none";
    })
})

ortondoncia.addEventListener('click', function(){
    inner.style.transform = "rotateY(180deg)";
    orto.style.display = "block";
    descripcion.style.display = "block";
    
    cerrarDos.addEventListener('click', function(){
        inner.style.transform = "rotateY(0deg)";
    orto.style.display = "none";
    descripcion.style.display = "none";
    })
})

extracciones.addEventListener('click', function(){
    inner.style.transform = "rotateY(180deg)";
    cirmax.style.display = "block";
    descripcion.style.display = "block";
    
    cerrarTres.addEventListener('click', function(){
        inner.style.transform = "rotateY(0deg)";
    cirmax.style.display = "none";
    descripcion.style.display = "none";
    })
})
implantes.addEventListener('click', function(){
    inner.style.transform = "rotateY(180deg)";
    imp.style.display = "block";
    descripcion.style.display = "block";
    
    cerrarCuatro.addEventListener('click', function(){
        inner.style.transform = "rotateY(0deg)";
    imp.style.display = "none";
    descripcion.style.display = "none";
    })
})

odontopediatria.addEventListener('click', function(){
    inner.style.transform = "rotateY(180deg)";
    odon.style.display = "block";
    descripcion.style.display = "block";
    
    cerrarCinco.addEventListener('click', function(){
        inner.style.transform = "rotateY(0deg)";
    odon.style.display = "none";
    descripcion.style.display = "none";
    })
})

periodoncia.addEventListener('click', function(){
    inner.style.transform = "rotateY(180deg)";
    perio.style.display = "block";
    descripcion.style.display = "block";
    
    cerrarSeis.addEventListener('click', function(){
        inner.style.transform = "rotateY(0deg)";
    perio.style.display = "none";
    descripcion.style.display = "none";
    })
})



