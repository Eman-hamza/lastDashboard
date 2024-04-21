import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dashboard';
  isLogin: boolean = false;
  constructor(private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    this.authenticationService.isAuthenticatedUser();
    this.authenticationService.isAuthenticated$.subscribe({
      next: (response) => { this.isLogin = response;console.log(response); },
      error: (error) => { console.log(error) }
    })
  }
  ngOnDestroy(): void {
    this.authenticationService.logout();
  }
}
