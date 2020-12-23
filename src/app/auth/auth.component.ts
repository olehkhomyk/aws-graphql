import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    // onAuthUIStateChange((authState) => {
      // if (authState === 'signedin') {
      //   this.router.navigate(['todos']);
      // }
    // });
  }

}
