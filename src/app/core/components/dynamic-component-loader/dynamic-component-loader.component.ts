import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit, 
  OnChanges, 
  OnDestroy,
  ChangeDetectorRef, 
  ViewChild, 
  ComponentRef,
  ComponentFactoryResolver,
  ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ComponentLoaderDirective } from "../../directives/component-loader.directive";
import { HelperService } from "../../services/helper.service";
import { AdItem } from "../../models/models";

import { Observable } from 'rxjs';

@Component({
  selector: 'dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponentLoader implements OnInit, OnChanges, OnDestroy {
  componentRef: ComponentRef<any>;
  adsItems: AdItem;
  @Input() formGroup: FormGroup;
  @Input() messages: Observable<Object>;
  @Input() componentId: string;

  @ViewChild(ComponentLoaderDirective) componentLoader: ComponentLoaderDirective;

  constructor(
    private _changeDetectionRef: ChangeDetectorRef, 
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _helperService: HelperService) { }

  ngOnInit() {
    this.adsItems = this._helperService.getComponent(this.componentId);

    this.loadComponent();
    console.log('dynamic_component_initialized');
    
  }
    
  callMeFromParent() : void {
    console.log('dynamic_component_method')
  }
    
  ngOnDestroy(): void {
    console.log('dynamic_component_destroyed');
  }

  ngOnChanges() {
    this._changeDetectionRef.markForCheck();
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
