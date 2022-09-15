import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardplusService {

  constructor(
    private router: Router
    ) { }

  canActivate() : boolean{
    console.error("BULUS IN DEVELOPMENT");
    if (sessionStorage.getItem('accountid')) {
      //this.router.navigate(['']);
      //return false;
      console.log("anon-guard.services.ts > false");return false;
    }
    console.log("anon-guard.services.ts > true");
    return true;
  }
}
