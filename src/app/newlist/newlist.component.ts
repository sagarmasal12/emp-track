import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee/employee.service';
import { CommonModule, DatePipe } from '@angular/common';
import { IApiResponse} from '../core/models/interfaces/master';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-newlist',
  imports: [CommonModule,RouterLink,DatePipe],
  templateUrl: './newlist.component.html',
  styleUrl: './newlist.component.css'
})
export class NewlistComponent implements OnInit {
  isLoading: boolean = true;
  employeesList: any[] = [];
  // employees: IApIResponce[] = [];
  constructor(private employeeService: EmployeeService,private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((res:any)=>{
      
    })
  }

  ngOnInit(): void {
    this.getEmployees(); 
    this.isLoading = true;
    // Call the method when the component loads
  }

  getEmployees() {
    this.employeeService.getEmployee().subscribe(
      (response) => {
        this.isLoading = true;
        this.employeesList = response; // Assign API response to employees array
        this.isLoading = false;
        console.log('Employees:', this.employeesList);
      },
      (error) => {
        console.error('Error fetching employees:', error);
        this.isLoading = false;
      }
    );
  }
}
