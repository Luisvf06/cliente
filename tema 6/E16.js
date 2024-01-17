/*Crea un campo de texto que sirva para mostrar los datos de un array, según coincidan con lo
que se va escribiendo.*/
var lista= ['Álava',
'Albacete',
'Alicante',
'Almería',
'Asturias',
'Ávila',
'Badajoz',
'Barcelona',
'Burgos',
'Cáceres',
'Cádiz',
'Cantabria',
'Castellón',
'Ciudad Real',
'Córdoba',
'Cuenca',
'Gerona',
'Granada',
'Guadalajara',
'Guipúzcoa',
'Huelva',
'Huesca',
'Islas Balears',
'Jaén',
'La Coruña',
'La Rioja',
'Las Palmas',
'León',
'Lérida',
'Lugo',
'Madrid',
'Málaga',
'Murcia',
'Navarra',
'Orense',
'Palencia',
'Pontevedra',
'Salamanca',
'Santa Cruz de Tenerife',
'Segovia',
'Sevilla',
'Soria',
'Tarragona',
'Teruel',
'Toledo',
'Valencia',
'Valladolid',
'Vizcaya',
'Zamora',
'Zaragoza']
var entrada = document.createElement('input');
entrada.setAttribute('type', 'text');
entrada.addEventListener('input', filtrar); 

var divisor = document.createElement('div');
document.body.appendChild(entrada);
document.body.appendChild(divisor);

function filtrar() {
    var filtro = entrada.value.toLowerCase(); // Asi las coincidencias no dependen que sean mayusculas o minusc.
    divisor.innerHTML = ''; 

for (let elemento of lista) {
    if (elemento.toLowerCase().includes(filtro)) {//si el elemento de la lista en minuscula contiene una cadena igual que el valor dle input en minusc
    var elementoDiv = document.createElement('div');//se crea un nuevo div
    elementoDiv.textContent = elemento;//al array se le da el valor del elemento que coincide
    divisor.appendChild(elementoDiv);
    }
}
}