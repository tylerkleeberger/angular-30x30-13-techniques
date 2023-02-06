import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/plays', icon: 'dashboard', title: 'Play Library'},
    { path: '/protected', icon: 'vpn_key', title: 'Admin' }
  ]

  constructor(private authService: AuthService) { }

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  logout() {
    this.authService.logout();
  }
}