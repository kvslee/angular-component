import {Component, Input} from "@angular/core";
@Component({
    selector: 'widget-one',
    styles: [`
:host {
    font-family: "Times New Roman";
    display: block;
    border: 2px solid green;
}
h4 {color: dodgerblue}
`],
    template: `<div >Widget One</div>
    <h4>{{messageTwo}}</h4>
`
})

export class WidgetOneComponent{
    @Input() messageTwo: any;
}