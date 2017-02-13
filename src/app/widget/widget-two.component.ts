import {Component} from "@angular/core";
@Component({
    selector: 'widget-two',
    styles: [`
:host{display: block;
border: 2px solid red;
}
`],
    template: `
<div>Widget Two (ng-content)</div>
<ng-content></ng-content>
<ng-content select="[widget]"></ng-content>
<ng-content select=".header"></ng-content>
<ng-content select=[content]></ng-content>
<ng-content select=[footer]></ng-content>
`
})

export class WidgetTwoComponent{
}