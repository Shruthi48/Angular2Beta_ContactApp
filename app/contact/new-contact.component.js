System.register(["angular2/core","./contact.service","angular2/router","angular2/common"],function(t){var n,e,o,r,a,i,l,s=this&&this.__decorate||function(t,n,e,o){var r,a=arguments.length,i=3>a?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(i=(3>a?r(i):a>3?r(n,e,i):r(n,e))||i);return a>3&&i&&Object.defineProperty(n,e,i),i},c=this&&this.__metadata||function(t,n){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,n):void 0};return{setters:[function(t){n=t},function(t){e=t},function(t){o=t,r=t},function(t){a=t,i=t}],execute:function(){l=function(){function t(t,n,e,o){this.contactservice=t,this._router=n,this._routeparams=e,this._formbuilder=o,this.contact={}}return t.prototype.onAddContact=function(t,n,e,o){var r={firstname:t,lastname:n,phoneNo:e,email:o};this.contactservice.insertContact(r),this._router.navigate(["Contacts"])},t.prototype.onSubmit=function(){this.contactservice.insertContact(this.myForm.value),this._router.navigate(["Contacts"])},t.prototype.ngOnInit=function(){this.myForm=this._formbuilder.group({firstname:["",i.Validators.required],lastname:[this._routeparams.get("lastName"),i.Validators.required],phoneNo:["",i.Validators.required],email:["",i.Validators.required]})},t=s([n.Component({selector:"new-contact",template:'\n    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">\n	<div >\n	<label>FirstName</label>\n	<input  type="text"\n	[ngFormControl]="myForm.controls[\'firstname\']"\n	 #firstName="ngForm"\n	 required>\n	 <span *ngIf="!firstName.valid">Not Valid</span>\n	</div >\n\n	<div >\n	<label>LastName</label>\n	<!--<input  type="text" #lastName value="{{passedname}}">-->\n	<input  type="text"\n	[ngFormControl]="myForm.controls[\'lastname\']"\n	required>\n	<span *ngIf="!myForm.controls[\'lastname\'].valid"></span>\n	</div>\n	<div >\n	<label>Phone No</label>\n	<input  type="text"\n	[ngFormControl]="myForm.controls[\'phoneNo\']"\n	required>\n	<span *ngIf="!myForm.controls[\'phoneNo\'].valid">Enter PhoneNo</span>\n	</div>\n	<div >\n	<label>Email</label>\n	<input type="text"\n	[ngFormControl]="myForm.controls[\'email\']"\n	required>\n	</div>\n	<!--<button (click)="onAddContact(firstname.value,lastname.value,phoneNo.value,email.value)">Create Contact</button>-->\n	<button type="submit" [disabled]="!myForm.valid">Create Contact</button>\n	</form>',styles:["\n    label{\n    display:inline-block;\n    width:140px;\n    }\n    input{\n    width:250px;\n    }\n    .ng-invalid{\n    border:1px solid red;\n    }\n   "],providers:[e.ContactService],inputs:["contact"]}),c("design:paramtypes",[e.ContactService,o.Router,r.RouteParams,a.FormBuilder])],t)}(),t("NewContactComponent",l)}}});