import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `<div class="lds-dual-ring" *ngIf="this.loadingService.loading$ | async"></div>`,
  styles: [
    `
      .lds-dual-ring {
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.32);
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
      }
      .lds-dual-ring:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid rgb(30, 58, 138);
        border-color: rgb(30, 58, 138) transparent rgb(30, 58, 138) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
