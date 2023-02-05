/* ============================================================
| ===== Array harcodeado con los objetos de los productos ===== */

const listProduct = [];

/* Inserta los elementos (objetos de los productos) a el array */

listProduct.push(
    {
        imagen:"https://comercialpapelera.co/tienda/3128-large_default/resina-epoxica-2x1.jpg",
        precio:"120,00",
        nombre:"Resina Epoxy",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://panamericana.vteximg.com.br/arquivos/ids/309970-1080-1080/estuche-acrilico-7703513079305.jpg?v=636816327154600000",
        precio:"90,00",
        nombre:"Pintura Acrilica",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://http2.mlstatic.com/D_NQ_NP_655286-MCO50934809100_072022-V.jpg",
        precio:"145,00",
        nombre:"Acuarelas",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://panamericana.vteximg.com.br/arquivos/ids/309860-600-690/set-de-pinceles-mixtos-lion-brushes-deluxe-6-por-6-unidades--2--7707005803096.jpg?v=636815410317400000",
        precio:"10,00",
        nombre:"Pinceles mixtos",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://http2.mlstatic.com/D_NQ_NP_694423-MCO45812355351_052021-O.jpg",
        precio:"65,00",
        nombre:"Pasteles",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://panamericana.vteximg.com.br/arquivos/ids/201370-1080-1080/oleo-conda-x-12-unidades-1-6935249929406.jpg?v=636290992627370000",
        precio:"220,00",
        nombre:"Oleo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://http2.mlstatic.com/D_NQ_NP_681772-MCO46011010067_052021-O.jpg",
        precio:"120,00",
        nombre:"trementina y linaza",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://cdn.shopify.com/s/files/1/0517/0272/6848/products/Portada-Texturizador.png?v=1607534584",
        precio:"20,00",
        nombre:"Texturizador",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://panamericana.vteximg.com.br/arquivos/ids/202581-1080-1080/lapiz-conte-carboncillo-x-3-bhb-3b-1-7707262489149.jpg?v=636294374945900000",
        precio:"120,00",
        nombre:"Carboncillo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://www.bazzarbog.com/62570-large_default/retablo-para-fotografia-con-autoadhesivo-en-mdf-20x30.jpg",
        precio:"220,00",
        nombre:"Retablo madera",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://panamericana.vteximg.com.br/arquivos/ids/266498-1080-1080/lienzo-con-bastidor-de-25-cm-x-35-cm-7707345720022.jpg?v=636384202897770000",
        precio:"220,00",
        nombre:"Lienzo",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://image.made-in-china.com/155f0j00ZzYRqMuyhIcl/2-Masking-Tape-Painting-Adhesive-Paper-Tape-Paintable-Tape.jpg",
        precio:"120,00",
        nombre:"Cinta enmascarar",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9oNafnbvm3HtNWkYI4xAIBmYNQssSGzEIQ&usqp=CAU",
        precio:"120,00",
        nombre:"Lapiz profesional",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://www.activebrain.cl/24690-thickbox_leometr/paleta-para-pintar-de-madera-22x17cm.jpg",
        precio:"60,00",
        nombre:"Paleta",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    },

    {
        imagen:"https://http2.mlstatic.com/D_NQ_NP_741895-MLA49326025479_032022-W.jpg",
        precio:"320,00",
        nombre:"Espatulas",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque, libero id eleifend suscipit, nisi ligula efficitur augue, a pharetra augue nisi mattis nunc. Vestibulum dolor eros, congue sit amet rhoncus eget, porttitor eu orci. Fusce vulputate pellentesque ullamcorper. Vivamus lobortis eros in nibh semper, a venenatis neque egestas. Sed suscipit a quam bibendum vulputate. Quisque nec velit nec dui facilisis vehicula quis sit amet ante. Morbi et tellus et eros accumsan fringilla."
    }
);

/* ===============================
| ======= Acciones del DOM ======= */

/* Todos los elementos sobre los cuales se escucharan eventos */
const menu_email = document.querySelector('.navbar-email');
const menu_mobile = document.querySelector('.mobile-menu-icon');
const menu_cart = document.querySelector('.navbar-shopping-cart');
const container_card = document.querySelector('.cards-container');
const detail_close = document.querySelector('#product-detail-close');
const orders_close = document.querySelector('#my-orders-close');
const orders_open = document.querySelector('#view-my-orders');
const orders_open_mobile = document.querySelector('#view-my-orders-mobile');
const my_account = document.querySelector('#view-my-account');

/* Escucha los eventos de cada elemento y ejecuta las funciones necesarias*/
menu_email.addEventListener("click",  function(){toggleElement(".desktop-menu", [".product-detail-cart", ".product-detail-info", ".my-order", ".login"])});
menu_mobile.addEventListener("click",  function(){toggleElement(".mobile-menu", [".product-detail-cart", ".product-detail-info", ".my-order", ".login"])});
my_account.addEventListener("click",  function(){toggleElement(".login", [".mobile-menu", ".desktop-menu", ".product-detail-info", ".my-order"])});
menu_cart.addEventListener("click",  function(){toggleElement(".product-detail-cart", [".mobile-menu", ".desktop-menu", ".product-detail-info", ".my-order", ".login"])});
detail_close.addEventListener("click",  function(){inactiveDetailProduct(".product-detail-info")});
orders_close.addEventListener("click",  function(){inactiveDetailProduct(".my-order")});
orders_open.addEventListener("click",  function(){activeDetailProduct(".my-order", [".mobile-menu", ".desktop-menu", ".product-detail-cart", ".login"])});
orders_open_mobile.addEventListener("click",  function(){activeDetailProduct(".my-order", [".mobile-menu", ".desktop-menu", ".product-detail-cart", ".login"])});

/* ===========================================================================
| Función: Mostrar u ocultar un componente del html
| Recibe: 2 parametros, 1 obligatorio
|   Parametro 1: elemento a togglear puede ser una etiqueta, una clase o un ID
|   Parametro 2: un array que liste todos los elementos, clases o ID a ocultar.
| ===========================================================================*/

function toggleElement(element, checkElement=[]){
    const  element_modify = document.querySelector(element);
    const elemnet_filter_black = document.querySelector('.filter_black');

    element_modify.classList.toggle('inactive');

    if(!elemnet_filter_black.classList.contains('inactive')){
        elemnet_filter_black.classList.add('inactive');
    } 

    if(checkElement.length > 0){
        for(check of checkElement){
            const  element1 = document.querySelector(check);
            if(!element1.classList.contains('inactive')){
                element1.classList.add('inactive');
            }

            if(check == '.product-detail-info'){
                const detailProuctImg = document.getElementById("img-product-detail-info");
                const detailProuctInfo = document.getElementById("product-info");

                if(detailProuctImg != null || detailProuctInfo != null ){
                    detailProuctImg.remove();
                    detailProuctInfo.remove();
                }
            }
        }
    }
}

/* ===========================================================================
| Función: Oculta un componente del html y limpia contenido de detalle producto
| Recibe: 2 parametros, 1 obligatorio
|   Parametro 1: elemento activo a ocultar puede ser una etiqueta, una clase o un ID
|   Parametro 2: un array que liste todos los componentes que deberian estar ocultos.
| ===========================================================================*/

function inactiveDetailProduct(element, checkElement=[]){
    const detailProuctImg = document.getElementById("img-product-detail-info");
    const detailProuctInfo = document.getElementById("product-info");

    if(detailProuctImg != null || detailProuctInfo != null ){
        detailProuctImg.remove();
        detailProuctInfo.remove();
    }
    
    const  element_modify = document.querySelector(element);
    const elemnet_filter_black = document.querySelector('.filter_black');

    element_modify.classList.add('inactive');
    elemnet_filter_black.classList.add('inactive');

    if(checkElement.length > 0){
        for(check of checkElement){
            const  element1 = document.querySelector(check);
            if(!element1.classList.contains('inactive')){
                element1.classList.add('inactive');
            }
        }
    }
}

/* ===========================================================================
| Función: Activa un componente del html y si es necesario renderiza el detalle
| de un producto en el componente que se va a activar
| Recibe: 4 parametros, 1 obligatorio y 3 opcionales
|   Parametro 1: elemento ocultar a mostrar puede ser una etiqueta, una clase o un ID
|   Parametro 2: un array que liste todos los componentes que deberian estar ocultos.
|   Parametro 3: un array de objetos con los productos a renderizar
|   Parametro 4: la posicion del elemento del array a renderizar
| ===========================================================================*/

function activeDetailProduct(element, checkElement=[], arrayProduct=[], id_product=0){
    const  element_modify = document.querySelector(element);
    const elemnet_filter_black = document.querySelector('.filter_black');
    
    element_modify.classList.remove('inactive');
    elemnet_filter_black.classList.remove('inactive');

    if(arrayProduct.length > 0){
        renderDetailProducts(arrayProduct, parseInt(id_product));
    }

    if(checkElement.length > 0){
        for(check of checkElement){
            const  element1 = document.querySelector(check);
            if(!element1.classList.contains('inactive')){
                element1.classList.add('inactive');
            }
        }
    }
}

/* ===========================================================================
| Función: Renderiza un array de productos en la interface
| Recibe: 1 parametro obligatorio
|   Parametro 1: un array de objetos con los productos a renderizar
| ===========================================================================*/

function renderProducts(arrayProduct){

    for (let i = 0; i < arrayProduct.length; i++){
        
        /* ---- Crea los elementos ---- */
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
        productCart.addEventListener("click",  function(){activeDetailProduct(".product-detail-info", [".mobile-menu", ".desktop-menu", ".product-detail-cart", ".my-order"], arrayProduct, i)});

        const productImg = document.createElement('img');
        productImg.setAttribute('src', arrayProduct[i].imagen);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productDiv = document.createElement('div');
        
        const productPrecio = document.createElement('p');
        productPrecio.innerText = "$"+arrayProduct[i].precio;

        const productNombre = document.createElement('p');
        productNombre.innerText = arrayProduct[i].nombre;

        const productFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './asset/icons/bt_add_to_cart.svg');

        /* ---- Inserta elementos al DOM ---- */
        container_card.appendChild(productCart);
        productCart.append(productImg, productInfo);
        productInfo.append(productDiv, productFigure);
        productDiv.append(productPrecio, productNombre);
        productFigure.appendChild(figureImg);
    }
}

/* ===========================================================================
| Función: Renderiza el detalle de un producto en la interface
| Recibe: 2 parametros obligatorios
|   Parametro 1: un array de objetos con los productos que estan renderizados
|   Parametro 2: la posicion del elemento del array a renderizar en detalle
| ===========================================================================*/

function renderDetailProducts(arrayProduct, element){

    const imgProductDetail = document.createElement('img')
    imgProductDetail.setAttribute('src', arrayProduct[element].imagen);
    imgProductDetail.setAttribute('alt', arrayProduct[element].nombre);
    imgProductDetail.setAttribute('id','img-product-detail-info');


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.setAttribute('id','product-info');

    const precio = document.createElement('p');
    precio.innerText = arrayProduct[element].precio;

    const nombre = document.createElement('p');
    nombre.innerText = arrayProduct[element].nombre;

    const descripcion = document.createElement('p');
    descripcion.innerText = arrayProduct[element].descripcion;

    const buttonDetail = document.createElement('button');
    buttonDetail.classList.add('primary-button', 'add-to-cart-button');

    const imgButtonDetail = document.createElement('img')
    imgButtonDetail.setAttribute('src', "./asset/icons/bt_add_to_cart.svg");
    imgButtonDetail.setAttribute('alt', "add to card");

    /* ---- Inserta elementos al DOM ---- */
    const productDetail = document.querySelector('.product-detail-info');
    productDetail.append(imgProductDetail, productInfo);
    productInfo.append(precio, nombre, descripcion, buttonDetail);
    buttonDetail.appendChild(imgButtonDetail);
}

/* Por defecto renderiza los productos en la interface */
renderProducts(listProduct);
/* =============================================== */