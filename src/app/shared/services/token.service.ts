import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }
    saveToken(token : string) : void{
       localStorage.setItem('token',token)
      //  this.router.navigate(['client'])
    }

    islogged(): boolean{
      const token = localStorage.getItem('token')
      // console.log(token)
      return !! token  
    }

  clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  } 

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  getToken():any{
    const token = localStorage.getItem('token')
    return token
  }

 
}




