import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { DynamicComponentDirective } from './dynamic-component.directive';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;

  selectedComponentName: string;

  components = {
    componentA: ComponentAComponent,
    componentB: ComponentBComponent,
    componentC: ComponentCComponent
  }

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {

  }

  displayComponent(componentName: string) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.components[componentName]);
    const viewContainerRef = this.componentHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
