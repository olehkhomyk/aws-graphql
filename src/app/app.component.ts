import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    // onAuthUIStateChange((authState, authData) => {
    //   this.authState = authState;
    //   this.user = authData as CognitoUserInterface;
    //
    //   localStorage.setItem('authState', authState);
    //   localStorage.setItem('authData', JSON.stringify(authData));
    //
    //   this.cd.detectChanges();
    // });
  }

  ngOnDestroy() {
    // return onAuthUIStateChange;
  }
}
