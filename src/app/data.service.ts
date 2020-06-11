import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  addsignup(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}addsignup`, model);
  }
  getsignup(): Promise<any> {
    return this.http.get(`${environment.Base_Url}getsignup`).toPromise();
  }
  getsignupbyid(sid: number): Promise<any> {
    return this.http.get(`${environment.Base_Url}getsignupbyid/${sid}`).toPromise();
  }
  updatesignup(model: any): Observable<any> {
    return this.http.put(`${environment.Base_Url}updatesignup`, model);
  }
  deletesignup(id: number): Observable<any> {
    return this.http.delete(`${environment.Base_Url}deletesignup/${id}`);
  }
  getacctype(): Promise<any> {
    return this.http.get(`${environment.Base_Url}getacctype`).toPromise();
  }
  getlogin(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}getlogin`, model);

  }
  addcontactdetails(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}addcontactdetails`, model);
  }
  getcontactdetails(): Promise<any> {
    return this.http.get(`${environment.Base_Url}getcontactdetails`).toPromise();
  }
  deletecontactdetails(id: number): Observable<any> {
    return this.http.delete(`${environment.Base_Url}deletecontactdetails/${id}`);
  }
  getuserprofilebyid(sid: number): Promise<any> {
    return this.http.get(`${environment.Base_Url}getuserprofilebyid/${sid}`).toPromise();
  }
}
