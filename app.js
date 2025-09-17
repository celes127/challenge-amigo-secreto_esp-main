//Variables
let amigos = [];

function agregarAmigo() 
{
    
    let nombre = document.getElementById('amigo').value;
    
    if (nombre != '')
    {
        amigos.push(nombre);
        vaciarCaja();
        recorrerArray();
    }
    else
    {
        alert('Ingresar un nombre valido');
    }
    return;
}

function vaciarCaja()
{
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
    return;
}

function recorrerArray ()
{
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach((item) => 
            {
                let listItem = document.createElement("li");
                listItem.textContent = item;
                listaAmigos.appendChild(listItem);
            });
    return;
}

function sortearAmigo()
{
    if (amigos.length > 0)
    {
        let numeroGenerado = Math.floor(Math.random()*amigos.length);
    
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = amigos[numeroGenerado];
    }
    else 
    {
        alert('La lista esta vacia');
    }
    return;
}