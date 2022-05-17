import { Component, OnInit, Input } from '@angular/core';
import { MenuIcon } from '../../models/menuIcon.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title: string = '';
  @Input() menuIcons: MenuIcon[] = [];

  constructor() {}

  ngOnInit(): void {}
}
