import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewEmployeeComponent } from "./new-employee/new-employee.component";
import { EmployeeFormComponent } from "./employee-form/employee-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeemng';
}
