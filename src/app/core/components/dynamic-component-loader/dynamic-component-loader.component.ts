import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit, 
  OnChanges, 
  OnDestroy, 
  AfterViewInit, 
  ChangeDetectorRef, 
  ViewChild, 
  ComponentRef,
  ComponentFactoryResolver,
  ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ComponentLoaderDirective } from "../../directives/component-loader.directive";
import { HelperService } from "../../services/helper.service";
import { AdItem } from "../../models/models";

@Component({
  selector: 'dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponentLoader implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  componentRef: ComponentRef<any>;
  adsItems: AdItem;
  @Input() formGroup: FormGroup;
  @Input() messages: Object;
  @Input() componentId: string;

  @ViewChild(ComponentLoaderDirective) componentLoader: ComponentLoaderDirective;

  constructor(
    private _changeDetectionRef: ChangeDetectorRef, 
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _helperService: HelperService) { }

  ngOnInit() {
    this.adsItems = this._helperService.getComponent(this.componentId);

    this.loadComponent();
    console.log('Dynamic Component has been initialized');
    
  }
    
  callMeFromParent() : void {
    console.log('Hello, i am method of dynamic component')
  }
    
  ngOnDestroy(): void {
    console.log('I have been destroyed!');
  }

  ngOnChanges() {
    this._changeDetectionRef.markForCheck();
  }

  ngAfterViewInit() {

  }

  loadComponent() {
    const adItem = this.adsItems;
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.componentLoader._viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);

    componentRef.instance.formGroup = this.formGroup;
    componentRef.instance.messages = this.messages;
  }
}
