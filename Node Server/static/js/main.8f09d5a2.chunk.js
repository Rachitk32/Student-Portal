(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),s=(t(28),t(29),t(6)),m=t(1);var i=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Student Portal"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.b,{className:"nav-link",to:"/notification"},"Notifications")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/cgpa"},"CGPA Calculator")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(s.b,{className:"nav-link dropdown-toggle",to:"/resources",id:"navbarDropdown",role:"button","data-toggle":"dropdown"},"Resources"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(s.b,{className:"dropdown-item",to:"/"},"Languages"),r.a.createElement(s.b,{className:"dropdown-item",to:"/"},"Data Structures & Algorithms"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(s.b,{className:"dropdown-item",to:"/"},"Others"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link disabled",to:"/","aria-disabled":"true"},"Coming Soon..."))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"User Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Submit"))))},o=t(21),d=t(17),u=t(18),b=t(19),v=t(9),h=t(22),E=t(20),p=function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={subject:"",grade:"",credits:1,arr:[]},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(b.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t=a.name,n=a.value;this.setState(Object(d.a)({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a={subject:this.state.subject,credits:this.state.credits,grade:this.state.grade},t=this.state.arr;t.push(a),document.getElementById("enterSub").focus(),this.setState({arr:t})}},{key:"handleDelete",value:function(e,a){a.preventDefault();var t=this.state.arr;t.splice(e,1),this.setState({arr:t})}},{key:"calGrade",value:function(e){if(0===e.length)return null;var a,t=0,n=0,r=Object(o.a)(e);try{for(r.s();!(a=r.n()).done;){var l=a.value,c=0;switch(l.grade){case"O":case"o":c=10,console.log("reached here");break;case"a+":case"A+":c=9;break;case"a":case"A":c=8;break;case"b+":case"B+":c=7;break;case"b":case"B":c=6;break;case"c":case"C":c=5;break;case"d":case"D":c=4;break;case"f":case"F":c=3;break;default:c=0}n+=c*l.credits,t+=l.credits}}catch(s){r.e(s)}finally{r.f()}return n/t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{className:"mt-sm-1",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3 m-1"},r.a.createElement("input",{className:"form-control",id:"enterSub",type:"text",placeholder:"Enter Subject",name:"subject",value:this.state.subject,onChange:this.handleChange,required:!0,autoFocus:"on"})),r.a.createElement("div",{className:"col-sm-3 m-1"},r.a.createElement("input",{className:"form-control",type:"number",placeholder:"Enter Credits",name:"credits",value:this.state.credits,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"col-sm-3 m-1"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter Grade",name:"grade",maxLength:"2",value:this.state.grade,onChange:this.handleChange,required:!0})),r.a.createElement("div",{className:"col-sm-2 m-1"},r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Submit"))))),r.a.createElement("div",{className:"container-fluid"},this.state.arr.map((function(a,t){return r.a.createElement("form",{className:"mt-sm-1",key:a.subject+a.grade+a.credits,onSubmit:e.handleDelete.bind(e,t)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3 m-1"},r.a.createElement("input",{className:"form-control",value:a.subject,readOnly:!0})),r.a.createElement("div",{className:"col-sm-3 m-1"},r.a.createElement("input",{className:"form-control",value:a.credits,readOnly:!0})),r.a.createElement("div",{className:"col-sm-3 m-1"},r.a.createElement("input",{className:"form-control",value:a.grade,readOnly:!0})),r.a.createElement("div",{className:"col-sm-2 m-1"},r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Delete"))))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm m-1"},r.a.createElement("button",{className:"btn btn-warning",style:{visibility:this.state.arr.length>0?"visible":"hidden"}},this.calGrade(this.state.arr))))))}}]),t}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"notification"},r.a.createElement("h1",null,"Notification"))};var g=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/cgpa",component:p}),r.a.createElement(m.a,{path:"/notification",component:N}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8f09d5a2.chunk.js.map