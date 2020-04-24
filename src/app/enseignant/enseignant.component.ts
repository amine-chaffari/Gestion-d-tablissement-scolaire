import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { EnseignantService } from './enseignant.service';
import {MatDialog} from '@angular/material';
import { EnseignantModalComponent } from './enseignant-modal/enseignant-modal.component';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignants:any

  constructor(private EnseignantService: EnseignantService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['cin', 'nom', 'prenom', 'age','salaire','edit', 'delete','matieres'];
  dataSource: MatTableDataSource<string>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   ngOnInit() {
    
    this.refresh()
  }

  refresh(){
    this.EnseignantService.getAllEnseignants().subscribe(result=>{
     
      this.dataSource = new MatTableDataSource(result);
           
    
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;}, null, ()=>{return this.dataSource}) 
  }

  openAddEnseignant(): void {
    const dialogRef = this.dialog.open(EnseignantModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
        
      data: {title: 'Ajouter un enseignant', delete : false, edit:false}
    });


    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openEditEnseignant(enseignant): void {
    const dialogRef = this.dialog.open(EnseignantModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
      data: {
        title: 'Modifier ' + enseignant.nom ,
        id: enseignant.id ,
        cin: enseignant.cin,
        nom : enseignant.nom,
        prenom: enseignant.prenom,
        age: enseignant.age,
        salaire : enseignant.salaire,
        delete : false,
        edit: true,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openDeleteEnseignant(id,nom): void {
    const dialogRef = this.dialog.open(EnseignantModalComponent, {
      panelClass: 'my-app-dialog',
      data: {id:id, title: "Deleting " + nom + ", Are you sure?", delete : true} 
    });
    dialogRef.afterClosed().subscribe(data => {
      
           this.refresh();
        
      
       });
   }

   openConsulterMatieres(nom, matieres): void {
    const dialogRef = this.dialog.open(EnseignantModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
      maxHeight:'400px',
     
      data: {
        title: 'Les matières de ' + nom ,
        matieres:matieres,
        consult:true,
        delete : false,
        edit: false,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }
  

}
