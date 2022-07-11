const menu = [
    {    id: 1, nombre: "pizza con muzzarela", precio: 800  },

    {    id: 2, nombre: "pizza napolitana", precio: 1000  },

    {    id: 3, nombre: "ñoquis (con salsa blanca o roja) ", precio: 1200  },

    {    id: 4, nombre: "churrasco con papas", precio: 1400  },

    {    id: 5, nombre: "lasagna", precio: 700  },

    {    id: 6, nombre: "milanesa con fritas", precio: 1200  },

    {    id: 7, nombre: "milanesa napolitana", precio: 1500  },

    {    id: 8, nombre: "hamburguesa simple", precio: 600  },

    {    id: 9, nombre: "hamburguesa completa", precio: 800  },

    {    id: 10, nombre: "empanadas (carne, jamon y queso, etc) c/u", precio: 100  },
];


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

