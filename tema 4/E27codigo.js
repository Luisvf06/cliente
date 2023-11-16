function agregardatos(){
    lista= [];
    while(entrada!==""){
    var entrada=prompt('introduce nombre, apellidos, dni y fecha nacimiento separados por comas');
    var persona= new Persona;
    persona.nombre=entrada[0]
    persona.apellidos=entrada[1]
    persona.dni=entrada[2]
    persona.fecnac=entrada[3]
    lista.push(persona);
}
}