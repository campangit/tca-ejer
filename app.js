let amigos = [];

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;

    if (amigo !== "") {
        if (amigos.includes(amigo)) {
            alert("Este amigo ya fue agregado.");
            return;
        }
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
    } else {
        alert("Falta ingresar nombres de Amigos");
    }

    actualizarAmigo();
}

function actualizarAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista

    // Recorrer el array amigos y agregar cada nombre como <li>
    amigos.forEach(amigo => {
        listaAmigos.innerHTML += <li>${amigo}</li>;
    });
}

function sortearAmigo(){
    if (amigos.length != 0){
        let final = document.getElementById("resultado");
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio);
        final.innerHTML= <li> El amigo secreto es ${amigos[numeroAleatorio]}  </li>;

    } 

    else {
        alert("Agregue un amigo")
    }
}