import { Component } from '@angular/core';

export type Icon = 'home' | 'bars' | 'trash' | 'close' | 'folder';

@Component({
  selector: 'app-icon',
  template: '<i class="fa" [ngClass]="iconName"></i>'
})
export class IconComponent {
  iconType: Icon = 'folder';

  get iconName() {
    return `fa-${this.iconType}`;
  }
}
