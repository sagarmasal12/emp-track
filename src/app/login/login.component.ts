import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "userName": "",
    "password": ""
  };
  rouete = inject(Router)

  onLogin() {
    if(this.loginObj.userName =="admin" && this.loginObj.password == "223344") {
      this.rouete.navigateByUrl("/newlist")
    } else {
      alert("Wrong Credentials")
    }
  }

}
