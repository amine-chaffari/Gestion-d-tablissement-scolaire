import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupeService } from '../groupe.service';

@Component({
  selector: 'app-groupe-modal',
  templateUrl: './groupe-modal.component.html',
  styleUrls: ['./groupe-modal.component.css']
})
export class GroupeModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<GroupeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private GroupeService:GroupeService
   ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(id){
    this.GroupeService.deleteGroupe(id).subscribe(res=> this.dialogRef.close())  }
    
  
  confirmer(){


    if(this.data.edit){
      this.GroupeService.updateGroupe({ id:this.data.id, groupe: this.data.groupe }).subscribe(res => {
        this.dialogRef.close()
      });}
    
    else {
    this.GroupeService.addGroupe({groupe: this.data.groupe }).subscribe(res => {
      console.log("added")
    });}
    this.dialogRef.close()
  }


  ngOnInit() {
  }


}
