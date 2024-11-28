/* - Al cargar el DOM, la aplicación tiene que llamar una función que realiza una solicitud a la API 
  para obtener información sobre todos los países. Son 250, tarda un poco en renderizar.
- La información se ordena alfabéticamente.
- Al clickar en cada una de las banderas tendrá que mostrar la información detallada en una ventana flotante del país seleccionado. 
  La Muestra información detallada sobre el país seleccionado, incluyendo la bandera, la capital, la población, el lado de la carretera por el que se circula.
- Tendrá un botón cerrar para hacer desaparecer esa información. 

API https://restcountries.com/v3/all)
*/


const apiUrl = 'https://restcountries.com/v3/all';

const getBandera = async () => {
    try {
        const response = await fetch (apiUrl);
        if (!response.ok) {
            throw new Error('Ha surgido un error', response.status);           
        }
    const data = await response.json();
    console.log(data) 


    obtenerInformacion(data)   
    }
    catch(error) {
        console.log('Error al obtener los datos');
    }
};



function obtenerInformacion(paises) {
const listaPaises = document.getElementById('lista');

paises.forEach((pais) => {
    
    const infopais = document.createElement('li');
    const imagen = pais.flags[1];
    infopais.innerHTML =`
    <img id=imgBandera src= '${imagen}' alt='Imagen Bandera/>'
    <p> ${pais.name.common}</p>
    <p>Capital: ${pais.capital[0]}</p>
    <p>Población:${pais.population}</p>
    <p>Conducen por ${pais.car.side}</p>`;
    listaPaises.appendChild(infopais); 

})

    
} ;
getBandera();
