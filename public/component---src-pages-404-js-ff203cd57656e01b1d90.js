(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(147),o=n(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},146:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=(n(33),n(145),r.a.createContext({})),c=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(146),u=(n(152),function(e){var t=e.children;return i.a.createElement(c.a,{query:"755544856",render:function(e){return i.a.createElement("div",null,i.a.createElement("main",null,t))},data:a})});u.propTypes={children:s.a.node.isRequired},t.a=u},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Samuel Durkin - Web Developer"}}}}},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(153),u=n.n(c);function l(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title,c=a.data.site,l=t||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=l},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Samuel Durkin - Web Developer",description:"Personal site of web developer Samuel Durkin, but using Gatsby.js",author:"@failedsitcom"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ff203cd57656e01b1d90.js.map