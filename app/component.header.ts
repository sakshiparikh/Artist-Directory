import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: 'partials/header.html',
  styleUrls: ['css/header.css']
 // inputs: ['artist']
})

export class HeaderComponent {
  //hideme=[];
  // hideme = {};
  // constructor(){
  //     this.hideme = {}; // init is required
  // }
  isOpen = false;
 

  showMenu($event) {
    console.log("CLICKED");
    if(this.isOpen == true){
      this.isOpen = false;
    }
    else{
      this.isOpen = true;

    }
    
    // Object.keys(this.hideme).forEach(h => {
    //   this.hideme[h] = false;
    // });
    // this.hideme[item.id] = true;
  }

  constructor(private router: Router) { }

  navigate() {
      this.router.navigate(["SignIn"]);
  }
  
  
  signInBtnOnClick(){
    console.log("Sign In btn clicked")
    this.router.navigateByUrl(['SignIn']);

  }

}
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