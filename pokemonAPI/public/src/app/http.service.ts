import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }

  getPokemon(){
    let lucario = this._http.get('https://pokeapi.co/api/v2/pokemon/10059/');
    lucario.subscribe(data => 
      console.log(
        "lucario", 
        data,
        "lucario has the ability " + data.abilities[0].ability.name + " and base speed of " + data.stat[0].base_stat
        )  
    );
    return lucario;
  }

  getPokemonWithAdaptability(){
    let adaptability = this._http.get('https://pokeapi.co/api/v2/ability/adaptability/')
    adaptability.subscribe(data =>{
      let list = [];
      data.pokemon.forEach(element =>{
        list.push(element.pokemon.name);
      });
      console.log(list.length + " pokemon share the ability adaptability");
    });
  }
}
