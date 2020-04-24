import { Component, OnInit, Inject } from '@angular/core';
import { CadreService } from '../cadre.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cadre-modal',
  templateUrl: './cadre-modal.component.html',
  styleUrls: ['./cadre-modal.component.css']
})
export class CadreModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CadreModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private CadreService:CadreService
   ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(id){
    this.CadreService.deleteCadre(id).subscribe(res=> this.dialogRef.close())  }
  
  
  confirmer(){


    if(this.data.edit){
      this.CadreService.updateCadre({ id:this.data.id, cin: this.data.cin, nom: this.data.nom, prenom: this.data.prenom, age: this.data.age, role: "cadre", salaire : this.data.salaire ,jours_de_travail:this.data.jours_de_travail, nbr_absence:this.data.nbr_absence}).subscribe(res => {
        this.dialogRef.close()
      });}
    
    else {
    this.CadreService.addCadre({ cin: this.data.cin, nom: this.data.nom, prenom: this.data.prenom, age: this.data.age, role: "enseignant", salaire : this.data.salaire , jours_de_travail:this.data.jours_de_travail, nbr_absence:this.data.nbr_absence}).subscribe(res => {
      console.log("added")
    });}
    this.dialogRef.close()
  }


  ngOnInit() {
  }

}
