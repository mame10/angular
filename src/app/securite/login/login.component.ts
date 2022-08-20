import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private route:Router, private service:LoginService,private tokenservice: TokenService) { }

  ngOnInit(): void {}

  onSubmitForm() : void{ 
    // console.log(this.forms);
    this.service.login(this.forms).subscribe(
      data => {
        localStorage.setItem('token',data.token)
        console.log(data.token);
        const tokenInfo = this.tokenservice.getDecodedAccessToken(data.token); // decode token
        // const expireDate = tokenInfo.exp; // get token expiration dateTime
        // console.log(tokenInfo.roles[0]); // show decoded token object in console
        if(tokenInfo.roles[0]=='ROLE_CLIENT'){
          this.route.navigate(['/client/mescommandes'])
        }else if(tokenInfo.roles[0]=='ROLE_GESTIONNAIRE'){
          this.route.navigate(['/admin/commande'])
        }
        this.tokenservice.saveToken(data.token)
        // console.log(data.token)
      },
      error => console.log(error)  
    )}
}
