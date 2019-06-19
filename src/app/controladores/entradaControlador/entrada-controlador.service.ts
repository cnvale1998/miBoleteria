import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradaControladorService {
  private nombrePelicula: String="";
  private horarioPelicula: String="";
  private idPelicula: number=0;
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

    /**
     * Getter $horarioPelicula
     * @return {String}
     */
	public get $horarioPelicula(): String {
		return this.horarioPelicula;
	}

    /**
     * Setter $nombrePelicula
     * @param {String} value
     */
	public set $nombrePelicula(value: String) {
		this.nombrePelicula = value;
	}

    /**
     * Setter $horarioPelicula
     * @param {String} value
     */
	public set $horarioPelicula(value: String) {
		this.horarioPelicula = value;
	}
  

    
  
  
  constructor() { }
}
