import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {WidgetModule} from "../widget/widget.module";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule ({
    imports: [WidgetModule, HomeRoutingModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule{}