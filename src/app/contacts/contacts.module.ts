import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactsRoutingModule} from "./contacts-routing.module";
import {ContactsComponent} from "./contacts.component";
import {ContactComponent} from "./contact.component";
@NgModule({
    imports: [CommonModule,
        ContactsRoutingModule
    ],
    declarations: [ContactsComponent, ContactComponent]
})

export class ContactsModule{}