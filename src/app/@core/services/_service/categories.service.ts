import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataResponse} from '../../utils/data-response';
import {CommonUtils} from './common-utils.service';

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
    const formData = CommonUtils.convertFormFile(form);
    return this.http.post(`${this.baseUrl}add`, formData);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}list`);
  }
}
