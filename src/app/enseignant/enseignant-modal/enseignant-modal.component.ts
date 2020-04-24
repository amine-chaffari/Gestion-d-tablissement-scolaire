import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EnseignantService } from './../enseignant.service';


@Component({
  selector: 'app-enseignant-modal',
  templateUrl: './enseignant-modal.component.html',
  styleUrls: ['./enseignant-modal.component.css']
})
export class EnseignantModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EnseignantModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private EnseignantService:EnseignantService
   ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(id){
    this.EnseignantService.deleteEnseignant(id).subscribe(res=> this.dialogRef.close())  }
  
  
  confirmer(){


    if(this.data.edit){
      this.EnseignantService.updateEnseignant({ id:this.data.id, cin: this.data.cin, nom: this.data.nom, prenom: this.data.prenom, age: this.data.age, role: "enseignant", salaire : this.data.salaire }).subscribe(res => {
        this.dialogRef.close()
      });}
    
    else {
    this.EnseignantService.addEnseignant({ cin: this.data.cin, nom: this.data.nom, prenom: this.data.prenom, age: this.data.age, role: "enseignant", salaire : this.data.salaire }).subscribe(res => {
      console.log("added")
    });}
    this.dialogRef.close()
  }


  ngOnInit() {
  }

}
