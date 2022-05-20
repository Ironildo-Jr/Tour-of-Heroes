import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="card">
    <h1>404: Page Not Found</h1>
    <p>We couldn't find that page! Not even with x-ray vision.</p>
    <button routerLink="/dashboard">Go to Home</button>
  </div>`,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
