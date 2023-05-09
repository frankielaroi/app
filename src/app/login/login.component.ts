import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  enum={
  password:'',
  username:''
}
  login() {
    console.log(this.enum.username,this.enum.password)
  }
}
