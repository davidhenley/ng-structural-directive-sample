import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective implements OnChanges {
  @Input() appIf: boolean;

  constructor(
    private container: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appIf) {
      this.container.createEmbeddedView(this.templateRef);
    } else {
      this.container.clear();
    }
  }

}
