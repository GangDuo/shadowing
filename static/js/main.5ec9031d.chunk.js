(this.webpackJsonpshadowing=this.webpackJsonpshadowing||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(15),o=a.n(c),r=(a(27),a(2)),i=a(4),l=a.n(i),m=(a(32),a(16)),u=a(11),h=a(21),d=a(20),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(m.a)(this,a),n=t.call(this);var s=new(window.webkitSpeechRecognition||window.SpeechRecognition);return s.interimResults=!0,s.continuous=!0,s.onresult=function(e){n.emit("result",e)},s.onsoundstart=function(e){console.log("".concat(new Date,"\u8a8d\u8b58\u4e2d...")),n.emit("soundstart",null)},s.onsoundend=function(){n.emit("soundend",null)},s.onnomatch=function(){console.log("".concat(new Date," \u97f3\u58f0\u3092\u8a8d\u8b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")),n.emit("nomatch",null)},s.onerror=function(e){console.log(e),n.emit("error",e)},s.onstart=function(e){console.log("".concat(new Date," ").concat(e.timeStamp," \u97f3\u58f0\u8a8d\u8b58\u30b5\u30fc\u30d3\u30b9\u958b\u59cb ->>>>>")),n.emit("start",null)},s.onend=function(e){console.log("".concat(new Date," <<<<<- \u97f3\u58f0\u8a8d\u8b58\u30b5\u30fc\u30d3\u30b9\u5207\u65ad")),n.hasAlreadyStarted=!1,n.emit("end",null),n.isIdle||n.listen()},n.recognition=s,n.isIdle=!1,n.hasAlreadyStarted=!1,n}return Object(u.a)(a,[{key:"lang",get:function(){return this.lang_},set:function(e){this.lang_=e.replace("_","-")}}]),Object(u.a)(a,[{key:"listen",value:function(){this.hasAlreadyStarted||(this.hasAlreadyStarted=!0,this.isIdle=!1,this.lang&&(this.recognition.lang=this.lang),this.recognition.start())}},{key:"kill",value:function(){this.isIdle=!0,this.recognition.stop()}},{key:"restart",value:function(){this.isIdle=!1,this.recognition.stop()}}]),a}(a(17).EventEmitter),g=[".app.jsx-758450144{text-align:center;}","#results.jsx-758450144{font-size:14px;font-weight:bold;border:1px solid #ddd;padding:15px;text-align:left;min-height:100px;}",".tools.jsx-758450144{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".qa.jsx-758450144{margin:10px auto;}",".text-left.jsx-758450144{text-align:left;}",".footer.jsx-758450144 a.jsx-758450144{cursor:pointer;color:black;-webkit-text-decoration:none;text-decoration:none;}"];g.__hash="758450144";var x=g,p=[".microphone-switch.jsx-223890889{position:relative;}","@-webkit-keyframes shiny-jsx-223890889{0%{-webkit-transform:scale(0) rotate(25deg);-ms-transform:scale(0) rotate(25deg);transform:scale(0) rotate(25deg);opacity:0;}50%{-webkit-transform:scale(1) rotate(25deg);-ms-transform:scale(1) rotate(25deg);transform:scale(1) rotate(25deg);opacity:1;}100%{-webkit-transform:scale(50) rotate(25deg);-ms-transform:scale(50) rotate(25deg);transform:scale(50) rotate(25deg);opacity:0;}}","@keyframes shiny-jsx-223890889{0%{-webkit-transform:scale(0) rotate(25deg);-ms-transform:scale(0) rotate(25deg);transform:scale(0) rotate(25deg);opacity:0;}50%{-webkit-transform:scale(1) rotate(25deg);-ms-transform:scale(1) rotate(25deg);transform:scale(1) rotate(25deg);opacity:1;}100%{-webkit-transform:scale(50) rotate(25deg);-ms-transform:scale(50) rotate(25deg);transform:scale(50) rotate(25deg);opacity:0;}}",".shiny-btn.jsx-223890889{position:relative;overflow:hidden;}",".shiny-btn.jsx-223890889::after{content:'';position:absolute;top:-100px;left:-100px;width:50px;height:50px;background-image:linear-gradient(100deg,rgba(255,255,255,0) 10%,rgba(255,255,255,1) 100%,rgba(255,255,255,0) 0%);-webkit-animation-name:shiny-jsx-223890889;animation-name:shiny-jsx-223890889;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}",".circle.jsx-223890889{border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}",".microphone-on.jsx-223890889,.microphone-off.jsx-223890889{cursor:pointer;}",".microphone-on.jsx-223890889{background:#1373C7;width:80px;height:80px;color:#FFF;}",".microphone-off.jsx-223890889{background:#FFF;width:70px;height:70px;border:solid 5px #ED1C22;color:#1373C7;}",".heartbeat.jsx-223890889{position:absolute;top:0;left:0;-webkit-animation:pounding-jsx-223890889 .1s linear infinite alternate;animation:pounding-jsx-223890889 .1s linear infinite alternate;opacity:0.2;z-index:-99;background:#1373C7;width:80px;height:80px;}","@-webkit-keyframes pounding-jsx-223890889{0%{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes pounding-jsx-223890889{0%{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"];p.__hash="223890889";var j=p,b=a(3);function E(e){return s.a.createElement(b.a,{icon:["far","circle"],size:"2x",color:"green"})}function _(e){return s.a.createElement(b.a,{icon:"times",size:"2x",color:"red"})}function v(e){return s.a.createElement(b.a,{icon:"microphone",size:"2x"})}function N(e){return s.a.createElement(b.a,{icon:"volume-up",size:"2x"})}function k(e){return s.a.createElement(b.a,{icon:["fab","windows"],size:"2x"})}function w(e){return s.a.createElement(b.a,{icon:["fab","apple"],size:"2x"})}function y(e){return s.a.createElement(b.a,{icon:["fab","android"],size:"2x"})}function S(e){return s.a.createElement(b.a,{icon:["fab","github"],size:"2x"})}var O=function(e){var t=e.isPowerOn,a=e.onClick;return e.background,s.a.createElement("div",{className:"jsx-".concat(j.__hash)+" microphone-switch"},s.a.createElement("div",{id:"microphone",onClick:function(e){a&&a.apply()},className:"jsx-".concat(j.__hash)+" "+"circle microphone-".concat(t?"on shiny-btn":"off")},s.a.createElement("div",{className:"jsx-".concat(j.__hash)},s.a.createElement(v,null))),s.a.createElement("div",{id:"heartbeat",className:"jsx-".concat(j.__hash)+" "+"circle ".concat(t?"heartbeat":"")}),s.a.createElement(l.a,{id:j.__hash},j))},C=a(7),I=a(5),P=a(19),R=a(8),A=a(12);var z=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],o=a[1],i=e.onChangedSentence,m=e.onChangeVoice,u=e.sentence,h=e.selectedVoice,d=e.voices,f=e.rate,g=e.onChangedRate,x=e.volume,p=e.onChangedVolume;return Object(n.useEffect)((function(e){var t=JSON.parse(localStorage.getItem("histories"));t&&o(t)}),[]),s.a.createElement("div",{className:"jsx-3905230467"},s.a.createElement("input",{value:u,onChange:i,className:"jsx-3905230467 text"}),s.a.createElement("button",{onClick:function(e){var t=[u].concat(Object(A.a)(c));c.includes(u)&&(t=[u].concat(Object(A.a)(c.filter((function(e){return e!==u}))))),o(t),window.localStorage.setItem("histories",JSON.stringify(t));var a=new SpeechSynthesisUtterance(u);a.voice=h,a.lang=h.lang.replace("_","-"),f&&f>=.1&&f<=10&&(a.rate=f),x&&x>=0&&x<=1&&(a.volume=x),speechSynthesis.speak(a)},className:"jsx-3905230467"},s.a.createElement(N,null)),s.a.createElement("div",{className:"jsx-3905230467"},"\u901f\u5ea6\xd7",f,s.a.createElement("input",{type:"range",min:"0.1",max:"10.0",step:"0.1",value:f,onChange:g,className:"jsx-3905230467"})),s.a.createElement("div",{className:"jsx-3905230467"},"\u97f3\u91cf\xd7",x,s.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.1",value:x,onChange:p,className:"jsx-3905230467"})),s.a.createElement("select",{value:h.name,onChange:m,className:"jsx-3905230467"},d.map((function(e,t){return s.a.createElement("option",{key:t,value:e.name,className:"jsx-3905230467"},"".concat(e.name," (").concat(e.lang,")"))}))),s.a.createElement("div",{className:"jsx-3905230467"},s.a.createElement("label",{htmlFor:"histories",className:"jsx-3905230467"},"\u5c65\u6b74"),s.a.createElement("select",{id:"histories",size:"5",onChange:function(e){e.target.value&&i&&i(e)},className:"jsx-3905230467"},c.map((function(e,t){return s.a.createElement("option",{key:t,value:e,className:"jsx-3905230467"},e)})))),s.a.createElement(l.a,{id:"3905230467"},["button.jsx-3905230467{height:30px;width:80px;}",".text.jsx-3905230467{width:80%;height:40px;font-size:32px;}","label.jsx-3905230467{display:block;}","#histories.jsx-3905230467{width:80%;}"]))},H=a(18),D=a.n(H);function K(e){var t=e.children,a=e.text;return s.a.createElement("button",{onClick:function(){var e=document.createElement("a");e.href="data:text/plain,"+encodeURIComponent(a),e.download="log".concat(D()().format("_YYYYMMDD_HHmmss"),".txt"),e.click()}},t)}C.b.add(I.a,I.b,I.c,I.e,P.a,I.d,R.d,R.b,R.a,R.c);var U=[["Afrikaans",["af-ZA"]],["\u12a0\u121b\u122d\u129b",["am-ET"]],["Az\u0259rbaycanca",["az-AZ"]],["\u09ac\u09be\u0982\u09b2\u09be",["bn-BD","\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6"],["bn-IN","\u09ad\u09be\u09b0\u09a4"]],["Bahasa Indonesia",["id-ID"]],["Bahasa Melayu",["ms-MY"]],["Catal\xe0",["ca-ES"]],["\u010ce\u0161tina",["cs-CZ"]],["Dansk",["da-DK"]],["Deutsch",["de-DE"]],["English",["en-AU","Australia"],["en-CA","Canada"],["en-IN","India"],["en-KE","Kenya"],["en-TZ","Tanzania"],["en-GH","Ghana"],["en-NZ","New Zealand"],["en-NG","Nigeria"],["en-ZA","South Africa"],["en-PH","Philippines"],["en-GB","United Kingdom"],["en-US","United States"]],["Espa\xf1ol",["es-AR","Argentina"],["es-BO","Bolivia"],["es-CL","Chile"],["es-CO","Colombia"],["es-CR","Costa Rica"],["es-EC","Ecuador"],["es-SV","El Salvador"],["es-ES","Espa\xf1a"],["es-US","Estados Unidos"],["es-GT","Guatemala"],["es-HN","Honduras"],["es-MX","M\xe9xico"],["es-NI","Nicaragua"],["es-PA","Panam\xe1"],["es-PY","Paraguay"],["es-PE","Per\xfa"],["es-PR","Puerto Rico"],["es-DO","Rep\xfablica Dominicana"],["es-UY","Uruguay"],["es-VE","Venezuela"]],["Euskara",["eu-ES"]],["Filipino",["fil-PH"]],["Fran\xe7ais",["fr-FR"]],["Basa Jawa",["jv-ID"]],["Galego",["gl-ES"]],["\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",["gu-IN"]],["Hrvatski",["hr-HR"]],["IsiZulu",["zu-ZA"]],["\xcdslenska",["is-IS"]],["Italiano",["it-IT","Italia"],["it-CH","Svizzera"]],["\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",["kn-IN"]],["\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",["km-KH"]],["Latvie\u0161u",["lv-LV"]],["Lietuvi\u0173",["lt-LT"]],["\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",["ml-IN"]],["\u092e\u0930\u093e\u0920\u0940",["mr-IN"]],["Magyar",["hu-HU"]],["\u0ea5\u0eb2\u0ea7",["lo-LA"]],["Nederlands",["nl-NL"]],["\u0928\u0947\u092a\u093e\u0932\u0940 \u092d\u093e\u0937\u093e",["ne-NP"]],["Norsk bokm\xe5l",["nb-NO"]],["Polski",["pl-PL"]],["Portugu\xeas",["pt-BR","Brasil"],["pt-PT","Portugal"]],["Rom\xe2n\u0103",["ro-RO"]],["\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",["si-LK"]],["Sloven\u0161\u010dina",["sl-SI"]],["Basa Sunda",["su-ID"]],["Sloven\u010dina",["sk-SK"]],["Suomi",["fi-FI"]],["Svenska",["sv-SE"]],["Kiswahili",["sw-TZ","Tanzania"],["sw-KE","Kenya"]],["\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",["ka-GE"]],["\u0540\u0561\u0575\u0565\u0580\u0565\u0576",["hy-AM"]],["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",["ta-IN","\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe"],["ta-SG","\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd"],["ta-LK","\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8"],["ta-MY","\u0bae\u0bb2\u0bc7\u0b9a\u0bbf\u0baf\u0bbe"]],["\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",["te-IN"]],["Ti\u1ebfng Vi\u1ec7t",["vi-VN"]],["T\xfcrk\xe7e",["tr-TR"]],["\u0627\u064f\u0631\u062f\u064f\u0648",["ur-PK","\u067e\u0627\u06a9\u0633\u062a\u0627\u0646"],["ur-IN","\u0628\u06be\u0627\u0631\u062a"]],["\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",["el-GR"]],["\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",["bg-BG"]],["P\u0443\u0441\u0441\u043a\u0438\u0439",["ru-RU"]],["\u0421\u0440\u043f\u0441\u043a\u0438",["sr-RS"]],["\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",["uk-UA"]],["\ud55c\uad6d\uc5b4",["ko-KR"]],["\u4e2d\u6587",["cmn-Hans-CN","\u666e\u901a\u8bdd (\u4e2d\u56fd\u5927\u9646)"],["cmn-Hans-HK","\u666e\u901a\u8bdd (\u9999\u6e2f)"],["cmn-Hant-TW","\u4e2d\u6587 (\u53f0\u7063)"],["yue-Hant-HK","\u7cb5\u8a9e (\u9999\u6e2f)"]],["\u65e5\u672c\u8a9e",["ja-JP"]],["\u0939\u093f\u0928\u094d\u0926\u0940",["hi-IN"]],["\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",["th-TH"]]];Array.prototype.skip||(Array.prototype.skip=function(e){return e<1?this:this.filter((function(t,a){return a>e-1}))});var F=function(e){return window.speechSynthesis.getVoices().filter(e||function(e){return e})};var T=function(){var e=Object(n.useRef)(""),t=Object(n.useRef)(),a=Object(n.useState)(null),c=Object(r.a)(a,2),o=c[0],i=c[1],m=Object(n.useState)(),u=Object(r.a)(m,2),h=u[0],d=u[1],g=Object(n.useState)(""),p=Object(r.a)(g,2),j=p[0],b=p[1],v=Object(n.useState)(""),N=Object(r.a)(v,2),C=N[0],I=N[1],P=Object(n.useState)(!1),R=Object(r.a)(P,2),A=R[0],H=R[1],D=Object(n.useState)([]),T=Object(r.a)(D,2),V=T[0],B=T[1],G=Object(n.useState)(null),M=Object(r.a)(G,2),L=M[0],Z=M[1],Y=Object(n.useState)("Enter the example sentence!"),J=Object(r.a)(Y,2),W=J[0],q=J[1],X=Object(n.useState)(1),$=Object(r.a)(X,2),Q=$[0],ee=$[1],te=Object(n.useState)(1),ae=Object(r.a)(te,2),ne=ae[0],se=ae[1],ce=function(){var e=F((function(e){return e.lang.match("ja|en[-_]US")})).reverse(),t=e.filter((function(e){return e.lang.match("en[-_]US")}))[0];t&&Z(t),B(e)};if(Object(n.useEffect)((function(a){console.log("\u521d\u671f\u5316\u51e6\u7406"),t.current=new f,t.current.on("result",(function(a){for(var n="",s="",c=a.resultIndex;c<a.results.length;c++)n=a.results[c][0].transcript,a.results[c].isFinal&&(!/(android)/i.test(navigator.userAgent)||a.results[c][0].confidence>0)?("ja-JP"===t.current.lang&&(n+="\u3002"),e.current+=n+"\n",console.log(e.current),b(e.current)):s+=n,I(s)})).on("start",(function(){console.log("\u8a71\u3057\u304b\u3051\u3066\u307f\u3066")})).on("soundstart",(function(){console.log("\u8a8d\u8b58\u4e2d...")})).on("soundend",(function(){console.log("\u505c\u6b62\u4e2d")})).on("nomatch",(function(e){console.log("\u97f3\u58f0\u3092\u8a8d\u8b58\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f")})).on("error",(function(e){console.log("\u30a8\u30e9\u30fc: "+e.error)})),window.speechSynthesis.onvoiceschanged=function(e){console.log("onvoiceschanged"),ce()},ce()}),[]),Object(n.useEffect)((function(e){if(console.log("changed selectedVoice"),L){var t,a=(t=L.lang.replace("_","-"),U.reduce((function(e,a,n){return a.skip(1).reduce((function(e,t){return e.push(t[0]),e}),[]).includes(t)&&(e=n,console.log("exists ".concat(n))),e}),null));i(a),d(U[a].filter((function(e,t){return t>0})).reduce((function(e,t){return t[0]===L.lang.replace("_","-")&&(e=t),e}))[0])}}),[L]),!L||!o)return console.log("\u97f3\u58f0\u53d6\u5f97\u4e2d"),s.a.createElement(s.a.Fragment,null,"\u97f3\u58f0\u53d6\u5f97\u4e2d");var oe=U[o][1].length>1;A?(console.log("Microphone On"),t.current.lang=h,t.current.listen()):(console.log("onMicrophone Off"),t.current.kill());var re,ie=function(t){var a=e.current.split("\n").filter((function(e){return e.length>0}));if(a.length>0){var n=new RegExp(/[\s!,\.\u3001\u3002]/,"g"),c=[a.pop(),W].map((function(e){return e.replace(n,"").toLowerCase()})),o=Object(r.a)(c,2);return o[0]===o[1]?s.a.createElement(E,null):s.a.createElement(_,null)}return s.a.createElement(s.a.Fragment,null)}();return s.a.createElement("div",{className:"jsx-".concat(x.__hash)+" app"},s.a.createElement("h1",{className:"jsx-".concat(x.__hash)},"\u82f1\u8a9e\u306e\u6b4c\u8a5e\u3092\u6b63\u3057\u304f\u767a\u97f3\u3057\u3066\u3044\u308b\u304b\u5224\u5b9a\u3057\u307e\u3059"),s.a.createElement("h2",{className:"jsx-".concat(x.__hash)},"\u304a\u624b\u672c"),s.a.createElement(z,{sentence:W,selectedVoice:L,voices:V,onChangedSentence:function(e){return q(e.target.value)},onChangeVoice:function(e){var a,n=(a=e.target.value,F((function(e){return e.name===a}))[0]);Z(n),t.current.lang=n.lang,t.current.restart()},rate:Q,onChangedRate:function(e){return ee(e.target.value)},volume:ne,onChangedVolume:function(e){return se(e.target.value)}}),ie,s.a.createElement("h2",{className:"jsx-".concat(x.__hash)},"\u767a\u97f3\u78ba\u8a8d"),s.a.createElement("div",{id:"results",className:"jsx-".concat(x.__hash)},s.a.createElement("span",{id:"final_span",className:"jsx-".concat(x.__hash)+" final"},(re=10,j.split("\n").filter((function(e){return e.length>0})).slice(-1*re).map((function(e,t){return s.a.createElement("p",{key:t},e)})))),s.a.createElement("span",{id:"interim_span",style:{color:"gray"},className:"jsx-".concat(x.__hash)+" interim"},C)),s.a.createElement("div",{className:"jsx-".concat(x.__hash)+" tools"},s.a.createElement("div",{className:"jsx-".concat(x.__hash)},s.a.createElement("select",{disabled:!0,value:o,className:"jsx-".concat(x.__hash)},U.map((function(e,t){return s.a.createElement("option",{key:e[0],value:t,className:"jsx-".concat(x.__hash)},e[0])}))),"\xa0\xa0",s.a.createElement("select",{disabled:!0,value:h,style:{visibility:oe?"visible":"hidden"},className:"jsx-".concat(x.__hash)},U[o].filter((function(e,t){return t>0})).map((function(e,t){return s.a.createElement("option",{key:t,value:e[0],className:"jsx-".concat(x.__hash)},e[1]||"")})))),s.a.createElement(O,{isPowerOn:A,onClick:function(){H(!A)}}),s.a.createElement("div",{className:"jsx-".concat(x.__hash)},s.a.createElement(K,{text:j},"\u30ed\u30b0\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"))),s.a.createElement("h2",{className:"jsx-".concat(x.__hash)},"\u3088\u304f\u3042\u308b\u8cea\u554f"),s.a.createElement("h3",{className:"jsx-".concat(x.__hash)},"\u4f7f\u7528\u65b9\u6cd5\u3092\u6559\u3048\u3066\uff1f"),s.a.createElement("ol",{className:"jsx-".concat(x.__hash)+" text-left"},s.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u4f8b\u6587\u3092\u5165\u529b\u3057\u307e\u3057\u3087\u3046\u3002"),s.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u30b9\u30d4\u30fc\u30ab\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u767a\u97f3\u3092\u805e\u304d\u307e\u3059\u3002"),s.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u30de\u30a4\u30af\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u3001\u30de\u30a4\u30afON\u306b\u3057\u307e\u3059\u3002"),s.a.createElement("li",{className:"jsx-".concat(x.__hash)},"\u805e\u3053\u3048\u305f\u3068\u304a\u308a\u306b\u558b\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),s.a.createElement("h3",{className:"jsx-".concat(x.__hash)},"\u52d5\u4f5c\u3057\u306a\u3044\u3051\u3069..."),"Chrome\u30d6\u30e9\u30a6\u30b6\u3067\u52d5\u4f5c\u3057\u307e\u3059\u3002",s.a.createElement("table",{className:"jsx-".concat(x.__hash)+" qa"},s.a.createElement("thead",{className:"jsx-".concat(x.__hash)},s.a.createElement("tr",{className:"jsx-".concat(x.__hash)},s.a.createElement("th",{colSpan:"2",className:"jsx-".concat(x.__hash)},"\u5bfe\u5fdc\u30c7\u30d0\u30a4\u30b9"),s.a.createElement("th",{className:"jsx-".concat(x.__hash)},"\u53ef\u5426"))),s.a.createElement("tbody",{className:"jsx-".concat(x.__hash)},s.a.createElement("tr",{className:"jsx-".concat(x.__hash)},s.a.createElement("td",{className:"jsx-".concat(x.__hash)},s.a.createElement(k,null)),s.a.createElement("td",{className:"jsx-".concat(x.__hash)+" text-left"},"PC"),s.a.createElement("td",{className:"jsx-".concat(x.__hash)},s.a.createElement(E,null))),s.a.createElement("tr",{className:"jsx-".concat(x.__hash)},s.a.createElement("td",{className:"jsx-".concat(x.__hash)},s.a.createElement(y,null)),s.a.createElement("td",{className:"jsx-".concat(x.__hash)+" text-left"},"Android"),s.a.createElement("td",{className:"jsx-".concat(x.__hash)},s.a.createElement(E,null))),s.a.createElement("tr",{className:"jsx-".concat(x.__hash)},s.a.createElement("td",{className:"jsx-".concat(x.__hash)},s.a.createElement(w,null)),s.a.createElement("td",{className:"jsx-".concat(x.__hash)+" text-left"},"iPhone"),s.a.createElement("td",{className:"jsx-".concat(x.__hash)},s.a.createElement(_,null))))),s.a.createElement("hr",{className:"jsx-".concat(x.__hash)}),s.a.createElement("div",{className:"jsx-".concat(x.__hash)+" footer"},s.a.createElement("a",{target:"_blank",href:"https://github.com/GangDuo/shadowing",className:"jsx-".concat(x.__hash)},s.a.createElement(S,null),"GitHub")),s.a.createElement(l.a,{id:x.__hash},x))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5ec9031d.chunk.js.map