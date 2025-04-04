import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NewlistComponent } from './newlist/newlist.component';

export const routes: Routes = [
 
    {
        path:"employee",
        component:EmployeeComponent
    },
    {
        path:"newlist",
        component:NewlistComponent
    }
];
