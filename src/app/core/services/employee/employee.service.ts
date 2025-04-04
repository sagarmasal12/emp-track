import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { constant } from '../../constant/master';
import { Observable } from 'rxjs';
import { IApIResponce } from '../../models/interfaces/master';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http=inject(HttpClient)
  constructor() { }

  createEmployee(employeeObj:any):Observable<IApIResponce>{
    return this.http.post<IApIResponce>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.CREATE_EMPLOYEE,employeeObj);
  }
  getEmployee():Observable<IApIResponce>{
    return this.http.get<IApIResponce>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.GET_EMPLOYEE);
  }
  
}
