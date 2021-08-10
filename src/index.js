/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo'
const baseURL = 'https://platzi-avo.vercel.app/'
const appNode = document.querySelector('#app') //selecciona el elemento con id app, puedo poner tmb div#app

const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

//Web API
//Conectarnos al servidor
//Procesar respuesta y convertirla en JSON
//JSON->data->renderizar información en browser

const obtenerDatos = async () => {
    try{
        const response = await fetch(url)
        const respuesta = await response.json()
        const itemContainer = [];
        respuesta.data.forEach((item)=>{
            //crear imagen
            const imagen = document.createElement('img')
            //darle src a image
            imagen.src = `${baseURL}${item.image}`
            imagen.className ="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            //crear titulo
            const title = document.createElement('h2')
            title.textContent = item.name
            //dar estilos a elementos
                // title.style.fontSize = '3rem'
            //crear clases (los nombres de clases utilizados abajo son por defecto de tailwind)
            title.className = 'text-2xl text-blue-600'
            //crear precio
            const price = document.createElement('div')
            price.textContent = formatPrice(item.price)
            price.className = "text-gray-500";
            
            // //creo div contenedor
            // const container = document.createElement('div')
            // //agrego items dentro del container
            // container.append(imagen,title,price)
            // //hago push de cada container dentro de un array
            // itemContainer.push(container)
            // container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";


            // Creamos un contenedor el título y el precio
            const priceAndTitle = document.createElement("div")
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            // Metemos todo dentro de una tarjeta contenedora
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-yellow-300";
            card.append(imagen, priceAndTitle);

            // Metemos todo dentro del contenedor principal
            const contenedor = document.createElement("div");
            contenedor.appendChild(card);

            itemContainer.push(contenedor);
        })
        appNode.append(...itemContainer)
        appNode.className = 'mt-10 grid grid-cols-3 gap2'
    }
    catch{

    }
}
obtenerDatos()