class Cliente{
    constructor(nombre,apellidos,dni,historial){
        this.nombre=nombre
        this.apellidos=apellidos
        this.dni=dni
        this.citasPendientes=[]
        this.historialCitas=[]
    }
    crearCita(cita){//entiendo que la cita (sala+fecha)ya existe y lo que se hace realmente es asignarla a un cliente 
        var hoy=new Date();
        if (this.citasPendientes.indexOf(cita.fecha)!==-1){
            document.write('No puedes tener dos citas en un mismo días')
        }else{
            if(cita.fecha<hoy){
                document.write('La cita no puede ser en una fecha ya pasada')
            }else{this.citasPendientes.push(cita)}
        }
    }

    recordarCita(){
        var ahora=new Date()
        var nuevaVentana;
        nuevaventana=window.open('','_blank','width=400,height=200',"scrollbars=yes");
        var pendientesOrdenadas=this.citasPendientes.sort((a,b)=>a.fecha-b.fecha)
        setInterval(function(){
            for (let cita of this.citasPendientes){//aqui elimino las citas pasadas revisando las citas cada 1000ms
                if(cita.fecha<ahora){
                    this.historialCitas.push(cita)
                    this.citasPendientes.splice(cita,1)
                }
            }
        },1000)

        if(ahora.getFullYear()===pendientesOrdenadas[0].getFullYear()
        &&ahora.getMonth()===pendientesOrdenadas[0].getMonth()
        &&ahora.getDate===pendientesOrdenadas[0].getDate()
        &&ahora.getHours()===pendientesOrdenadas[0].getHours()
        &&ahora.getMinutes()+3===pendientesOrdenadas[0].getMinutes()){
            setInterval(nuevaVentana.document.write('Tienes una cita a las: ',pendientesOrdenadas[0].fecha),60000)
        }
    }
}