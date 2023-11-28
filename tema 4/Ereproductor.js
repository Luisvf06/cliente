/* crear un reproductor de música como objeto, que tendrá dos propiedades un array de objetos “canciones” y un volumen que por defecto será 20. 

Además el objeto Reproductor tendrá los siguientes métodos:
aumentaVolumen(): subirá el volumen en un punto y devolverá el nuevo valor del volumen.
disminuyeVolumen(): bajará el volumen en un punto y devolverá el nuevo valor del volumen.
añadeCanción (cancion): si no existe la añadirá al array. 
eliminaCanción (cancion): buscará en el array si la canción existe y si existe la eliminará del array.
mostrarLista(): mostrará la lista de canciones junto con su interprete que se van a reproducir, de la siguiente forma:
A Perfect Day – Lou Reed
Uprising – Muse 
Por una cabeza – Carlos Gardel
mostrarVolumen()
buscarCancion(cancion): buscará una canción y devolverá su posición en el array
ordenarCancionDesc(): que ordenará la lista de canciones por el título de canción de manera descendente
En el archivo html realiza una prueba donde se compruebe el funcionamiento del objeto reproductor y sus métodos. La lista de canciones-interpretes inicial será pedida por pantalla separadas por coma (A Perfect Day, Lou Reed) y se parará cuando se introduzca la palabra “salir”.*/
class Reproductor{
    constructor(volumen=20){
        this.canciones=[]
        this.volumen=volumen
    }
    aumentaVolumen(){
        this.volumen+=1
        return this.volumen
    }
    disminiyeVolumen(){
        this.volumen-=1;
        return this.volumen;
    }
    añadeCancion(n){
        const cancionIgual =(cancion)=>cancion==n;
        if (this.canciones.indexOf(cancionIgual)==-1){
            this.canciones.push(n)
        }
    }
    eliminaCancion(n){
        for (let i=0;i<this.canciones.length;i++){
            if(this.canciones[i]==n){
                this.canciones.splice(i, 1)
            }
        }return this.canciones
    }
    mostrarLista(){
        for (let cancion of this.canciones){
            document.write(cancion.titulo,' - ',cancion.interprete,'<br>')
        }
    }
    buscarCancion(n){
        var indiceCancion=this.canciones.indexOf(n.titulo);
        if(indiceCancion!=-1){
            return indiceCancion
        }
    }
    ordenarCancion(){
        return this.canciones.sort((a,b)=>b.titulo.localCompare(a.titulo))
    }
    
}


