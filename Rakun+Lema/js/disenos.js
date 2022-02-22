$(document).ready(cargarCarrito());

$precio_remeblancas = 1000;
$precio_remegrises = 1200;
$precio_remeranglan = 1500;
$precio_tazas = 800;

const disenos_remeblancas = [
    {id:"RB1", nombre:"Mickey 1 - Remera Blanca Hombre/Unisex", img:"blanca-h-disney-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB2", nombre:"Mickey 2 - Remera Blanca Hombre/Unisex", img:"blanca-h-disney-2.jpg", precio:$precio_remeblancas}, 
    {id:"RB3", nombre:"Mickey 3 - Remera Blanca Hombre/Unisex", img:"blanca-h-disney-3.jpg", precio:$precio_remeblancas}, 
    {id:"RB4", nombre:"Pato Lucas - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB5", nombre:"Taz - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-2.jpg", precio:$precio_remeblancas}, 
    {id:"RB6", nombre:"Silvestre - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-3.jpg", precio:$precio_remeblancas}, 
    {id:"RB7", nombre:"Marvin - Remera Blanca Hombre/Unisex", img:"blanca-h-looneytunes-4.jpg", precio:$precio_remeblancas}, 
    {id:"RB8", nombre:"Rick y Morty - Remera Blanca Hombre/Unisex", img:"blanca-h-rick-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB9", nombre:"Meeseeks - Remera Blanca Hombre/Unisex", img:"blanca-h-rick-2.jpg", precio:$precio_remeblancas}, 
    {id:"RB10", nombre:"Mickey 1 - Remera Blanca Mujer", img:"blanca-m-disney-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB11", nombre:"Mickey 2 - Remera Blanca Mujer", img:"blanca-m-disney-2.jpg", precio:$precio_remeblancas}, 
    {id:"RB12", nombre:"Minnie - Remera Blanca Mujer", img:"blanca-m-disney-3.jpg", precio:$precio_remeblancas}, 
    {id:"RB13", nombre:"Bugs Bunny - Remera Blanca Mujer", img:"blanca-m-looneytunes-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB14", nombre:"Tweety - Remera Blanca Mujer", img:"blanca-m-looneytunes-2.jpg", precio:$precio_remeblancas}, 
    {id:"RB15", nombre:"Minions 1 - Remera Blanca Mujer", img:"blanca-m-minions-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB16", nombre:"Minions 2 - Remera Blanca Mujer", img:"blanca-m-minions-2.jpg", precio:$precio_remeblancas}, 
    {id:"RB17", nombre:"Pickle Rick - Remera Blanca Mujer", img:"blanca-m-rick-1.jpg", precio:$precio_remeblancas}, 
    {id:"RB18", nombre:"Rick y Morty - Remera Blanca Mujer", img:"blanca-m-rick-2.jpg", precio:$precio_remeblancas}, 
];
const disenos_remegrises = [
    {id:"RG1", nombre:"Mickey 1 - Remera Gris Hombre/Unisex", img:"gris-h-disney-1.jpg", precio:$precio_remegrises}, 
    {id:"RG2", nombre:"Mickey 2 - Remera Gris Hombre/Unisex", img:"gris-h-disney-2.jpg", precio:$precio_remegrises}, 
    {id:"RG3", nombre:"Peaky Blinders 1 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-1.jpg", precio:$precio_remegrises}, 
    {id:"RG4", nombre:"Peaky Blinders 2 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-2.jpg", precio:$precio_remegrises}, 
    {id:"RG5", nombre:"Peaky Blinders 3 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-3.jpg", precio:$precio_remegrises}, 
    {id:"RG6", nombre:"Peaky Blinders 4 - Remera Gris Hombre/Unisex", img:"gris-h-peaky-4.jpg", precio:$precio_remegrises}, 
    {id:"RG7", nombre:"Stranger Things - Remera Gris Hombre/Unisex", img:"gris-h-strangerthings-1.jpg", precio:$precio_remegrises}, 
    {id:"RG8", nombre:"Toy Story 1 - Remera Gris Hombre/Unisex", img:"gris-h-toystory-1.jpg", precio:$precio_remegrises}, 
    {id:"RG9", nombre:"Toy Story 2 - Remera Gris Hombre/Unisex", img:"gris-h-toystory-2.jpg", precio:$precio_remegrises}, 
    {id:"RG10", nombre:"Mickey 1 - Remera Gris Mujer", img:"gris-m-disney-1.jpg", precio:$precio_remegrises}, 
    {id:"RG11", nombre:"Mickey 2 - Remera Gris Mujer", img:"gris-m-disney-2.jpg", precio:$precio_remegrises}, 
    {id:"RG12", nombre:"Pato Lucas - Remera Gris Mujer", img:"gris-m-looneytunes-1.jpg", precio:$precio_remegrises}, 
    {id:"RG13", nombre:"Stitch 1 - Remera Gris Mujer", img:"gris-m-stitch-1.jpg", precio:$precio_remegrises}, 
    {id:"RG14", nombre:"Stitch 2 - Remera Gris Mujer", img:"gris-m-stitch-2.jpg", precio:$precio_remegrises}, 
    {id:"RG15", nombre:"Stranger Things 1 - Remera Gris Mujer", img:"gris-m-strangerthings-1.jpg", precio:$precio_remegrises}, 
    {id:"RG16", nombre:"Stranger Things 2 - Remera Gris Mujer", img:"gris-m-strangerthings-2.jpg", precio:$precio_remegrises}, 
    {id:"RG17", nombre:"Stranger Things 3 - Remera Gris Mujer", img:"gris-m-strangerthings-3.jpg", precio:$precio_remegrises}, 
    {id:"RG18", nombre:"Toy Story - Remera Gris Mujer", img:"gris-m-toystory-1.jpg", precio:$precio_remegrises}, 
];
const disenos_remeranglan = [
    {id:"RR1", nombre:"Batman 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-batman-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR2", nombre:"Batman 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-batman-2.jpg", precio:$precio_remeranglan}, 
    {id:"RR3", nombre:"Guason - Remera Ranglan Hombre/Unisex", img:"ranglan-h-batman-3.jpg", precio:$precio_remeranglan}, 
    {id:"RR4", nombre:"Friends 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-friends-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR5", nombre:"Friends 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-friends-2.jpg", precio:$precio_remeranglan}, 
    {id:"RR6", nombre:"Tune Squad - Remera Ranglan Hombre/Unisex", img:"ranglan-h-looneytunes-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR7", nombre:"Rick y Morty 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-rick-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR8", nombre:"Rick y Morty 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-rick-2.jpg", precio:$precio_remeranglan}, 
    {id:"RR9", nombre:"Los Simpsons 1 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-simpsons-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR10", nombre:"Los Simpsons 2 - Remera Ranglan Hombre/Unisex", img:"ranglan-h-simpsons-2.jpg", precio:$precio_remeranglan}, 
    {id:"RR11", nombre:"Friends 1 - Remera Ranglan Mujer", img:"ranglan-m-friends-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR12", nombre:"Friends 2 - Remera Ranglan Mujer", img:"ranglan-m-friends-2.jpg", precio:$precio_remeranglan}, 
    {id:"RR13", nombre:"Friends 3 - Remera Ranglan Mujer", img:"ranglan-m-friends-3.jpg", precio:$precio_remeranglan}, 
    {id:"RR14", nombre:"Friends 4 - Remera Ranglan Mujer", img:"ranglan-m-friends-4.jpg", precio:$precio_remeranglan}, 
    {id:"RR15", nombre:"Rick y Morty 1 - Remera Ranglan Mujer", img:"ranglan-m-rick-1.jpg", precio:$precio_remeranglan}, 
    {id:"RR16", nombre:"Rick y Morty 2 - Remera Ranglan Mujer", img:"ranglan-m-rick-2.jpg", precio:$precio_remeranglan}, 
    {id:"RR17", nombre:"Los Simpsons - Remera Ranglan Mujer", img:"ranglan-m-simpsons-1.jpg", precio:$precio_remeranglan}, 
];
const disenos_tazas = [
    {id:"T1", nombre:"Deadpool - Taza Cerámica Blanca", img:"taza-avengers-deadpool.jpg", precio:$precio_tazas}, 
    {id:"T2", nombre:"Escudo Capitán América - Taza Cerámica Blanca", img:"taza-avengers-escudo.jpg", precio:$precio_tazas}, 
    {id:"T3", nombre:"Groot - Taza Cerámica Blanca", img:"taza-avengers-groot.jpg", precio:$precio_tazas}, 
    {id:"T4", nombre:"Iron Man - Taza Cerámica Blanca", img:"taza-avengers-ironman.jpg", precio:$precio_tazas}, 
    {id:"T5", nombre:"Avengers Logo - Taza Cerámica Blanca", img:"taza-avengers-logo.jpg", precio:$precio_tazas}, 
    {id:"T6", nombre:"Spiderman - Taza Cerámica Blanca", img:"taza-avengers-spiderman.jpg", precio:$precio_tazas}, 
    {id:"T7", nombre:"Mickey 1 - Taza Cerámica Blanca", img:"taza-disney-1.jpg", precio:$precio_tazas}, 
    {id:"T8", nombre:"Mickey 2 - Taza Cerámica Blanca", img:"taza-disney-2.jpg", precio:$precio_tazas}, 
    {id:"T9", nombre:"Friends - Taza Cerámica Blanca", img:"taza-friends.jpg", precio:$precio_tazas}, 
    {id:"T10", nombre:"Daenerys GOT - Taza Cerámica Blanca", img:"taza-got-1.jpg", precio:$precio_tazas}, 
    {id:"T11", nombre:"Jon Snow GOT - Taza Cerámica Blanca", img:"taza-got-2.jpg", precio:$precio_tazas}, 
    {id:"T12", nombre:"Trono de Hierro GOT - Taza Cerámica Blanca", img:"taza-got-3.jpg", precio:$precio_tazas}, 
    {id:"T13", nombre:"Not Today GOT - Taza Cerámica Blanca", img:"taza-got-4.jpg", precio:$precio_tazas}, 
    {id:"T14", nombre:"Stark Logo GOT - Taza Cerámica Blanca", img:"taza-got-5.jpg", precio:$precio_tazas}, 
    {id:"T15", nombre:"Looney Tunes - Taza Cerámica Blanca", img:"taza-looneytunes-1.jpg", precio:$precio_tazas}, 
    {id:"T16", nombre:"Tune Squad - Taza Cerámica Blanca", img:"taza-looneytunes-2.jpg", precio:$precio_tazas}, 
    {id:"T17", nombre:"Paw Patrol - Taza Cerámica Blanca", img:"taza-pawpatrol.jpg", precio:$precio_tazas}, 
    {id:"T18", nombre:"Peaky Blinders - Taza Cerámica Blanca", img:"taza-peaky.jpg", precio:$precio_tazas}, 
    {id:"T19", nombre:"Homero Simpsons 1 - Taza Cerámica Blanca", img:"taza-simpsons-1.jpg", precio:$precio_tazas}, 
    {id:"T20", nombre:"Homero Simpsons 2 - Taza Cerámica Blanca", img:"taza-simpsons-2.jpg", precio:$precio_tazas}, 
];

class Diseno {
    constructor (d) {
        this.id = d.id;
        this.nombre = d.nombre;
        this.img = d.img;
        this.precio = parseFloat(d.precio);
    }
}

function guardarDisenos() {
    localStorage.setItem("disenos_remeblancas",JSON.stringify(disenos_remeblancas));
    localStorage.setItem("disenos_remegrises",JSON.stringify(disenos_remegrises));
    localStorage.setItem("disenos_remeranglan",JSON.stringify(disenos_remeranglan));
    localStorage.setItem("disenos_tazas",JSON.stringify(disenos_tazas));
}
function cargarDisenosRB() {
    return JSON.parse(localStorage.getItem("disenos_remeblancas"));
}
function cargarDisenosRG() {
    return JSON.parse(localStorage.getItem("disenos_remegrises"));
}
function cargarDisenosRR() {
    return JSON.parse(localStorage.getItem("disenos_remeranglan"));
}
function cargarDisenosT() {
    return JSON.parse(localStorage.getItem("disenos_tazas"));
}

guardarDisenos();
let disenos_remeblancas2 = cargarDisenosRB();
let disenos_remegrises2 = cargarDisenosRG();
let disenos_remeranglan2 = cargarDisenosRR();
let disenos_tazas2 = cargarDisenosT();
let disenos_todos = disenos_remeblancas2.concat(disenos_remegrises2.concat(disenos_remeranglan2.concat(disenos_tazas2)));

for (let diseno of disenos_remeblancas2) {
    diseno.nombre = diseno.nombre.toUpperCase();
    let prod = new Diseno (diseno);
    let divRemeBlancas = document.createElement("div");
    divRemeBlancas.className = "col-md-3 p-4";
    divRemeBlancas.innerHTML = `<div class="card text-center border-2 border-white">
                                    <img src="../disenos/${prod.img}" class="card-img-top" alt="${prod.nombre}">
                                    <span class="img visually-hidden">../disenos/${prod.img}</span>
                                    <div class="card-body bg-dark text-white">
                                        <h5 class="card-title">$ ${prod.precio}</h5>
                                        <h5 class="precio visually-hidden">${prod.precio}</h5>
                                        <p class="card-text">${prod.nombre}</p>
                                        <button class="btn btn-outline-light" id=${prod.id}>Agregar al carrito</button>
                                    </div>
                                </div>`;
    $("#modelos-remeblancas").append(divRemeBlancas);

    document.getElementById(prod.id).addEventListener("click",agregarAlCarrito);
}

for (let diseno of disenos_remegrises2) {
    diseno.nombre = diseno.nombre.toUpperCase();
    let prod = new Diseno (diseno);
    let divRemeGrises = document.createElement("div");
    divRemeGrises.className = "col-md-3 p-4";
    divRemeGrises.innerHTML = `<div class="card text-center border-2 border-secondary">
                                    <img src="../disenos/${prod.img}" class="card-img-top" alt="${prod.nombre}">
                                    <span class="img visually-hidden">../disenos/${prod.img}</span>
                                    <div class="card-body bg-dark text-white">
                                        <h5 class="card-title">$ ${prod.precio}</h5>
                                        <h5 class="precio visually-hidden">${prod.precio}</h5>
                                        <p class="card-text">${prod.nombre}</p>
                                        <button class="btn btn-outline-light" id=${prod.id}>Agregar al carrito</button>
                                    </div>
                                </div>`;
    $("#modelos-remegrises").append(divRemeGrises);

    document.getElementById(prod.id).addEventListener("click",agregarAlCarrito);
}

for (let diseno of disenos_remeranglan2) {
    diseno.nombre = diseno.nombre.toUpperCase();
    let prod = new Diseno (diseno);
    let divRemeRanglan = document.createElement("div");
    divRemeRanglan.className = "col-md-3 p-4";
    divRemeRanglan.innerHTML = `<div class="card text-center border-2 border-dark">
                                    <img src="../disenos/${prod.img}" class="card-img-top" alt="${prod.nombre}">
                                    <span class="img visually-hidden">../disenos/${prod.img}</span>
                                    <div class="card-body bg-dark text-white">
                                        <h5 class="card-title">$ ${prod.precio}</h5>
                                        <h5 class="precio visually-hidden">${prod.precio}</h5>
                                        <p class="card-text">${prod.nombre}</p>
                                        <button class="btn btn-outline-light" id=${prod.id}>Agregar al carrito</button>
                                    </div>
                                </div>`;
    $("#modelos-remeranglan").append(divRemeRanglan);

    document.getElementById(prod.id).addEventListener("click",agregarAlCarrito);
}

for (let diseno of disenos_tazas2) {
    diseno.nombre = diseno.nombre.toUpperCase();
    let prod = new Diseno (diseno);
    let divTazas = document.createElement("div");
    divTazas.className = "col-md-3 p-4";
    divTazas.innerHTML = `<div class="card text-center border-2 border-white">
                                <img src="../disenos/${prod.img}" class="card-img-top" alt="${prod.nombre}">
                                <span class="img visually-hidden">../disenos/${prod.img}</span>
                                <div class="card-body bg-dark text-white">
                                    <h5 class="card-title">$ ${prod.precio}</h5>
                                    <h5 class="precio visually-hidden">${prod.precio}</h5>
                                    <p class="card-text">${prod.nombre}</p>
                                    <button class="btn btn-outline-light" id=${prod.id}>Agregar al carrito</button>
                                </div>
                            </div>`;
    $("#modelos-tazas").append(divTazas);

    document.getElementById(prod.id).addEventListener("click",agregarAlCarrito);
}

function actualizarContadorCarrito() {
    let total = 0;
    if (localStorage.getItem("total_carrito")) {
        total = localStorage.getItem("total_carrito");
    }

    document.getElementById("datos_carrito").innerHTML = `<h4> ` + total + ` Producto(s)</h4>`;
}
actualizarContadorCarrito();

function cargarCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }
    return [];
}

let carrito_prod = [];
function agregarAlCarrito(e) {
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let id_producto = padre.querySelector("button").id;
    let nombre_producto = padre.querySelector("p").textContent;
    let precio_producto = padre.querySelector("h5.precio").textContent;
    let imagen_producto = padre.querySelector("span.img").textContent;
    let cantidad_producto = 1;
    
    carrito_prod = cargarCarrito();
    const producto = {
        id: id_producto,
        nombre: nombre_producto,
        img: imagen_producto,
        precio: parseInt(precio_producto),
        cantidad: parseInt(cantidad_producto)
    };

        let duplicado = carrito_prod.find(x => x.id == id_producto);
        if (duplicado) {
            let prod_dup = carrito_prod.filter(x => x.id == id_producto);
            carrito_prod = carrito_prod.filter(x => x.id != id_producto);
            prod_dup[0].cantidad = prod_dup[0].cantidad + 1;
            carrito_prod = carrito_prod.concat(prod_dup);
        }
        else {
            carrito_prod.push(producto);
        }

    console.log(carrito_prod);
    
    let cant_carrito = 0;
    for (let i=0; i<carrito_prod.length; i++) {
        cant_carrito += carrito_prod[i].cantidad;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito_prod));
    localStorage.setItem("total_carrito", cant_carrito);
    actualizarContadorCarrito();
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total_carrito");
    console.log("Se elimino el carrito");
    actualizarContadorCarrito();
}
$("#eliminar_carrito").click(eliminarCarrito);

//BUSCADOR
function buscar() {
    let buscado = $("#buscador").val().toUpperCase();
    console.log(buscado);

    let buscar_disenos = [];
    for (diseno of disenos_todos) {
        diseno.nombre = diseno.nombre.toUpperCase();
        if (diseno.nombre.includes(buscado)) {
            buscar_disenos.push(diseno);
        }
    }
    console.log(buscar_disenos);

    $("#divs-originales").html(``);
    $("#divs-buscados").html(``);    

    for (diseno of buscar_disenos) {
        let divBuscados = document.createElement("div");
        divBuscados.className = "col-md-3 p-4";
        divBuscados.innerHTML = `
            <div class="card text-center border-2 border-dark">
                <img src="../disenos/${diseno.img}" class="card-img-top" alt="${diseno.nombre}">
                <span class="img visually-hidden">../disenos/${diseno.img}</span>
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">$ ${diseno.precio}</h5>
                    <h5 class="precio visually-hidden">${diseno.precio}</h5>
                    <p class="card-text">${diseno.nombre}</p>
                    <button class="btn btn-outline-light" id=${diseno.id}>Agregar al carrito</button>
                </div>
            </div>`;
        $("#divs-buscados").append(divBuscados);
        document.getElementById(diseno.id).addEventListener("click",agregarAlCarrito);
    }
    $("#divs-buscados").prepend(`
            <div class="row">
                <div class="col-md-4"></div>
                <div>
                    <button id="boton-volver" class="btn btn-dark"><a class="text-white text-decoration-none" href="disenos.html">Volver</a></button>
                </div>
            </div>
            `);
}
$("#boton-buscar").click(buscar);

//ANIMACIONES
$(".disenos").fadeIn(2000);

$("a#linkRB").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#modelos-remeblancas").offset().top
    }, 0);
});
$("a#linkRG").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#modelos-remegrises").offset().top
    }, 0);
});
$("a#linkRR").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#modelos-remeranglan").offset().top
    }, 0);
});
$("a#linkT").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#modelos-tazas").offset().top
    }, 0);
});

$("button#volver-arriba").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#navprod").offset().top
    }, 0);
});

$("div.disenos").prepend(`
                    <div id="mensaje-rapido">
                        <h1>Diseños originales Rakun</h1>
                        <p>Podés elegir cualquiera de nuestros modelos publicados o consultarnos por otros!</p>
                    </div>`);
$("#mensaje-rapido").css({opacity:"0.8",width:"600px",height:"200px",padding:"50px"})
                    .slideDown(2000)
                    .delay(5000)
                    .slideUp(2000);