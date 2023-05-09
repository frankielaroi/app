import { Component } from '@angular/core';
import { NgForm,FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signg-up',
  templateUrl: './signg-up.component.html',
  styleUrls: ['./signg-up.component.css']
})
export class SigngUpComponent {
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  onSubmit(): void {
    console.log(JSON.stringify(this.form, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
