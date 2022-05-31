import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MenuIcon } from '../../models/menuIcon.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() menuIcons: MenuIcon[] = [];
  @Input() isLogged!: boolean | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout(){
    this.authService.logout()
  }
}
