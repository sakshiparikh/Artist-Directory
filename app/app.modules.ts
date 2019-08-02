import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { HeaderComponent } from './component.header';
import { ArtistItemComponent } from './component.artist-item';
import { ArtistDetailsComponent } from './component.artist-details';

import { SearchPipe } from './pipe.search';
import { LoginComponent } from './app.login' ;
import { PageNotFoundComponent } from './pageNotFoundComponent';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'SignIn', component: LoginComponent },
  { path : '' , redirectTo: '', pathMatch: 'full' },
  { path : '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes)

  ],
  declarations: [
    AppComponent, ArtistItemComponent, ArtistDetailsComponent, SearchPipe, HeaderComponent,LoginComponent, PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}