import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  RegisterLogin: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.RegisterLogin = this.formBuilder.group({
     
      email : [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      )],
      password : [null, Validators.compose([
        Validators.minLength(8),
        Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
      )],
     

    });

  }

}
