"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const pokemons_module_1 = require("./pokemons/pokemons.module");
const forms_1 = require("@angular/forms");
const login_component_1 = require("./login.component");
const loggin_routing_module_1 = require("./loggin-routing.module");
const http_1 = require("@angular/common/http");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
const in_memory_data_service_1 = require("./in-memory-data.service");
const app_routing_module_1 = require("./app-routing.module");
const page_not_found_component_1 = require("./page-not-found.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false }),
            pokemons_module_1.PokemonsModule,
            loggin_routing_module_1.LoginRoutingModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        providers: [platform_browser_1.Title],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map