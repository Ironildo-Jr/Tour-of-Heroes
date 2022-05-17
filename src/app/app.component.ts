import { Component } from '@angular/core';
import { MenuIcon } from './core/models/menuIcon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuIcons: MenuIcon[] = [
    {
      icon: "fa-brands fa-trello",
      toolTipText: "DashBoard",
      url: "/dashboard"
    },
    {
      icon: "fa-solid fa-mask",
      toolTipText: "Heroes",
      url: "/heroes"
    }
  ]
}
