(this.webpackJsonpdk_covid=this.webpackJsonpdk_covid||[]).push([[0],{12:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(57),l=a.n(c),o=a(1),u=a.n(o),s=a(4),i=a(58),d=a(59),m=a(63),p=a(62),f=(a(70),a(12),a(20)),v=a.n(f),b=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,l=t.lastUpdate,o=e.country,u="Total Number of people infected in ".concat(o),s="Total Number of people recovered in ".concat(o),i="Total Number of people died in ".concat(o);return a?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-block infected"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"card-title"},"Infected People"),r.a.createElement("h6",{className:"card-title"},r.a.createElement(v.a,{start:0,end:a.value,duration:1,separator:","})),r.a.createElement("small",{className:"card-title"},new Date(l).toDateString()),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},o?u:"Total Number of people who got infected around the world"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-block recovered"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"card-title"},"Recovered People"),r.a.createElement("h6",{className:"card-title"},r.a.createElement(v.a,{start:0,end:n.value,duration:1,separator:","})),r.a.createElement("small",{className:"card-title"},new Date(l).toDateString()),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},o?s:"Total Number of people who got recovered around the world"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-block deaths"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h4",{className:"card-title"},"People who died"),r.a.createElement("h6",{className:"card-title"},r.a.createElement(v.a,{start:0,end:c.value,duration:1,separator:","})),r.a.createElement("small",{className:"card-title"},new Date(l).toDateString()),r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},o?i:"Total Number of people who died around the world"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))):r.a.createElement("div",{class:"container"},r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"Loading....")))},E=a(19),h=a(21),N=a.n(h),g="https://covid19.mathdro.id/api",y=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r,c,l,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g,t&&(a="".concat(g,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,l=r.recovered,o=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:l,deaths:o,lastUpdate:s});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(g,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=a(31),j=function(e){var t=e.data,a=t.confirmed,c=t.recovered,l=t.deaths,o=e.country,i=Object(n.useState)([]),d=Object(E.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,w();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(k.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"blue",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",fill:!0}]}}):null,v=a?r.a.createElement(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,l.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return r.a.createElement("div",{className:"container"},o?v:f)},O=function(e){var t=e.countrychange,a=Object(n.useState)([]),c=Object(E.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{align:"center",className:"my-4"},r.a.createElement("select",{onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"",selected:!0},"Global"),l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},D=a(61),S=a.n(D),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.countrychange=function(){var t=Object(s.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a}),console.log(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:S.a,alt:"Image Not Found",className:"d-block mx-auto mt-4 pt-4"}),r.a.createElement(b,{data:this.state.data,country:this.state.country}),r.a.createElement(O,{countrychange:this.countrychange}),r.a.createElement(j,{data:this.state.data,country:this.state.country}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(r.a.Component);l.a.render(r.a.createElement(C,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a.p+"static/media/covid19.d7265326.png"},64:function(e,t,a){e.exports=a(183)},70:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.06430c03.chunk.js.map