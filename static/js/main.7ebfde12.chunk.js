(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{30:function(e,n,t){e.exports=t(40)},38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a,r,o,c,i,l,d,s,u,p,b,m,x,g,f,v,O,j,E,k,h,y,w,I,T,z,C,S,R,A,N,P,D,M,W,U,B,X,Y,H=t(0),F=t.n(H),J=t(26),V=t.n(J),G=(t(38),t(3)),L=t(4),q=t(14),K=t(2),Q=t(5),Z=Q.a.div(a||(a=Object(L.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),$=Q.a.div(r||(r=Object(L.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),_=Q.a.div(o||(o=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),ee=Q.a.div(c||(c=Object(L.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),ne=Q.a.table(i||(i=Object(L.a)([""]))),te=function(e){var n=e.title,t=e.component,a=e.propDocs;return F.a.createElement(Z,null,F.a.createElement(_,null,n),F.a.createElement($,null,F.a.createElement(ee,null,t),F.a.createElement(ne,null,F.a.createElement("thead",null,F.a.createElement("tr",null,F.a.createElement("th",null,"Prop"),F.a.createElement("th",null,"Description"),F.a.createElement("th",null,"Type"),F.a.createElement("th",null,"Default value"))),F.a.createElement("tbody",null,a.map((function(e,n){return F.a.createElement("tr",{key:n},F.a.createElement("td",null,e.prop),F.a.createElement("td",null,e.description),F.a.createElement("td",null,e.type),F.a.createElement("td",null,F.a.createElement("code",null,e.defaultValue)))}))))))},ae={small:10,medium:14,large:20},re=Q.a.div(l||(l=Object(L.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),oe=Q.a.span(d||(d=Object(L.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),ce=Q.a.div(s||(s=Object(L.a)(["\n  display: flex;\n"]))),ie=function(e){var n=e.size,t=void 0===n?"medium":n,a=e.color,r=void 0===a?"#ffa2bf":a;return F.a.createElement(re,null,F.a.createElement(ce,null,F.a.createElement(oe,{size:ae[t],color:r}),F.a.createElement(oe,{size:ae[t],color:r})),F.a.createElement(ce,null,F.a.createElement(oe,{size:ae[t],color:r}),F.a.createElement(oe,{size:ae[t],color:r})))},le=Q.a.div(u||(u=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),de=Q.a.div(p||(p=Object(L.a)(["\n  font-size: 2rem;\n"]))),se=function(){return F.a.createElement(le,null,F.a.createElement("div",null,F.a.createElement(de,null,"Documentation"),F.a.createElement(te,{title:"Loading spinner ",component:F.a.createElement(ie,null),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]})))},ue=t(10),pe=t(6),be=t(8),me=Q.a.div(b||(b=Object(L.a)(["\n  transition: opacity 0.5s ease-in-out;\n  font-size: 60px;\n  z-index: 0;\n  font-weight: 200;\n  padding: 7px 7px;\n  margin-bottom: 10px;\n  color: red;\n  text-align: center;\n  background-color: #121212;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  position: relative;\n\n  /* Outer background layer with red lines */\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n\n\n  \n  }\n"]))),xe=function(e){var n=("0"+Math.floor(e/6e4%60)).slice(-2),t=("0"+Math.floor(e/1e3%60)).slice(-2);return"".concat(n,":").concat(t)},ge=function(e){var n=e.time;return F.a.createElement(me,null,xe(n))},fe=Q.a.div(m||(m=Object(L.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  flex-direction: row;\n  align-items: center;\n  background-color: #121212;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),ve=Q.a.div(x||(x=Object(L.a)(["\n  flex: 1;\n  align-items: center;\n  border-radius: 25px;\n  margin: 10px;\n  background-color: black;\n"]))),Oe=Q.a.label(g||(g=Object(L.a)(["\n  flex: 1; \n  font-weight: 300;\n  font-size: 16px;\n  background-color: black;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n"]))),je=Q.a.select(f||(f=Object(L.a)(["\n  flex: 1;\n  font-weight: 300;\n  font-size: 16px;\n  padding: 7px;\n  margin: 10px 0px 10px 10px;\n  background-color: darkred;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 25px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: black;\n  }\n"]))),Ee=function(e){var n=e.minutes,t=e.setMinutes,a=e.seconds,r=e.setSeconds,o=e.disabled,c=(e.onStart,function(e,n){for(var t=[],a=e;a<=n;a++)t.push(F.a.createElement("option",{key:a,value:a},a<10?"0".concat(a):a));return t});return F.a.createElement(fe,null,F.a.createElement(ve,null,F.a.createElement(Oe,null,"MINUTES:"),F.a.createElement(je,{value:n,onChange:function(e){return t(Number(e.target.value))},disabled:o},c(0,59))),F.a.createElement(ve,null,F.a.createElement(Oe,null,"SECONDS:"),F.a.createElement(je,{value:a,onChange:function(e){return r(Number(e.target.value))},disabled:o},c(0,59))))},ke=function(e){var n=e.index,t=Object(H.useState)(1e3*(60*e.minutes+e.seconds)),a=Object(G.a)(t,2),r=a[0],o=a[1],c=Object(H.useContext)(tn),i=c.activeIndex,l=c.timers,d=c.setTimers,s=c.setActiveIndex,u=c.timerIsRunning,p=e.index===i;Object(H.useEffect)((function(){var e;return p&&r>0&&u?(console.log({index:n,activeIndex:i}),e=setInterval((function(){o((function(e){return e-1e3}))}),1e3)):p&&0===r&&(console.log({index:n,activeIndex:i}),s(n+1),clearInterval(e)),function(){return clearInterval(e)}}),[r,i,n,p,s,u]);return F.a.createElement("div",{className:"countdown"},F.a.createElement(Ee,{minutes:e.minutes,setMinutes:function(n){var t=l[e.index],a=Object(be.a)(Object(be.a)({},t),{},{minutes:n}),r=Object(pe.a)(l);r.splice(e.index,1,a),d(r)},seconds:e.seconds,setSeconds:function(n){var t=l[e.index],a=Object(be.a)(Object(be.a)({},t),{},{seconds:n}),r=Object(pe.a)(l);r.splice(e.index,1,a),d(r)},disabled:p}),F.a.createElement(ge,{time:r}))},he=Q.a.div(v||(v=Object(L.a)(["\n  width: 100%;\n  height: 94px;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-color: black;\n  overflow: hidden;\n  opacity: ",";\n  transition: opacity 0.5s ease-in-out;\n\n  & > div {\n    width: ","%;\n    height: 100%;\n    border-radius: 10px;\n    background-color: darkred;\n    transition: width 1s linear; \n  }\n"])),(function(e){return e.value>0?1:0}),(function(e){return e.value})),ye=function(e){var n=e.value,t=e.max;return F.a.createElement(he,{value:n/t*100},F.a.createElement("div",null))},we=Q.a.div(O||(O=Object(L.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  flex-direction: row;\n  align-items: center;\n  background-color: #121212;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),Ie=Q.a.div(j||(j=Object(L.a)(["\n  flex: 1;\n  align-items: center;\n  border-radius: 25px;\n  margin: 10px;\n  background-color: black;\n"]))),Te=Q.a.label(E||(E=Object(L.a)(["\nflex: 1; \nfont-weight: 300;\nfont-size: 16px;\nbackground-color: black;\ncolor: #fff;\nborder: none;\ncursor: pointer;\n"]))),ze=Q.a.select(k||(k=Object(L.a)(["\nflex: 1;\n  font-weight: 300;\n  font-size: 16px;\n  padding: 7px;\n  margin: 10px 0px 10px 10px;\n  background-color: darkred;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  border-radius: 25px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: black;\n  }\n"]))),Ce=function(e){var n=e.currentRound,t=e.initialRounds,a=e.onRoundsChange,r=e.disabled,o=e.resting,c=Object(H.useState)(t),i=Object(G.a)(c,2),l=i[0],d=i[1];Object(H.useEffect)((function(){o&&d(n)}),[n,o]);return F.a.createElement(we,null,F.a.createElement(Ie,null,F.a.createElement(Te,null,"ROUND ",n," / ",l),F.a.createElement(ze,{value:l,onChange:function(e){return n=Number(e.target.value),d(n),void a(n);var n},disabled:r||o},function(e,n){for(var t=[],a=e;a<=n;a++)t.push(F.a.createElement("option",{key:a,value:a},a<10?"0".concat(a):a));return t}(1,100))))},Se=function(e){var n=e.rounds,t=e.index,a=1e3*(60*e.minutes+e.seconds),r=Object(H.useState)(a),o=Object(G.a)(r,2),c=o[0],i=o[1],l=Object(H.useState)(!1),d=Object(G.a)(l,2),s=d[0],u=d[1],p=Object(H.useState)(1),b=Object(G.a)(p,2),m=b[0],x=b[1],g=Object(H.useState)(!1),f=Object(G.a)(g,2),v=f[0],O=f[1],j=Object(H.useState)(0),E=Object(G.a)(j,2)[1],k=Object(H.useContext)(tn),h=k.setActiveIndex,y=k.activeIndex,w=k.timers,I=k.setTimers,T=k.timerIsRunning,z=e.index===y;Object(H.useEffect)((function(){var e;return z&&c>0&&T?e=setInterval((function(){(i((function(e){return Math.max(0,e-1e3)})),v)&&E(1e3-1e3*(c/a))}),1e3):z&&0===c?(console.log({index:t,activeIndex:y}),clearInterval(e),v?(O(!1),x((function(e){return e+1})),i(a),u(!0),E(0)):(O(!0),i(a),u(!0)),m>=n&&(h(t+1),x(1),O(!1),i(0),u(!1),E(0))):(console.log({index:t,activeIndex:y}),clearInterval(e)),function(){return clearInterval(e)}}),[s,c,v,a,m,n,y,h,t,z,T]);return F.a.createElement("div",{className:"timer"},F.a.createElement(Ce,{currentRound:m,initialRounds:e.rounds,onRoundsChange:function(e){var n=w[t],a=Object(be.a)(Object(be.a)({},n),{},{rounds:e}),r=Object(pe.a)(w);r.splice(t,1,a),I(r)}}),F.a.createElement(Ee,{minutes:e.minutes,setMinutes:function(n){var t=w[e.index],a=Object(be.a)(Object(be.a)({},t),{},{minutes:n}),r=Object(pe.a)(w);r.splice(e.index,1,a),I(r)},seconds:e.seconds,setSeconds:function(n){var t=w[e.index],a=Object(be.a)(Object(be.a)({},t),{},{seconds:n}),r=Object(pe.a)(w);r.splice(e.index,1,a),I(r)},disabled:s}),F.a.createElement("div",{className:"display-time"},v?F.a.createElement(ye,{value:v?c/a*100:(a-c)/a*100,max:"100"}):F.a.createElement(ge,{time:c})))},Re=Q.a.button(h||(h=Object(L.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 16px;\n  padding: 10px;\n  margin: 5px;\n  background-color: darkred; /* Green color */\n  color: #fff; /* White text */\n  border: none;\n  cursor: pointer;\n  border-radius: 25px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: black; \n  }\n"]))),Ae=function(e){var n=e.onClick,t=e.children;return F.a.createElement(Re,{onClick:n},t)},Ne=Q.a.div(y||(y=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: #121212; \n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),Pe=function(e){var n=e.children;return F.a.createElement(Ne,null,n)},De=function(e){var n=Object(H.useState)(1e3*(60*e.minutes+e.seconds)),t=Object(G.a)(n,2),a=t[0],r=t[1],o=Object(H.useContext)(tn),c=o.activeIndex,i=o.setActiveIndex,l=e.index===c;Object(H.useEffect)((function(){var e;return l?e=setInterval((function(){r((function(e){return e+1e3}))}),1e3):clearInterval(e),function(){return clearInterval(e)}}),[l,c]);return F.a.createElement("div",{className:"stopwatch"},F.a.createElement(ge,{time:a}),F.a.createElement(Pe,null,F.a.createElement(Ae,{onClick:function(){i(e.index+1),r(0)}},F.a.createElement(ue.b,null))))},Me=function(e){var n=e.rounds,t=e.index,a=1e3*(60*e.minutes+e.seconds),r=Object(H.useState)(a),o=Object(G.a)(r,2),c=o[0],i=o[1],l=Object(H.useState)(!1),d=Object(G.a)(l,2),s=d[0],u=d[1],p=Object(H.useState)(1),b=Object(G.a)(p,2),m=b[0],x=b[1],g=Object(H.useContext)(tn),f=g.setActiveIndex,v=g.activeIndex,O=g.timers,j=g.setTimers,E=g.timerIsRunning,k=e.index===v;Object(H.useEffect)((function(){var e;return k&&c>0&&E?e=setInterval((function(){i((function(e){return Math.max(0,e-1e3)}))}),1e3):k&&0===c?(clearInterval(e),x((function(e){return e+1})),m>=n?(f(t+1),x(1),i(0),u(!1)):(i(a),u(!0))):clearInterval(e),function(){return clearInterval(e)}}),[s,c,a,m,n,v,f,t,k,E]);return F.a.createElement("div",{className:"timer"},F.a.createElement(Ce,{currentRound:m,initialRounds:e.rounds,onRoundsChange:function(e){var n=O[t],a=Object(be.a)(Object(be.a)({},n),{},{rounds:e}),r=Object(pe.a)(O);r.splice(t,1,a),j(r)}}),F.a.createElement(Ee,{minutes:e.minutes,setMinutes:function(n){var t=O[e.index],a=Object(be.a)(Object(be.a)({},t),{},{minutes:n}),r=Object(pe.a)(O);r.splice(e.index,1,a),j(r)},seconds:e.seconds,setSeconds:function(n){var t=O[e.index],a=Object(be.a)(Object(be.a)({},t),{},{seconds:n}),r=Object(pe.a)(O);r.splice(e.index,1,a),j(r)},disabled:s}),F.a.createElement("div",{className:"display-time"},F.a.createElement(ge,{time:c})))},We=Q.a.div(w||(w=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ue=Q.a.div(I||(I=Object(L.a)(["\n  border: 1px solid gray;\n  background-color: black;\n  border-radius: 30px;\n  margin: 10px;\n  padding: 20px;\n  font-size: 1.5rem;\n  color: darkred;\n  width: 100%;\n  text-align: center;\n"]))),Be=Q.a.button(T||(T=Object(L.a)(["\n  background-color: darkred;\n  color: white;\n  padding: 10px 20px;\n  margin: 0 10px;\n  border: none;\n  border-radius: 25px;\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:hover {\n    background-color: red;\n  }\n"]))),Xe=Q.a.div(z||(z=Object(L.a)(["\n  display: flex;\n  background-color: black;\n  padding: 25px;\n  background-color: #121212; \n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),Ye=Q.a.div(C||(C=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px;\n"]))),He=Object(Q.a)(q.b)(S||(S=Object(L.a)(["\n  margin-top: 20px;\n  padding: 10px;\n  background-color: #4caf50;\n  color: white;\n  text-decoration: none;\n  border-radius: 25px;\n\n  &:hover {\n    background-color: darkgreen;\n  }\n"]))),Fe=function(){var e=Object(H.useContext)(tn),n=e.activeIndex,t=e.setActiveIndex,a=e.isPaused,r=e.setIsPaused,o=e.setTimerIsRunning,c=e.timers;return F.a.createElement("div",null,F.a.createElement(Xe,null,c.length>0?F.a.createElement(F.a.Fragment,null,F.a.createElement(Be,{onClick:function(){t(0),o(!0)}},"Start"),F.a.createElement(Be,{onClick:function(){t(n+1),r(!1),o(!0)}},F.a.createElement(ue.b,null)),F.a.createElement(Be,{onClick:function(){o(!o),r(!0)}},a?"Play":"Pause")):null),F.a.createElement("div",null),F.a.createElement(Ye,null,F.a.createElement(We,null,c.length>0?c.map((function(e,n){return F.a.createElement(Ue,{key:n},function(e,n){var t;return"COUNTDOWN"===e.componentType&&(t=F.a.createElement(ke,{index:n,minutes:e.minutes,seconds:e.seconds})),"TABATA"===e.componentType&&(t=F.a.createElement(Se,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})),"STOPWATCH"===e.componentType&&(t=F.a.createElement(De,{index:n,minutes:e.minutes,seconds:e.seconds})),"XY"===e.componentType&&(t=F.a.createElement(Me,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})),t}(e,n))})):F.a.createElement("div",null,"Configure your timers!"),F.a.createElement(He,{to:"/add"},F.a.createElement(ue.c,null)))))},Je=Object(Q.a)(q.b)(R||(R=Object(L.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  background-color: gray;\n  color: white;\n  border-radius: 25px;\n  text-decoration: none;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: darkblue;\n  }\n"]))),Ve=Object(Q.a)(ue.a)(A||(A=Object(L.a)(["\n"]))),Ge=Q.a.div(N||(N=Object(L.a)(["\n  display: flex;\n  background-color: black;\n  padding: 25px;\n  background-color: #121212; \n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n  background-image: \n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%),\n    linear-gradient(135deg, transparent 49.5%, rgba(255, 0, 0, 0.2) 49.5%, rgba(255, 0, 0, 0.2) 50.5%, transparent 50.5%);\n  background-size: 30px 30px, 30px 30px, 30px 30px, 30px 30px;\n  background-position: 0 0, 10px 10px, 20px 20px, 15px 15px;\n"]))),Le=Q.a.button(P||(P=Object(L.a)(["\n  background-color: Darkred;\n  color: red;\n  align-items: center;\n  padding: 10px 20px;\n  margin-top: 20px;\n  border: none;\n  border-radius: 25px;\n  font-size: 1.2rem;\n  cursor: pointer;\n\n  &:hover {\n    background-color: red;\n    color: white;\n  }\n"]))),qe=Q.a.button(D||(D=Object(L.a)(["\n  background-color: darkred;\n  color: white;\n  padding: 10px 20px;\n  margin: 0 10px;\n  border: none;\n  border-radius: 25px;\n  font-size: 1rem;\n  font-weight: 400;\n  cursor: pointer;\n\n  &:hover {\n    background-color: red;\n  }\n"]))),Ke=Q.a.div(M||(M=Object(L.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),Qe=Q.a.div(W||(W=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px;\n"]))),Ze=Q.a.div(U||(U=Object(L.a)(["\n  border: 1px solid gray;\n  background-color: black;\n  border-radius: 30px;\n  margin: 10px;\n  padding: 20px;\n  font-size: 1.5rem;\n  color: darkred;\n  width: 100%;\n  text-align: center;\n"]))),$e=Q.a.div(B||(B=Object(L.a)(["\n  margin: 25px;\n  font-weight: bold\n  font-size:;\n"]))),_e=Q.a.div(X||(X=Object(L.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 10px;\n"]))),en=function(e){var n=e.onRemoveTimer,t=Object(H.useState)([]),a=Object(G.a)(t,2),r=a[0],o=a[1],c=Object(H.useContext)(tn),i=c.timers,l=c.setTimers;return F.a.createElement(F.a.Fragment,null,F.a.createElement(Je,{to:"/"},F.a.createElement(Ve,null)),F.a.createElement(Ge,null,[{key:"timer-countdown",title:"Countdown",componentType:"COUNTDOWN"},{key:"timer-tabata",title:"Tabata",componentType:"TABATA"},{key:"timer-stopwatch",title:"Stopwatch",componentType:"STOPWATCH"},{key:"timer-xy",title:"XY",componentType:"XY"}].map((function(e){return F.a.createElement(qe,{key:e.key,onClick:function(){return function(e){console.log({timerItem:e});var n=i.length,t=[].concat(Object(pe.a)(i),[Object(be.a)(Object(be.a)({},e),{},{title:e.title,index:n,key:n,minutes:0,seconds:0})]);l(t)}(e)}},e.title)}))),F.a.createElement("div",null),F.a.createElement(Ke,null,F.a.createElement(Qe,null,i.map((function(e,t){return F.a.createElement(Ze,{key:e.key},F.a.createElement($e,null,e.title),function(e,n){var t;return"COUNTDOWN"===e.componentType&&(t=F.a.createElement(ke,{index:n,minutes:e.minutes,seconds:e.seconds})),"TABATA"===e.componentType&&(t=F.a.createElement(Se,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})),"STOPWATCH"===e.componentType&&(t=F.a.createElement(De,{minutes:e.minutes,seconds:e.seconds,index:n})),"XY"===e.componentType&&(t=F.a.createElement(Me,{index:n,minutes:e.minutes,seconds:e.seconds,rounds:e.rounds})),t}(e,t),F.a.createElement(_e,null,F.a.createElement(Le,{onClick:function(){return function(e){var t=Object(pe.a)(r),a=t.splice(e,1)[0];console.log("Updated Timers:",t),console.log("Removed Timer:",a),n(t,a),o(t)}(t)}},"Remove")))})))))},nn=Q.a.div(Y||(Y=Object(L.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"]))),tn=Object(H.createContext)(null),an=function(){var e=Object(H.useState)([]),n=Object(G.a)(e,2),t=n[0],a=n[1],r=Object(H.useState)(null),o=Object(G.a)(r,2),c=o[0],i=o[1],l=Object(H.useState)(!1),d=Object(G.a)(l,2),s=d[0],u=d[1],p=Object(H.useState)(!1),b=Object(G.a)(p,2),m=b[0],x=b[1],g=Object(H.useState)(),f=Object(G.a)(g,2),v=f[0],O=f[1];return Object(H.useEffect)((function(){console.log("App.js global state active index:",c)}),[c]),Object(H.useEffect)((function(){console.log({timers:t})}),[t]),F.a.createElement(tn.Provider,{value:{timers:t,setTimers:a,timerIsRunning:s,setTimerIsRunning:u,activeIndex:c,setActiveIndex:i,isPaused:m,setIsPaused:x,pausedIndex:v,setPausedIndex:O}},F.a.createElement(nn,null,F.a.createElement(q.a,null,F.a.createElement(K.c,null,F.a.createElement(K.a,{path:"/docs",element:F.a.createElement(se,null)}),F.a.createElement(K.a,{path:"/",element:F.a.createElement(Fe,null)}),F.a.createElement(K.a,{path:"/add",element:F.a.createElement(en,{onRemoveTimer:function(e,n){a(e),console.log("Removed Timer:",n)}})})))))};V.a.createRoot(document.getElementById("root")).render(F.a.createElement(F.a.StrictMode,null,F.a.createElement(an,null)))}},[[30,1,2]]]);
//# sourceMappingURL=main.7ebfde12.chunk.js.map