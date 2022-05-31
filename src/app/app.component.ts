import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { MenuIcon } from './core/models/menuIcon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged$ = this.authService.isLoggedin$
  title = 'Tour of Heroes';
  menuIcons: MenuIcon[] = [
    {
      icon: "fa-brands fa-trello",
      toolTipText: "DashBoard",
      url: "/dashboard",
      action: () => {}
    },
    {
      icon: "fa-solid fa-mask",
      toolTipText: "Heroes",
      url: "/heroes",
      action: () => {}
    },
    {
      icon: "fa-solid fa-user",
      toolTipText: "Logout",
      url: "",
      action: () => this.authService.logout()
    }
  ]

  constructor(private authService: AuthService){}
}
