import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { CadreModalComponent } from './cadre-modal/cadre-modal.component';
import { CadreService } from './cadre.service';

@Component({
  selector: 'app-cadre',
  templateUrl: './cadre.component.html',
  styleUrls: ['./cadre.component.css']
})
export class CadreComponent implements OnInit {

  enseignants:any
  taux: any;

  constructor(private CadreService: CadreService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['cin', 'nom', 'prenom', 'age','salaire','jours_de_travail','absence','edit', 'delete'];
  dataSource: MatTableDataSource<string>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   ngOnInit() {
    
    this.refresh()
  }

  refresh(){
    var totalAbsences=0
    var totalHours=0
    this.CadreService.getAllCadres().subscribe(result=>{
      this.dataSource = new MatTableDataSource(result);
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;}, null, ()=>{return this.dataSource}) 

      this.CadreService.getAllCadres().subscribe(result=>{
        result.forEach(element => {
       
       
          totalHours+=element.jours_de_travail;
          totalAbsences=totalAbsences+element.nbr_absence
        })
        this.taux=(totalAbsences/totalHours)*100
        this.taux=this.taux.toFixed(2)

      }, null, ()=>{return this.taux})
  }

  openAddCadre(): void {
    const dialogRef = this.dialog.open(CadreModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
        
      data: {title: 'Ajouter un cadre administratif', delete : false, edit:false}
    });


    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openEditCadre(cadre): void {
    const dialogRef = this.dialog.open(CadreModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
      data: {
        title: 'Modifier ' + cadre.nom ,
        id: cadre.id ,
        cin: cadre.cin,
        nom : cadre.nom,
        prenom: cadre.prenom,
        age: cadre.age,
        salaire : cadre.salaire,
        jours_de_travail:cadre.jours_de_travail,
        nbr_absence:cadre.nbr_absence,
        delete : false,
        edit: true,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openDeleteCadre(id,nom): void {
    const dialogRef = this.dialog.open(CadreModalComponent, {
      panelClass: 'my-app-dialog',
      data: {id:id, title: "Deleting " + nom + ", Are you sure?", delete : true} 
    });
    dialogRef.afterClosed().subscribe(data => {
      
           this.refresh();
        
      
       });
   }

  


}
