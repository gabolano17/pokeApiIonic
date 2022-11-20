import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public pokemonList: Pokemon[] = [];
  public pageActual: number = 0;

  constructor(private pokemon: PokemonsService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons():void{
    this.pokemon.getPokemons().subscribe(resp => this.pokemonList = resp)
  }

}
