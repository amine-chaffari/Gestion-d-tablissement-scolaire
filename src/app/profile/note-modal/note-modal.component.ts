import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatSelect, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {EtudiantService} from './../../etudiant/etudiant.service'


@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.css']
})
export class NoteModalComponent implements OnInit {

  @ViewChild(MatSelect) selectedValue : MatSelect;
  selected: any;

  constructor( public dialogRef: MatDialogRef<NoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private EtudiantService:EtudiantService
   ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  
  
  confirmer(){

    this.EtudiantService.AddNote({ id:this.data.id , note:this.data.note },this.selectedValue.value).subscribe(res => {
      console.log("added")
    });
    this.dialogRef.close()
  }


  ngOnInit() {
   
      this.selected=this.data.matieres[0]
    
  }

}
