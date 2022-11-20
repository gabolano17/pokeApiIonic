import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokeResp } from '../models/pokemon';
import { Util } from '../models/util';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public util: Util = new Util();

  constructor(private http: HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<PokeResp>(this.util.url.concat('?limit=1154')).pipe(
      map(this.pokeTransform)
    )
  }

  pokeTransform(res: PokeResp):Pokemon[]{
    const pokeList: Pokemon[] = res.results.map(poke => {
      const url = poke.url.split('/');
      const id = url[6];
      const sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return{
        id,
        name: poke.name,
        sprites
      }
    })

    return pokeList
  }

}
