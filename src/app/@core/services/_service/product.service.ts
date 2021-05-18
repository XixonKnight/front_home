import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonUtils} from './common-utils.service';
import {DataResponse} from '../../utils/data-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl = `${environment.apiUrl}product`;

  constructor(
    private http: HttpClient,
  ) {
  }

  saveOrUpdate(form: any): Observable<DataResponse> {
    const formData = CommonUtils.convertFormFile(form);
    // console.log(f)
    return this.http.post(`${this.baseUrl}`, formData);
  }
}
