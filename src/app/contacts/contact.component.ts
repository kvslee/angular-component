import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Component({
  template:`
<h2>{{(contact$ | async).name}}</h2>
<img [src]="(contact$ | async).image" />
`
})
export class ContactComponent{
    api: string = 'https://starwars-json-server-ewtdxbyfdz.now.sh/'

    // guard async null cases (contact$ | async)?.name
    // subscribe to make only one api request
    contact$: any = new BehaviorSubject({name: '', image:''});

    constructor(private route: ActivatedRoute,private http: Http) {
        route.params
        .map((p:any) => p.id)
            .switchMap(id => http.get(this.api + 'people/' +id)
            .map(res => res.json())
            .map(contact => Object.assign({}, contact, {image: this.api + contact.image}))
            )
            .subscribe(this.contact$)

        ;
    }


}