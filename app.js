//Variables
let lista = [];

function agregarAmigo() 
{
    
    let nombre = document.getElementById('amigo').value;
    
    if (nombre != '')
    {
        lista.push(nombre);
        vaciarCaja();
        recorrerArray();
    }
    else
    {
        alert('Ingresar un nombre valido');
    }
    console.log(lista);
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
    lista.forEach((item) => 
            {
                let listItem = document.createElement("li");
                listItem.textContent = item;
                listaAmigos.appendChild(listItem);
            });
    return;
}
