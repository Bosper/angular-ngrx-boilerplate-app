import { Directive, ViewContainerRef, ViewChild, AfterViewInit, ComponentFactoryResolver, Renderer2 } from '@angular/core';

@Directive({
  selector: '[component-loader]'
})
export class ComponentLoaderDirective {
  constructor(
    public _viewContainerRef: ViewContainerRef,
    public cfResolver: ComponentFactoryResolver,
    public renderer: Renderer2
    ) { }

}