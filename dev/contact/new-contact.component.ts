import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from "./contact";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";



@Component({
    selector:"new-contact",
    template:`
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
	<div >
	<label>FirstName</label>
	<input  type="text"
	[ngFormControl]="myForm.controls['firstname']"
	 #firstName="ngForm"
	 required>
	 <span *ngIf="!firstName.valid">Not Valid</span>
	</div >

	<div >
	<label>LastName</label>
	<!--<input  type="text" #lastName value="{{passedname}}">-->
	<input  type="text"
	[ngFormControl]="myForm.controls['lastname']"
	required>
	<span *ngIf="!myForm.controls['lastname'].valid"></span>
	</div>
	<div >
	<label>Phone No</label>
	<input  type="text"
	[ngFormControl]="myForm.controls['phoneNo']"
	required>
	<span *ngIf="!myForm.controls['phoneNo'].valid">Enter PhoneNo</span>
	</div>
	<div >
	<label>Email</label>
	<input type="text"
	[ngFormControl]="myForm.controls['email']"
	required>
	</div>
	<!--<button (click)="onAddContact(firstname.value,lastname.value,phoneNo.value,email.value)">Create Contact</button>-->
	<button type="submit" [disabled]="!myForm.valid">Create Contact</button>
	</form>`,
    styles:[`
    label{
    display:inline-block;
    width:140px;
    }
    input{
    width:250px;
    }
    .ng-invalid{
    border:1px solid red;
    }
   `],
    providers:[ContactService],
    inputs:["contact"]

})
export class NewContactComponent implements OnInit{
   // public passedname="";
    myForm:ControlGroup;
    newContact:Contact;
    public contact={};
    constructor(private contactservice:ContactService,private _router:Router,private _routeparams:RouteParams,private _formbuilder:FormBuilder){

    }
 onAddContact(firstname,lastname,phoneNo,email){
     let contact:Contact={"firstname":firstname,"lastname":lastname,"phoneNo":phoneNo,"email":email};
     this.contactservice.insertContact(contact);
     this._router.navigate(['Contacts']);
}
    onSubmit(){
        this.contactservice.insertContact(this.myForm.value);
        this._router.navigate(['Contacts']);
    }
    ngOnInit():any{
      // this.passedname = this._routeparams.get('lastName');
       // console.log(this.passedname );
       // this.newContact={firstname:'',lastname:this._routeparams.get('lastName'),phoneNo:'',email:''}
       // console.log(this.newContact)
        this.myForm=this._formbuilder.group(
            {'firstname':['',Validators.required],
            'lastname':[this._routeparams.get('lastName'),Validators.required],
            'phoneNo':['',Validators.required],
            'email':['',Validators.required]}
        )
    }



}