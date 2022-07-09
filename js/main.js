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


let bienvenido = alert("El menú se va a ver a continuacion en la consola");

console.log(menu);

let inicio = prompt("Bienvenido al restaurante FFE, si desea buscar un plato simplemente hagalo aca abajo:");

while (inicio == "") {
    alert("Por favor ingresa caracteres válidos");
    inicio = prompt("Bienvenido al restaurante FFE, si desea buscar un plato simplemente hagalo aca abajo:");
}

function filtrarPlato(arr, filtro) {
    const filtrado = arr.filter ((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
}

const platoFiltrados = filtrarPlato (menu, inicio);

console.log(platoFiltrados);


let porPrecio = prompt("Si desea filtrar por precio máximo, escriba si , del caso contrario escriba otra palabra");

if (porPrecio === "si") {

    let plata = prompt ("Ingresa el monto de precio maximo a filtrar");

function filtrarPorPrecio (arr, filtro) {
    let filtrado = arr.filter ((el) => {
        switch (filtro) {
            case "si":

                

                return el.precio < plata;
                
                break;
        
        }
    })

    return filtrado;
}

const filtroPrecio = filtrarPorPrecio(menu, porPrecio);
console.log(filtroPrecio);


} else {
    alert("que tenga buen dia");
}



function buscarPorNombre (arr, filtro) {
    const busqueda = arr.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return busqueda;
}

const carrito = [];



function cargarAlCarrito (arr, plato) {
    return  arr.push(plato);
}



let buscar = prompt("Si desea buscar un plato para agregar al carrito, directamente escriba el nombre, de caso contrario escriba no");



if (buscar != "no" || buscar != "") {


    const filtrar = filtrarPlato(menu, buscar);

    const encontrado = buscarPorNombre(filtrar, buscar)

    console.log(encontrado);
    
    let pregunta = prompt ("Desea agregarlo al carrito? Responda con un si o no")
    
    if (pregunta == "si") {
        cargarAlCarrito(carrito, encontrado)
    
    
    console.log(carrito);


    } else {
        if (buscar == "no") {
            console.log("Que tenga buen dia");
        } else {
            while (buscar == "") {
                alert("Por favor, ingrese un dato válido");
                buscar = prompt("Si desea buscar un plato para agregar al carrito, directamente escriba el nombre, de caso contrario escriba no");
                pregunta = prompt ("Desea agregarlo al carrito? Responda con un si o no");
            }
        }
        
    }

    let preguntarDenuevo = prompt("Desea agregar otro plato al carrito? Escriba no si no quiere, del caso contrario escriba si");

    

    while (preguntarDenuevo != "no" || buscar == "no") {

        

        buscar = prompt("Escriba el nombre del plato");

    if (buscar != "no") {

        const filtrar = filtrarPlato(menu, buscar);
        const encontrado = buscarPorNombre(filtrar, buscar);

        console.log(encontrado);
    
        pregunta = prompt ("Desea agregarlo al carrito? Responda con un si o no");
    
        if (pregunta == "si") {
        cargarAlCarrito(carrito, encontrado);
    
        console.log(carrito);

        } else {
            console.log("Que tenga buen dia");
        }

    preguntarDenuevo = prompt("Desea agregar otro plato al carrito? Escriba no si no quiere, del caso contrario escriba si")

    if (preguntarDenuevo == "no") {
        console.log("Que tenga buen dia");
    }
    
        } else {
            console.log("Que tenga buen dia");
        }
}}


