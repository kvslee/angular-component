import {Component, Input} from "@angular/core";
@Component({
    selector: 'widget-four',
    styles: [`
:host {
    display: block;
    border: 1px solid green;
    width: 500px;
    margin:0 auto;
}
h4 {color: purple}
`],
    template: `<div >Widget Four</div>
    <h4>{{messageFour}}</h4>
`
})

export class WidgetFourComponent{
    @Input() messageFour: any;
}