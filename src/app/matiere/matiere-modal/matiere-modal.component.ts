import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSelect, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import{MatiereService} from './../matiere.service'
@Component({
  selector: 'app-matiere-modal',
  templateUrl: './matiere-modal.component.html',
  styleUrls: ['./matiere-modal.component.css']
})
export class MatiereModalComponent implements OnInit {

  @ViewChild(MatSelect) selectedValue : MatSelect;
  selected: any;
  selectedEnseignant: any;
  selectedGroupe: any;

  constructor( public dialogRef: MatDialogRef<MatiereModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private MatiereService:MatiereService
   ) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log()
  }
  delete(id,enseignantId){
    this.MatiereService.deleteMatiere(id,enseignantId).subscribe(res=> this.dialogRef.close())  }
  
  
  confirmer(){


    if(this.data.edit){
      this.MatiereService.updateMatiere({ id:this.data.id, module:this.data.module, vol_horaire:this.data.vol_horaire }, this.selectedEnseignant.id,this.selectedGroupe.id).subscribe(res => {
        this.dialogRef.close()
      });}
    
    else {
    this.MatiereService.addMatiere({ module:this.data.module, vol_horaire:this.data.vol_horaire },this.selectedEnseignant.id,this.selectedGroupe.id).subscribe(res => {
      console.log("added")
    });}
    this.dialogRef.close()
  }



  ngOnInit() {
    if (this.data.defaultEnseignant && this.data.defaultGroupe){ this.selectedEnseignant=this.data.defaultEnseignant; this.selectedGroupe=this.data.defaultGroupe}
    else {
      this.selectedEnseignant=this.data.enseignants[0]
      this.selectedGroupe=this.data.groupes[0]
    }
  };
}
