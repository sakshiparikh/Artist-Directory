System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = class HeaderComponent {
                constructor(router) {
                    this.router = router;
                    //hideme=[];
                    // hideme = {};
                    // constructor(){
                    //     this.hideme = {}; // init is required
                    // }
                    this.isOpen = false;
                }
                showMenu($event) {
                    console.log("CLICKED");
                    if (this.isOpen == true) {
                        this.isOpen = false;
                    }
                    else {
                        this.isOpen = true;
                    }
                    // Object.keys(this.hideme).forEach(h => {
                    //   this.hideme[h] = false;
                    // });
                    // this.hideme[item.id] = true;
                }
                navigate() {
                    this.router.navigate(["SignIn"]);
                }
                signInBtnOnClick() {
                    console.log("Sign In btn clicked");
                    this.router.navigateByUrl(['SignIn']);
                }
            };
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'app-header',
                    templateUrl: 'partials/header.html',
                    styleUrls: ['css/header.css']
                }), 
                __metadata('design:paramtypes', [router_1.Router])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//   artists = ARTISTS;
//   currentList: artist;
//   showMenu(artist) {
//     this.currentList = artist;
//   }
// }
// var ARTISTS: Artist[] = [
//       { id: 11, name: 'Dr Nice' },
//       { id: 12, name: 'Narco' },
//       { id: 13, name: 'Bombasto' },
//       { id: 14, name: 'Celeritas' },
//       { id: 15, name: 'Magneta' },
//       { id: 16, name: 'RubberMan' },
//       { id: 17, name: 'Dynama' },
//       { id: 18, name: 'Dr IQ' },
//       { id: 19, name: 'Magma' },
//       { id: 20, name: 'Tornado' }
//     ];
//   }
// ngOnInit() {
// }
// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// } 
//# sourceMappingURL=component.header.js.map