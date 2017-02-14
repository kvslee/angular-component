import {ContactsComponent} from "./contacts.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
const routes: Routes = [
    {path: '', component: ContactsComponent},
    {path: ':id', component: ContactComponent}
    ]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class ContactsRoutingModule {}