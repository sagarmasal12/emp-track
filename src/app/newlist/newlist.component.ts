import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../core/services/employee/employee.service';
import { CommonModule, DatePipe } from '@angular/common';
import { IApiResponse} from '../core/models/interfaces/master';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
@Component({
  selector: 'app-newlist',
  imports: [CommonModule,RouterLink,DatePipe,TableModule,IconFieldModule,InputIconModule],
  templateUrl: './newlist.component.html',
  styleUrl: './newlist.component.css'
})
export class NewlistComponent implements OnInit {
  isLoading: boolean = true;
  employeesList: any[] = [];
  @ViewChild('dt') dt: Table | undefined;
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
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getEmployees() {
    this.isLoading = true;
    this.employeeService.getEmployee().subscribe(
      (response) => { 
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
