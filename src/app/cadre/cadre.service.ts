import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadreService {

  constructor(private http: HttpClient) { }
  
  getAllCadres() {
    return this.http.get<any>('http://localhost:8080/api/cadres');
  }

  deleteCadre(id) {
    return this.http.delete<any>('http://localhost:8080/api/cadre/' + id);
  }
  
  addCadre(data) {
    return this.http.post<any>('http://localhost:8080/api/cadre', data);
  }

  updateCadre(data) {
    return this.http.put<any>('http://localhost:8080/api/cadre/'+ data.id, data);
  }
}
