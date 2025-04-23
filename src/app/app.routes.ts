import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NewlistComponent } from './newlist/newlist.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:'full'
  },
    {
        path:"employee/:id",
        component:EmployeeComponent
    },
    {
        path:"newlist",
        component:NewlistComponent
    },
    {
      path:"login",
      component:LoginComponent
    }
];
