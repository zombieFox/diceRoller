!function(e){var t={};function s(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(l,a,function(t){return e[t]}.bind(null,a));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=18)}([function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t),s.d(t,"app",(function(){return w}));s(0);const l=function(e,t){let s;s=e.indexOf("|")>0?e.slice(0,e.indexOf("|")):e;var l=!1;if(s.indexOf(":")>0){var a=s.split(/:(?!.*:\\)/);s=a[0],l=a[1].replace("\\",":")}var n=document.createElement(s);l&&""!=l&&(n.innerHTML=l);var i=e.slice(e.indexOf("|")+1,e.length).split(",");if(e.indexOf("|")>0&&e.indexOf("|")<e.length-1&&(i.forEach((e,t)=>{if(e.indexOf(":")>0){var s=e.substring(0,e.indexOf(":"))+","+e.substring(e.indexOf(":")+1,e.length);s=s.split(","),i[t]={key:s[0],value:s[1]}}else i[t]={key:e,value:void 0}}),i.forEach((e,t)=>{"key"in e&&null!=e.key&&"value"in e&&null!=e.value?n.setAttribute(e.key,e.value):"key"in e&&null!=e.key&&n.setAttribute(e.key,"")})),t&&"string"!=typeof t)if(t.length>0)t.forEach((e,t)=>{if(e instanceof HTMLElement)n.appendChild(e);else{let t=document.createElement("div");t.innerHTML=e,n.appendChild(t.firstChild)}});else if(t instanceof HTMLElement)n.appendChild(t);else{let e=document.createElement("div");e.innerHTML=t,n.appendChild(e.firstChild)}return n};s(1);const a={all:{arrowDown:{name:"arrow-down",path:"M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"},arrowDownLeft:{name:"arrow-down-left",path:"M17 16h-7.586l8.293-8.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-8.293 8.293v-7.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1z"},arrowDownRight:{name:"arrow-down-right",path:"M16 7v7.586l-8.293-8.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.293 8.293h-7.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217c0.092-0.092 0.166-0.202 0.217-0.324 0.049-0.118 0.076-0.247 0.076-0.383v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"},arrowLeft:{name:"arrow-left",path:"M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},arrowRight:{name:"arrow-right",path:"M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},arrowUp:{name:"arrow-up",path:"M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},arrowUpLeft:{name:"arrow-up-left",path:"M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"},arrowUpRight:{name:"arrow-up-right",path:"M7 8h7.586l-8.293 8.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l8.293-8.293v7.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},chevronDown:{name:"chevron-down",path:"M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"},chevronLeft:{name:"chevron-left",path:"M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},chevronRight:{name:"chevron-right",path:"M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"},chevronUp:{name:"chevron-up",path:"M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"},minus:{name:"minus",path:"M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},plus:{name:"plus",path:"M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"},x:{name:"x",path:"M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"}},render:(e,t)=>{switch(t){case!0:return'<span class="icon"><svg version="1.1" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="'+a.all[e].path+'"></path></svg></span>';default:const t=l("span|class:icon"),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("version","1.1"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("width","24"),s.setAttribute("height","24"),s.setAttribute("fill","currentColor");const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",a.all[e].path),s.appendChild(n),t.appendChild(s),t}}},n=function({text:e=!1,type:t=!1,round:s=!1,block:n=!1,size:i=!1,style:r=[],ring:o=!1,title:d=!1,classList:c=[],iconName:u=!1,func:m=!1,sr:p=!1}={}){if(this.button=l("button|class:button,tabindex:1,type:button"),e){const t=l("span:"+e+"|class:button__text");this.button.appendChild(t)}if(p){const e=l("span:"+p+"|class:sr__only");this.button.appendChild(e)}switch(t){case"secondary":this.button.classList.add("button__secondary");break;case"success":this.button.classList.add("button__success");break;case"danger":this.button.classList.add("button__danger");break;case"link":this.button.classList.add("button__link");break;default:this.button.classList.add("button__primary")}if(u){const e=l("span|class:button-icon",[a.render(u)]);this.button.appendChild(e)}switch(o&&this.button.classList.add("button__ring"),n&&this.button.classList.add("button__block"),s&&this.button.classList.add("button__round"),i){case"small":this.button.classList.add("button__small");break;case"large":this.button.classList.add("button__large")}r.length>0&&r.forEach((e,t)=>{switch(e){case"link":this.button.classList.add("button__link")}}),d&&this.button.setAttribute("title",d),c.length>0&&c.forEach((e,t)=>{this.button.classList.add(e)}),m&&this.button.addEventListener("click",e=>{m()}),this.disable=()=>{this.button.disabled=!0},this.enable=()=>{this.button.disabled=!1},this.deactive=()=>{this.button.classList.remove("active")},this.active=()=>{this.button.classList.add("active")}},i={name:{display:"Dice Roller",string:"diceRoller"},render:()=>{document.title=i.name.display}};s(2);const r={state:{}};r.state.current=[{dice:{count:1,size:20,modifier:2},rules:{dropLowest:!1}},{dice:{count:6,size:6,modifier:6},rules:{dropLowest:!1}}],r.element=l("div|class:formula"),r.delay=100,r.default={dice:{count:1,size:20,modifier:0},rules:{dropLowest:!1}},r.add=()=>{r.state.current.push(JSON.parse(JSON.stringify(r.default)))},r.remove=e=>{r.state.current.splice(e,1),0===r.state.current.length&&r.add()},r.reset=()=>{r.state.current=JSON.parse(JSON.stringify([r.default]))},r.clear=()=>{for(;r.element.lastChild;)r.element.removeChild(r.element.lastChild)},r.render=()=>(r.update(),r.element),r.update=()=>{r.clear();const e=l("div|class:formula__body");r.state.current.forEach((t,s)=>{const a=l("div|class:formula__set");let i=null;const o=new n({iconName:"minus",round:!0,ring:!0,size:"small",type:"danger",sr:"Remove formula",classList:["formula__remove"],func:()=>{i=window.setTimeout((function(){r.remove(s),r.update(),m.state.save()}),r.delay)}}),d=new v(t,s);r.state.current.length>1&&a.appendChild(o.button),a.appendChild(d.count),a.appendChild(d.size),a.appendChild(d.modifier),e.appendChild(a)});let t=null;const s=new n({iconName:"plus",round:!0,ring:!0,size:"small",sr:"Add formula",classList:["formula__add"],func:()=>{t=window.setTimeout((function(){r.add(),r.update(),m.state.save()}),r.delay)}});r.element.appendChild(e),r.element.appendChild(l("div|class:formula__control",[s.button]))};s(3);const o={random:(e,t)=>Math.round(Math.random()*(t-e))+e,reducer:(e,t)=>e+t};o.roll=e=>(e.total=0,e.timestamp=null,e.formula.forEach((t,s)=>{t.result={},t.result.rolls={all:[]};for(s=0;s<t.dice.count;s++)t.result.rolls.all.push(o.random(1,t.dice.size));t.result.total=t.result.rolls.all.reduce(o.reducer)+t.dice.modifier,t.result.rolls.lowest=Math.min(...t.result.rolls.all),t.result.rolls.highest=Math.max(...t.result.rolls.all),t.rules.dropLowest&&(t.result.total=t.result.total-t.result.rolls.lowest),e.total=e.total+t.result.total}),e.timestamp=function(){const e=new Date;return{date:e.getDate(),day:e.getDay(),year:e.getFullYear(),hours:e.getHours(),milliseconds:e.getMilliseconds(),minutes:e.getMinutes(),month:e.getMonth(),monthString:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],seconds:e.getSeconds()}}(),e);s(4);const d={state:{}};d.state.history=[],d.state.count={max:50},d.state.full=!1,d.history={},d.history.add=e=>{d.state.history.push(JSON.parse(JSON.stringify(e)))},d.history.clear=e=>{d.state.history=[]},d.element={root:l("div|class:result"),history:l("div|class:result__history"),control:l("div|class:result__control")},d.clear=()=>{for(;d.element.history.lastChild;)d.element.history.removeChild(d.element.history.lastChild)},d.render=()=>{d.element.root.appendChild(d.element.control),d.element.root.appendChild(d.element.history),d.control();const e=JSON.parse(JSON.stringify(d.state.history)).reverse().slice(0,d.state.count.max);return e&&e.length>0&&e.forEach((e,t)=>{d.element.history.appendChild(d.resultItem(e))}),d.element.root},d.control=()=>{const e=new n({iconName:"chevronUp",round:!0,ring:!0,type:"link",sr:"Toggle result",classList:["result__full"],func:()=>{d.full.toggle(),m.state.save(),d.full.render()}}),t=new n({text:"Roll the dice",ring:!0,type:"success",func:()=>{d.history.add(o.roll({name:!1,formula:JSON.parse(JSON.stringify(r.state.current))})),m.state.save(),d.update()}});d.element.control.appendChild(e.button),d.element.control.appendChild(t.button)},d.full={},d.full.toggle=()=>{d.state.full?d.state.full=!1:d.state.full=!0},d.full.render=()=>{const e=document.querySelector("html");d.state.full?e.classList.add("is-result-full"):e.classList.remove("is-result-full")},d.update=()=>{const e=JSON.parse(JSON.stringify(d.state.history))[d.state.history.length-1];e&&d.element.history.prepend(d.resultItem(e)),d.state.history.length>d.state.count.max&&d.element.history.removeChild(d.element.history.lastChild)},d.resultItem=e=>{const t=l("div|class:result__item"),s=l(`div:${e.total}|class:result__total`),a=l("div|class:result__details"),n=l("div|class:result__timestamp");return n.textContent=`${e.timestamp.hours<10?"0"+e.timestamp.hours:e.timestamp.hours}:${e.timestamp.minutes<10?"0"+e.timestamp.minutes:e.timestamp.minutes}:${e.timestamp.seconds<10?"0"+e.timestamp.seconds:e.timestamp.seconds} ${e.timestamp.date}/${e.timestamp.monthString}/${e.timestamp.year}`,e.name&&a.appendChild(l(`div:${e.name}|class:result__name`)),e.formula.forEach((e,t)=>{const s=l("div|class:result__formula"),n=l("div|class:result__formula-dice");let i="";e.dice.count>1&&(i+=e.dice.count),i=i+" d"+e.dice.size,e.dice.modifier>0?i=i+" +"+e.dice.modifier:e.dice.modifier<0&&(i=i+" "+e.dice.modifier),n.textContent=i,s.appendChild(n);const r=l("div|class:result__rolls"),o=l("div:Rolled\\:|class:result__rolls-title"),d=l("ul|class:result__rolls-list list__inline list__unstyled");e.result.rolls.all.forEach((t,s)=>{const a=l(`li:${t}|class:result__rolls-list-item`);20===e.dice.size&&20===t?a.classList.add("result__critical-success"):20===e.dice.size&&1===t&&a.classList.add("result__critical-failure"),d.appendChild(a)}),r.appendChild(o),r.appendChild(d),s.appendChild(r),a.appendChild(s)}),a.appendChild(n),t.appendChild(s),t.appendChild(a),t};const c={state:{}};c.state.current=[{name:"Short sword +1",formula:[{dice:{count:1,size:20,modifier:6},rules:{dropLowest:!1}}]},{name:"Melee damage",formula:[{dice:{count:1,size:6,modifier:4},rules:{dropLowest:!1}},{dice:{count:1,size:4,modifier:1},rules:{dropLowest:!1}}]}],c.add=()=>{const e={name:"",formula:JSON.parse(JSON.stringify(r.state.current))};c.state.current.push(e)},c.remove=e=>{c.state.current.splice(e,1)},c.up=e=>{if(e>0){let t=c.state.current.splice(e,1)[0];c.state.current.splice(e-1,0,t)}},c.down=e=>{if(e<c.state.current.length){let t=c.state.current.splice(e,1)[0];c.state.current.splice(e+1,0,t)}},c.element=l("div|class:saved"),c.delay=100,c.clear=()=>{for(;c.element.lastChild;)c.element.removeChild(c.element.lastChild)},c.render=()=>(c.update(),c.element),c.update=()=>{c.clear();let e=null;const t=l("div|class:saved__body");c.state.current.length>0&&c.state.current.forEach((e,s)=>{t.appendChild(c.savedItem(e,s))});const s=new n({text:"Save current formula",ring:!0,type:"link",size:"small",func:()=>{e=window.setTimeout((function(){c.add(),m.state.save(),c.update()}),c.delay)}});c.element.appendChild(s.button),c.element.appendChild(t)},c.savedItem=(e,t)=>{const s=l("div|class:saved__item"),a=l("div|class:saved__name"),i=l("label:Saved formula name|class:saved__name-label sr__only,for:saved__name-"+t),r=l(`input|class:saved__name-input input__small,id:saved__name-${t},type:text,value:${e.name},placeholder:Saved formula name,tabindex:1`);r.addEventListener("input",()=>{e.name=r.value,m.state.save()});const u=l("div|class:saved__formula"),p=l("div|class:saved__controls");e.formula.forEach((e,t)=>{const s=l("div|class:saved__formula-dice");let a="";e.dice.count>1&&(a+=e.dice.count),a=a+" d"+e.dice.size,e.dice.modifier>0?a=a+" +"+e.dice.modifier:e.dice.modifier<0&&(a=a+" "+e.dice.modifier),s.textContent=a,u.appendChild(s)});let h=null;const _=new n({iconName:"minus",round:!0,ring:!0,type:"link",size:"small",sr:"Remove formula",classList:["saved__remove"],func:()=>{h=window.setTimeout((function(){c.remove(t),m.state.save(),c.update()}),c.delay)}}),v=new n({iconName:"chevronUp",round:!0,ring:!0,type:"link",size:"small",sr:"Move formula up",classList:["saved__up"],func:()=>{h=window.setTimeout((function(){c.up(t),m.state.save(),c.update()}),c.delay)}}),f=new n({iconName:"chevronDown",round:!0,ring:!0,type:"link",size:"small",sr:"Move formula down",classList:["saved__down"],func:()=>{h=window.setTimeout((function(){c.down(t),m.state.save(),c.update()}),c.delay)}}),y=new n({text:"Roll",ring:!0,type:"success",size:"small",classList:["saved__roll"],func:()=>{d.history.add(o.roll(e)),m.state.save(),d.update()}});return p.appendChild(_.button),p.appendChild(v.button),p.appendChild(f.button),s.appendChild(p),a.appendChild(i),a.appendChild(r),s.appendChild(a),s.appendChild(u),s.appendChild(y.button),s};s(5);const u={state:{}};u.state={style:"dark"},u.style={},u.style.toggle=e=>{if(!e||"dark"!==e&&"light"!==e)switch(u.state.style){case"light":u.state.style="dark";break;case"dark":u.state.style="light"}else u.state.style=e},u.style.render=()=>{const e=document.querySelector("html");switch(u.state.style){case"light":e.classList.add("is-theme-light"),e.classList.remove("is-theme-dark");break;case"dark":e.classList.remove("is-theme-light"),e.classList.add("is-theme-dark")}},u.keyboard={},u.keyboard.bind=()=>{window.addEventListener("keydown",e=>{e.ctrlKey&&e.altKey&&68==e.keyCode&&(u.style.toggle(),m.state.save(),u.style.render(),u.toggle.update())})},u.toggle={},u.toggle.render=()=>{const e=l("input|type:checkbox,class:theme__style-input,id:theme__style-input,tabindex:1"),t=l("label|class:theme__style-label button button__link button__ring button__small,for:theme__style-input,for:theme__style-input",[l("span|class:theme__style-icon"),l("span|class:theme__style-text",[l("span:Light|class:theme__style-text-light"),l("span:Dark|class:theme__style-text-dark")])]),s=l("div|class:theme__style-toggle",[e,t]);switch(u.state.style){case"light":e.checked=!1;break;case"dark":e.checked=!0}return e.addEventListener("change",t=>{e.checked?(u.style.toggle("dark"),u.state.style="dark"):(u.style.toggle("light"),u.state.style="light"),m.state.save(),u.style.render()}),s},u.toggle.update=()=>{switch(u.state.style){case"light":document.querySelector(".theme__style-input").checked=!1;break;case"dark":document.querySelector(".theme__style-input").checked=!0}};const m={state:{}};m.state.save=()=>{const e={[i.name.string]:!0,formula:r.state,saved:c.state,result:d.state,theme:u.state};m.save(e)},m.state.load=()=>{const e=m.load();e&&e[i.name.string]&&(r.state=e.formula,c.state=e.saved,d.state=e.result,u.state=e.theme)},m.save=e=>{localStorage.setItem(i.name.string,JSON.stringify(e))},m.load=()=>JSON.parse(localStorage.getItem(i.name.string)),m.clear=()=>{localStorage.removeItem(i.name.string)};const p={render:(e,t)=>{const s=l("div|class:formula__item formula__count");let a=null;const n=t=>{let s=parseInt(t,10);return(isNaN(t)||""===t)&&(s=1),t>100&&(s=100),t<1&&(s=1),clearTimeout(a),a=window.setTimeout((function(){r.value=e.count}),1500),s},i=l("label:Dice count|class:sr__only,for:formula__count-input-"+t),r=l(`input|class:formula__count-input,id:formula__count-input-${t},type:number,value:${e.count},tabindex:1,min:1,max:100`);r.addEventListener("input",()=>{e.count=n(r.value),m.state.save()}),r.addEventListener("blur",t=>{r.value=e.count});let o=null;return r.addEventListener("touchstart",e=>{o=parseInt(r.value,10),r.focus()}),r.addEventListener("touchend",e=>{o=null,r.blur()}),r.addEventListener("touchmove",t=>{t.preventDefault();let s=o+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.count=n(s),r.value=e.count,m.state.save()}),s.appendChild(i),s.appendChild(r),s}},h={availableDice:[2,3,4,6,8,10,12,20,100],render:(e,t)=>{const s=l("div|class:formula__item formula__size"),n=l("div|class:formula__size-display"),i=l("div|class:formula__size-text"),r=l("div|class:formula__size-icon",[a.render("chevronDown")]);n.appendChild(i),n.appendChild(r);const o=l("label:Dice size|class:sr__only,for:formula__size-select-"+t),d=l(`select|class:formula__size-select,id:formula__size-select-${t},tabindex:1`);d.addEventListener("change",()=>{e.size=d.selectedOptions[0].size,i.textContent="d"+e.size,m.state.save()}),h.availableDice.forEach((t,s)=>{const a=l(`option:d${t}|value:${t}`);a.size=t,e.size===t&&(a.selected=!0,i.textContent="d"+t),d.appendChild(a)});let c=null;return d.addEventListener("touchstart",e=>{c=d.selectedIndex,d.focus()}),d.addEventListener("touchend",e=>{c=null,d.blur()}),d.addEventListener("touchmove",t=>{t.preventDefault();let s=c+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);s<0&&(s=0),s>h.availableDice.length-1&&(s=h.availableDice.length-1),e.size=h.availableDice[s],d.selectedIndex=s,i.textContent="d"+e.size,m.state.save()}),s.appendChild(o),s.appendChild(d),s.appendChild(n),s}},_={render:(e,t)=>{const s=l("div|class:formula__item formula__modifier");let a=null;const n=t=>{let s=parseInt(t,10);return(isNaN(t)||""===t)&&(s=0),t>999&&(s=999),t<-999&&(s=-999),clearTimeout(a),a=window.setTimeout((function(){o.value=i(e.modifier)}),1500),s},i=e=>e>=0?"+"+e:e,r=l("label:Dice modifier|class:sr__only,for:formula__modifier-input-"+t),o=l(`input|class:formula__modifier-input,id:formula__modifier-input-${t},type:text,tabindex:1`);o.value=i(e.modifier),o.addEventListener("input",()=>{e.modifier=n(o.value),m.state.save()}),o.addEventListener("blur",t=>{o.value=i(n(e.modifier))});let d=null;return o.addEventListener("touchstart",e=>{d=parseInt(o.value,10),o.focus()}),o.addEventListener("touchend",e=>{d=null,o.blur()}),o.addEventListener("touchmove",t=>{t.preventDefault();let s=d+-1*Math.round((t.changedTouches[0].clientY-t.target.getBoundingClientRect().top)/25);e.modifier=n(s),o.value=i(e.modifier),m.state.save()}),o.addEventListener("keydown",t=>{38===t.keyCode&&(e.modifier=e.modifier+1,o.value=i(e.modifier)),40===t.keyCode&&(e.modifier=e.modifier-1,o.value=i(e.modifier)),m.state.save()}),s.appendChild(r),s.appendChild(o),s}},v=function(e,t){this.count=p.render(e.dice,t),this.size=h.render(e.dice,t),this.modifier=_.render(e.dice,t)};s(6),s(7),s(8),s(9),s(10),s(11),s(12),s(13);s(14);s(15);const f={keyboard:{}};f.keyboard.bind=()=>{window.addEventListener("keydown",e=>{e.ctrlKey&&e.altKey&&82==e.keyCode&&(d.history.add(o.roll({name:!1,formula:JSON.parse(JSON.stringify(r.state.current))})),m.state.save(),d.update())})},f.render=()=>{const e=l("div|class:roll"),t=new n({text:"Roll the dice",ring:!0,size:"large",type:"success",func:()=>{d.history.add(o.roll({name:!1,formula:JSON.parse(JSON.stringify(r.state.current))})),m.state.save(),d.update()}});return e.appendChild(t.button),e};s(16);const y={};y.element=l("div|class:toolbar"),y.render=()=>{const e=new n({text:"Clear history",ring:!0,type:"link",size:"small",func:()=>{d.history.clear(),m.state.save(),d.clear()}}),t=new n({text:"Clear formula",ring:!0,type:"link",size:"small",func:()=>{r.reset(),m.state.save(),r.update()}});return y.element.appendChild(t.button),y.element.appendChild(e.button),y.element.appendChild(u.toggle.render()),y.element};s(17);const g={colour:{}};g.colour.render=()=>l("section",[l("div|class:styleguide__colour",[l("div|class:styleguide__colour-primary",[l("div|class:styleguide__colour-primary-100"),l("div|class:styleguide__colour-primary-200"),l("div|class:styleguide__colour-primary-300"),l("div|class:styleguide__colour-primary-400"),l("div|class:styleguide__colour-primary-500"),l("div|class:styleguide__colour-primary-600"),l("div|class:styleguide__colour-primary-700"),l("div|class:styleguide__colour-primary-800"),l("div|class:styleguide__colour-primary-900")]),l("div|class:styleguide__colour-secondary",[l("div|class:styleguide__colour-secondary-100"),l("div|class:styleguide__colour-secondary-200"),l("div|class:styleguide__colour-secondary-300"),l("div|class:styleguide__colour-secondary-400"),l("div|class:styleguide__colour-secondary-500"),l("div|class:styleguide__colour-secondary-600"),l("div|class:styleguide__colour-secondary-700"),l("div|class:styleguide__colour-secondary-800"),l("div|class:styleguide__colour-secondary-900")]),l("div|class:styleguide__colour-success",[l("div|class:styleguide__colour-success-100"),l("div|class:styleguide__colour-success-200"),l("div|class:styleguide__colour-success-300"),l("div|class:styleguide__colour-success-400"),l("div|class:styleguide__colour-success-500"),l("div|class:styleguide__colour-success-600"),l("div|class:styleguide__colour-success-700"),l("div|class:styleguide__colour-success-800"),l("div|class:styleguide__colour-success-900")]),l("div|class:styleguide__colour-danger",[l("div|class:styleguide__colour-danger-100"),l("div|class:styleguide__colour-danger-200"),l("div|class:styleguide__colour-danger-300"),l("div|class:styleguide__colour-danger-400"),l("div|class:styleguide__colour-danger-500"),l("div|class:styleguide__colour-danger-600"),l("div|class:styleguide__colour-danger-700"),l("div|class:styleguide__colour-danger-800"),l("div|class:styleguide__colour-danger-900")])]),l("div|class:styleguide__colour",[l("div|class:styleguide__colour-black"),l("div|class:styleguide__colour-white")])]);const b={Button:n,ControlSet:v,global:i,base:{},data:m,theme:u,layout:{},icon:a,dice:o,count:p,size:h,modifier:_,roll:f,result:d,formula:r,saved:c,toolbar:y,styleguide:g},w={};w.element=document.querySelector(".app"),w.clear=()=>{for(;w.element.lastChild;)w.element.removeChild(w.element.lastChild)},w.render=()=>{[l("div|class:layout",[l("section|class:layout__toolbar",[b.toolbar.render()]),l("section|class:layout__formula",[l("section|class:layout__wrap",[l("section|class:layout__controls",[b.formula.render(),b.roll.render(),b.saved.render()])])]),l("section|class:layout__result",[l("section|class:layout__wrap",[b.result.render()])])])].forEach((e,t)=>{w.element.appendChild(e)})},w.update=()=>{w.clear(),w.render()},b.data.state.load(),b.theme.style.render(),b.theme.keyboard.bind(),b.result.full.render(),b.roll.keyboard.bind(),b.global.render(),w.render()}]);