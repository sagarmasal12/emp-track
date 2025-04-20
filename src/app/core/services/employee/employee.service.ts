import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { constant } from '../../constant/master';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../models/interfaces/master';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: IApiResponse[] = [];
  // http=inject(HttpClient)
  constructor(private http: HttpClient) { }

  createEmployee(employeeObj:any):Observable<IApiResponse>{
    return this.http.post<IApiResponse>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.CREATE_EMPLOYEE,employeeObj);
  }
  getEmployee():Observable<any>{
    return this.http.get<any>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.GET_EMPLOYEE);
  }

  getEmployeeById(id: number):Observable<any>{
    return this.http.get<any>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.getEmpById + id);
  }
  getMasterData():Observable<any>{
    return this.http.get<any>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.getDropdownMasters);
  }
  GetCompanies():Observable<any>{
    return this.http.get<any>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.GetCompanies);
  }

  
}
