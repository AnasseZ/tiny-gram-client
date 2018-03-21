import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RealNavbarComponent } from './components/real-navbar/real-navbar.component';
import { PostComponent } from './components/post/post.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { WhatsupComponent } from './components/whatsup/whatsup.component';

import { UserService } from './services/UserService';

// Here are my routes
const appRoutes: Routes = [
  { path: 'user-profil', component: UserProfilComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    UserProfilComponent,
    HomePageComponent,
    RealNavbarComponent,
    PostComponent,
    TimelineComponent,
    WhatsupComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
