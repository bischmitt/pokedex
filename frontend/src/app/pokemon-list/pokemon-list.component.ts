import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../servicos/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

pokemons = ['a','b']
cadaPokemon = [1,2,3,4]

  constructor(public pokemonService: PokemonService) {
    this.pokemons = []
  }

  ngOnInit(): void {
    this.busca();
  }

  busca(){
    this.pokemonService.pegarPokemon().subscribe({
      next:(resultado)=>{
        this.pokemons = resultado.results
        console.log(this.pokemons)
      },
      error: (erro)=>console.error(erro),
      complete: () =>console.log('Adição feita com êxito')
    });
  }
}
