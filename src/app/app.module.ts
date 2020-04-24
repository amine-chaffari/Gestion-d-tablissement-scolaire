import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatRippleModule,MatSortModule,
  MatTableModule, MatPaginatorModule , MatDialogModule, MatCardModule} from '@angular/material';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { EnseignantModalComponent } from './enseignant/enseignant-modal/enseignant-modal.component';
import { GroupeModalComponent } from './groupe/groupe-modal/groupe-modal.component';
import { EtudiantModalComponent } from './etudiant/etudiant-modal/etudiant-modal.component';
import { MatiereModalComponent } from './matiere/matiere-modal/matiere-modal.component';
import { CadreComponent } from './cadre/cadre.component';
import { CadreModalComponent } from './cadre/cadre-modal/cadre-modal.component';
import { NoteModalComponent } from './profile/note-modal/note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
  
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EnseignantComponent,
    EtudiantComponent,
    GroupeComponent,
    MatiereComponent,
    EnseignantModalComponent,
    GroupeModalComponent,
    EtudiantModalComponent,
    MatiereModalComponent,
    CadreComponent,
    CadreModalComponent,
    NoteModalComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    
    MatRippleModule,MatSortModule,MatTableModule,MatPaginatorModule,
  ],
  entryComponents:[NoteModalComponent,EnseignantModalComponent,EtudiantModalComponent, GroupeModalComponent, MatiereModalComponent, CadreModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
