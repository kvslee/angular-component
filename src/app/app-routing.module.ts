import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define the routes
//It is very important not to import or reference ContractsModule in AppModule,
// because a loader will import lazy loaded modules.
const routes : Routes = [
    {   path: '',           loadChildren: 'app/home/home.module#HomeModule'},
    {   path: 'contacts',   loadChildren: 'app/contacts/contacts.module#ContactsModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {}