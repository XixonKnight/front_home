import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonUtils {

  public static convertData(data: any): any {
    if (typeof data === typeof {}) {
      return CommonUtils.convertDataObject(data);
    } else if (typeof data === typeof []) {
      return CommonUtils.convertDataArray(data);
    } else if (typeof data === typeof true) {
      return CommonUtils.convertBoolean(data);
    }
    return data;
  }

  /**
   * convertDataObject
   * param data
   */
  public static convertDataObject(data: Object): Object {
    if (data) {
      for (const key in data) {
        if (data[key] instanceof File) {

        } else {
          data[key] = CommonUtils.convertData(data[key]);
        }
      }
    }
    return data;
  }


  public static convertDataArray(data: Array<any>): Array<any> {
    if (data && data.length > 0) {
      for (const i in data) {
        data[i] = CommonUtils.convertData(data[i]);
      }
    }
    return data;
  }

  public static convertBoolean(value: Boolean): number {
    return value ? 1 : 0;
  }

  public static convertFormFile(dataPost: any): FormData {
    const formData = new FormData();
    for (const key of Object.keys(dataPost)) {
      const value = dataPost[key];
      formData.append(key, value);
    }
    return formData;

  }
}
