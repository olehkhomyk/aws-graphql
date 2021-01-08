import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { AuthState } from '@aws-amplify/ui-components';

@Injectable({
  providedIn: 'root'
})
export class TodosGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.getAuthState().pipe(
      map(({authState}) => {
        if (authState === AuthState.SignedIn) {
          return true;
        } else {
          this.router.navigate(['auth']);

          return false;
        }
      })
    );
  }
}
