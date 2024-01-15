var div1 = document.createElement('div');
var texto = document.createTextNode('hola mundo');
var div2 = document.createElement('div');
var texto2 = document.createTextNode('adios mundo');
div2.style.backgroundColor = 'blue';  // Cambiado de div2.style.backgroundColor('blue') a div2.style.backgroundColor = 'blue';
div1.style.display = 'inline';  // Cambiado de div1.style.display('inline') a div1.style.display = 'inline';
div2.style.display = 'inline';  // Cambiado de div2.style.display('inline') a div2.style.display = 'inline';
div2.style.width = '40px';  // Cambiado de div2.style.width('40px') a div2.style.width = '40px';
div2.style.position = 'relative';  // Cambiado de div2.style.position('relative') a div2.style.position = 'relative';
div1.style.position = 'absolute';  // Cambiado de div1.style.position('absolute') a div1.style.position = 'absolute';
div1.style.width = '40px';  // Cambiado de div1.style.width('40px') a div1.style.width = '40px';
div1.appendChild(texto2)
div1.appendChild(texto);
var cuerpo = document.getElementsByTagName('body')[0];
cuerpo.appendChild(div1);
cuerpo.appendChild(div2);
/*este dejarlo para el final porque el 14-16 son mejores para practicar*/