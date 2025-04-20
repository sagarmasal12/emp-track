import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee/employee.service';
import { CommonModule } from '@angular/common';
import { IApiResponse} from '../core/models/interfaces/master';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-newlist',
  imports: [CommonModule,RouterLink],
  templateUrl: './newlist.component.html',
  styleUrl: './newlist.component.css'
})
export class NewlistComponent implements OnInit {

  employeesList: any[] = [];
  // employees: IApIResponce[] = [];
  constructor(private employeeService: EmployeeService,private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((res:any)=>{
      
    })
  }

  ngOnInit(): void {
    this.getEmployees(); 
    // Call the method when the component loads
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(
      (response) => {
        this.employeesList = response; // Assign API response to employees array
        console.log('Employees:', this.employeesList);
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
}
