import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
  
@Component({
  selector: 'List-pokemon',
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
  
})
export class ListPokemonComponent  { 
  
  
pokemons: Pokemon[] = null;
 
  constructor(
    private router: Router,
    private pokemonsService: PokemonsService,
    private titleService: Title
     ) {}

  ngOnInit() {
    this.getPokemons();
    
  }

  getPokemons(): void {
    this.titleService.setTitle('Liste des pokémons');
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }
  

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }




}