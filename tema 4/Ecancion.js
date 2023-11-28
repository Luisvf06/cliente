//El objeto Cancion, debe tener dos propiedades: título e interprete. Además del constructor tendrá un método mostrarCancion().
class Cancion{
    constructor(titulo,interprete){
        this.titulo=titulo;
        this.interprete=interprete;
    }
    mostrarCancion(){
        document.write('Canción: ',this.titulo,'<br>Artista: ',this.interprete,'<br>')
    }
}