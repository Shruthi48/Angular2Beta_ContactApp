import {Component} from 'angular2/core';
import {ContactListComponent} from './contact/contact-list.component';
import {NewContactComponent} from './contact/new-contact.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {HTTPTestComponent} from './httpTest.component';




@Component({
    selector: 'app',
    template:`
    <header>
    <nav>
    <a [routerLink]="['Contacts']"> Contacts</a>
    <a [routerLink]="['NewContact']">New Contact </a>
    </nav>
    </header>
    <div class="main">
    <router-outlet></router-outlet>
    <http-test></http-test>

     </div>

    `,
        directives:[ContactListComponent,ROUTER_DIRECTIVES,HTTPTestComponent],

})

@RouteConfig([
    {path:'/Contacts',name:'Contacts',component:ContactListComponent,useAsDefault:true},
    {path:'/NewContact',name:'NewContact',component:NewContactComponent},
    {path:'/NewContact/:lastName',name:'NewContactFromContact',component:NewContactComponent}
])
export class AppComponent {
}