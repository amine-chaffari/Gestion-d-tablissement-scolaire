import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { EtudiantService  } from './etudiant.service';
import {MatDialog} from '@angular/material';
import { EtudiantModalComponent } from './etudiant-modal/etudiant-modal.component'


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  groupes: any;
  taux: any;
  bool: boolean;
  num: any;

  constructor(private EtudiantService: EtudiantService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['cin', 'nom', 'prenom', 'age','groupe','edit', 'delete','notes',];
  dataSource: MatTableDataSource<string>;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   ngOnInit() {
    
    this.refresh()
  }

  refresh(){
    var moy=0
    var i=0
    
    this.EtudiantService.getAllEtudiants().subscribe(result=>{
    this.num=result.length }, null, ()=>{return this.num });

    
    this.EtudiantService.getAllEtudiants().subscribe(result=>{
     
      this.dataSource = new MatTableDataSource(result);
           
    
     this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;}, null, ()=>{return this.dataSource});
    
      this.EtudiantService.getAllGroupes().subscribe(groupes=>{
        this.groupes=groupes
        }, null, ()=>{return this.groupes}) 

    this.EtudiantService.getAllEtudiants().subscribe(result=>{
      result.forEach(etudiant => {
       
        i++
        if(this.moyenne(etudiant)==true){
          moy++
        }
      
      })
      this.taux=(moy/i)*100
      this.taux=this.taux.toFixed(2)
      }, null, ()=>{return this.taux}) 
  }

  moyenne(etudiant){
    

    this.EtudiantService.getNotes(etudiant.id).subscribe(result=>{
      
      var moyEt=0
      var j=0
      result.forEach(note => {
      j++
      moyEt+=note.note

      });
      moyEt=moyEt/(j*20)     

      if(moyEt>=10){this.taux++}
      }, null, ()=>{return this.taux});
      if (this.bool===true){
        return true
      }
      else{
        return false
      }
            
  }
  openAddEtudiant(): void {
    const dialogRef = this.dialog.open(EtudiantModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
        
      data: {title: 'Ajouter un étudiant', groupes:this.groupes,delete : false, edit:false}
    });


    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  openEditEtudiant(etudiant): void {
    const dialogRef = this.dialog.open(EtudiantModalComponent, {
      panelClass: 'my-app-dialog',
      width:'400px',
     
      data: {
        title: 'Modifier ' + etudiant.nom ,
        id: etudiant.id ,
        cin: etudiant.cin,
        nom : etudiant.nom,
        prenom: etudiant.prenom,
        age: etudiant.age,
        groupes : this.groupes,
        default:etudiant.groupe,
        delete : false,
        edit: true,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
      console.log(etudiant.groupe)
    });
  }

  openDeleteEtudiant(id,nom, groupeId): void {
    const dialogRef = this.dialog.open(EtudiantModalComponent, {
      panelClass: 'my-app-dialog',
      data: {id:id, title: "Deleting " + nom + ", Are you sure?", groupeId:groupeId,delete : true} 
    });
    dialogRef.afterClosed().subscribe(data => {
      
           this.refresh();
        
      
       });
   }

   openConsulter(id): void {
    window.location.href = '#/user-profile/'+id }

}
