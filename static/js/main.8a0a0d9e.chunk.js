(this["webpackJsonpshipment-tracking-system"]=this["webpackJsonpshipment-tracking-system"]||[]).push([[0],{57:function(e,t,c){},59:function(e,t,c){},77:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c.n(n),a=c(26),r=c.n(a),i=(c(35),c(36),c(57),c(13)),l=c.n(i),j=c(27),d=c(30),o=(c(59),c(28)),b=c.n(o),u=(c(77),c(4)),m=c(2),h=c(0);var O=function(e){var t=e.AppCallBack;return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"bosta.co",children:Object(h.jsx)("img",{src:"https://bosta.co/wp-content/uploads/2019/08/Component.svg",alt:"Bosta Logo"})}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("div",{className:"navbar-nav",children:[Object(h.jsx)("a",{className:"nav-link",children:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"}),Object(h.jsx)("a",{className:"nav-link",children:"\u0627\u0644\u0623\u0633\u0639\u0627\u0631"}),Object(h.jsx)("a",{className:"nav-link",children:"\u0643\u0644\u0645 \u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a"})]}),Object(h.jsxs)("div",{className:"navbar-nav me-auto left-nav",children:[Object(h.jsxs)("div",{className:"nav-item dropdown",children:[Object(h.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"\u062a\u062a\u0628\u0639 \u0634\u062d\u0646\u062a\u0643"}),Object(h.jsxs)("div",{className:"dropdown-menu mt-3","aria-labelledby":"navbarDropdown",children:[Object(h.jsx)("h5",{children:"\u062a\u062a\u0628\u0639 \u0634\u062d\u0646\u062a\u0643"}),Object(h.jsx)("p",{className:"mb-3",children:"\u0627\u0643\u062a\u0628 \u0631\u0642\u0645 \u0627\u0644\u0634\u062d\u0646\u0629 \u0648\u062a\u0627\u0628\u0639 \u0634\u062d\u0646\u062a\u0643 \u062e\u0637\u0648\u0629 \u0628\u062e\u0637\u0648\u0629"}),Object(h.jsxs)("form",{className:"dropdown-item",onSubmit:function(e){e.preventDefault(),t(e.target.track_num.value)},children:[Object(h.jsx)("input",{type:"text",placeholder:"\u0631\u0642\u0645 \u0627\u0644\u0634\u062d\u0646\u0629",name:"track_num"}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)(u.a,{icon:m.d})})]})]})]}),Object(h.jsx)("a",{className:"nav-link",children:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644"})]})]})]})})},x=(c(83),function(e){return e?e.split("T")[0]:null}),p=function(e){return e.split("T")[1].slice(0,5)};function v(e){switch(e){case"TICKET_CREATED":return"\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0634\u062d\u0646\u0629";case"PACKAGE_RECEIVED":return"\u062a\u0645 \u0648\u0635\u0648\u0644 \u0627\u0644\u0634\u062d\u0646\u0629 \u0644\u0644\u0645\u062e\u0627\u0632\u0646";case"IN_TRANSIT":return"\u0627\u0644\u0634\u062d\u0646\u0629 \u062e\u0631\u062c\u062a \u0645\u0646 \u0627\u0644\u0645\u062e\u0627\u0632\u0646";case"NOT_YET_SHIPPED":return"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0634\u062d\u0646";case"OUT_FOR_DELIVERY":return"\u0627\u0644\u0634\u062d\u0646\u0629 \u062e\u0631\u062c\u062a \u0644\u0644\u062a\u0633\u0644\u064a\u0645";case"WAITING_FOR_CUSTOMER_ACTION":return"\u0644\u0645 \u064a\u062a\u0645 \u062a\u0633\u0644\u064a\u0645 \u0627\u0644\u0634\u062d\u0646\u0629";case"DELIVERED_TO_SENDER":return"\u062a\u0645 \u0625\u0633\u062a\u0631\u062c\u0627\u0639 \u0627\u0644\u0634\u062d\u0646\u0629";case"RECEIVED_DELIVERY_LOCATION":return"\u062a\u0645 \u0625\u0633\u062a\u0644\u0627\u0645 \u0645\u0643\u0627\u0646 \u0627\u0644\u062a\u0633\u0644\u064a\u0645";case"DELIVERED":return"\u062a\u0645 \u0627\u0644\u062a\u0633\u0644\u064a\u0645";default:return e}}function E(e){switch(e){case"DELIVERED":case"DELIVERED_TO_SENDER":return"#1ac45e";default:return"#f6ad0a"}}function N(e){return{color:E(e)}}var f=c(29);c(84);var D=function(e){var t=e.currentShipmentState,c=e.TransitEvents;t="DELIVERED";var n=[Object(h.jsx)(u.a,{icon:m.e}),Object(h.jsx)(u.a,{icon:m.a}),Object(h.jsx)(u.a,{icon:m.f,flip:"horizontal"}),Object(h.jsx)(u.a,{icon:m.c}),Object(h.jsx)(u.a,{icon:m.b})],s=function(e){switch(e){case"TICKET_CREATED":return 1;case"PACKAGE_RECEIVED":return 2;case"OUT_FOR_DELIVERY":case"WAITING_FOR_CUSTOMER_ACTION":return 3;case"DELIVERED_TO_SENDER":case"DELIVERED":return 4;default:return 0}},a=function(e){return s(t)>e?e+1===s(t)?"completed current-state":"completed":""};function r(e,c){return a(e)?"completed current-state"===a(e)&&4!==s(t)?c[e]:c[4]:c[e]}var i,l=function(){return 4===s(t)?"delivered":""},j=Object(f.a)(c);try{for(j.s();!(i=j.n()).done;){var d,o=i.value;o.reason}}catch(b){j.e(b)}finally{j.f()}return Object(h.jsx)("div",{className:"Stepper",children:["\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0634\u062d\u0646\u0629","\u062a\u0645 \u0648\u0635\u0648\u0644 \u0627\u0644\u0634\u062d\u0646\u0629 \u0644\u0644\u0645\u062e\u0627\u0632\u0646","\u0627\u0644\u0634\u062d\u0646\u0629 \u062e\u0631\u062c\u062a \u0644\u0644\u062a\u0633\u0644\u064a\u0645","\u062a\u0645 \u0627\u0644\u062a\u0633\u0644\u064a\u0645"].map((function(e,c){return Object(h.jsxs)("div",{className:"stepper-item "+a(c),children:[Object(h.jsx)("div",{className:"progress-bar "+l()}),Object(h.jsx)("div",{className:"step-counter "+l(),children:r(c,n)}),Object(h.jsxs)("div",{className:"step-name",children:[e,d&&2===c&&Object(h.jsx)("p",{className:"step-reason",style:N(t),children:d})]})]},c)}))})};var g=function(e){var t=e.shipment;return t&&Object(h.jsx)("div",{className:"ShipmentProgress card mt-5",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("div",{className:"details row",children:[Object(h.jsxs)("div",{className:"col-6 col-md-3",children:[Object(h.jsxs)("h6",{children:["\u0631\u0642\u0645 \u0627\u0644\u0634\u062d\u0646\u0629 ",t.TrackingNumber]}),Object(h.jsx)("p",{style:N(t.CurrentStatus.state),children:v(t.CurrentStatus.state)})]}),Object(h.jsxs)("div",{className:"col-6 col-md-3",children:[Object(h.jsx)("h6",{children:"\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b"}),Object(h.jsx)("p",{children:x(t.CurrentStatus.timestamp)+" / "+p(t.CurrentStatus.timestamp)})]}),Object(h.jsxs)("div",{className:"col-6 col-md-3 mt-3 mt-md-0",children:[Object(h.jsx)("h6",{children:"\u0627\u0633\u0645 \u0627\u0644\u062a\u0627\u062c\u0631"}),Object(h.jsx)("p",{children:"AMAZON"})]}),Object(h.jsxs)("div",{className:"col-6 col-md-3 mt-3 mt-md-0",children:[Object(h.jsx)("h6",{children:"\u0645\u0648\u0639\u062f \u0627\u0644\u062a\u0633\u0644\u064a\u0645 \u062e\u0644\u0627\u0644"}),Object(h.jsx)("p",{children:x(t.PromisedDate)||"Unknown"})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(D,{currentShipmentState:t.CurrentStatus.state,TransitEvents:t.TransitEvents})]})})};c(85);var T=function(e){var t=e.transitEvents;return t&&Object(h.jsxs)("div",{className:"ShipmentTransitDetails",children:[Object(h.jsx)("h6",{children:"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0634\u062d\u0646\u0629"}),Object(h.jsxs)("table",{className:"mt-3",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"\u0627\u0644\u0641\u0631\u0639"}),Object(h.jsx)("th",{children:"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"}),Object(h.jsx)("th",{children:"\u0627\u0644\u0648\u0642\u062a"}),Object(h.jsx)("th",{children:"\u062a\u0641\u0627\u0635\u064a\u0644"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0645\u062f\u064a\u0646\u0629 \u0646\u0635\u0631"}),Object(h.jsx)("td",{children:x(e.timestamp)}),Object(h.jsx)("td",{children:p(e.timestamp)}),Object(h.jsxs)("td",{children:[v(e.state),e.reason&&Object(h.jsx)("p",{children:e.reason})]})]},t)}))})]})]})};var C=function(){return Object(h.jsxs)("div",{className:"ShippingAddress mt-4 mt-md-0",children:[Object(h.jsx)("h6",{children:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0633\u0644\u064a\u0645"}),Object(h.jsx)("div",{className:"address-details mt-3",children:Object(h.jsx)("p",{children:"\u0625\u0645\u0628\u0627\u0628\u0629, \u0634\u0627\u0631\u0639 \u0637\u0644\u0639\u062a \u062d\u0631\u0628, \u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0639\u0645\u0627\u0644 \u0628\u062c\u0648\u0627\u0631 \u0627\u0644\u0628\u0631\u0646\u0633 \u0645\u0646\u0632\u0644 \u0661\u0667 \u0628\u0644\u0648\u0643 \u0662\u0662"})})]})};var k=function(){return Object(h.jsx)("div",{className:"Complaint mt-2",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3 align-self-center d-block d-md-none d-xl-block",children:Object(h.jsx)("img",{src:"questionMark.png",alt:"Question Mark"})}),Object(h.jsxs)("div",{className:"col-9 col-md-12 col-xl-9 align-self-center",children:[Object(h.jsx)("p",{children:"\u0647\u0644 \u064a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u0634\u062d\u0646\u062a\u0643 \u061f!"}),Object(h.jsx)("button",{className:"btn",children:"\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0645\u0634\u0643\u0644\u0629"})]})]})})};c(86);var S=function(e){var t=e.parentCallBack;return Object(h.jsxs)("div",{className:"ShipmentInqueryForm",children:[Object(h.jsx)("h4",{children:"\u062a\u062a\u0628\u0639 \u0634\u062d\u0646\u062a\u0643"}),Object(h.jsx)("p",{children:"\u0627\u0643\u062a\u0628 \u0631\u0642\u0645 \u0627\u0644\u0634\u062d\u0646\u0629 \u0648\u062a\u0627\u0628\u0639 \u0634\u062d\u0646\u062a\u0643 \u062e\u0637\u0648\u0629 \u0628\u062e\u0637\u0648\u0629"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.track_num.value)},children:[Object(h.jsx)("input",{type:"text",placeholder:"\u0631\u0642\u0645 \u0627\u0644\u0634\u062d\u0646\u0629",name:"track_num"}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)(u.a,{icon:m.d})})]})]})};var _=function(e){var t=e.shipmentDetails,c=e.AppCallBack;return t?Object(h.jsxs)("div",{className:"ShipmentTracking container",children:[Object(h.jsx)(g,{shipment:t}),Object(h.jsxs)("div",{className:"row mt-4 mb-5",children:[Object(h.jsx)("div",{className:"col-12 col-md-9",children:Object(h.jsx)(T,{transitEvents:t.TransitEvents})}),Object(h.jsxs)("div",{className:"col-12 col-md-3",children:[Object(h.jsx)(C,{}),Object(h.jsx)(k,{})]})]})]}):Object(h.jsx)("div",{className:"center",children:Object(h.jsx)(S,{parentCallBack:c})})};var I=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://tracking.bosta.co/shipments/track/".concat(t));case 2:c=e.sent,s(c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(e){a(e)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{AppCallBack:r}),Object(h.jsx)(_,{AppCallBack:r,shipmentDetails:c})]})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.8a0a0d9e.chunk.js.map