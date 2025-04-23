import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NewlistComponent } from './newlist/newlist.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:"login",
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:"employee/:id",
        component:EmployeeComponent
      },
      {
        path:"newlist",
        component:NewlistComponent
      },
      {
        path:"editemp/:id",
        component:EditEmpComponent
      }
    ]
  }
    
    
];
