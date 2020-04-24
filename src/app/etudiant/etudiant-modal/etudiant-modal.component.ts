import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSelect } from '@angular/material';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-modal',
  templateUrl: './etudiant-modal.component.html',
  styleUrls: ['./etudiant-modal.component.css']
})
export class EtudiantModalComponent implements OnInit {
  @ViewChild(MatSelect) selectedValue : MatSelect;
  selected: any;

  constructor( public dialogRef: MatDialogRef<EtudiantModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private EtudiantService:EtudiantService
   ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(id,groupeId){
    this.EtudiantService.deleteEtudiant(id,groupeId).subscribe(res=>{this.dialogRef.close();
    window.location.href = '#/etudiant' }        
    )  }
  
  
  confirmer(){


    if(this.data.edit){
      this.EtudiantService.updateEtudiant({ id:this.data.id, cin: this.data.cin, nom: this.data.nom, prenom: this.data.prenom, age: this.data.age, role: "etudiant" }, this.selectedValue.value).subscribe(res => {
        this.dialogRef.close()
      });}
    
    else {
    this.EtudiantService.addEtudiant({ cin: this.data.cin, nom: this.data.nom, prenom: this.data.prenom, age: this.data.age, role: "etudiant" },this.selectedValue.value).subscribe(res => {
      console.log("added")
    });}
    this.dialogRef.close()
  }


  ngOnInit() {
    if (this.data.default){ this.selected=this.data.default}
    else{
      this.selected=this.data.groupes[0]
    }
  }
}
