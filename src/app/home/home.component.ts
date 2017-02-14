import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Renderer} from '@angular/core';
import {SimpleService} from "../service/service.module";
import {WidgetThreeComponent} from "../widget/widget-three.component";

@Component({
    selector: 'home',
    styles: [`
:host {
    display: block;
    border: 5px solid black;
    text-align: center;
}
`],
    template: `
<div>Home Component</div>

<div>{{simpleService.message}}</div>

<widget-one [messageTwo]="simpleService.messageTwo"></widget-one>

<widget-two>
Raw stuffs (everything not selected)
    <widget-four widget [messageFour]="simpleService.messageFour"></widget-four>
    <h3 class="header">select Header</h3>
    <div content>select Content </div>
    <h3 footer>select Footer </h3>
</widget-two>

<Div>Dynamic way to create, move, detach a component</Div>
<button (click)="onCreate()">Create Component</button>
<button (click)="onMove()">Move Component</button>
<button (click)="onDetach()">Detach Component</button>

<div>Generate and Render template elements in a component</div>
<button (click)="onCreateEV()">CreateEmbeddedView</button>

<div #container></div>

<template #template let-description="description">
<h2> {{description}} Template</h2>
<div>I am created by CreateEmbeddedView</div>
</template>
`
})

export class HomeComponent {
    @ViewChild('container', {read: ViewContainerRef}) container: any;
    @ViewChild('template') template: any;
    widgetRef: any;

    constructor(
        private resolver: ComponentFactoryResolver,
        private simpleService: SimpleService) {}

    ngAfterContentInit(){
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThreeComponent);

        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.widgetRef = this.container.createComponent(widgetFactory, 3);
        this.widgetRef.instance.message = "I am the last one";

    }

    onCreate(){
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThreeComponent);
        const widgetRef = this.container.createComponent(widgetFactory, 3);
        widgetRef.instance.message = "I am a dynamic component";  //pass message to the component
     }

    onMove(){
        const randomIndex = Math.floor(Math.random() * this.container.length);
        this.container.move(this.widgetRef.hostView, randomIndex)  // move the template
    }

    onDetach(){
        this.container.detach(2)  //detach the component
    }

    onCreateEV(){
        this.container.createEmbeddedView(this.template, {description: 'sweet'});
    }
}

