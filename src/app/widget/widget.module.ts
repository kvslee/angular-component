import {NgModule} from "@angular/core";
import {WidgetOneComponent} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwoComponent} from "./widget-two.component";
import {WidgetThreeComponent} from "./widget-three.component";
import {WidgetFourComponent} from "./widget-four.component";
@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOneComponent, WidgetTwoComponent, WidgetThreeComponent, WidgetFourComponent],
    entryComponents:[WidgetThreeComponent],
    exports: [WidgetOneComponent, WidgetTwoComponent, WidgetThreeComponent, WidgetFourComponent, CommonModule]
})

export class WidgetModule{}
