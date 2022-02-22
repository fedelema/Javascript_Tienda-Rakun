function cargarProductosCarrito() {
    let productos_carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(productos_carrito);
    let total = 0;
    let contenido = `<table class="table">`;
    contenido += `
                <thead>
                <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio unitario</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio total</th>
                <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>`;
    for (let modelo of productos_carrito) {
        contenido += `
                    <tr class="item-carrito">
                    <td><img src="../${modelo.img}" alt="${modelo.img}" width="80"></td>
                    <td id="td-nombre">${modelo.nombre}</td>
                    <td>$ ${modelo.precio}</td>
                    <td>${modelo.cantidad}</td>        
                    <td>$ ${modelo.precio*modelo.cantidad}</td>
                    <td><button class="eliminar-item-carrito btn btn-danger" id=${modelo.id}>Eliminar Item</button></td>
                    </tr>`;
        total += modelo.precio * modelo.cantidad;
        document.getElementById(modelo.id);addEventListener("click",eliminarItemCarrito);
    }
    contenido += `
                <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><strong>Total</strong></td>
                <td><strong>$ ${total}</strong></td>
                <td>&nbsp;</td>
                </tr>
                </tbody>
                </table>

                <div class="row">
                <div class="col-md-9"></div>
                <div class="col-md-3">
                <button id="fincompra" class="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar Compra</button>
                </div>
                </div>

                <div class="row p-3">
                <div class="col-md-9"></div>
                <div class="col-md-3">
                <a href="../index.html"><button id="fincompra" class="btn btn-dark">Seguir Comprando</button></a>
                </div>
                </div>

                <div class="container mt-5">
                <div class="row">
                <div class="col-md-4></div>
                <div class="col-md-4>
                <button id="btn-repetir" class="btn btn-dark mb-md-5">Queres volver a ver los productos? Hacé click acá</button>
                </div>
                </div>
                </div>`;
    document.getElementById("carrito").innerHTML = contenido;
}

cargarProductosCarrito();

function actualizarContadorCarrito() {
    let total = 0;
    if (localStorage.getItem("total_carrito")) {
        total = localStorage.getItem("total_carrito");
    }

    document.getElementById("datos_carrito").innerHTML = `<h4> ` + total + ` Producto(s)</h4>`;
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total_carrito");
    console.log("Se elimino el carrito");
    actualizarContadorCarrito();
    document.getElementById("carrito").innerHTML = `
                <h2 class="text-center">El Carrito está vacío.</h2>
                <a href="../index.html" class="text-center"><button class="btn btn-dark">Volver a comprar</button></a>
    `;
}

function eliminarItemCarrito(e) {
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let id_producto = padre.querySelector("button").id;
    hijo.closest(".item-carrito").remove();
    console.log("Se elimino el item del carrito");
    let prod_carrito = JSON.parse(localStorage.getItem("carrito"));
    let nuevo_carrito = prod_carrito.filter(x => x.id != id_producto);
    localStorage.setItem("carrito", JSON.stringify(nuevo_carrito));
    localStorage.setItem("total_carrito", nuevo_carrito.length);
    cargarProductosCarrito();
    actualizarContadorCarrito();
}

$("#eliminar_carrito").click(eliminarCarrito);

//$(".eliminar-item-carrito").click(eliminarItemCarrito);

actualizarContadorCarrito();

$("#fincompra").click(eliminarCarrito);


//Agregar productos con GET
$("#btn-repetir").click(() => { 
    $.get("../js/datos.json", function (respuesta, estado) {
        if (estado === "success") {
            console.log(respuesta);
            let misprod = respuesta;
            for (const prod of misprod) {
                $("#repetir-disenos").append(`
                        <div class="col-md-2 border border-dark">
                            <div>
                                <p>${prod.nombre}</p>
                                <p><img src='../disenos/${prod.img}' width='120'></p>
                            </div>
                        </div>`);
            }  
        }
    });
});