import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataResponse} from '../../utils/data-response';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly baseUrl = `${environment.apiUrl}categories/`;

  constructor(
    private http: HttpClient,
  ) {
  }

  addNew(form: any): Observable<DataResponse> {
    return this.http.post(`${this.baseUrl}add`, form);
  }
}
