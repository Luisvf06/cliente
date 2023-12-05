class Banda{
    constructor(nombre,formacion,telefono,estilo){
        this.nombre=nombre;
        this.formacion=new Date(formacion)
        this.integrantes=[]
        this.telefono=telefono
        this.estilo=estilo
    }
    mostrarBanda(){
        document.write('<br>Nombre de la banda: ',this.nombre,'<br>Año de formación: ',this.formacion,'<br>Teléfono de contacto: ',this.telefono,'<br>Estilo: ',this.estilo,'<br>','Integrantes: ')
        for(let integrante of this.integrantes){
            document.write(integrante.dni,', ',integrante.nombre,', ',integrante.apellido)}
    }
    anadirIntegrante(n){//no sé si es así como se pide en el enunciado que se controle que dos integrantes no pueden tener el mismo dni, pero controlarlo al registrarlos es cmo se me ha ocurrido
        if(this.integrantes.dni.indexOf(n.dni)!==-1){
            document.write('No puede haber dni repetidos')
        }else{this.integrantes.push(n)}
    }
    mostrarIntegrantes(){
        for (let integrante of this.integrantes){
            document.write('Nombre: ',integrante.nombre,'<br>Apellido: ',integrante.apellidos,'<br>DNI: ',integrante.dni)
        }
    }
}
