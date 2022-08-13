import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms : User = {
    prenom : '',
    nom : '',
    adresse :'',
    telephone: '',
    username : '',
    password : '',
    role : ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    console.log(this.forms);
    
  }
 
}
