document.getElementById("pokeSearch").addEventListener("click", function(){


    //Conectar a la API y hacerle una peticion
    fetch(`https://pokeapi.co/api/v2/pokemon/658`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("pokeInfo").innerHTML =
        `
        
        <img src="${data.sprites.front_default}">
        <img src="${data.sprites.back_default}">
        <p> <strong> Numero: </strong> ${data.id}</p>
        <p> <strong> Nombre: </strong> ${data.name}</p>
        <p> <strong> Experiencia: </strong> ${data.base_experience}</p>
        <p> <strong> Altura: </strong> ${data.height}m</p>
        <p> <strong> Peso: </strong> ${data.weight}kg</p>

        `;
    })

    .catch(error => console.error("Error", error));

});