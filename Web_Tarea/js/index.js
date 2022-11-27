var restaurantes =[
{
    nombre: "Pacifico Mar",
    direccion: "Av 85 Nro. 45-85 Barranquilla",
    descripcion: "Deliciosa comida de mar",
    imagen: './images/arroz-con-langostinos-comida-de-mar.jpg',
    imagenbuscar: '../images/arroz-con-langostinos-comida-de-mar.jpg'
},
{
    nombre: "Italiano 65",
    direccion: "Av 45 Nro. 1-85 Medellin",
    descripcion: "Deliciosa comida italiana",
    imagen: './images/images italian.jpg',
    imagenbuscar: '../images/images italian.jpg'
},

{
    nombre: "Fritos y mas",
    direccion: "Calle 45 Medellin",
    descripcion: "Comida rapida",
    imagen: './images/papas.jpg',
    imagenbuscar: '../images/papas.jpg'
},

{
    nombre: "Pollo frito",
    direccion: "Cr 32 # 56-89",
    descripcion: "Lo mejor del pollo frito",
    imagen: './images/i24_pollo_frito_2021.jpg',
    imagenbuscar: '../images/i24_pollo_frito_2021.jpg'
},

]
document.getElementById("main").innerHTML = ''

    restaurantes.forEach((element,index) => {
        var cols = document.createElement("div")
        cols.id = "colsmain"+index
        cols.className="col-12 col-sm-4 col-md-4 col-lg-4"

        var card = document.createElement("div")
        card.id = "cardmain" +index
        card.className = "card"
        document.getElementById("main").appendChild(cols)
        document.getElementById("colsmain"+index).appendChild(card)
        
       
      
        var imagen = document.createElement("img")
        imagen.src = element.imagen
        imagen.style = "width: 100%; height: 150px"
        var nombre = document.createElement("label")
        var texto_nombre = document.createTextNode(element.nombre)
        nombre.appendChild(texto_nombre)
        var direccion = document.createElement("label")
        var texto_direccion= document.createTextNode(element.direccion)
        direccion.appendChild(texto_direccion)
        var descripcion = document.createElement("label")
        var texto_descripcion = document.createTextNode(element.descripcion)
        descripcion.appendChild(texto_descripcion)

        var br = document.createElement("br")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")
      
       
      
        document.getElementById("cardmain"+index).appendChild(imagen)
        document.getElementById("cardmain"+index).appendChild(br)
        document.getElementById("cardmain"+index).appendChild(nombre)
        document.getElementById("cardmain"+index).appendChild(br2)
        document.getElementById("cardmain"+index).appendChild(direccion)
        document.getElementById("cardmain"+index).appendChild(br1)
        document.getElementById("cardmain"+index).appendChild(descripcion)
       
       /*  document.getElementById("imagenRestaurante").innerHTML = element.imagen;  */
   /*      document.getElementById("nombreRestaurante").innerHTML = element.nombre; 
        document.getElementById("direccion").innerHTML = element.direccion; 
        document.getElementById("descripcion").innerHTML = element.descripcion;  */
    })

function search(event){
    console.log(event)
    let respuesta = restaurantes.filter(e => e.nombre.toUpperCase().includes(event.toUpperCase()))
    console.log(respuesta)
    document.getElementById("prueba").innerHTML = ''

    respuesta.forEach((element,index) => {
        var cols = document.createElement("div")
        cols.id = "cols"+index
        cols.className="col-12 col-sm-4 col-md-4 col-lg-4"

        var card = document.createElement("div")
        card.id = "card" +index
        card.className = "card"
        document.getElementById("prueba").appendChild(cols)
        document.getElementById("cols"+index).appendChild(card)
        
       
      
        var imagen = document.createElement("img")
        imagen.src = element.imagenbuscar
        imagen.style = "width: 100%; height: 150px"
        var nombre = document.createElement("label")
        var texto_nombre = document.createTextNode(element.nombre)
        nombre.appendChild(texto_nombre)
        var direccion = document.createElement("label")
        var texto_direccion= document.createTextNode(element.direccion)
        direccion.appendChild(texto_direccion)
        var descripcion = document.createElement("label")
        var texto_descripcion = document.createTextNode(element.descripcion)
        descripcion.appendChild(texto_descripcion)

        var br = document.createElement("br")
        var br1 = document.createElement("br")
        var br2 = document.createElement("br")
      
       
      
        document.getElementById("card"+index).appendChild(imagen)
        document.getElementById("card"+index).appendChild(br)
        document.getElementById("card"+index).appendChild(nombre)
        document.getElementById("card"+index).appendChild(br2)
        document.getElementById("card"+index).appendChild(direccion)
        document.getElementById("card"+index).appendChild(br1)
        document.getElementById("card"+index).appendChild(descripcion)
       
       /*  document.getElementById("imagenRestaurante").innerHTML = element.imagen;  */
   /*      document.getElementById("nombreRestaurante").innerHTML = element.nombre; 
        document.getElementById("direccion").innerHTML = element.direccion; 
        document.getElementById("descripcion").innerHTML = element.descripcion;  */
    });
   
    
}
  




