import { DynamicComponentService } from './dynamic-component.service';

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


  constructor(private dynamicComponentService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  displayComponent(componentName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName));
    const viewContainerRef = this.componentHost.viewContainerRef;

    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
