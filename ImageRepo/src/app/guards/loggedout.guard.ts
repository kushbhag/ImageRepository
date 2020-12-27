import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedoutGuard implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.userService.loggedIn()) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
  
}
