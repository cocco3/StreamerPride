(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7kEz":function(e,t,n){e.exports=n.p+"static/logo-1d3084562c2d8afc121ef776db972c09.png"},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function d(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){l.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",u),f}}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!c(s))return!1;var l=e[s],d=t[s];if(!1===(o=n?n.call(r,l,d,s):void 0)||void 0===o&&l!==d)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Kvkj:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return H})),n.d(t,"e",(function(){return B})),n.d(t,"f",(function(){return F})),n.d(t,"g",(function(){return W})),n.d(t,"h",(function(){return ne}));var r=n("q1tI"),o=n.n(r),i=n("qKvR"),a=n("Wbzz"),c=n("7kEz"),u=n.n(c),s="\n  max-width: 1440px;\n  padding-left: clamp(12px, 5vw, 100px);\n  padding-right: clamp(12px, 5vw, 100px);\n";var l=function(){var e=Object(i.c)("a{display:block;box-shadow:none;&:hover{box-shadow:none;}}img{display:block;height:50px;margin:0;}span{","\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n","}");return Object(i.d)("div",{css:e},Object(i.d)(a.Link,{to:"/"},Object(i.d)("img",{src:u.a,alt:"StreamerPride logo","aria-hidden":"true"}),Object(i.d)("span",null,"Home")))};var d=function(e){var t=e.text,n=e.to,r="\n    box-shadow: 0 1px 0 0 currentColor;\n    color: white;\n  ";return Object(i.d)(i.a,null,(function(e){var o=e.css;return Object(i.d)(a.Link,{to:n,className:o("\n    box-shadow: none;\n    color: rgba(255, 255, 255, 0.75);\n    font-family: Cabin;\n    font-weight: 700;\n    transition-duration: 0.2s;\n    transition-property: color, box-shadow;\n    transition-timing-function: ease;\n\n    &:hover {\n      \n    box-shadow: 0 1px 0 0 currentColor;\n    color: white;\n  \n    }\n  "),activeClassName:o(r)},t)}))},f={name:"16l6a68",styles:"display:flex;margin:0;padding:0;"},p={name:"a7pzcv",styles:"display:block;margin:0;padding:0;& + li{margin-left:clamp(8px,4vw,48px);}"};function T(e){var t=e.items,n=f,r=p,o=t.map((function(e,t){return Object(i.d)("li",{css:r,key:t},Object(i.d)(d,{text:e.text,to:e.to}))}));return Object(i.d)("nav",null,Object(i.d)("ul",{css:n},o))}T.defaultProps={items:[]};var E=T,m={name:"1tu59u4",styles:"flex:0 0 auto;"};var b=function(){var e=m,t=Object(i.c)("align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:24px;padding-top:24px;",s);return Object(i.d)("header",{css:t},Object(i.d)("div",{css:e},Object(i.d)(l,null)),Object(i.d)(E,{items:[{text:"Home",to:"/"},{text:"About",to:"/about"},{text:"Members",to:"/members"},{text:"Contact",to:"/contact"}]}))},h=n("WTTl"),A=n.n(h),y={name:"wrljgf",styles:"height:100px;margin:0;"},v={name:"1occp1s",styles:"font-family:Montserrat;font-size:1.3rem;font-weight:600;line-height:1.6;letter-spacing:2px;max-width:400px;padding:12px 0;"};var g=function(){var e=Object(i.c)("align-items:center;background-color:#000000;display:flex;color:#ffffff;flex-wrap:wrap;justify-content:space-between;margin-top:clamp(12px,5vw,48px);padding-bottom:24px;padding-top:24px;",s),t=y,n=v;return Object(i.d)("footer",{css:e},Object(i.d)("img",{css:t,src:A.a,alt:"StreamerPride logo","aria-hidden":"true"}),Object(i.d)("div",{css:n},"Standing together to support LGBTQ+ streamers worldwide"))};var O=function(e){var t,n=e.level,r=e.children,o="h"+n;switch(n){case 1:t="2.6rem";break;case 2:t="1.6rem";break;case 3:t="1.3rem";break;default:t="1rem"}var a=Object(i.c)("font-family:Montserrat,'system-ui';font-size:",t,";font-weight:700;line-height:1.2;margin:0;");return Object(i.d)(o,{css:a},r)},S={name:"m96ip8",styles:"background:rgba(255,255,255,0.2);border-radius:2px;padding:16px;"},_={name:"12vuxj9",styles:"margin:1rem 0;"};var w=function(e){var t=e.date,n=e.excerpt,r=e.image,o=e.title,c=e.to,u=S,s=_;return Object(i.d)("article",{css:u},r,Object(i.d)("header",{css:s},Object(i.d)(O,{level:3},Object(i.d)(a.Link,{to:c},o))),Object(i.d)("section",null,Object(i.d)("p",{dangerouslySetInnerHTML:{__html:n}})),Object(i.d)("footer",null,Object(i.d)("small",null,t)))},P={name:"1efvhw7",styles:"align-items:center;display:flex;flex-direction:column;"},R={name:"13o6z6d",styles:"margin:0 auto;"},M={name:"1hbb1kr",styles:"font-family:Montserrat;font-size:1.3rem;font-weight:600;line-height:1.6;letter-spacing:2px;"};var j=function(e){var t=e.image,n=e.text,r=P,o=R,a=M;return Object(i.d)("div",{css:r},Object(i.d)("div",{css:o},t),Object(i.d)("div",{css:a},n))};var x=function(e){var t=e.children,n=Object(i.c)(s);return Object(i.d)("main",{css:n},t)},C={name:"wnipmh",styles:"display:flex;flex-direction:column;height:100%;min-height:100vh;"},I={name:"1tu59u4",styles:"flex:0 0 auto;"},N={name:"1c3h18e",styles:"flex:1 0 auto;"},L={name:"1tu59u4",styles:"flex:0 0 auto;"},G={name:"1t16nym",styles:"body{background-color:#39318a;color:white;font-family:Roboto,'system-ui';font-size:20px;line-height:1.8;}a{box-shadow:none;color:#f0cf46;}a:hover{box-shadow:0 1px 0 0 currentColor;}"},H=function(e){var t=e.children,n=C,r=I,a=N,c=L;return Object(i.d)(o.a.Fragment,null,Object(i.d)(i.b,{styles:G}),Object(i.d)("div",{css:n},Object(i.d)("div",{css:r},Object(i.d)(b,null)),Object(i.d)("div",{css:a},Object(i.d)(x,null,t)),Object(i.d)("div",{css:c},Object(i.d)(g,null))))},k=(n("f3/d"),{name:"ep5xvr",styles:"border-bottom:1px solid #dddddd;margin-bottom:16px;padding-bottom:16px;"});var B=function(e){var t=e.image,n=e.name,r=e.pronouns,o=e.description,a=e.twitchUrl,c=e.twitterUrl,u=k,s=c&&Object(i.d)("div",null,Object(i.d)("a",{href:c,rel:"noopener noreferrer",target:"_blank"},"Twitter"));return Object(i.d)("div",null,Object(i.d)("div",{css:u},t,Object(i.d)("div",null,Object(i.d)("a",{href:a,rel:"noopener noreferrer",target:"_blank"},n)),r),Object(i.d)("div",null,o),s)},U={name:"4s92pb",styles:"margin:3.5rem 0 1.75rem;"};var F=function(e){var t=e.children,n=U;return Object(i.d)("div",{css:n},Object(i.d)(O,{level:1},t))},D={name:"1am6aje",styles:"border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"};var q=function(e){var t=e.children,n=D;return Object(i.d)("span",{css:n},t)},z=n("cq81"),Y=n("TJpk"),K=function(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,a=z.data.site,c=t||a.siteMetadata.description;return Object(i.d)(Y.Helmet,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})};K.defaultProps={lang:"en",meta:[],description:""};var W=K,V=n("hh4R"),X=n.n(V),J=n("zgT1"),Q=n.n(J),Z=n("ddoH"),$=n.n(Z),ee={name:"e1p7d9",styles:"&:hover{box-shadow:none;svg{fill:rgba(255,255,255,0.8);}}& + a{margin-left:20px;}"},te={name:"1nfc47v",styles:"border-radius:20px;fill:white;padding:20px;width:200px;"};var ne=function(e){var t=e.discord,n=e.email,r=e.twitter,o=ee,a=te;return Object(i.d)("div",null,t&&Object(i.d)("a",{href:t,target:"_blank",rel:"noopener noreferrer",css:o},Object(i.d)(X.a,{css:a}),Object(i.d)(q,null,"Discord")),r&&Object(i.d)("a",{href:r,target:"_blank",rel:"noopener noreferrer",css:o},Object(i.d)($.a,{css:a}),Object(i.d)(q,null,"Twitter")),n&&Object(i.d)("a",{href:n,target:"_blank",rel:"noopener noreferrer",css:o},Object(i.d)(Q.a,{css:a}),Object(i.d)(q,null,"Email")))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),a=d(n("17x9")),c=d(n("8+s/")),u=d(n("bmMU")),s=n("v1p5"),l=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,b,h=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),A=(E=h,b=m=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=f(o,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(E,o)},o(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},b);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},WTTl:function(e,t,n){e.exports=n.p+"static/logo-7b240dc7d768a6c712bac92cc89244ca.png"},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),d=r(n);if(l&&d){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var T=t instanceof RegExp,E=n instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==n.toString();var m=o(t);if((u=m.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,m[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=m[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},cq81:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"StreamerPride Network","description":"Supporting LGBTQ+ Streamers.","social":{"twitter":"captain_fel"}}}}}')},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},ddoH:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}))}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},hh4R:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"}))}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n("q1tI")),a=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,c.TAG_NAMES.TITLE),n=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var s=i[u],l=(0,a.default)({},o[s],r[s]);o[s]=l}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},b=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){b(e)}),0)}),h=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,o),_(f,p);var T={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,u),scriptTags:P(c.TAG_NAMES.SCRIPT,l),styleTags:P(c.TAG_NAMES.STYLE,d)},E={},m={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)})),t&&t(),s(e,E,m)},S=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var d=i.indexOf(s);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},j=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),i=S(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&y(g),e.defer?g=A((function(){O(e,(function(){g=null}))})):(O(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:j(c.TAG_NAMES.BASE,t,r),bodyAttributes:j(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:j(c.ATTRIBUTE_NAMES.HTML,o,r),link:j(c.TAG_NAMES.LINK,i,r),meta:j(c.TAG_NAMES.META,a,r),noscript:j(c.TAG_NAMES.NOSCRIPT,u,r),script:j(c.TAG_NAMES.SCRIPT,s,r),style:j(c.TAG_NAMES.STYLE,l,r),title:j(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=A,t.warn=v}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zgT1:function(e,t,n){var r=n("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z"}))}o.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=commons-8672094e2f65096d794c.js.map