import { Component } from '@angular/core';
import { Location } from "@angular/common";


@Component ({
   selector: 'Login-app',
   templateUrl: 'partials/Login.html',
  styleUrls: ["css/Login.css"]
})
export   class   LoginComponent  {

   constructor(private location: Location) { }

    goBack() {
        this.location.back();
    }

}