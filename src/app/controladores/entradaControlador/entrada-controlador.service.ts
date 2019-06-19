import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntradaControladorService {
  private nombrePelicula: String="";

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
  private horarioPelicula: String="";

    
  
  
  constructor() { }
}
