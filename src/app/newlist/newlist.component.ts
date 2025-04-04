import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee/employee.service';
import { CommonModule } from '@angular/common';
import { IApiResponse} from '../core/models/interfaces/master';

@Component({
  selector: 'app-newlist',
  imports: [CommonModule],
  templateUrl: './newlist.component.html',
  styleUrl: './newlist.component.css'
})
export class NewlistComponent implements OnInit {

  employeesList: IApiResponse[] = [];
  // employees: IApIResponce[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees(); // Call the method when the component loads
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
