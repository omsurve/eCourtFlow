import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { casesdata } from '../models/casesapi';
import { Clerks } from 'src/app/admin/admin.component';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public isUserLoggedIn =new BehaviorSubject<boolean>(false);
  public isAdminLoggedIn =new BehaviorSubject<boolean>(false);
  public isClerkLoggedIn =new BehaviorSubject<boolean>(false);
  public userInformation=new BehaviorSubject<any>(null);
    private casesdata = casesdata;
    constructor(private http:HttpClient) { }
    getCasesData(severity:any):Observable<any>{ 
      return this.http.get<any>(`${environment.apiUrl}/cases/sortcases?Severity=${severity}`);
    }
    getLoggedIn(data:any,pass:any):Observable<any>{
      const judge_id = data;
      const password = pass;
       return this.http.post(environment.apiUrl+'/judges/login',{judge_id,password});
    }
    RegisterClerk(data:any):Observable<any>{
      return this.http.post(environment.apiUrl+'/judges/signup',data); 
    }
    getAllClerks():Observable<any[]>{
      return this.http.get<any[]>(environment.apiUrl+'/clerk_auth/getallClerk');  
    }
    AddCase(data:any):Observable<any>{  
      return this.http.post<any>(environment.apiUrl+'/cases/addcases',data);
    }
}
