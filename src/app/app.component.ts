import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show = !show">Toggle</button>
    <p *appIf="show">Toggle me</p>
    
    <span appIcon="home">My Home</span>
  `
})
export class AppComponent {
  show = true;
}
