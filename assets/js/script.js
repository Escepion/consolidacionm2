const consumoDigiApi = () => {


let nombreParaConsultar = document.getElementById('nombreProporcionado').value;

let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/' +nombreParaConsultar;


    fetch(endpoint)
        .then(response => response.json())
        .then(datos => {
            
            console.log('La Api funciona.')
            console.log(datos);
            let nombreDigimon = datos[0].name;
            let nivelDigimon = datos[0].level;
            let imagenDigimon = datos[0].img;





            setTimeout(() => {
                console.log('El nombre del digimon es: ', +nombreDigimon);
                console.log('El nivel del digimon es: ', +nivelDigimon);

                let parrafoNombre = document.getElementById('nombreDelDigimon');
                parrafoNombre.innerHTML = nombreDigimon;

                let parrafoNivel = document.getElementById('nivelDelDigimon');
                parrafoNivel.innerHTML = nivelDigimon;

                let etiquetaImagen = document.getElementById('imagenDelDigimon');
                etiquetaImagen.src = imagenDigimon;



            }, '1000');
        })
        .catch();
}