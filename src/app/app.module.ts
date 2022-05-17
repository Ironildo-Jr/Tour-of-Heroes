import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DashBoardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heros/heroes.module';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeroesModule,
    DashBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
