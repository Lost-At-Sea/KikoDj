(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(138),l=a(207),s=a(260),o=a.n(s),c=function(){var e,t,a=Object(n.useStaticQuery)("1132682437");return null!=a&&null!==(e=a.placeholderImage)&&void 0!==e&&null!==(t=e.childImageSharp)&&void 0!==t&&t.fluid?i.a.createElement(o.a,{fluid:a.placeholderImage.childImageSharp.fluid}):i.a.createElement("div",null,"Picture not found")},d=a(206),u=a(203);t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(d.a,{title:"Home"}),i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Hola to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("p",null,"This is a test"),i.a.createElement(u.a,null),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)),i.a.createElement(n.Link,{to:"/page-2/"},"Go to page 2")," ",i.a.createElement("br",null),i.a.createElement(n.Link,{to:"/using-typescript/"},'Go to "Using TypeScript"'))}},203:function(e,t,a){"use strict";var r=a(0),i=a.n(r);a(227);t.a=function(){return i.a.createElement("div",{className:"soundCloudWidget",id:"soundCloudWidget"},i.a.createElement("iframe",{className:"iframe",width:"100%",height:"450px",scrolling:"no",frameBorder:"no",title:"SoundCloud",src:"https://w.soundcloud.com/player/?url=https://soundcloud.com/kiko_djofficial&auto_play=false&buying=true&liking=true&download=true&sharing=true&show_artwork=true&show_comments=true&show_playcount=true&show_user=true&hide_related=false&visual=true&start_track=0&callback=true"}))}},206:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(229),l=a(138);function s(e){var t,a,r=e.description,s=e.lang,o=e.meta,c=e.title,d=Object(l.useStaticQuery)("63159454").site,u=r||d.siteMetadata.description,f=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return i.a.createElement(n.a,{htmlAttributes:{lang:s},title:c,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a?void 0:a.author)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},207:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=(a(211),a(138)),l=(a(212),a.p+"static/transparentLogo-ec631e3cba9437c766d29aea1b4f3111.png"),s=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement(n.Link,{to:"/",style:{textDecoration:"none"}},i.a.createElement("img",{src:l,title:"K!KO Logo",alt:"K!KO Logo",className:"logo"}))))};s.defaultProps={siteTitle:"DJ KIKO"};var o=s,c=(a(213),function(){return i.a.createElement("div",{className:"hero"})}),d=(a(214),a(217)),u=a(218),f=a(216),m=a(215),p=a.n(m),h=function(){return i.a.createElement(p.a,{left:!0,cascade:!0},i.a.createElement("ul",{className:"SocialLinks"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.beatport.com/artist/k%21ko/932330",alt:"DJ Kiko Beatport",target:"_blank",rel:"noreferrer"},i.a.createElement(f.a,{className:"fab"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.soundcloud.com/kiko_djofficial",alt:"DJ Kiko Soundcloud",target:"_blank",rel:"noreferrer"},i.a.createElement(d.c,{className:"fab"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/kiko_djofficial/",alt:"DJ Kiko Intstagram",target:"_blank",rel:"noreferrer"},i.a.createElement(d.b,{className:"fab"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"www.facebook.com/KIKODJOfficial/",alt:"DJ Kiko Facebook",target:"_blank",rel:"noreferrer"},i.a.createElement(d.a,{className:"fab"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/kiko_djofficial",alt:"DJ Kiko Twitter",target:"_blank",rel:"noreferrer"},i.a.createElement(d.e,{className:"fab"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.twitch.tv/kiko_djofficial",alt:"DJ Kiko Twitch",target:"_blank",rel:"noreferrer"},i.a.createElement(d.d,{className:"fab"}))),i.a.createElement("li",{mobile:"true"},i.a.createElement("a",{href:"#mobileBio",alt:"Scroll Down",rel:"noreferrer"},i.a.createElement(u.a,{className:"fab"}))),i.a.createElement("li",{mobile:"false"},i.a.createElement("a",{href:"#soundCloudWidget",alt:"Scroll Down",rel:"noreferrer"},i.a.createElement(u.a,{className:"fab"})))))},g=(a(34),a(13),a(219)),b=a.n(g),E=(a(209),a(43),a(220),a(221)),v=a.n(E);function y(e,t,a,r,i,n,l){try{var s=e[n](l),o=s.value}catch(c){return void a(c)}s.done?t(o):Promise.resolve(o).then(r,i)}var w=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={email:"",message:""},t.updateFailedSignupMessage=function(){"Thank you for subscribing!"!==t.state.message&&t.setState({message:"This email is already subscribed to the mailing list!"})},t.handleInputChange=function(e){var a,r=e.target,i=r.value,n=r.name;t.setState(((a={})[n]=i,a))},t.handleSubmit=function(){var e,a=(e=b.a.mark(function e(a){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,v()(t.state.email);case 3:r=e.sent,t.setState({message:r.msg}),t.updateFailedSignupMessage();case 6:case"end":return e.stop()}},e)}),function(){var t=this,a=arguments;return new Promise(function(r,i){var n=e.apply(t,a);function l(e){y(n,r,i,l,s,"next",e)}function s(e){y(n,r,i,l,s,"throw",e)}l(void 0)})});return function(e){return a.apply(this,arguments)}}(),t}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement("div",{className:"emailSignup"},i.a.createElement("h2",null,"Stay Up To Date"),i.a.createElement("h5",{className:"signupMessage"},this.state.message),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{className:"subscribe-email",type:"email",name:"email",placeholder:"Enter Email Address...",value:this.state.email,onChange:this.handleInputChange}),i.a.createElement("button",{type:"submit"},"Sign Up")))},r}(i.a.Component),S=(a(222),function(e){return i.a.createElement("div",{className:"bio",mobile:e.mobile},i.a.createElement("h1",null,"Bio"),i.a.createElement("p",null,"K!KO is a progressive house and trance producer who is currently a resident DJ at Treehouse Miami. He's headlined events such as Festidan, played events at Grand Central and the Groove Cruise, and has quickly become known as the go-to party starter of Miami, Florida. Follow his social media to catch his KIKBack podcast on Soundcloud, his live sets on Twitch, and his next set near you!"))}),k=a(223),I=a.n(k),L=(a(225),a(226),a.p+"static/IMG3954-dc83c3e99407a6b5b7c289c2571362b3.jpg"),O=a.p+"static/IMG3957-cef4f37b847b2edafb2ea822cd3b456e.jpeg",N=a.p+"static/Kiko-446bb855b324c40a009f40eadb947b5d.jpg";function x(e){var t={dots:!0,infinite:!0,speed:2e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:7e3};return i.a.createElement("div",{mobile:e.mobile,className:"carousel"},i.a.createElement(I.a,t,i.a.createElement("div",null,i.a.createElement("img",{src:L,alt:"K!KO at Treehouse",title:"K!KO at Treehouse"})),i.a.createElement("div",null,i.a.createElement("img",{src:O,alt:"K!KO at Treehouse 2",title:"K!KO at Treehouse 2"})),i.a.createElement("div",null,i.a.createElement("img",{src:N,alt:"K!KO and Koyu",title:"K!KO and Koyu"}))))}var K=a(203);a(228),t.a=function(e){e.children;return useEffect(function(){}),i.a.createElement("div",null,i.a.createElement(o,{siteTitle:"DJ K!KO"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},i.a.createElement(S,{mobile:"false"}),i.a.createElement(x,{mobile:"false"}),i.a.createElement(h,null)),i.a.createElement(c,null)),i.a.createElement("div",{className:"column",mobile:"true",id:"mobileBio"},i.a.createElement("hr",{className:"divider"}),i.a.createElement(S,{mobile:"true"}),i.a.createElement(x,{mobile:"true"})),i.a.createElement("hr",{className:"divider"}),i.a.createElement(K.a,null),i.a.createElement("hr",{className:"divider"}),i.a.createElement(w,null),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by Henry Doce"))}},260:function(e,t,a){"use strict";a(25),a(26),a(13),a(73),a(143),a(261),a(262);var r=a(15);t.__esModule=!0,t.default=void 0;var i,n=r(a(78)),l=r(a(79)),s=r(a(147)),o=r(a(148)),c=r(a(0)),d=r(a(56)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some(function(e){return void 0!==e.media})}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex(function(e){return void 0===e.media});if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function k(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function I(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+c+l+s+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=c.default.forwardRef(function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=c.default.createElement(K,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,i(r),s):s}),K=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});K.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,L=e.draggable,O=h||g;if(!O)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:T?1:0,transition:R?"opacity "+E+"ms":"none"},s),_="boolean"==typeof b?"lightgray":b,H={transitionDelay:E+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&H,s,f),V={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:y},z=this.state.isHydrated?p(O):O[0];if(h)return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),_&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&H)}),z.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:V,imageVariants:O,generateSources:I}),z.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:V,imageVariants:O,generateSources:k}),this.state.isVisible&&c.default.createElement("picture",null,w(O),c.default.createElement(K,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},z,{imageVariants:O}))}}));if(g){var P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete P.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},_&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:_,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},R&&H)}),z.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:V,imageVariants:O,generateSources:I}),z.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:V,imageVariants:O,generateSources:k}),this.state.isVisible&&c.default.createElement("picture",null,w(O),c.default.createElement(K,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},z,{imageVariants:O}))}}))}return null},t}(c.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function _(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}T.propTypes={resolutions:R,sizes:C,fixed:_(d.default.oneOfType([R,d.default.arrayOf(R)])),fluid:_(d.default.oneOfType([C,d.default.arrayOf(C)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=T;t.default=H},261:function(e,t,a){"use strict";var r=a(1),i=a(29)(6),n="findIndex",l=!0;n in[]&&Array(1)[n](function(){l=!1}),r(r.P+r.F*l,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(77)(n)},262:function(e,t,a){"use strict";a(263)("fixed",function(e){return function(){return e(this,"tt","","")}})},263:function(e,t,a){var r=a(1),i=a(9),n=a(36),l=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-6f041e032427e29b3deb.js.map