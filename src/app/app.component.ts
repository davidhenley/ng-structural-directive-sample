import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show = !show">Toggle</button>
    <p *appIf="show">Toggle me</p>
  `,
  styles: []
})
export class AppComponent {
  show = true;
}
