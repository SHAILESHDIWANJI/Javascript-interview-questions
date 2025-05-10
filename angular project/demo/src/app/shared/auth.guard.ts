import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  GuardResult,
  MaybeAsync,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token='123'
    if(token){
        return true
    }
    this.router.navigate(['/login'])
    return false
}
}
