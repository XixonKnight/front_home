import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataResponse} from '../../utils/data-response';
import {CommonUtils} from './common-utils.service';
import {BasicService} from './basic.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BasicService {
  private readonly baseUrl = `${environment.apiUrl}categories/`;

  constructor(
    public http: HttpClient,
  ) {
    super('baseUrl', 'categories', http);
  }

  addNew(form: any): Observable<DataResponse> {
    const formData = CommonUtils.convertFormFile(form);
    return this.http.post(`${this.baseUrl}add`, formData);
  }

  getList(event?: any): Observable<any> {
    const searchData: any = {};
    if (event) {
      searchData._search = event;
    }
    const buildParams = CommonUtils.buildParams(searchData);
    return this.http.get(`${this.baseUrl}search`, {params: buildParams});
  }
}
