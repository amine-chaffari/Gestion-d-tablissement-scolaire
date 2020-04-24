import { Component, OnInit, ViewChild } from '@angular/core';
import {EtudiantService} from './../etudiant/etudiant.service'
import { ActivatedRoute } from "@angular/router";
import { EtudiantModalComponent } from '../etudiant/etudiant-modal/etudiant-modal.component';
import { MatDialog } from '@angular/material';
import { NoteModalComponent } from './note-modal/note-modal.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    etudiant:any
    view:any
     id = this.actRoute.snapshot.paramMap.get('id');
    groupes: any;
    notes: any;
    matieres: any;
    

    constructor(private actRoute: ActivatedRoute, private EtudiantService: EtudiantService, public dialog: MatDialog) { }

   
    ngOnInit() {
     
    this.view=false
         
    this.refresh()
}

refresh(){

    this.EtudiantService.getNotes(this.id).subscribe(result=>{
     this.notes=result
     }, null, ()=>{return this.notes});
    

  this.EtudiantService.getEtudiantById(this.id).subscribe(result=>{
   this.etudiant=result
   
    }, null, ()=>{return this.etudiant});

    this.EtudiantService.getAllGroupes().subscribe(groupes=>{
        this.groupes=groupes
        }, null, ()=>{return this.groupes}) 
    
        this.EtudiantService.getAllMatieres().subscribe(matieres=>{
        this.matieres=matieres
        }, null, ()=>{return this.matieres}) 


}

openAddNote(): void {
    const dialogRef = this.dialog.open(NoteModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
        
      data: {title: 'Ajouter une note',id:this.id, matieres:this.matieres}
    });


    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }


openEditEtudiant(etudiant): void {
    const dialogRef = this.dialog.open(EtudiantModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
      data: {
        title: 'Modifier ' + etudiant.nom ,
        id: etudiant.id ,
        cin: etudiant.cin,
        nom : etudiant.nom,
        prenom: etudiant.prenom,
        age: etudiant.age,
        groupes : this.groupes,
        default:etudiant.groupe,
        delete : false,
        edit: true,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
      console.log(etudiant.groupe)
    });
  }

  openDeleteEtudiant(id,nom, groupeId): void {
    const dialogRef = this.dialog.open(EtudiantModalComponent, {
      panelClass: 'my-app-dialog',
      data: {id:id, title: "Deleting " + nom + ", Are you sure?", groupeId:groupeId,delete : true} 
    });
    dialogRef.afterClosed().subscribe(data => {
      
           this.refresh();
        
      
       });
   }


   show():void{
       this.view=true
   }
}
