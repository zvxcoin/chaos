var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))return;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in d))return;d=d[g]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&(void 0===$jscomp.propertyToPolyfillSymbol[e]&&(c=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+c+"$"+e),$jscomp.defineProperty(d,$jscomp.propertyToPolyfillSymbol[e],{configurable:!0,writable:!0,value:b})))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};
$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};
$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$jscomp.generator.Context.prototype.yieldAll=function(a,b){var c=$jscomp.makeIterator(a),d=c.next();$jscomp.generator.ensureIteratorResultIsObject_(d);if(d.done)this.yieldResult=d.value,this.nextAddress=b;else return this.yieldAllIterator_=c,this.yield(d.value,b)};
$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){var c=this.finallyContexts_.splice(b||0)[0];if(c=this.abruptCompletion_=this.abruptCompletion_||c){if(c.isException)return this.jumpToErrorHandler_();void 0!=c.jumpTo&&this.finallyAddress_<c.jumpTo?(this.nextAddress=c.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(c){return{value:c,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var d=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(d);if(!d.done)return this.context_.stop_(),d;var e=d.value}catch(f){return this.context_.yieldAllIterator_=null,this.context_.throw_(f),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,e);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){var c=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(c,a.prototype);return c};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(d){return a.next(d)}function c(d){return a["throw"](d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
var language=1,nav="",topindex="",main="",footer="";function pd(){switch(language){case 1:navbb=cnnav;topindex=cntopindex;main=cnmain;footer=cnfooter;mint=cnmint;erc201=cnerc20;cczvx=cnzvx;topindex=cntopindex;hint=cnhint;break;case 2:navbb=ennav;topindex=entopindex;main=enmain;footer=enfooter;mint=enmint;erc201=enerc20;cczvx=enzvx;topindex=entopindex;hint=enhint;break;default:console.log("\u90fd\u4e0d\u662f")}}pd();head();
function head(){var a=document.querySelector("header"),b=document.createElement("div");b.className="nav";a.insertAdjacentElement("beforeend",b);a=document.querySelector("header .nav");b=document.createElement("div");b.className="logo";b.innerHTML='<img src="/img/fi.png" alt="" />';a.insertAdjacentElement("beforeend",b);b=document.createElement("div");b.className="daohang";a.insertAdjacentElement("beforeend",b);b=document.querySelector("header .nav .daohang");var c=document.createElement("div");c.className=
"iconfont icon-daohang";b.insertAdjacentElement("beforeend",c);c=document.createElement("ul");c.className="navs";b.insertAdjacentElement("beforeend",c);b=document.querySelector("header .nav  .daohang .navs");for(c=0;5>c;c++){var d=document.createElement("li");d.className="list"+[c];d.innerHTML='<a href="'+harl[c]+'">'+navbb[c]+"</a>";b.insertAdjacentElement("beforeend",d)}document.querySelector("head  title").textContent=topindex[0];b=document.createElement("div");b.className="left";b.innerHTML='<div class="dropdown">\n\t\t\t\t\t\t<div class="title">   <span class="iconfont icon-yuyan">language</span></div>\n\t\t\t\t\t\t<div class="list">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li  value="1"> \u7e41\u4f53\u4e2d\u6587</li>\n\t\t\t\t\t\t\t\t<li value="2">ENGLISH(USA)</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
a.insertAdjacentElement("beforeend",b);a=document.querySelector("header .left");b=document.createElement("button");b.className="connectwallet";b.textContent=navbb[5];a.insertAdjacentElement("beforeend",b);a=document.querySelector("footer");b=document.createElement("div");b.innerHTML='<div class="par">\n\t\t\t\t<div class="partner">\n\t\t\t\t\t<img src="/img/1.png" alt="" />\n\t\t\t\t\t<img src="/img/2.png" alt="" />\n\t\t\t\t\t<img src="/img/3.png" alt="" />\n\t\t\t\t\t<img src="/img/4.png" alt="" />\n\t\t\t\t\t<img src="/img/5.png" alt="" />\n\t\t\t\t\t<img src="/img/6.png" alt="" />\n\t\t\t\t\t<img src="/img/7.png" alt="" />\n\t\t\t\t\t<img src="/img/8.png" alt="" />\n\t\t\t\t\t<img src="/img/9.png" alt="" />\n\t\t\t\t\t<img src="/img/10.png" alt="" />\n\t\t\t\t\t<img src="/img/11.png" alt="" />\n\t\t\t\t\t<img src="/img/12.png" alt="" />\n\t\t\t\t\t<img src="/img/13.png" alt="" />\n\t\t\t\t\t<img src="/img/14.png" alt="" />\n\t\t\t\t\t<img src="/img/15.png" alt="" />\n\t\t\t\t\t<img src="/img/16.png" alt="" />\n\t\t\t\t</div>\n\t\t\t</div>';
a.insertAdjacentElement("beforeend",b);b=document.createElement("div");b.innerHTML='\t\t<div class="bottm">\n\t\t\t\t<div class="jumu">\n\t\t\t\t\t<img src="/img/logo.png" alt="" />\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div class="contactus">\n\t\t\t\t\t\t<span>'+footer[1]+'</span\n\t\t\t\t\t\t><a href="'+footer[2]+'"\n\t\t\t\t\t\t\t><img src="/img/ico_telegram.png" alt=""\n\t\t\t\t\t\t/></a>\n\t\t\t\t\t\t<a href=""><img src="/img/ico_twitter.png" alt="" /></a>\n\t\t\t\t\t\t<a href=""><img src="/img/ico_youtube.png" alt="" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
a.insertAdjacentElement("beforeend",b)}var lang=document.querySelector("header .nav .left .dropdown .list ul");
lang.onclick=function(){event.stopPropagation();language=event.target.value;pd();ul1=document.querySelector("header .nav .navs");for(var a=0;5>a;a++){var b=ul1.querySelector("li:nth-of-type("+(a+1)+")"),c=document.createElement("li");c.className="list"+[a+1];c.innerHTML='<a href="'+harl[a]+'">'+navbb[a]+"</a>";ul1.replaceChild(c,b)}""===Accounts&&(document.querySelector("header .nav .connectwallet").textContent=navbb[5]);document.querySelector("head  title").textContent=topindex[0];a=document.querySelector("footer");
a.innerText="";b=document.createElement("div");b.innerHTML='<div class="par">\n\t\t\t\t<div class="partner">\n\t\t\t\t\t<img src="/img/1.png" alt="" />\n\t\t\t\t\t<img src="/img/2.png" alt="" />\n\t\t\t\t\t<img src="/img/3.png" alt="" />\n\t\t\t\t\t<img src="/img/4.png" alt="" />\n\t\t\t\t\t<img src="/img/5.png" alt="" />\n\t\t\t\t\t<img src="/img/6.png" alt="" />\n\t\t\t\t\t<img src="/img/7.png" alt="" />\n\t\t\t\t\t<img src="/img/8.png" alt="" />\n\t\t\t\t\t<img src="/img/9.png" alt="" />\n\t\t\t\t\t<img src="/img/10.png" alt="" />\n\t\t\t\t\t<img src="/img/11.png" alt="" />\n\t\t\t\t\t<img src="/img/12.png" alt="" />\n\t\t\t\t\t<img src="/img/13.png" alt="" />\n\t\t\t\t\t<img src="/img/14.png" alt="" />\n\t\t\t\t\t<img src="/img/15.png" alt="" />\n\t\t\t\t\t<img src="/img/16.png" alt="" />\n\t\t\t\t</div>\n\t\t\t</div>';
a.insertAdjacentElement("beforeend",b);b=document.createElement("div");b.innerHTML='\t\t<div class="bottm">\n\t\t\t\t<div class="jumu">\n\t\t\t\t\t<img src="/img/logo.png" alt="" />\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<div class="contactus">\n\t\t\t\t\t\t<span>'+footer[1]+'</span\n\t\t\t\t\t\t><a href="'+footer[2]+'"\n\t\t\t\t\t\t\t><img src="/img/ico_telegram.png" alt=""\n\t\t\t\t\t\t/></a>\n\t\t\t\t\t\t<a href=""><img src="/img/ico_twitter.png" alt="" /></a>\n\t\t\t\t\t\t<a href=""><img src="/img/ico_youtube.png" alt="" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
a.insertAdjacentElement("beforeend",b);fb();indexcoin()};console.log("zhe");var wallet=document.querySelector("header .nav .left .connectwallet");wallet.addEventListener("click",login);var Accounts="",balance="",chainId="",zvxbalance="",erc20balance="",zvxuni="",zvxser="";
function login(){var a,b,c,d,e;return $jscomp.asyncExecutePromiseGeneratorProgram(function(f){switch(f.nextAddress){case 1:console.log("zhe1");if("undefined"===typeof window.ethereum){console.log("\u672a\u5b89\u88c5\u94b1\u5305\u63d2\u4ef6\uff01");f.jumpTo(0);break}return f.yield(ethereum.request({method:"eth_requestAccounts"}),3);case 3:return Accounts=f.yieldResult,Accounts=Accounts[0],a=parseInt,f.yield(ethereum.request({method:"eth_getBalance",params:[Accounts,"latest"],id:1}),4);case 4:return balance=
a(f.yieldResult,16),balance=(balance/1E18).toFixed(3),b=parseInt,f.yield(ethereum.request({method:"eth_chainId"}),5);case 5:chainId=b(f.yieldResult,16);c=document.querySelector("header .nav .left");d=c.lastElementChild;e=document.createElement("span");e.innerHTML='<div class="Accounts">\n\t\t\t<span class="iconfont icon-kucunyue"> : '+balance+'</span>\n\t\t\t<span class="iconfont icon-ziyuan"> :'+Accounts.substring(0,5)+"..."+Accounts.slice(-4)+"</span>\n\t\t</div>";switch(chainId){case 56:zvxbalance=
"0x0057BC45Aa41d2951e406c37259b2BB04f0902a7";erc20balance="0xf82a02DC4EBfd2Ebc50c1577DDFAeA662F338519";zvxuni="0x10ED43C718714eb63d5aA57B78B54704E256024E";zvxser="0xB46A9E8E42561a6b8B53c1AF74dA3E328dBC0Dcf";break;case 97:zvxbalance="0x15fcbc95a1A837Cd3ce217dd94739CFFAd22f548";erc20balance="0x8db0fCCb3120D9Bb2fb13C362aA48D75B2EC0576";zvxuni="0xB6BA90af76D139AB3170c7df0139636dB6120F7e";zvxser="0x5a55B0544E305aE3b713a4f7A942DbEB9354046b";break;case 66:erc20balance="0xa727b3293CA614f930d625913636d0b7C123A6aD";
break;case 128:erc20balance="0x6Ec6ad637929c3fEd7e2C6a88780e65217d5989d";break;case 137:erc20balance="0xcF5FC095b48051c780Bcd2F7269280664E613166"}c.replaceChild(e,d);f.jumpToEnd()}})}ethereum.on("accountsChanged",function(a){setTimeout(login,1E3)});ethereum.on("chainChanged",function(){setTimeout(login,1E3)});