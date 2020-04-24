import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }
  getAllEtudiants() {
    return this.http.get<any>('http://localhost:8080/api/etudiants');
  }
  getEtudiantById(id) {
    return this.http.get<any>('http://localhost:8080/api/etudiant/'+id);
  }
  getNotes(id) {
    return this.http.get<any>('http://localhost:8080/api/etudiant/'+id+'/notes');
  }
  AddNote(data,matId) {
    return this.http.post<any>('http://localhost:8080/api/etudiant/'+data.id+'/matiere/'+matId+'/note', data);
  }
  getAllGroupes(){
    return this.http.get<any>('http://localhost:8080/api/groupes');

  }

  getAllMatieres(){
    return this.http.get<any>('http://localhost:8080/api/matieres');

  }

  deleteEtudiant(id,groupeId) {
    return this.http.delete<any>('http://localhost:8080/api/groupe/'+groupeId+'/etudiant/'+id);
  }
  
  addEtudiant(data,groupeId) {
    return this.http.post<any>('http://localhost:8080/api/groupe/'+groupeId+'/etudiant', data);
  }

  updateEtudiant(data, groupeId) {
    return this.http.put<any>('http://localhost:8080/api/groupe/'+groupeId+'/etudiant/'+data.id, data);
  }
}
