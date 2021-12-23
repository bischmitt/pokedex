import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../servicos/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: any;

  @Input()
  numero!: number;

  numeroCompleto: any;

  constructor() {
    this.pokemon = 'pokemon';
    this.numeroCompleto = '';
  }

  ngOnInit(): void {}

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    this.numeroCompleto = numeroFormatado;

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number): string {
    let x = String(str);
    while (x.length < 3) {
      x = '0' + x;
    }
    return x;
  }

  /* const numeroFormatado = String(this.numero).padStart(3, '0'); */
}
