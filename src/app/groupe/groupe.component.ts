import {Component, OnInit, ViewChild} from '@angular/core';
import { GroupeService } from './groupe.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { GroupeModalComponent } from './groupe-modal/groupe-modal.component';



@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  
  constructor(private GroupeService: GroupeService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['groupe', 'edit', 'delete','matieres', 'etudiants'];
  dataSource: MatTableDataSource<string>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   ngOnInit() {
    
    this.refresh()
  }

  refresh(){
    this.GroupeService.getAllGroups().subscribe(result=>{
     
      this.dataSource = new MatTableDataSource(result);
           
    
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;}, null, ()=>{return this.dataSource}) 
  }

  openAddGroupe(): void {
    const dialogRef = this.dialog.open(GroupeModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
        
      data: {title: 'Ajouter un groupe', delete : false, edit:false}
    });


    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openEditGroupe(groupe): void {
    const dialogRef = this.dialog.open(GroupeModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
      data: {
        title: 'Modifier ' + groupe.groupe ,
        id: groupe.id ,
        groupe:groupe.groupe,
        delete : false,
        edit: true,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openDeleteGroupe(id,groupe): void {
    const dialogRef = this.dialog.open(GroupeModalComponent, {
      panelClass: 'my-app-dialog',
      data: {id:id, title: "Deleting " + groupe + ", Are you sure?", delete : true} 
    });
    dialogRef.afterClosed().subscribe(data => {
      
           this.refresh();
        
      
       });
   }

   openConsulterMatieres(groupe, matieres): void {
    const dialogRef = this.dialog.open(GroupeModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
      maxHeight:'400px',
     
      data: {
        title: 'Les matières de ' + groupe ,
        matieres:matieres,
        mat:true,
        consult:true,
        delete : false,
        edit: false,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }
   openConsulterEtudiants(groupe, etudiants): void {
    const dialogRef = this.dialog.open(GroupeModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
      maxHeight:'400px',
     
      data: {
        title: 'Les étudiants de ' + groupe ,
        etudiants:etudiants,
        et:true,
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
