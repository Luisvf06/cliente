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
        for(let integrante of this.integrantes){document.write(integrante.dni,' ',integrante.nombre,' ',integrante.apellido)}
    }
    añadirIntegrantes(n){
        var coincidenciaDNI=false
        for(let integrante of this.integrantes){
            if(integrante[0].includes(n.dni)){
                coincidenciaDNI=true;
                break
            }
        }
        if(coincidenciaDNI==false){
            this.integrantes.push(n)
            }
        }
    mostrarIntegrantes(){
        for (let integrante of this.integrantes){
            document.write('Nombre: ',integrante.nombre,'<br>Apellido: ',integrante.apellido,'<br>DNI: ',integrante.dni)
        }
    }
}
