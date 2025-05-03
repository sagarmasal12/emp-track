import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NewlistComponent } from './newlist/newlist.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { PrintPdfComponent } from './print-pdf/print-pdf.component';
import { MasterComponent } from './master/master.component';
import { CompanyComponent } from './company/company.component';

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
        path:"employee",
        component:EmployeeComponent
      },
      {
        path:"newlist",
        component:NewlistComponent
      },
      {
        path:"master",
        component:MasterComponent
      },
      {
        path:"company",
        component:CompanyComponent
      },
      {
        path:"editemp/:id",
        component:EditEmpComponent
      },
      {
        path:"printpdf/:id",
        component:PrintPdfComponent
      }
    ]
  }
    
    
];
