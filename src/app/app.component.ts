import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show = !show">Toggle</button>
    <p *appIf="show">Toggle me</p>
  `
})
export class AppComponent {
  show = true;
}
