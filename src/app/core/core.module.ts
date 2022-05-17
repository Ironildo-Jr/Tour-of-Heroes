import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';

const COMPONENTS = [ToolbarComponent,
  MessagesComponent]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    COMPONENTS
  ]
})
export class CoreModule { }
