const menu_email = document.querySelector('.navbar-email');
const menu_mobile = document.querySelector('.mobile-menu-icon');
const menu_cart = document.querySelector('.navbar-shopping-cart');
const container_card = document.querySelector('.cards-container');

menu_email.addEventListener("click",  function(){toggleElement(".desktop-menu", [".product-detail-cart"])});
menu_mobile.addEventListener("click",  function(){toggleElement(".mobile-menu",[".product-detail-cart"])});
menu_cart.addEventListener("click",  function(){toggleElement(".product-detail-cart", [".mobile-menu", ".desktop-menu", ".product-detail-info"])});

/* recibe como parametro un elemento y un array con los ID o clases para hacer toggle */
function toggleElement(element, checkElement=[]){
    const  element_modify = document.querySelector(element);
    element_modify.classList.toggle('inactive');

    if(checkElement.length > 0){
        for(check of checkElement){
            const  element1 = document.querySelector(check);
            if(!element1.classList.contains('inactive')){
                element1.classList.add('inactive');
            }
        }
    }
}


/* ===== Insercion de productos desde array ===== */

    const listProduct = [];

    listProduct.push(
        {
            imagen:"https://comercialpapelera.co/tienda/3128-large_default/resina-epoxica-2x1.jpg",
            precio:"120,00",
            nombre:"Resina Epoxy"
        },

        {
            imagen:"https://panamericana.vteximg.com.br/arquivos/ids/309970-1080-1080/estuche-acrilico-7703513079305.jpg?v=636816327154600000",
            precio:"90,00",
            nombre:"Pintura Acrilica"
        },

        {
            imagen:"https://http2.mlstatic.com/D_NQ_NP_655286-MCO50934809100_072022-V.jpg",
            precio:"145,00",
            nombre:"Acuarelas"
        },

        {
            imagen:"https://panamericana.vteximg.com.br/arquivos/ids/309860-600-690/set-de-pinceles-mixtos-lion-brushes-deluxe-6-por-6-unidades--2--7707005803096.jpg?v=636815410317400000",
            precio:"10,00",
            nombre:"Pinceles mixtos"
        },

        {
            imagen:"https://http2.mlstatic.com/D_NQ_NP_694423-MCO45812355351_052021-O.jpg",
            precio:"65,00",
            nombre:"Pasteles"
        },

        {
            imagen:"https://panamericana.vteximg.com.br/arquivos/ids/201370-1080-1080/oleo-conda-x-12-unidades-1-6935249929406.jpg?v=636290992627370000",
            precio:"220,00",
            nombre:"Oleo"
        },

        {
            imagen:"https://http2.mlstatic.com/D_NQ_NP_681772-MCO46011010067_052021-O.jpg",
            precio:"120,00",
            nombre:"trementina y linaza"
        },

        {
            imagen:"https://cdn.shopify.com/s/files/1/0517/0272/6848/products/Portada-Texturizador.png?v=1607534584",
            precio:"20,00",
            nombre:"Texturizador"
        },

        {
            imagen:"https://panamericana.vteximg.com.br/arquivos/ids/202581-1080-1080/lapiz-conte-carboncillo-x-3-bhb-3b-1-7707262489149.jpg?v=636294374945900000",
            precio:"120,00",
            nombre:"Carboncillo"
        },

        {
            imagen:"https://www.bazzarbog.com/62570-large_default/retablo-para-fotografia-con-autoadhesivo-en-mdf-20x30.jpg",
            precio:"220,00",
            nombre:"Retablo madera"
        },

        {
            imagen:"https://panamericana.vteximg.com.br/arquivos/ids/266498-1080-1080/lienzo-con-bastidor-de-25-cm-x-35-cm-7707345720022.jpg?v=636384202897770000",
            precio:"220,00",
            nombre:"Lienzo"
        },

        {
            imagen:"https://image.made-in-china.com/155f0j00ZzYRqMuyhIcl/2-Masking-Tape-Painting-Adhesive-Paper-Tape-Paintable-Tape.jpg",
            precio:"120,00",
            nombre:"Cinta enmascarar"
        },

        {
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9oNafnbvm3HtNWkYI4xAIBmYNQssSGzEIQ&usqp=CAU",
            precio:"120,00",
            nombre:"Lapiz profesional"
        },

        {
            imagen:"https://www.activebrain.cl/24690-thickbox_leometr/paleta-para-pintar-de-madera-22x17cm.jpg",
            precio:"60,00",
            nombre:"Paleta"
        },

        {
            imagen:"https://http2.mlstatic.com/D_NQ_NP_741895-MLA49326025479_032022-W.jpg",
            precio:"320,00",
            nombre:"Espatulas"
        }
    );

    /* Recibe como parametro un array de productos */
    function renderProducts(arrayProduct){
    
        for (product of arrayProduct){
            /* ---- Crea los elementos ---- */
            const productCart = document.createElement('div');
            productCart.classList.add('product-card');
            productCart.addEventListener("click",  function(){toggleElement(".product-detail-info", [".mobile-menu", ".desktop-menu", ".product-detail-cart"])});

            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.imagen);

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            const productDiv = document.createElement('div');
            
            const productPrecio = document.createElement('p');
            productPrecio.innerText = "$"+product.precio;

            const productNombre = document.createElement('p');
            productNombre.innerText = product.nombre;

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

    renderProducts(listProduct);
/* =============================================== */