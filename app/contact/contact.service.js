System.register(["angular2/core","./mock-contact"],function(t){var e,n,r,o=this&&this.__decorate||function(t,e,n,r){var o,c=arguments.length,i=3>c?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var f=t.length-1;f>=0;f--)(o=t[f])&&(i=(3>c?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t}],execute:function(){r=function(){function t(){}return t.prototype.getContacts=function(){return Promise.resolve(n.CONTACTS)},t.prototype.insertContact=function(t){return Promise.resolve(n.CONTACTS).then(function(e){return e.push(t)})},t=o([e.Injectable(),c("design:paramtypes",[])],t)}(),t("ContactService",r)}}});