import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authChange.subscribe(({ authState }) => {
      if (authState === AuthState.SignedIn) {
        this.router.navigate(['todos']);
      }
    });
  }
}
