(this["webpackJsonpobserver-progress"]=this["webpackJsonpobserver-progress"]||[]).push([[0],{160:function(t,e,n){},161:function(t,e,n){},188:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),c=n.n(o),r=n(102),l=n.n(r),s=(n(160),n(41)),a=n(42),d=n(110),h=n(109),j=(n.p,n(161),n(202)),f=n(2),x=n(47),b={"\u0422\u0430\u043b\u0430\u0441\u0441\u043a\u0430\u044f":"\u0422\u0430\u043b\u0430\u0441\u0441\u043a\u0430\u044f","\u0433.\u041e\u0448":"\u041e\u0448","\u041e\u0448\u0441\u043a\u0430\u044f":"\u041e\u0448\u0441\u043a\u0430\u044f","\u041d\u0430\u0440\u044b\u043d\u0441\u043a\u0430\u044f":"\u041d\u0430\u0440\u044b\u043d\u0441\u043a\u0430\u044f","\u0414\u0436\u0430\u043b\u0430\u043b-\u0410\u0431\u0430\u0434\u0441\u043a\u0430\u044f":"\u0414\u0436\u0430\u043b\u0430\u043b\u0410\u0431\u0430\u0434\u0441\u043a\u0430\u044f","\u0418\u0441\u0441\u044b\u043a-\u041a\u0443\u043b\u044c\u0441\u043a\u0430\u044f":"\u0418\u041a\u0443\u043b\u044c\u0441\u043a\u0430\u044f","\u0427\u0443\u0439\u0441\u043a\u0430\u044f":"\u0427\u0443\u0439\u0441\u043a\u0430\u044f","\u0433.\u0411\u0438\u0448\u043a\u0435\u043a":"\u0411\u0438\u0448\u043a\u0435\u043a","\u0411\u0430\u0442\u043a\u0435\u043d\u0441\u043a\u0430\u044f":"\u0411\u0430\u0442\u043a\u0435\u043d\u0441\u043a\u0430\u044f"},u=function(t,e){var n=(Number(e[b[t]])/Number(e[b[t]+"_All"])*100).toFixed(0);return n>=100?"#48C9B0":(n>80&&(n=80),Object(x.b)(n/100))},O=function(t,e){return e[t]+" \u0438\u0437 "+e[t+"_All"]},p=(Object(x.c)().domain([0,100]).interpolator(Object(x.a)("white","blue")),function(t){console.log("MAP CHART"),console.log(t);return 0!==Object.keys(t.data).length&&(t.data["\u0411\u0438\u0448\u043a\u0435\u043a"],t.data["\u041e\u0448"],t.data["\u0427\u0443\u0439\u0441\u043a\u0430\u044f"],t.data["\u0422\u0430\u043b\u0430\u0441\u0441\u043a\u0430\u044f"],t.data["\u041d\u0430\u0440\u044b\u043d\u0441\u043a\u0430\u044f"],t.data["\u0414\u0436\u0430\u043b\u0430\u043b\u0410\u0431\u0430\u0434\u0441\u043a\u0430\u044f"],t.data["\u041e\u0448\u0441\u043a\u0430\u044f"],t.data["\u0411\u0430\u0442\u043a\u0435\u043d\u0441\u043a\u0430\u044f"],t.data["\u0418\u041a\u0443\u043b\u044c\u0441\u043a\u0430\u044f"]),Object(i.jsxs)(f.ComposableMap,{"data-tip":"",projection:"geoEqualEarth",width:1e3,height:500,projectionConfig:{center:[74.5,41.2],scale:6e3},children:[Object(i.jsx)(f.Geographies,{geography:"https://raw.githubusercontent.com/Xakim1c/parliament-calculator-v2/main/src/data/kg_regions_topo.json",children:function(e){return e.geographies.map((function(e){return Object(i.jsx)(f.Geography,{stroke:"#A9CCE3",geography:e,onMouseEnter:function(){console.log(e);var n=e.properties,i=n.ADM1_RU;n.Shape_Area;t.setTooltipContent("".concat(i))},onClick:function(){t.onDistrictClick(e.properties)},onMouseLeave:function(){t.setTooltipContent("")},style:{default:{fill:u(e.properties.ADM1_RU,t.data),outline:"none"},hover:{fill:"#5DADE2",outline:"none"},pressed:{fill:"#5499C7",outline:"none"}}},e.rsmKey)}))}}),Object(i.jsx)(f.Marker,{coordinates:[75.71,41.3],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u041d\u0430\u0440\u044b\u043d\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[75.75,41.55],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"16",children:"\u041d\u0430\u0440\u044b\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsx)(f.Marker,{coordinates:[78,42.15],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u0418\u041a\u0443\u043b\u044c\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[78,42.35],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"16",children:"\u0418\u0441\u0441\u044b\u043a-\u041a\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsx)(f.Marker,{coordinates:[74.5,42.5],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u0427\u0443\u0439\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[74.5,42.7],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"14",children:"\u0427\u0443\u0439\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsx)(f.Marker,{coordinates:[75.75,43],fill:"#777",children:Object(i.jsxs)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"15",children:["\u0411\u0438\u0448\u043a\u0435\u043a (",O("\u0411\u0438\u0448\u043a\u0435\u043a",t.data),")"]})}),Object(i.jsx)(f.Marker,{coordinates:[72.2,42.3],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u0422\u0430\u043b\u0430\u0441\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[71.95,42.5],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"14",children:"\u0422\u0430\u043b\u0430\u0441\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsx)(f.Marker,{coordinates:[72.65,41.45],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u0414\u0436\u0430\u043b\u0430\u043b\u0410\u0431\u0430\u0434\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[72.25,41.7],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"16",children:"\u0414\u0436\u0430\u043b\u0430\u043b-\u0410\u0431\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsx)(f.Marker,{coordinates:[73.4,40.1],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u041e\u0448\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[73.4,40.3],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"16",children:"\u041e\u0448\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsx)(f.Marker,{coordinates:[73.65,40.65],fill:"#777",children:Object(i.jsxs)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"15",children:["\u041e\u0448 (",O("\u041e\u0448",t.data),")"]})}),Object(i.jsx)(f.Marker,{coordinates:[70.75,39.65],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"20",children:O("\u0411\u0430\u0442\u043a\u0435\u043d\u0441\u043a\u0430\u044f",t.data)})}),Object(i.jsx)(f.Marker,{coordinates:[70.75,39.85],fill:"#777",children:Object(i.jsx)("text",{textAnchor:"middle",fill:"#212F3D",fontWeight:"bold",fontSize:"16",children:"\u0411\u0430\u0442\u043a\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})}),Object(i.jsxs)(f.Marker,{coordinates:[74.6,42.85],children:[Object(i.jsxs)("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)",children:[Object(i.jsx)("circle",{cx:"12",cy:"10",r:"3"}),Object(i.jsx)("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})]}),Object(i.jsx)("text",{textAnchor:"middle",y:15,style:{fontFamily:"system-ui",fill:"#5D5A6D"}})]}),Object(i.jsxs)(f.Marker,{coordinates:[72.8,40.55],children:[Object(i.jsxs)("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)",children:[Object(i.jsx)("circle",{cx:"12",cy:"10",r:"3"}),Object(i.jsx)("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})]}),Object(i.jsx)("text",{textAnchor:"middle",y:15,style:{fontFamily:"system-ui",fill:"#5D5A6D"}})]})]})}),g=Object(o.memo)(p),m=n(57),k=(n(165),n(103)),y=n.n(k);function D(t){return Object(i.jsx)("div",{style:{position:"absolute",height:"100%",transform:"rotate(".concat(t.turns,"turn)")},children:Object(i.jsx)("div",{style:t.style})})}var F=function(t){var e=1/t.count;return y.a.range(t.count).map((function(n){return Object(i.jsx)(D,{turns:n*e,style:t.style})}))};function A(t){return Object(i.jsx)(m.a,{value:t.percent,text:"".concat(t.percent,"%"),strokeWidth:10,styles:Object(m.b)({strokeLinecap:"butt"}),children:Object(i.jsx)(F,{count:12,style:{background:"#fff",width:"2px",height:"".concat(10,"%")}})})}var M=n(104),C=n.n(M),S=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).handleContentTooltip=function(t){console.log(t)},i.handeOnDistrictClick=function(t){console.log(t)},i.state={data:{}},i}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;C.a.init({key:"https://docs.google.com/spreadsheets/d/1mpsk4sFCmNi96xuSNT0FsazpAx15tgSM3hqEB4kvVQk/edit?usp=sharing",simpleSheet:!0}).then((function(e){t.setState({data:e[0]})})).catch((function(t){return console.warn(t)}))}},{key:"render",value:function(){console.log("RENDER APP"),console.log(this.state.data);var t=0,e=0,n=0,o=0;return 0!==Object.keys(this.state.data).length&&(e=Number(this.state.data["\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u043e\u0441\u044c"]),t=(n=Number(this.state.data["\u0412\u0441\u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e"]))-e,o=(e/n*100).toFixed(0)),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(j.a,{container:!0,justify:"center",children:[Object(i.jsxs)("div",{style:{width:300,height:"100%",padding:"20px"},children:[Object(i.jsxs)("h3",{style:{color:"#212F3D"},children:["\u0421 \u043d\u0430\u043c\u0438 \u0443\u0436\u0435 ",Object(i.jsxs)("span",{style:{color:"#CB4335",fontSize:22},children:[e," "]}),"\u0438\u0437 ",n," \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0435\u0439"]}),Object(i.jsx)(A,{percent:o})]}),Object(i.jsxs)("div",{style:{width:1e3,height:"100%"},children:[Object(i.jsxs)("h3",{style:{color:"#212F3D"},children:["\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0435\u0449\u0451 ",Object(i.jsx)("span",{style:{color:"#212F3D",fontSize:28},children:" \u0447\u0435\u043b\u043e\u0432\u0435\u043a "}),"  \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0445 \u0432\u044b\u0431\u043e\u0440\u043e\u0432: ",Object(i.jsxs)("span",{style:{color:"#CB4335",fontSize:25},children:[t," "]})]}),Object(i.jsx)("h4",{style:{color:"#212F3D"},children:"(\u0427\u0438\u0441\u043b\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0435\u0439 \xab\u041a\u043b\u043e\u043e\u043f\u0430\xbb \u043f\u043e \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043c)"}),Object(i.jsx)(g,{setTooltipContent:this.handleContentTooltip,onDistrictClick:this.handeOnDistrictClick,data:this.state.data})]})]})})}}]),n}(c.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),c(t),r(t)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),v()}},[[188,1,2]]]);
//# sourceMappingURL=main.aa28774b.chunk.js.map