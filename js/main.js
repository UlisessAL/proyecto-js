
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

const tarjetaMenu = document.createElement("section");

tarjetaMenu.className = "carta";

tarjetaMenu.innerHTML = "<h2 class='titulo-lista'>El Menú</h2>\n<ul Id='lista-carta'> </ul>";

document.body.append(tarjetaMenu);

const lista = document.getElementById("lista-carta")


let plantilla = `Plato N°: ${menu.id} Nombre: ${menu.nombre} $${menu.precio}`

for (const plantilla of menu){
    let li = document.createElement("li")
    li.innerHTML= plantilla
    li.className = "elementos-lista"
    lista.appendChild(li)
}

