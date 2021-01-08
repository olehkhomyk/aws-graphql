import { ChangeDetectorRef, Injectable, NgZone } from '@angular/core';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: BehaviorSubject<any> = new BehaviorSubject({ authState: null, authData: null });
  private user: any;

  public get authChange(): Observable<any> {
    return this.authState.asObservable();
  }

  constructor(private zone: NgZone, private router: Router) {
    this.initializeAuth();
  }

  isSignedIn(): boolean {
    return this.authState.value.authState === AuthState.SignedIn;
  }

  initializeAuth(): void {
    onAuthUIStateChange((authState, authData) => {
      this.zone.run(() => {
        this.authState.next({authState, authData});
      });
    });

    this.authChange.subscribe(({authState, authData}) => {
      if (authState === AuthState.SignedOut) {
        this.router.navigate(['auth']);

        return;
      }
      this.user = authData;
    });
  }

  private resetAuth(): void {
    this.user = null;
  }

  getAuthState(): Observable<any> {
    return this.authState.asObservable();
  }
}
