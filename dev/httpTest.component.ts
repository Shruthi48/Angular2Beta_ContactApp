import{Component} from 'angular2/core';
import {HTTPService} from "./HttpTest.service";
@Component({
    selector:"http-test",
template:`
<button (click)="onTestGet()">Test GET Request</button>
<p>Output:{{getData}}</p>
<button (click)="onTestPost()">Test Post Request</button>
<p>output:{{postData}}</p>`,
    providers:[HTTPService]
})
export class HTTPTestComponent{
 getData:string;
    postData:string;
    constructor(private _httpservice:HTTPService){

    }
    onTestGet(){
        this._httpservice.getCurrentTime().subscribe(data=>this.getData=JSON.stringify(data),
        error=>alert(error),
            ()=>console.log('finished'))
    }
    onTestPost(){
        this._httpservice.postJSON().subscribe(data=>this.postData =JSON.stringify(data),
            error=>alert(error),
            ()=>console.log('finished' ))
        console.log(this.postData);
    }
}
