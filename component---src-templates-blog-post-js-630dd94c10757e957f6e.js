(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"Et+L":function(n,e,t){"use strict";var r=t("AcpX"),a=t("5D9J"),o=t("q1tI"),i=t.n(o),c=t("ckOl");function l(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n\n  color: var(--body-color);\n  margin: 0 1rem 0.5rem 0;\n\n  & > svg {\n    color: var(--primary-color);\n    height: 0.8rem;\n    margin-right: 0.25rem;\n  }\n"]);return l=function(){return n},n}function u(){var n=Object(r.a)(["\n  margin-top: 0.8rem;\n  display: flex;\n  flex-wrap: wrap;\n"]);return u=function(){return n},n}var f=a.a.section(u()),p=a.a.span(l());e.a=function(n){var e=n.techs;return i.a.createElement(f,null,e.map((function(n){return i.a.createElement(p,{key:n},i.a.createElement(c.a,{icon:"caret-right"}),n)})))}},"I/mr":function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return f}));var r=t("AcpX"),a=t("5D9J");function o(){var n=Object(r.a)(["\n  color: var(--title-color);\n  margin: 10px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -15px;\n    left: 0;\n    width: 110%;\n    height: 2px;\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  color: var(--title-color);\n  margin: 20px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  width: 100%;\n  position: relative;\n  font-weight: 800;\n  margin: 20px 0;\n  color; var(--title-color);\n\n  &:first-letter {\n    color: var(--primary-color);\n  }\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -30px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return c=function(){return n},n}var l=a.a.h1(c()),u=a.a.h2(i()),f=a.a.h3(o())},whKl:function(n,e,t){"use strict";var r=t("AcpX"),a=t("5D9J"),o=t("Wbzz"),i=t("q1tI"),c=t.n(i);function l(){var n=Object(r.a)(["\n  text-decoration: none;\n"]);return l=function(){return n},n}function u(){var n=Object(r.a)(["\n  pointer-events: auto;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: lowercase;\n\n  color: var(--primary-color);\n  margin: 0 1rem 0.5rem 0;\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0.5rem 0;\n"]);return f=function(){return n},n}var p=a.a.section(f()),m=a.a.span(u()),d=Object(a.a)(o.Link)(l());e.a=function(n){var e=n.tags;return c.a.createElement(p,null,e.map((function(n){return c.a.createElement(m,{key:n},c.a.createElement(d,{to:"/tags/"+n+"/"},"#",n))})))}},yZlL:function(n,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return A}));var r=t("AcpX"),a=t("5D9J"),o=t("9eSz"),i=t.n(o),c=t("q1tI"),l=t.n(c),u=t("ckOl"),f=t("Bl7J"),p=t("whKl"),m=t("Et+L"),d=t("Q+NF"),s=t("I/mr"),v=t("cDEv");function h(){var n=Object(r.a)(["\n  padding: 0px 10px;\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;  \n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n  position: relative;\n  overflow: hidden;\n  width:100%;\n  padding-top: 56.25%;\n"]);return g=function(){return n},n}function w(){var n=Object(r.a)(["\n  padding: 2rem;\n  width: 100%;\n  background: var(--bg-code);\n  border-radius: var(--radius);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n"]);return w=function(){return n},n}function E(){var n=Object(r.a)(["\n  display: flex;\n  width:100%\n"]);return E=function(){return n},n}function k(){var n=Object(r.a)(["\n  font-size: 0.8rem;\n\n  & span {\n    font-weight: 500;\n  }\n"]);return k=function(){return n},n}function x(){var n=Object(r.a)(["\n  margin-top: -1rem;\n  font-size: 0.9rem;\n"]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  margin-top: 3rem;\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  min-height: calc(100vh - var(--header-height));\n\n  & > .gatsby-image-wrapper {\n    width: 100%;\n  }\n"]);return j=function(){return n},n}var O=Object(a.a)(v.b)(j()),_=Object(a.a)(s.a)(y()),L=a.a.p(x()),z=a.a.div(k()),I=a.a.header(E()),J=a.a.div(w()),D=a.a.div(g()),R=a.a.iframe(b()),q=a.a.a(h());e.default=function(n){var e=n.data,t=e.markdownRemark.fields.readingTime.text,r=e.markdownRemark,a=r.frontmatter.cover_image?r.frontmatter.cover_image.childImageSharp.fluid:null,o=r.frontmatter,c=o.tags,s=void 0===c?[]:c,v=o.techs,h=void 0===v?[]:v,b=o.title,g=o.date,w=o.description,E=o.v_link,k=r.frontmatter.repo_link,x=r.frontmatter.demo_link,y=r.frontmatter.ios_link,j=r.frontmatter.android_link,A="featured project "+b+" demo",S="featured project "+b+" repo";return l.a.createElement(f.a,{menuLinks:d.a},l.a.createElement(O,null,E&&l.a.createElement(D,null,l.a.createElement(R,{allowFullScreen:!0,src:"https://www.youtube.com/embed/"+E})),l.a.createElement(I,null,l.a.createElement(_,null,b," ",l.a.createElement("span",{style:{float:"right"}},x&&l.a.createElement(q,{href:x,target:"_blank",rel:"noopener",title:"Demo Link","aria-label":A},l.a.createElement(u.a,{icon:"itch-io",prefix:"fab"})),k&&l.a.createElement(q,{href:k,target:"_blank",rel:"noopener",title:"Repository Link","aria-label":S},l.a.createElement(u.a,{icon:"github",prefix:"fab"})),y&&l.a.createElement(q,{href:y,target:"_blank",rel:"noopener",title:"Repository Link","aria-label":S},l.a.createElement(u.a,{icon:"apple",prefix:"fab"})),j&&l.a.createElement(q,{href:j,target:"_blank",rel:"noopener",title:"Repository Link","aria-label":S},l.a.createElement(u.a,{icon:"android",prefix:"fab"}))))),l.a.createElement(L,null,w),l.a.createElement(z,null,"Released ",g,". ",l.a.createElement("span",null,t,".")),l.a.createElement(m.a,{techs:h}),a&&l.a.createElement(i.a,{fluid:a}),l.a.createElement(J,{dangerouslySetInnerHTML:{__html:r.html}}),l.a.createElement(p.a,{tags:s})))};var A="502296799"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-630dd94c10757e957f6e.js.map