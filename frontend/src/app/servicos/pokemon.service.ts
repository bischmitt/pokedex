import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  subscribe(arg0: { next: (resultado: any) => void; error: (erro: any) => void; complete: () => void; }) {
    throw new Error('Method not implemented.');
  }
  pokemons = [];

  constructor(public http:HttpClient) {
    this.pegarPokemon()
  }

  public pegarPokemon():Observable<any>{
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=152')

/*       this.pokemons = resultado.results
      console.log(this.pokemons) */
  }
}
