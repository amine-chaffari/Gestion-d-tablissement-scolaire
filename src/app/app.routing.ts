import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { CadreComponent } from './cadre/cadre.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile/:id',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'enseignant',          component: EnseignantComponent },
    { path: 'etudiant',          component: EtudiantComponent },
    { path: 'cadre',          component: CadreComponent },
    { path: 'groupe',          component: GroupeComponent },
    { path: 'matiere',          component: MatiereComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
