import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }
  getAllEnseignants() {
    return this.http.get<any>('http://localhost:8080/api/enseignants');
  }
  getAllGroupes(){
    return this.http.get<any>('http://localhost:8080/api/groupes');

  }
  getAllMatieres(){
    return this.http.get<any>('http://localhost:8080/api/matieres');

  }

  deleteMatiere(id,enseignantId,) {
    return this.http.delete<any>('http://localhost:8080/api/enseignant/'+enseignantId+'/matiere/'+id);
  }
  
  addMatiere(data,enseignantId,groupeId) {
    return this.http.post<any>('http://localhost:8080/api/enseignant/'+enseignantId+'/groupe/'+groupeId+'/matiere',data);
  }

  updateMatiere(data,enseignantId,groupeId) {
    return this.http.put<any>('http://localhost:8080/api/enseignant/'+enseignantId+'/groupe/'+groupeId+'/matiere/'+data.id,data);
  }
}
