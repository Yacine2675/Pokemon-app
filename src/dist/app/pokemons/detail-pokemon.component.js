"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const pokemons_service_1 = require("./pokemons.service");
let DetailPokemonComponent = class DetailPokemonComponent {
    constructor(route, router, pokemonsService, titleService) {
        this.route = route;
        this.router = router;
        this.pokemonsService = pokemonsService;
        this.titleService = titleService;
        this.pokemon = null;
    }
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => {
            this.pokemon = pokemon;
            this.titleService.setTitle(`Information sur ${pokemon.name}`);
        });
    }
    delete(pokemon) {
        this.pokemonsService.deletePokemon(pokemon)
            .subscribe(_ => this.goBack());
    }
    goBack() {
        this.router.navigate(['/pokemon/all']);
    }
    goEdit(pokemon) {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }
};
DetailPokemonComponent = __decorate([
    core_1.Component({
        selector: 'detail-pokemon',
        templateUrl: './app/pokemons/detail-pokemon.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        pokemons_service_1.PokemonsService,
        platform_browser_1.Title])
], DetailPokemonComponent);
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map