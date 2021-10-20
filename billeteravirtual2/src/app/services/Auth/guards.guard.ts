import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class guardsGuard implements CanActivate {

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):  Observable <boolean>  {
    console.log("GUARDS WORKING");
         return this.authService.estaAutenticado.pipe(
          map(e => {
            console.log(e);
            if (e) {
              console.log("PASO")
              return true;
            }
            else
            {
              this.router.navigate(['/login']);
              return false;
            }
          }),
          catchError((err) => {
            this.router.navigate(['/login']);
            return of(false);
          })
        ); }
}