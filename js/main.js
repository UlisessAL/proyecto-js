
const menu =[
    { id: 1, nombre:"pizza con muzzarela", precio: 800}

]

function Plato (id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

function crearPlato(id,nombre,precio){
    const plato = new Plato(id,nombre,precio);
    return plato;
}

function cargarPlato(plato){
    menu.push(plato);
}

const pizzaNapolitana = crearPlato(2,"Pizza napolitana", 1000),
ñoquis = crearPlato(3,"Ñoquis (con salsa blanca o roja)", 1200),
churrascoConFritas = crearPlato(4,"Churrasco con fritas", 1400),
lasagna = crearPlato(5,"Lasagna",700),
milanesaConFritas = crearPlato(6,"Milanesa con fritas",1200),
milanesaNapolitana = crearPlato(7,"Milanesa napolitana",1500),
hamburguesaSimple = crearPlato(8,"Hamburguesa simple",600),
hamburguesaCompleta = crearPlato(9,"Hamburguesa completa",800),
empanadas = crearPlato(10,"Empanadas c/u",100);

cargarPlato(pizzaNapolitana);
cargarPlato(ñoquis);
cargarPlato(churrascoConFritas);
cargarPlato(lasagna);
cargarPlato(milanesaConFritas);
cargarPlato(milanesaNapolitana);
cargarPlato(hamburguesaSimple);
cargarPlato(hamburguesaCompleta);
cargarPlato(empanadas);


const botonIniciar = document.querySelector(".boton-iniciar");

const sectionInicio = document.querySelector("#inicio-sesion")

botonIniciar.addEventListener("click", ()=> {
    botonIniciar.id = "ocultar-tarjeta"
    let inputInicio = document.createElement("div");
    inputInicio.innerHTML = "<form action=''>                                <input type='text' class= 'input-inicio-1' placeholder= 'Tu Nombre'>     <br> <br>      <input type='text' class='input-inicio-2' placeholder= 'Tu Apellido'> <br> <br> <input type='button' value = 'Iniciar sesion' class = 'boton-enviar-inicio'> </form>";

    sectionInicio.appendChild(inputInicio);

    const inputInicio1 = document.querySelector(".input-inicio-1");
    const inputInicio2 = document.querySelector(".input-inicio-2");
    const botonEnviarInicio = document.querySelector(".boton-enviar-inicio");



    botonEnviarInicio.addEventListener("click", ()=> {

        localStorage.setItem("nombre", inputInicio1.value);
        localStorage.setItem("apellido", inputInicio2.value);
        
        if (localStorage.getItem("nombre") == "" || localStorage.getItem("apellido") == "")  {
            let alerta = document.createElement("p")
            alerta.innerText = "Ningún campo puede estar vacío";
            alerta.className = "alerta-p";
            sectionInicio.appendChild(alerta);
            
        }else{

            let alertaP = document.querySelector(".alerta-p")

            alertaP.id = "ocultar-tarjeta";
            inputInicio1.id = "ocultar-tarjeta";
            inputInicio2.id = "ocultar-tarjeta";
            botonEnviarInicio.id = "ocultar-tarjeta";
            

            const mensajeBienvenida = document.createElement("div");

            mensajeBienvenida.innerHTML = "<h2 class = 'titulo-bienvenida'> Bienvenido/a " + localStorage.getItem("nombre") + " " + localStorage.getItem("apellido") + ", que vamos a comer hoy?</h2>";

            sectionInicio.appendChild(mensajeBienvenida);
        }

    
        


    })
})

const botonMenu = document.querySelector("#boton-menu");

const tarjetaMenu = document.querySelector(".lista-carta"),
cartaMenu = document.querySelector(".carta")

botonMenu.addEventListener("click", ()=> {
    tarjetaMenu.id = "ocultar-menu-visible"
    cartaMenu.id = "mostrar-carta"
})


