import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) { }
  getAllEnseignants() {
    return this.http.get<any>('http://localhost:8080/api/enseignants');
  }

  deleteEnseignant(id) {
    return this.http.delete<any>('http://localhost:8080/api/enseignant/' + id);
  }
  
  addEnseignant(data) {
    return this.http.post<any>('http://localhost:8080/api/enseignant', data);
  }

  updateEnseignant(data) {
    return this.http.put<any>('http://localhost:8080/api/enseignant/'+ data.id, data);
  }
}

