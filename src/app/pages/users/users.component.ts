import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  RegisterUser: FormGroup;
  passmsg: string;


  constructor(private formBuilder: FormBuilder, private userService : UsuariosService ) { }

  ngOnInit() {
    this.RegisterUser = this.formBuilder.group({
      firstName : [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$')
        ]
      ],
      lastName: [null, Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$')
        ]) 
      ],
      email : [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
      )],
      password : [null, Validators.compose([
        Validators.minLength(8),
        Validators.required, 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]
      )],
      confirmPassword : [null, Validators.compose([
        Validators.required]
      )],
      gender: [null,Validators.required],

    });
  }
  checkPassSame() {
    let pass = this.RegisterUser.value.password;
    let passConf = this.RegisterUser.value.confirmPassword;
    if(pass == passConf && this.RegisterUser.valid === true) {
      this.passmsg = "Contraseña coincide";
      return true;
    }else {
      this.passmsg = "Contraseña coincide";
      return false;
    }
  }

  addUser(){
    let formObj: any = this.RegisterUser.value;
    delete formObj.confirmPassword;
    this.userService.createsUsuarios(JSON.stringify(formObj)).subscribe((response: any) => {
      console.log(response);
    }, err => {
      console.log(err);
    })
  } 

}
