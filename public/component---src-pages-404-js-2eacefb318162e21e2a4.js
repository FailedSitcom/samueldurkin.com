(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(147),o=n(150);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},146:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=(n(33),n(145),r.a.createContext({})),c=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(148),o=n(0),s=n.n(o),c=n(4),d=n.n(c),u=n(146),l=n(155),p=(n(152),function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var n=e.prototype;return n.componentDidMount=function(){for(var t=l.b([0,100]),e=l.b([100,0]),n=l.e().domain(t).range([0,window.innerWidth]),a=l.e().domain(e).range([window.innerHeight,0]),r=[],i=0;i<50;i++)r.push({});l.f("body").style("background-color",l.c(Math.random(1))).append("svg").attr("class","background-pattern").selectAll("dot").data(r).enter().append("g").classed("circle-group",!0).attr("transform",function(t){return"translate("+n(100*Math.random(window.innerWidth))+","+a(100*Math.random(window.innerWidth))+")"}).on("mouseover",function(){l.f(this).attr("transform",function(t){return"translate("+n(100*Math.random(window.innerWidth))+","+a(100*Math.random(window.innerWidth))+")"})}).append("circle").classed("dot",!0).attr("r",l.d(1,20)).attr("opacity",function(t){return Math.random(1)}).style("fill",function(t){return l.c(Math.random(1))}).style("stroke-width",l.d(1,3)).style("stroke","black");var o=l.h().duration(4e3).ease(l.a);l.g(".circle-group").transition(o).attr("transform",function(t){return"translate("+n(100*Math.random(window.innerWidth))+","+a(100*Math.random(window.innerWidth))+")"})},n.render=function(){var t=this.props.children;return s.a.createElement(u.a,{query:"1044757290",render:function(e){return s.a.createElement("div",null,s.a.createElement("main",null,t))},data:i})},e}(s.a.Component));p.propTypes={children:d.a.node.isRequired},e.a=p},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Samuel Durkin - Web Developer"}}}}},149:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),c=n(2),d=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},150:function(t,e,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(153),d=n.n(c);function u(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title,c=a.data.site,u=e||c.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Samuel Durkin - Web Developer",description:"Personal site of web developer Samuel Durkin, but using Gatsby.js",author:"@failedsitcom"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-2eacefb318162e21e2a4.js.map