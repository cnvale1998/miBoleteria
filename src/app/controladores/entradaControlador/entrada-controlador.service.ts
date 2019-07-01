import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradaControladorService {
  private nombrePelicula: String="";
  private fecha:Date;
  private idPelicula: number=0;
  private idBeneficio:number=0;
  private precioEntrada:number=0;
  private precioCombo:number=0;
  private idCombo:number=1;
  private tarjeta:string="";
  private terminos: boolean=false;

    /**
     * Getter $tarjeta
     * @return {string}
     */
	public get $tarjeta(): string {
		return this.tarjeta;
	}

    /**
     * Getter $terminos
     * @return {boolean}
     */
	public get $terminos(): boolean {
		return this.terminos;
	}

    /**
     * Setter $tarjeta
     * @param {string} value
     */
	public set $tarjeta(value: string) {
		this.tarjeta = value;
	}

    /**
     * Setter $terminos
     * @param {boolean} value
     */
	public set $terminos(value: boolean) {
		this.terminos = value;
	}
  
    /**
     * Getter $precioCombo
     * @return {number}
     */
	public get $precioCombo(): number {
		return this.precioCombo;
	}

    /**
     * Getter $idCombo
     * @return {number}
     */
	public get $idCombo(): number {
		return this.idCombo;
	}

    /**
     * Setter $precioCombo
     * @param {number} value
     */
	public set $precioCombo(value: number) {
		this.precioCombo = value;
	}

    /**
     * Setter $idCombo
     * @param {number} value
     */
	public set $idCombo(value: number) {
		this.idCombo = value;
	}


    /**
     * Getter $precioEntrada
     * @return {number}
     */
	public get $precioEntrada(): number {
		return this.precioEntrada;
	}

    /**
     * Setter $precioEntrada
     * @param {number} value
     */
	public set $precioEntrada(value: number) {
		this.precioEntrada = value;
	}
  
    /**
     * Getter $idBeneficio
     * @return {number}
     */
	public get $idBeneficio(): number {
		return this.idBeneficio;
	}

    /**
     * Setter $idBeneficio
     * @param {number} value
     */
	public set $idBeneficio(value: number) {
		this.idBeneficio = value;
	}
  
    /**
     * Getter $fecha
     * @return {Date}
     */
	public get $fecha(): Date {
		return this.fecha;
	}

    /**
     * Setter $nombrePelicula
     * @param {String} value
     */
	public set $nombrePelicula(value: String) {
		this.nombrePelicula = value;
	}

    /**
     * Setter $fecha
     * @param {Date} value
     */
	public set $fecha(value: Date) {
		this.fecha = value;
	}
  
    /**
     * Getter $idPelicula
     * @return {number}
     */
	public get $idPelicula(): number {
		return this.idPelicula;
	}

    /**
     * Setter $idPelicula
     * @param {number} value
     */
	public set $idPelicula(value: number) {
		this.idPelicula = value;
	}
  

    /**
     * Getter $nombrePelicula
     * @return {String}
     */
	public get $nombrePelicula(): String {
		return this.nombrePelicula;
	}

    

    
  
  
  constructor() { }
}
