import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';

import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './app/pokemons/detail-pokemon.component.html',
  
})
export class DetailPokemonComponent implements OnInit {
  
  pokemon: Pokemon = null;
  

  constructor(
    private route: ActivatedRoute,
     private router: Router,
      private pokemonsService: PokemonsService,

      private titleService: Title ){}

  ngOnInit(): void {
   
    let id = +this.route.snapshot.params['id'];
     this.pokemonsService.getPokemon(id)
       .subscribe(pokemon => {
         this.pokemon = pokemon;
        this.titleService.setTitle(`Information sur ${pokemon.name}`)
  });
}

  delete(pokemon: Pokemon): void {
    this.pokemonsService.deletePokemon(pokemon)
      .subscribe(_ => this.goBack());
  }
 

  

  goBack(): void {
    this.router.navigate(['/pokemon/all']);
  }

  goEdit(pokemon: Pokemon): void {
		let link = ['/pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}
}