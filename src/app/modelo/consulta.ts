
export class Consulta{
    private id:number;
    private _email:string;
    private motivo: string;
    private detalle: string;
    private nombreCiudad: string;
    constructor(id: number=0,email: string='',motivo: string='',detalle: string=''){
        this.id=id;
        this._email=email;
        this.motivo=motivo;
        this.detalle=detalle;
    }
    public setId(id:number){
      this.id=id;
    }
    /*set email(email:string){
      this._email=email;
    }*/
    public setMotivo(motivo:string){
      this.motivo=motivo;
    }
    public setDetalle(detalle:string){
      this.detalle=detalle;
    }
    public getId():number{
        return this.id;
    }
    /*get email():string{
        return this._email;
    }*/
    public getDetalle():string{
        return this.detalle;
    }
    public getMotivo():string{
        return this.motivo;
    }
    
    
    
}