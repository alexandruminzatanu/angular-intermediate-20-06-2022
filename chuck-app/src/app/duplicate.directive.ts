import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective {
  @Input() set appDuplicate(value: boolean){
    this.setDuplicate(value);
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    setDuplicate(value: boolean):void {
      //this.viewContainer.createEmbeddedView(this.templateRef);

      if(value){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
}
