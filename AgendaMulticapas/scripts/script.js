let url = 'http://www.raydelto.org/agenda.php';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}
let contacto = {nombre: 'Xavier', apellido: 'Peña', telefono: '12345654323'};
fetch("http://www.raydelto.org/agenda.php", 
{
 method:'POST', 
 body:JSON.stringify(contacto)}
).then( res => res.json()).then(
 (res) => 
{
 console.log(res); // imprime la respuesta del servidor
}
);