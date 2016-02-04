import {Component} from 'angular2/core';
import {Contact} from './contact';
import {Router} from 'angular2/router';
import {RouteParams} from "angular2/router";
import {OnInit} from 'angular2/core';

@Component({
	selector:"contact",
	template:`

	<div>
	<label>FirstName</label>
	<input [(ngModel)]="contact.firstname" type="text" >
	</div>
	<div>
	<label>LastName</label>
	<input [(ngModel)]="contact.lastname" type="text" >
	</div>
	<div >
	<label>Phone No</label>
	<input [(ngModel)]="contact.phoneNo" type="text">
	</div>
	<div >
	<label>Email</label>
	<input [(ngModel)]="contact.email" type="text">
	</div>
	     <button (click)="onCreateNew()">Create contact from this contact</button>
`,
    styles:[`
    label{
    display:inline-block;
    width:140px;
    }
    input{
    width:250px;
    }
   `],
		  inputs:["contact"]
	
})
export class ContactComponent {

	public contact:Contact=null;
    constructor(private _router:Router){

	}
	onCreateNew(){
		this._router.navigate(['NewContactFromContact',{lastName:this.contact.lastname}])
	}

     
 }