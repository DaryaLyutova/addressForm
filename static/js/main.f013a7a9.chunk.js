(this["webpackJsonpaddress-form"]=this["webpackJsonpaddress-form"]||[]).push([[0],{242:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=n(21),o=n(16),l=r.a.createContext(),j=n(271),u=n(269),d=n(283),b=n(279),m=n(282),x=n(281),O=n(274),h=n(276),p=n(273),g=n(4),f=Object(u.a)((function(e){return{formWrapper:{marginTop:e.spacing(5),marginBottom:e.spacing(8)},gridContainer:{alignItems:"center",justifyContent:"center"},text:{textAlign:"center"}}})),v=function(){var e=r.a.useContext(l),t=Object.values(e).filter((function(e){return!0===!!e})).join(", "),n=f();return Object(g.jsx)(j.a,{maxWidth:"sm",children:Object(g.jsx)("div",{className:n.formWrapper,children:Object(g.jsx)(p.a,{container:!0,spacing:9,className:n.gridContainer,children:Object(g.jsx)(p.a,{item:!0,xs:12,children:Object(g.jsxs)(O.a,{className:n.text,children:["\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438:",t]})})})})})},y=n(110),_=n.n(y),C=n(20);var S=function(e){var t=r.a.useContext(l);return Object(g.jsx)(C.b,{initialValues:{currentAddress:t},children:Object(g.jsx)(C.a,{children:Object(g.jsx)(_.a,{name:"address",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",as:"input",apiKey:"AIzaSyDfcaW_obGfqFyWeLbTXOQnR3rGtO-D6bY",style:{width:"524px",borderRadius:"4px",lineHeight:"1.1876em",fontSize:"1.1876em",height:"1.1876em",margin:0,padding:"18.5px 14px",color:"rgba(0, 0, 0, 0.87)",background:"none"},onPlaceSelected:function(t){e.savedAddress(t)},options:{types:["address"],componentRestrictions:{country:"ru"}}})})})},k=n(278),A=n(32),F=n(68),T=n(280),W=function(e){var t=e.name,n=Object(F.a)(e,["name"]),a=Object(C.c)(t),r=Object(o.a)(a,2),c=r[0],i=r[1],l=Object(s.a)(Object(s.a)(Object(s.a)({},c),n),{},{fullWidth:!0,variant:"outlined"});return i&&i.touched&&i.error&&(l.error=!0,l.helperText=i.error),Object(g.jsx)(T.a,Object(s.a)({},l))},N=function(e){var t=e.children,n=(Object(F.a)(e,["children"]),Object(C.d)().submitForm),a={variant:"contained",color:"primary",fullWidth:!0,onClick:function(){n()}};return Object(g.jsx)(h.a,Object(s.a)(Object(s.a)({},a),{},{children:t}))},q=function(e){var t=r.a.useContext(l),n=A.b().shape({postal_code:A.a().required("*\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),country:A.c().required("*\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),administrative_area:A.c().required("*\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),locality:A.c().required("*\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),route:A.c().required("*\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),street_number:A.c().required("*\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")});return Object(g.jsx)(C.b,{initialValues:t,validationSchema:n,onSubmit:function(t){!function(t){e.onSubmit(t),e.closeForm()}(t)},children:Object(g.jsx)(C.a,{children:Object(g.jsxs)(p.a,{container:!0,spacing:2,children:[Object(g.jsx)(p.a,{item:!0,xs:12,children:Object(g.jsx)(W,{name:"country",label:"\u0421\u0442\u0440\u0430\u043d\u0430"})}),Object(g.jsx)(p.a,{item:!0,xs:12,children:Object(g.jsx)(W,{name:"administrative_area",label:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c, \u0440\u0430\u0439\u043e\u043d"})}),Object(g.jsx)(p.a,{item:!0,xs:12,children:Object(g.jsx)(W,{name:"locality",label:"\u0413\u043e\u0440\u043e\u0434"})}),Object(g.jsx)(p.a,{item:!0,xs:12,children:Object(g.jsx)(W,{name:"route",label:"\u0423\u043b\u0438\u0446\u0430"})}),Object(g.jsx)(p.a,{item:!0,xs:6,children:Object(g.jsx)(W,{name:"street_number",label:"\u2116 \u0434\u043e\u043c\u0430"})}),Object(g.jsx)(p.a,{item:!0,xs:6,children:Object(g.jsx)(W,{name:"postal_code",label:"\u0418\u043d\u0434\u0435\u043a\u0441"})}),Object(g.jsx)(p.a,{item:!0,xs:12,children:Object(g.jsx)(N,{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})})})},w=n(277),B=n(116),I=n.n(B),L=Object(u.a)((function(e){return{gridContainer:{alignItems:"center",justifyContent:"center",marginTop:e.spacing(1),marginBottom:e.spacing(1)}}})),P=function(e){var t=L(),n=r.a.useContext(l),a=Object.values(n).filter((function(e){return!0===!!e})).join(", ");return Object(g.jsxs)(p.a,{container:!0,spacing:2,className:t.gridContainer,children:[Object(g.jsx)(p.a,{item:!0,xs:9,children:Object(g.jsxs)(O.a,{children:["\u0412\u044b \u0432\u0432\u0435\u043b\u0438: ",a]})}),Object(g.jsx)(p.a,{item:!0,xs:2,children:Object(g.jsx)(w.a,{onClick:e.onClick,children:Object(g.jsx)(I.a,{fontSize:"small"})})})]})},R=Object(u.a)((function(e){return{formWrapper:{marginTop:e.spacing(5),marginBottom:e.spacing(8)}}})),z=function(e){var t=R(),n=function(){e.onToggle()};return Object(g.jsxs)("div",{className:t.formWrapper,children:[Object(g.jsx)(S,{savedAddress:e.savedAddress}),e.placeSave?Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)(k.a,{defer:e.placeSave,children:Object(g.jsx)(P,{onClick:n})})}):null,e.placeChange?Object(g.jsx)(r.a.Fragment,{children:Object(g.jsx)(k.a,{defer:e.placeChange,children:Object(g.jsx)(q,{onSubmit:e.onSubmit,closeForm:n})})}):null]})},D=Object(u.a)((function(e){return{root:{width:"100%"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1),textAlign:"center"}}}));function E(e){switch(e){case 0:return"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0441";case 1:return"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b";default:return"Unknown stepIndex"}}function G(e){var t=D(),n=r.a.useContext(l),a=Object.values(n),c=r.a.useState(!1),i=Object(o.a)(c,2),s=i[0],j=i[1],u=r.a.useState(0),p=Object(o.a)(u,2),f=p[0],y=p[1],_=["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0441","\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b"],C=function(){j(!s)};return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsx)(d.a,{activeStep:f,alternativeLabel:!0,children:_.map((function(e){return Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{})},e)}))}),Object(g.jsx)(x.a,{children:f===_.length?Object(g.jsxs)(x.a,{children:[Object(g.jsx)(O.a,{className:t.instructions,variant:"h5",children:E(f-1)}),Object(g.jsx)(v,{}),Object(g.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){y(0)},children:"\u0412\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"})]}):Object(g.jsxs)(x.a,{children:[Object(g.jsx)(O.a,{className:t.instructions,variant:"h5",children:E(f)}),Object(g.jsx)(z,{savedAddress:e.savedAddress,placeSave:e.placeSave,onToggle:C,placeChange:s,onSubmit:e.onSubmit}),Object(g.jsx)("div",{children:Object(g.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){a.every((function(e){return e}))?y((function(e){return e+2})):C()},children:"Next"})})]})})]})}var J=function(){var e=r.a.useState({postal_code:"",country:"",administrative_area:"",locality:"",route:"",street_number:""}),t=Object(o.a)(e,2),n=t[0],a=t[1],c=r.a.useState(!1),i=Object(o.a)(c,2),u=i[0],d=i[1];return Object(g.jsx)(l.Provider,{value:n,children:Object(g.jsx)(j.a,{maxWidth:"sm",children:Object(g.jsx)(G,{savedAddress:function(e){return d(!0),e.address_components.forEach((function(e){switch(e.types[0]){case"street_number":return a(n.street_number=e.long_name);case"route":return a(n.route=e.short_name);case"postal_code":return a(n.postal_code=e.long_name);case"locality":return a(n.locality=e.long_name);case"administrative_area_level_1":return a(n.administrative_area=e.short_name);case"country":return a(n.country=e.long_name);default:return n}})),a(Object(s.a)({},n))},placeSave:u,onSubmit:function(e){a(e)}})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,286)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(241);i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),V()}},[[242,1,2]]]);
//# sourceMappingURL=main.f013a7a9.chunk.js.map