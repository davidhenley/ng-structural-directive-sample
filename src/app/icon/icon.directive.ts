import { ComponentFactoryResolver, Directive, HostListener, Input, ViewContainerRef } from '@angular/core';
import { Icon, IconComponent } from './icon.component';

@Directive({
  selector: '[appIcon]'
})
export class IconDirective {
  @Input() appIcon: Icon;

  @HostListener('mouseenter')
  showIcon() {
    const factory = this.resolver.resolveComponentFactory(IconComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.iconType = this.appIcon;
  }

  @HostListener('mouseleave')
  hideIcon() {
    this.container.clear();
  }

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }
}
