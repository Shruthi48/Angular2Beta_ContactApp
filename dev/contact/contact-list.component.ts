import {Component} from 'angular2/core';
import{ ContactComponent} from "./contact.component"
import {ContactService} from "./contact.service";
import{ Contact} from "./contact";
import {OnInit} from "angular2/core";
@Component({
	selector:"contact-list",
	template:`
    <ul *ngFor="#contact of contacts">
    <li>
    <h1 (click)="onSelect(contact)"
        [class.clicked]="selectedContact===contact">
         {{contact.firstname}}</h1>
    </li>
    </ul>
    <contact *ngIf="selectedContact!== null" [contact]="selectedContact">
    </contact>
   `,
    directives:[ContactComponent],
    providers:[ContactService],
	 styleUrls:["../src/css/contact-list.css"],
})
export class ContactListComponent implements OnInit{
	
 public contacts:Contact[];

 public selectDetails=false;
 public selectedContact=null;
 onSelect( contact){
     this.selectDetails=true;
     this.selectedContact=contact;
 }
 constructor(private contactservice:ContactService){
     
 }
 getContacts(){
     this.contactservice.getContacts().then((contacts:Contact[])=>this.contacts=contacts);
 }
 ngOnInit():any{
     this.getContacts();
 }
}
