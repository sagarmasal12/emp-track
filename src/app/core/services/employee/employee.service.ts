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
  // getEmployee():Observable<IApIResponce>{
  //   return this.http.get<IApIResponce>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.GET_EMPLOYEE);
  // }

  // getEmployee(): Observable<IApIResponce[]> {
  //   return this.http.get<IApIResponce[]>(
  //     environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.GET_EMPLOYEE
  //   );
  // }
  
  getEmployee(): Observable<IApiResponse[]> {
    return this.http.get<IApiResponse[]>(environment.API_URL + constant.API_METHOD_NAME.EMPLOYEE.GET_EMPLOYEE);
  }

  getEmployees() {
    this.getEmployee().subscribe(
        (response: IApiResponse[]) => {
            this.employees = response; // Assign API response to employees array
            console.log('Employees:', this.employees);
        },
        (error: HttpErrorResponse) => { // Use HttpErrorResponse
            console.error('HTTP Error:', error.message);
        }
    );
}

}
