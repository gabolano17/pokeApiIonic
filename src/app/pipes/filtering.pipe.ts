import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(pokemon: Pokemon[]): Pokemon[] {
    const pokemonFilter = pokemon.filter(p => p.id == "1");
    return pokemonFilter;
  }

}
