import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatiereService  } from './matiere.service'
import {MatDialog} from '@angular/material';
import {MatiereModalComponent} from './matiere-modal/matiere-modal.component'
@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  groupes: any;
  enseignants: any;

  constructor(private MatiereService: MatiereService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['module', 'vol_horaire', 'enseignant', 'groupe','edit', 'delete'];
  dataSource: MatTableDataSource<string>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   ngOnInit() {
    
    this.refresh()
  }

  refresh(){
    this.MatiereService.getAllMatieres().subscribe(result=>{
     
      this.dataSource = new MatTableDataSource(result);
           
    
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;}, null, ()=>{return this.dataSource});
    
      this.MatiereService.getAllGroupes().subscribe(groupes=>{
        this.groupes=groupes
        }, null, ()=>{return this.groupes}) 
      this.MatiereService.getAllEnseignants().subscribe(enseignants=>{
        this.enseignants=enseignants
        }, null, ()=>{return this.enseignants}) 
  }

  openAddMatiere(): void {
    const dialogRef = this.dialog.open(MatiereModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
        
      data: {title: 'Ajouter une matière', groupes:this.groupes, enseignants:this.enseignants, delete : false, edit:false}
    });


    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
      console.log(this.enseignants)
      console.log(this.groupes)
    });
  }

  openEditMatiere(matiere): void {
    const dialogRef = this.dialog.open(MatiereModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
      data: {
        title: 'Modifier ' + matiere.module ,
        id:matiere.id,
        module:matiere.module,
        vol_horaire:matiere.vol_horaire,
        enseignants:this.enseignants,
        groupes : this.groupes,
        defaultGroupe:matiere.groupes,
        defaultEnseignant:matiere.enseignant,
        delete : false,
        edit: true,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openDeleteMatiere(id,module, enseignantId): void {
    const dialogRef = this.dialog.open(MatiereModalComponent, {
      panelClass: 'my-app-dialog',
      data: {id:id, title: "Deleting " + module + ", Are you sure?",enseignantId:enseignantId ,delete : true} 
    });
    dialogRef.afterClosed().subscribe(data => {
      
           this.refresh();
        
      
       });
   }

  
  


}
