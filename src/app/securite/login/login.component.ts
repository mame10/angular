import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/users';
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';


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


  constructor(private service:LoginService,private tokenservice: TokenService) { }

  ngOnInit(): void {}

  onSubmitForm() : void{ 
    // console.log(this.forms);
    this.service.login(this.forms).subscribe(
      data => {
        this.tokenservice.saveToken(data.token)
      },
      error => console.log(error)  
    )}
 
}
