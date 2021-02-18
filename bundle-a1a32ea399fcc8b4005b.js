!function(e){var t={};function s(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(l,n,function(t){return e[t]}.bind(null,n));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=20)}([function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t),s.d(t,"app",(function(){return w}));s(0);const l=function(e,t){let s;s=e.indexOf("|")>0?e.slice(0,e.indexOf("|")):e;var l=!1;if(s.indexOf(":")>0){var n=s.split(/:(?!.*:\\)/);s=n[0],l=n[1].replace("\\",":")}var i=document.createElement(s);l&&""!=l&&(i.innerHTML=l);var a=e.slice(e.indexOf("|")+1,e.length).split(",");if(e.indexOf("|")>0&&e.indexOf("|")<e.length-1&&(a.forEach((e,t)=>{if(e.indexOf(":")>0){var s=e.substring(0,e.indexOf(":"))+","+e.substring(e.indexOf(":")+1,e.length);s=s.split(","),a[t]={key:s[0],value:s[1]}}else a[t]={key:e,value:void 0}}),a.forEach((e,t)=>{"key"in e&&null!=e.key&&"value"in e&&null!=e.value?i.setAttribute(e.key,e.value):"key"in e&&null!=e.key&&i.setAttribute(e.key,"")})),t&&"string"!=typeof t)if(t.length>0)t.forEach((e,t)=>{if(e instanceof HTMLElement)i.appendChild(e);else{let t=document.createElement("div");t.innerHTML=e,i.appendChild(t.firstChild)}});else if(t instanceof HTMLElement)i.appendChild(t);else{let e=document.createElement("div");e.innerHTML=t,i.appendChild(e.firstChild)}return i},n={name:{display:"Dice Roller",string:"diceRoller"},render:()=>{document.title=n.name.display}};s(1);const i={random:(e,t)=>Math.round(Math.random()*(t-e))+e,reducer:(e,t)=>e+t};i.roll=e=>{const t={formula:JSON.parse(JSON.stringify(e)),total:0,timestamp:null};return t.formula.forEach((e,s)=>{e.result={},e.result.rolls={all:[]};for(s=0;s<e.dice.count;s++)e.result.rolls.all.push(i.random(1,e.dice.size));e.result.total=e.result.rolls.all.reduce(i.reducer)+e.dice.modifier,e.result.rolls.lowest=Math.min(...e.result.rolls.all),e.result.rolls.highest=Math.max(...e.result.rolls.all),e.rules.dropLowest&&(e.result.total=e.result.total-e.result.rolls.lowest),t.total=t.total+e.result.total}),t.timestamp=function(){const e=new Date;return{date:e.getDate(),day:e.getDay(),year:e.getFullYear(),hours:e.getHours(),milliseconds:e.getMilliseconds(),minutes:e.getMinutes(),month:e.getMonth(),monthString:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],seconds:e.getSeconds()}}(),t};const a={state:{}};a.state.history=[],a.state.count={max:50},a.history={},a.history.add=e=>{a.state.history.push(JSON.parse(JSON.stringify(e)))},a.element=l("div|class:result"),a.clear=()=>{for(;a.element.lastChild;)a.element.removeChild(a.element.lastChild)},a.render=()=>(a.update(),a.element),a.update=()=>{a.clear();const e=JSON.parse(JSON.stringify(a.state.history)).reverse().slice(0,a.state.count.max);e.length>0&&(window.innerWidth>800?e.forEach((e,t)=>{a.element.appendChild(a.resultItem(e))}):a.element.appendChild(a.resultItem(e[0])))},a.resultItem=e=>{const t=l("div|class:result__item"),s=l(`div:${e.total}|class:result__total`),n=l("div|class:result__details"),i=l("div|class:result__timestamp");return i.textContent=`${e.timestamp.hours}:${e.timestamp.minutes<10?"0"+e.timestamp.minutes:e.timestamp.minutes}:${e.timestamp.seconds<10?"0"+e.timestamp.seconds:e.timestamp.seconds} ${e.timestamp.date}/${e.timestamp.monthString}/${e.timestamp.year}`,e.formula.forEach((e,t)=>{const s=l("div|class:result__formula"),i=l("div|class:result__formula-dice");let a="";e.dice.count>0&&(a+=e.dice.count),a=a+" d"+e.dice.size,e.dice.modifier>0?a=a+" +"+e.dice.modifier:e.dice.modifier<0&&(a=a+" "+e.dice.modifier),i.textContent=a,s.appendChild(i);const r=l("div|class:result__rolls"),o=l("div:Rolled\\:|class:result__rolls-title"),c=l("ul|class:result__rolls-list list__inline list__unstyled");e.result.rolls.all.forEach((t,s)=>{const n=l(`li:${t}|class:result__rolls-list-item`);20===e.dice.size&&20===t?n.classList.add("result__critical-success"):20===e.dice.size&&1===t&&n.classList.add("result__critical-failure"),c.appendChild(n)}),r.appendChild(o),r.appendChild(c),s.appendChild(r),n.appendChild(s)}),n.appendChild(i),t.appendChild(s),t.appendChild(n),t};const r={state:{}};r.state.save=()=>{const e={[n.name.string]:!0,formula:p.state,result:a.state};r.save(e)},r.state.load=()=>{const e=r.load();e&&e[n.name.string]&&(p.state=e.formula,a.state=e.result)},r.save=e=>{localStorage.setItem(n.name.string,JSON.stringify(e))},r.load=()=>JSON.parse(localStorage.getItem(n.name.string)),r.wipe=()=>{localStorage.removeItem(n.name.string)};s(2);const o={all:{arrowDown:{name:"arrow-down",path:"M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"},arrowDownLeft:{name:"arrow-down-left",path:"M17 16h-7.586l8.293-8.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-8.293 8.293v-7.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1z"},arrowDownRight:{name:"arrow-down-right",path:"M16 7v7.586l-8.293-8.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.293 8.293h-7.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217c0.092-0.092 0.166-0.202 0.217-0.324 0.049-0.118 0.076-0.247 0.076-0.383v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"},arrowLeft:{name:"arrow-left",path:"M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},arrowRight:{name:"arrow-right",path:"M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},arrowUp:{name:"arrow-up",path:"M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},arrowUpLeft:{name:"arrow-up-left",path:"M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"},arrowUpRight:{name:"arrow-up-right",path:"M7 8h7.586l-8.293 8.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l8.293-8.293v7.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},chevronDown:{name:"chevron-down",path:"M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},chevronLeft:{name:"chevron-left",path:"M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},chevronRight:{name:"chevron-right",path:"M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},chevronUp:{name:"chevron-up",path:"M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},minus:{name:"minus",path:"M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},plus:{name:"plus",path:"M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},x:{name:"x",path:"M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"}},render:function(e,t){switch(t){case!0:return'<span class="icon"><svg version="1.1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="'+o.all[e].path+'"></path></svg></span>';default:const t=l("span|class:icon"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("version","1.1"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("fill","currentColor");const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",o.all[e].path),s.appendChild(n),t.appendChild(s),t}}};s(3);const c=function({text:e=!1,type:t=!1,round:s=!1,block:n=!1,size:i=!1,style:a=[],ring:r=!1,title:c=!1,classList:d=[],iconName:u=!1,func:h=!1}={}){if(this.button=l("button|class:button,tabindex:1,type:button"),e){const t=l("span:"+e+"|class:button-text");this.button.appendChild(t)}switch(t){case"secondary":this.button.classList.add("button__secondary");break;case"success":this.button.classList.add("button__success");break;case"danger":this.button.classList.add("button__danger");break;default:this.button.classList.add("button__primary")}if(u){const e=l("span|class:button-icon",[o.render(u)]);this.button.appendChild(e)}switch(r&&this.button.classList.add("button__ring"),n&&this.button.classList.add("button__block"),s&&this.button.classList.add("button__round"),i){case"small":this.button.classList.add("button__small");break;case"large":this.button.classList.add("button__large")}a.length>0&&a.forEach((e,t)=>{switch(e){case"link":this.button.classList.add("button__link")}}),c&&this.button.setAttribute("title",c),d.length>0&&d.forEach((e,t)=>{this.button.classList.add(e)}),h&&this.button.addEventListener("click",e=>{h()}),this.disable=()=>{this.button.disabled=!0},this.enable=()=>{this.button.disabled=!1},this.deactive=()=>{this.button.classList.remove("active")},this.active=()=>{this.button.classList.add("active")}},d={render:e=>{const t=l("div|class:formula__item formula__count"),s=l(`input|class:formula__count-input,type:number,value:${e.count},tabindex:1`);let n=null;const i=t=>{let l=t;return isNaN(t)&&(l=1),t>100&&(l=100),t<1&&(l=1),(isNaN(t)||t>100||t<1)&&(clearTimeout(n),n=window.setTimeout((function(){s.value=e.count}),1500)),l};s.addEventListener("input",()=>{let t=parseInt(s.value,10);t<1&&(s.value=1),e.count=i(t)});let a=null;return s.addEventListener("touchstart",e=>{a=parseInt(s.value,10)}),s.addEventListener("touchend",e=>{a=null}),s.addEventListener("touchmove",t=>{t.preventDefault();let l=a+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.count=i(l),s.value=e.count}),t.appendChild(s),t}},u={availableDice:[2,3,4,6,8,10,12,20,100],render:e=>{const t=l("div|class:formula__item formula__size"),s=l("div|class:formula__size-display"),n=l("div|class:formula__size-text"),i=l("div|class:formula__size-icon",[o.render("chevronDown")]);s.appendChild(n),s.appendChild(i);const a=l("select|class:formula__size-select,tabindex:1");a.addEventListener("change",()=>{e.size=a.selectedOptions[0].size,n.textContent="d"+e.size}),u.availableDice.forEach((t,s)=>{const i=l(`option:d${t}|value:${t}`);i.size=t,e.size===t&&(i.selected=!0,n.textContent="d"+t),a.appendChild(i)});let r=null;return a.addEventListener("touchstart",e=>{r=a.selectedIndex}),a.addEventListener("touchend",e=>{r=null}),a.addEventListener("touchmove",t=>{t.preventDefault();let s=r+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);s<0&&(s=0),s>u.availableDice.length-1&&(s=u.availableDice.length-1),e.size=u.availableDice[s],a.selectedIndex=s,n.textContent="d"+e.size}),t.appendChild(a),t.appendChild(s),t}},h={render:e=>{const t=l("div|class:formula__item formula__modifier"),s=l("input|class:formula__modifier-input,type:text,tabindex:1");let n=null;const i=t=>{let l=t;return isNaN(t)&&(l=0),t>999&&(l=999),t<-999&&(l=-999),(isNaN(t)||t>999||t<-999)&&(clearTimeout(n),n=window.setTimeout((function(){s.value=a(e.modifier)}),1500)),l},a=e=>e>=0?"+"+e:e;s.value=a(e.modifier),s.addEventListener("input",()=>{let t=parseInt(s.value,10);e.modifier=i(t)});let r=null;return s.addEventListener("blur",t=>{s.value=a(e.modifier)}),s.addEventListener("touchstart",e=>{r=parseInt(s.value,10)}),s.addEventListener("touchend",e=>{r=null}),s.addEventListener("touchmove",t=>{t.preventDefault();let l=r+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.modifier=i(l),s.value=a(e.modifier)}),s.addEventListener("keydown",t=>{38===t.keyCode&&(e.modifier=i(e.modifier+1),s.value=a(e.modifier)),40===t.keyCode&&(e.modifier=i(e.modifier-1),s.value=a(e.modifier))}),t.appendChild(s),t}},m=function(e){this.count=d.render(e.dice),this.size=u.render(e.dice),this.modifier=h.render(e.dice)},p={state:{}};p.state.current=[{dice:{count:1,size:20,modifier:2},rules:{dropLowest:!1}},{dice:{count:6,size:6,modifier:6},rules:{dropLowest:!1}}],p.element=l("div|class:formula"),p.delay=100,p.default={dice:{count:1,size:20,modifier:0},rules:{dropLowest:!1}},p.add=()=>{p.state.current.push(JSON.parse(JSON.stringify(p.default)))},p.remove=e=>{p.state.current.splice(e,1),0===p.state.current.length&&p.add()},p.clear=()=>{for(;p.element.lastChild;)p.element.removeChild(p.element.lastChild)},p.render=()=>(p.update(),p.element),p.update=()=>{p.clear();const e=l("div|class:formula__body");p.state.current.forEach((t,s)=>{const n=l("div|class:formula__set");let i=null;const a=new c({iconName:"minus",round:!0,ring:!0,type:"danger",classList:["formula__remove"],func:()=>{i=window.setTimeout((function(){p.remove(s),p.update(),r.state.save()}),p.delay)}}),o=new m(t);p.state.current.length>1&&n.appendChild(a.button),n.appendChild(o.count),n.appendChild(o.size),n.appendChild(o.modifier),e.appendChild(n)});let t=null;const s=new c({iconName:"plus",round:!0,ring:!0,classList:["formula__add"],func:()=>{t=window.setTimeout((function(){p.add(),p.update(),r.state.save()}),p.delay)}});p.element.appendChild(e),p.element.appendChild(l("div|class:formula__control",[s.button]))};const _={key:{diceRolled:"diceRolled"}};_.diceRolled=new CustomEvent(_.key.diceRolled,{bubbles:!0});s(4),s(5),s(6),s(7),s(8),s(9),s(10),s(11),s(12),s(13),s(14);s(15);const v={state:{}};v.state.current={style:"dark"},v.style={},v.style.toggle=e=>{if(!e||"dark"!==e&&"light"!==e)switch(v.state.current.style){case"light":v.state.current.style="dark";break;case"dark":v.state.current.style="light"}else v.state.current.style=e},v.style.render=()=>{const e=document.querySelector("html");switch(v.state.current.style){case"light":e.classList.add("is-theme-light"),e.classList.remove("is-theme-dark");break;case"dark":e.classList.remove("is-theme-light"),e.classList.add("is-theme-dark")}},v.keyboard={},v.keyboard.bind=()=>{window.addEventListener("keydown",(function(e){e.ctrlKey&&e.altKey&&68==e.keyCode&&(v.style.toggle(),v.style.render(),v.toggle.update())}),!1)},v.toggle={},v.toggle.render=()=>{const e=l("input|type:checkbox,class:theme__style-input,id:theme__style-input,tabindex:1"),t=l("label|class:theme__style-label,for:theme__style-input",[l("span:Dark|class:theme__style-text theme__style-text-dark"),l("span|class:theme__style-icon"),l("span:Light|class:theme__style-text theme__style-text-light")]),s=l("div|class:theme__style-toggle",[e,t]);switch(v.state.current.style){case"light":e.checked=!1;break;case"dark":e.checked=!0}return e.addEventListener("change",(function(e){this.checked?v.style.toggle("dark"):v.style.toggle("light"),v.style.render()})),s},v.toggle.update=()=>{switch(v.state.current.style){case"light":document.querySelector(".theme__style-input").checked=!1;break;case"dark":document.querySelector(".theme__style-input").checked=!0}};s(16);s(17);const f={render:e=>{const t=l("div|class:card"),s=l("div|class:card__body");if(e&&"string"!=typeof e)if(e.length>0)e.forEach((e,t)=>{if(e instanceof HTMLElement)s.appendChild(e);else{let t=document.createElement("div");t.innerHTML=e,s.appendChild(t.firstChild)}});else if(e instanceof HTMLElement)s.appendChild(e);else{let t=document.createElement("div");t.innerHTML=e,s.appendChild(t.firstChild)}return t.appendChild(s),t}};s(18);const y={render:()=>{const e=l("div|class:roll"),t=new c({text:"Roll the dice",ring:!0,type:"success",classList:["roll__button"],func:()=>{t.button.dispatchEvent(_.diceRolled)}});return e.appendChild(t.button),e}};s(19);const g={colour:{}};g.colour.render=()=>l("section",[l("div|class:styleguide__colour",[l("div|class:styleguide__colour-primary",[l("div|class:styleguide__colour-primary-100"),l("div|class:styleguide__colour-primary-200"),l("div|class:styleguide__colour-primary-300"),l("div|class:styleguide__colour-primary-400"),l("div|class:styleguide__colour-primary-500"),l("div|class:styleguide__colour-primary-600"),l("div|class:styleguide__colour-primary-700"),l("div|class:styleguide__colour-primary-800"),l("div|class:styleguide__colour-primary-900")]),l("div|class:styleguide__colour-secondary",[l("div|class:styleguide__colour-secondary-100"),l("div|class:styleguide__colour-secondary-200"),l("div|class:styleguide__colour-secondary-300"),l("div|class:styleguide__colour-secondary-400"),l("div|class:styleguide__colour-secondary-500"),l("div|class:styleguide__colour-secondary-600"),l("div|class:styleguide__colour-secondary-700"),l("div|class:styleguide__colour-secondary-800"),l("div|class:styleguide__colour-secondary-900")]),l("div|class:styleguide__colour-success",[l("div|class:styleguide__colour-success-100"),l("div|class:styleguide__colour-success-200"),l("div|class:styleguide__colour-success-300"),l("div|class:styleguide__colour-success-400"),l("div|class:styleguide__colour-success-500"),l("div|class:styleguide__colour-success-600"),l("div|class:styleguide__colour-success-700"),l("div|class:styleguide__colour-success-800"),l("div|class:styleguide__colour-success-900")]),l("div|class:styleguide__colour-danger",[l("div|class:styleguide__colour-danger-100"),l("div|class:styleguide__colour-danger-200"),l("div|class:styleguide__colour-danger-300"),l("div|class:styleguide__colour-danger-400"),l("div|class:styleguide__colour-danger-500"),l("div|class:styleguide__colour-danger-600"),l("div|class:styleguide__colour-danger-700"),l("div|class:styleguide__colour-danger-800"),l("div|class:styleguide__colour-danger-900")])]),l("div|class:styleguide__colour",[l("div|class:styleguide__colour-black"),l("div|class:styleguide__colour-white")])]);const b={Button:c,ControlSet:m,global:n,base:{},data:r,theme:v,layout:{},icon:o,card:f,dice:i,count:d,size:u,modifier:h,roll:y,result:a,formula:p,styleguide:g},w={};w.element=document.querySelector(".app"),w.clear=()=>{for(;w.element.lastChild;)w.element.removeChild(w.element.lastChild)},w.render=()=>{[l("div|class:layout",[l("section|class:layout__formula",[l("section|class:layout__wrap",[b.formula.render()])]),l("section|class:layout__roll",[b.roll.render()]),l("section|class:layout__result",[l("section|class:layout__wrap",[b.result.render()])])])].forEach((e,t)=>{w.element.appendChild(e)})},w.update=()=>{w.clear(),w.render()},document.querySelector("body").addEventListener(_.key.diceRolled,e=>{b.result.history.add(b.dice.roll(b.formula.state.current)),b.data.state.save(),b.result.update()}),b.theme.style.render(),b.theme.keyboard.bind(),b.global.render(),w.render()}]);