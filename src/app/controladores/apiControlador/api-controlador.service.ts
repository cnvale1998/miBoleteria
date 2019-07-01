import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiControladorService {
  constructor(private conector: HttpClient) {  
      

  }
  
  ObetenerCartelera(fecha: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Cartelera/${fecha}`);
  }
  BuscarSolicitante(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Solicitante/${email}`);
  }
  BuscarProximosEstrenos(fecha: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/ProximosEstrenos/${fecha}`);
  }
  ObetenerCombosDisponibles(ciudad: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Combos/${ciudad}`);
  }
  ObetenerPersona(email: String){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Personas/${email}`);
  }
  BuscarBeneficiosDisponibles(){    
    return this.conector.get<any[]>(`http://localhost:3000/API/Beneficios/`);
}

GuardarEntrada(reserva: any): Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
   return this.conector.put<any>(`http://localhost:3000/API/Entradas/`, JSON.stringify(reserva), httpOptions);
}
  crearConsulta(datos:Object){  
    this.conector.post('http://localhost:3000/API/Consultas/', datos ).subscribe((res) =>{ console.log(res);alert(res["message"]);});
  }
  
  crearUsuario(datos:Object){
       this.conector.post('http://localhost:3000/API/Usuarios/', datos ).subscribe((res) =>{ console.log(res);alert(res["message"]);});
 }
  
  crearPersona(datos:Object){  
       this.conector.post('http://localhost:3000/API/Personas/', datos ).subscribe(res => console.log(res));
 }
 
 usuarioExiste(email: string){
     return this.conector.get(`http://localhost:3000/API/Usuarios/${email}`);
 }
 
 obtenerUsuario(datos:Object){
    
    return this.conector.post('http://localhost:3000/API/USUARIOS/getUser/',datos);
  }
  updateUsuarioMail(datos:Object){
    return this.conector.post('http://localhost:3000/API/USUARIOS/updateMail/',datos).subscribe((res) =>{ console.log(res);alert(res["message"]);});
  }
  updateUsuarioContrasenia(datos:Object){
     
    return this.conector.post('http://localhost:3000/API/USUARIOS/updatePass/',datos).subscribe((res) =>{ console.log(res);alert(res["message"]);});
  }
  ObtenerProvincias(){ 
    return this.conector.get(`http://localhost:3000/API/Provincias/`);
  }
  
  ObtenerCiudades(){ 
     return this.conector.get(`http://localhost:3000/API/Ciudades/`);
  }
 


}
