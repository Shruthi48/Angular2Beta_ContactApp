System.register(["angular2/core","angular2/http","rxjs/add/operator/map"],function(t){var e,n,r,o,a=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,c=3>a?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(3>a?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t,r=t},function(t){}],execute:function(){o=function(){function t(t){this._http=t}return t.prototype.getCurrentTime=function(){return this._http.get("http://date.jsontest.com").map(function(t){return t.json()})},t.prototype.postJSON=function(){var t=JSON.stringify({var1:"test",var2:8}),e="json="+t,n=new r.Headers;return n.append("Content-Type","application/x-www-form-urlencoded"),this._http.post("http://validate.jsontest.com",e,{headers:n}).map(function(t){return t.json()})},t=a([e.Injectable(),c("design:paramtypes",[n.Http])],t)}(),t("HTTPService",o)}}});