import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
a.active{
  background-color: dodgerblue;
}
.outlet {border: 2px solid orange;
padding: 10px}

`],
  template: `
<h1>Lesson: {{name}}</h1>
<a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
<a [routerLink]="['/contacts']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Contacts</a>
<div class="outlet">Outlet
<router-outlet></router-outlet>
</div>

           
             

`,
})
export class AppComponent  { name = 'Angular 2'; }
