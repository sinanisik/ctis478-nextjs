_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{Nanw:function(e,n,t){e.exports={heading:"CountriesTable_heading__29EoE",heading_name:"CountriesTable_heading_name__HoKXe",heading_flag:"CountriesTable_heading_flag__6S6a5",row:"CountriesTable_row__30sh-",name:"CountriesTable_name__1LYDW",flag:"CountriesTable_flag__2L7jz"}},RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return h})),t.d(n,"default",(function(){return g}));var r=t("nKUr"),a=t("q1tI"),c=t("Qog0"),i=t("rePB");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=t("jONP"),u=t.n(s);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e){var n=o({},e);return Object(r.jsx)("div",{className:u.a.wrapper,children:Object(r.jsx)("input",j({className:u.a.input,placeholder:"Search by name"},n))})},f=t("Nanw"),p=t.n(f),d=t("YFqc"),_=t.n(d),O=function(e){var n=e.countries;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:p.a.heading,children:[Object(r.jsx)("button",{className:p.a.heading_name,children:Object(r.jsx)("div",{children:"Name"})}),Object(r.jsx)("button",{className:p.a.heading_flag,children:Object(r.jsx)("div",{children:"Flag"})})]}),n.map((function(e){return Object(r.jsx)(_.a,{href:"/country/".concat(e.alpha3Code),children:Object(r.jsxs)("div",{className:p.a.row,children:[Object(r.jsx)("div",{className:p.a.name,children:e.name}),Object(r.jsx)("div",{className:p.a.flag,children:Object(r.jsx)("img",{src:e.flag})})]})})}))]})},h=!0;function g(e){var n=e.countries,t=Object(a.useState)(""),i=t[0],o=t[1],s=n.filter((function(e){return e.name.toLowerCase().includes(i)}));return Object(r.jsxs)(c.a,{title:"Home Page",children:[Object(r.jsxs)("div",{children:["Total countries: ",n.length]}),Object(r.jsx)(b,{onChange:function(e){e.preventDefault(),o(e.target.value.toLowerCase())}}),Object(r.jsx)(O,{countries:s})]})}},jONP:function(e,n,t){e.exports={wrapper:"SearchInput_wrapper__2fHps",input:"SearchInput_input__-OC1H"}},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2,3]]]);