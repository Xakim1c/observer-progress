(this["webpackJsonpobserver-progress"]=this["webpackJsonpobserver-progress"]||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n(0),c=n.n(i),r=n(43),s=n.n(r),a=(n(62),n(24)),l=n(25),d=n(52),h=n(51),j=(n.p,n(63),n(107)),u=n(4),f=function(t){console.log("MAP CHART"),console.log(t);var e=0,n=0,i=0,c=0,r=0,s=0;return 0!==Object.keys(t.data).length&&(t.data["\u0411\u0438\u0448\u043a\u0435\u043a"],t.data["\u041e\u0448"],e=t.data["\u0427\u0443\u0439\u0441\u043a\u0430\u044f"],n=t.data["\u0422\u0430\u043b\u0430\u0441\u0441\u043a\u0430\u044f"],i=t.data["\u041d\u0430\u0440\u044b\u043d\u0441\u043a\u0430\u044f"],t.data["\u0414\u0436\u0430\u043b\u0430\u043b\u0410\u0431\u0430\u0434\u0441\u043a\u0430\u044f"],c=t.data["\u041e\u0448\u0441\u043a\u0430\u044f"],r=t.data["\u0411\u0430\u0442\u043a\u0435\u043d\u0441\u043a\u0430\u044f"],s=t.data["\u0418\u041a\u0443\u043b\u044c\u0441\u043a\u0430\u044f"]),Object(o.jsxs)(u.ComposableMap,{"data-tip":"",projection:"geoEqualEarth",width:1e3,height:500,projectionConfig:{center:[74.5,41.2],scale:6e3},children:[Object(o.jsx)(u.Geographies,{geography:"https://raw.githubusercontent.com/Xakim1c/parliament-calculator-v2/main/src/data/kg_regions_topo.json",children:function(e){return e.geographies.map((function(e){return Object(o.jsx)(u.Geography,{stroke:"#A9CCE3",geography:e,onMouseEnter:function(){console.log(e);var n=e.properties,o=n.ADM1_RU;n.Shape_Area;t.setTooltipContent("".concat(o))},onClick:function(){t.onDistrictClick(e.properties)},onMouseLeave:function(){t.setTooltipContent("")},style:{default:{fill:(n=e.properties.ADM1_RU,"\u0433.\u0411\u0438\u0448\u043a\u0435\u043a"==n||"\u0433.\u041e\u0448"==n?"#1B4F72":"#5499C7"),outline:"none"},hover:{fill:"#5DADE2",outline:"none"},pressed:{fill:"#5499C7",outline:"none"}}},e.rsmKey);var n}))}}),Object(o.jsx)(u.Marker,{coordinates:[75.71,41.41],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[i," \u043d\u0430\u0431."]})}),Object(o.jsx)(u.Marker,{coordinates:[78,42.23],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[s," \u043d\u0430\u0431."]})}),Object(o.jsx)(u.Marker,{coordinates:[74.5,42.55],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[e," \u043d\u0430\u0431."]})}),Object(o.jsx)(u.Marker,{coordinates:[72.2,42.35],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[n," \u043d\u0430\u0431."]})}),Object(o.jsx)(u.Marker,{coordinates:[72.3,41.65],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[n," \u043d\u0430\u0431."]})}),Object(o.jsx)(u.Marker,{coordinates:[73.4,40.25],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[c," \u043d\u0430\u0431."]})}),Object(o.jsx)(u.Marker,{coordinates:[70.5,39.65],fill:"#777",children:Object(o.jsxs)("text",{textAnchor:"middle",fill:"#FFFFFF",fontWeight:"bold",fontSize:"20",children:[r," \u043d\u0430\u0431."]})})]})},b=Object(i.memo)(f),p=n(32),x=(n(67),n(45)),F=n.n(x);function g(t){return Object(o.jsx)("div",{style:{position:"absolute",height:"100%",transform:"rotate(".concat(t.turns,"turn)")},children:Object(o.jsx)("div",{style:t.style})})}var O=function(t){var e=1/t.count;return F.a.range(t.count).map((function(n){return Object(o.jsx)(g,{turns:n*e,style:t.style})}))};function m(t){return Object(o.jsx)(p.a,{value:t.percent,text:"".concat(t.percent,"%"),strokeWidth:10,styles:Object(p.b)({strokeLinecap:"butt"}),children:Object(o.jsx)(O,{count:12,style:{background:"#fff",width:"2px",height:"".concat(10,"%")}})})}var k=n(46),v=n.n(k),C=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).handleContentTooltip=function(t){console.log(t)},o.handeOnDistrictClick=function(t){console.log(t)},o.state={data:{}},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;v.a.init({key:"https://docs.google.com/spreadsheets/d/1mpsk4sFCmNi96xuSNT0FsazpAx15tgSM3hqEB4kvVQk/edit?usp=sharing",simpleSheet:!0}).then((function(e){t.setState({data:e[0]})})).catch((function(t){return console.warn(t)}))}},{key:"render",value:function(){console.log("RENDER APP"),console.log(this.state.data);var t=0,e=0,n=0,i=0;return 0!==Object.keys(this.state.data).length&&(e=Number(this.state.data["\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u043e\u0441\u044c"]),t=(n=Number(this.state.data["\u0412\u0441\u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e"]))-e,i=(e/n*100).toFixed(0)),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(j.a,{container:!0,justify:"center",children:[Object(o.jsxs)("div",{style:{width:1e3,height:"100%"},children:[Object(o.jsxs)("h3",{children:["\u0414\u043b\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0445 \u0432\u044b\u0431\u043e\u0440\u043e\u0432 \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 ",t," \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044f!"]}),Object(o.jsx)("h4",{children:"(\u043a\u0430\u0440\u0442\u0430 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u043c)"}),Object(o.jsx)(b,{setTooltipContent:this.handleContentTooltip,onDistrictClick:this.handeOnDistrictClick,data:this.state.data})]}),Object(o.jsxs)("div",{style:{width:300,height:"100%",padding:"20px"},children:[Object(o.jsxs)("h3",{children:["\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e ",this.state.data["\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u043e\u0441\u044c"]," \u0438\u0437 ",this.state.data["\u0412\u0441\u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e"]," \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0435\u0439"]}),Object(o.jsx)(m,{percent:i})]})]})})}}]),n}(c.a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),o(t),i(t),c(t),r(t)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),y()}},[[92,1,2]]]);
//# sourceMappingURL=main.a907a8b6.chunk.js.map