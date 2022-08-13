import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  private url: string = "http://localhost:8000/api/login_check"

  constructor(private router:Router) { }
    saveToken(token : string) : void{
       localStorage.setItem('token',token)
       this.router.navigate(['admin'])
    }
}
