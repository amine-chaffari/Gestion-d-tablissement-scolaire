import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }

  getAllGroups() {
    return this.http.get<any>('http://localhost:8080/api/groupes');
  }

  deleteGroupe(id) {
    return this.http.delete<any>('http://localhost:8080/api/groupe/' + id);
  }
  
  addGroupe(data) {
    return this.http.post<any>('http://localhost:8080/api/groupe', data);
  }

  updateGroupe(data) {
    return this.http.put<any>('http://localhost:8080/api/groupe/'+ data.id, data);
  }
}
