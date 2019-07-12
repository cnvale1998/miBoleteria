import { Component, OnInit, Input } from '@angular/core';
import { ApiControladorService } from 'src/app/controladores/apiControlador/api-controlador.service';
import { EntradaControladorService } from 'src/app/controladores/entradaControlador/entrada-controlador.service';

@Component({
  selector: 'app-ver-horarios',
  templateUrl: './ver-horarios.component.html',
  styleUrls: ['./ver-horarios.component.css']
})
export class VerHorariosComponent implements OnInit {
@Input() hoy: number;
@Input() horarios:any;
private seleccionado="";
private meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
private dias_horarios: {
  lunes:{
    horario1:string;
    horario2:string;
  };
  martes:{
    horario1:string;
    horario2:string;
  };
  miercoles:{
    horario1:string;
    horario2:string;
  };
  jueves:{
    horario1:string;
    horario2:string;
  };
  viernes:{
    horario1:string;
    horario2:string;
  };
  sabado:{
    horario1:string;
    horario2:string;
  };
  domingo:{
    horario1:string;
  };
};

private dias=[];


constructor(private conector:ApiControladorService, private entradaControlador: EntradaControladorService) { }

  ngOnInit() {
    this.dias_horarios={
      lunes:{
        horario1:this.horarios.slice(3,8),
        horario2:this.horarios.slice(9,15)
      },
      
      martes:{
        horario1:this.horarios.slice(3,8),
        horario2:this.horarios.slice(9,15)
      },
      
      miercoles:{
        horario1:this.horarios.slice(3,8),
        horario2:this.horarios.slice(9,15)
      },
    
      jueves:{
        horario1:this.horarios.slice(3,8),
        horario2:this.horarios.slice(9,15)
      },
      
      viernes:{
        horario1:this.horarios.slice(3,8),
        horario2:this.horarios.slice(9,15)
      },
      
      sabado:{
        horario1:this.horarios.slice(3,8),
        horario2:this.horarios.slice(9,15)
      },
      
      domingo:{
        horario1:this.horarios.slice(17,22)
      },
      
    }
    
    //console.log(this.dias_horarios);
    let fecha=new Date();
    if (this.hoy==0){
        this.dias.push(["Domingo "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.domingo]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Lunes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.lunes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Martes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.martes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Miércoles "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.miercoles]);
        
    }
    else if (this.hoy==1){
        this.dias.push(["Lunes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.lunes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Martes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.martes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Miércoles "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.miercoles]);


    }
    else if (this.hoy==2){
        this.dias.push(["Martes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.martes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Miércoles "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.miercoles]);

    }
    else if (this.hoy==3){
        this.dias.push(["Miércoles",fecha.toDateString(),this.dias_horarios.miercoles]);
        

    }
    else if (this.hoy==4){
        this.dias.push(["Jueves "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.jueves]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Viernes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.viernes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Sábado "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.sabado]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Domingo "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.domingo]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Lunes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.lunes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Martes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.martes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Miércoles "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.miercoles]);

    }
    else if (this.hoy==5){
        this.dias.push(["Viernes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.viernes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Sábado "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.sabado]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Domingo "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.domingo]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Lunes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.lunes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Martes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.martes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Miércoles "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.miercoles]);

    }
    else if (this.hoy==6){
        this.dias.push(["Sábado "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.sabado]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Domingo "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.domingo]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Lunes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.lunes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Martes "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.martes]);
        fecha.setDate(fecha.getDate()+1);
        this.dias.push(["Miércoles "+fecha.getDate()+" de "+this.meses[fecha.getMonth()],fecha.toDateString(),this.dias_horarios.miercoles]);

    }
    
  }


  guardarHorario(dia:string,fecha:string,horario:string){
    let f=new Date();
    f.setTime(Date.parse(fecha));
    let horas=Number.parseInt(horario.slice(0,2));//conversión de la hora seleccionada
    let minutos=Number.parseInt(horario.slice(3,));
    f.setHours(horas);
    f.setMinutes(minutos);
    //console.log(f.toString());
    this.seleccionado=dia+" "+horario;
    this.entradaControlador.$fecha=f;
    
  }

}
