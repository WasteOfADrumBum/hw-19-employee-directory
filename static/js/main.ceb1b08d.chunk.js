(this["webpackJsonphw-19-employee-directory"]=this["webpackJsonphw-19-employee-directory"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},50:function(e,t,c){},67:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),l=c(29),r=c.n(l),o=(c(44),c(34)),i=c(3),m=(c(45),c(10)),d=c(30),j=c(11);m.b.add(j.b,j.a);var h=function(){return Object(s.jsxs)("nav",{className:"navbar navbar-light bg-light justify-content-between",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"}),Object(s.jsx)("a",{className:"nav-link active",href:"https://github.com/WasteOfADrumBum/hw-19-employee-directory",children:Object(s.jsx)(d.a,{icon:j.a,size:"2x",style:{color:"black"}})})]})},b=function(){return Object(s.jsxs)("div",{className:"jumbotron text-center",children:[Object(s.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(s.jsx)("p",{className:"lead",children:"This is an employee directory created with React."}),Object(s.jsx)("hr",{className:"my-4"}),Object(s.jsx)("p",{children:"An employee or manager benefits greatly from being able to view non-sensitive data about other employees."})]})},p=c(36),u=c(13),y=c(31),O=c(32),x=c(38),v=c(37),f=c(16),N=function(e){function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if((e=e.toString()).length<t)for(var c=t-e.length;c;)e="0"+e,c--;return e}return Object(s.jsxs)("div",{className:"row item-row",children:[Object(s.jsx)("div",{className:"col-sm-1",children:e.id}),Object(s.jsx)("div",{className:"col-md-3",children:e.employee_name}),Object(s.jsx)("div",{className:"col-md-5",children:function(e){var t=e.employee_name.toLowerCase().split(" ");return"".concat(t[0],".").concat(t[1],"@company.com")}(e)}),Object(s.jsx)("div",{className:"col-md-2",children:function(){var e=Math.floor(800*Math.random()+200),c=Math.floor(1e3*Math.random()),s=Math.floor(1e4*Math.random());return"(".concat(t(e),") ").concat(t(c),"-").concat(t(s,4))}()}),Object(s.jsx)("div",{className:"col-sm-1",children:e.employee_age})]})},g=(c(50),function(e){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-12 p-4 text-center",children:Object(s.jsx)("h3",{children:"Employee List"})})}),Object(s.jsxs)("div",{className:"row list-headers",children:[Object(s.jsx)("div",{className:"col-sm-1",children:"ID #"}),Object(s.jsx)("div",{className:"col-md-3",children:"Full Name"}),Object(s.jsx)("div",{className:"col-md-5",children:"Email Address"}),Object(s.jsx)("div",{className:"col-md-2",children:"Phone Number"}),Object(s.jsx)("div",{className:"col-sm-1",children:"Age"})]}),Object(s.jsx)("div",{children:e.employees.map((function(e){return Object(a.createElement)(N,Object(f.a)(Object(f.a)({},e),{},{key:e.id}))}))}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12 p-4 text-right",children:Object(s.jsxs)("i",{children:[e.employees.length," employee(s) listed."]})})})]})}),w=c(33),C=c.n(w);function T(e){var t=["btn"];return e.color&&t.push("btn-"+e.color),Object(s.jsx)("button",{className:t.join(" "),onClick:e.onClick,type:e.type,children:e.children})}T.defaultProps={color:"primary",onClick:function(){return!1},children:"",type:"button"};var D=T,S=function(e){Object(x.a)(c,e);var t=Object(v.a)(c);function c(){var e;Object(y.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],employeesToDisplay:[],searchTerm:""},e.clearFilter=function(){e.setState({employeesToDisplay:e.state.employees,searchTerm:""})},e.getEmployees=function(){C.a.get("https://dummy.restapiexample.com/api/v1/employees").then((function(t){e.setState({employees:t.data.data,employeesToDisplay:t.data.data})})).catch((function(e){console.log(e)}))},e.handleChange=function(t){var c=t.target,s=c.name,a=c.value;e.setState(Object(u.a)({},s,a))},e.handleSubmit=function(t){t.preventDefault();var c=Object(p.a)(e.state.employees).filter((function(t){var c=new RegExp(e.state.searchTerm,"gi");return t.employee_name.match(c)}));e.setState({employeesToDisplay:c})},e}return Object(O.a)(c,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("form",{onSubmit:this.handleSubmit,children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-10",children:Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Search employees by first or last name",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleChange})})}),Object(s.jsx)("div",{className:"col-sm-1",children:Object(s.jsx)(D,{type:"submit",children:"Submit"})}),Object(s.jsx)("div",{className:"col-sm-1",children:this.state.employees.length!==this.state.employeesToDisplay.length&&Object(s.jsx)(D,{color:"secondary",onClick:this.clearFilter,children:"Clear"})})]})})})})}),Object(s.jsx)(g,{employees:this.state.employeesToDisplay})]})}}]),c}(a.Component),k=(c(67),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("div",{className:"row m-0",children:Object(s.jsx)("div",{className:"col-md-12 text-center p-4",children:"Copyright \xa9 2020 Joshua M. Small"})})})});var E=function(){return Object(s.jsxs)(o.a,{basename:"/hw-19-employee-directory/",children:[Object(s.jsx)(h,{}),Object(s.jsx)(b,{}),Object(s.jsx)(i.a,{exact:!0,path:"/",component:S}),Object(s.jsx)(k,{})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};c(70);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),M()}},[[71,1,2]]]);
//# sourceMappingURL=main.ceb1b08d.chunk.js.map