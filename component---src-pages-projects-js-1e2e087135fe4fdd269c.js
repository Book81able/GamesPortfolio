(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16l3":function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",(function(){return P}));var r=t("AcpX"),a=t("5D9J"),o=t("q1tI"),i=t.n(o),c=t("Bl7J"),l=t("ckOl"),u=t("9eSz"),p=t.n(u),f=t("Et+L"),m=t("hGpq"),s=t("i1eh"),v=t("bjXa"),d=t("I/mr"),b=t("sH8X");function g(){var n=Object(r.a)(["\n  white-space: pre-line;\n\n  ","\n  max-width: unset;\n  max-height: 180px;\n  position: relative;\n  padding: 10px;\n  margin: 0;\n\n  > p {\n    height: 100%;\n    margin: 0;\n    font-size: 0.8rem;\n    overflow: hidden;\n  }\n"]);return g=function(){return n},n}var h=a.a.section(g(),b.a);function x(){var n=Object(r.a)(["\n  > p {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n  }\n"]);return x=function(){return n},n}function w(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]);return w=function(){return n},n}function j(){var n=Object(r.a)(["\n  ",";\n  margin: 10px 0;\n\n  & > a {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    color: var(--body-color);\n\n    &:hover {\n      color: var(--primary-color);\n    }\n  }\n\n  & svg {\n    fill: currentColor;\n    margin: 0 0.5rem;\n  }\n"]);return j=function(){return n},n}function E(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return E=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 2.5rem;\n"]);return y=function(){return n},n}function k(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 2.5rem;\n  margin-top: 2.5rem;\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"]);return k=function(){return n},n}var O=a.a.article(k(),m.a.gt.xs),D=a.a.article(y()),J=a.a.header(E()),X=a.a.section(j(),b.c),_=a.a.section(w()),A=Object(a.a)(h)(x()),I=function(n){var e=n.projects.map((function(n){var e=n.frontmatter.title,t="/projects"+n.fields.slug,r=n.frontmatter.demo_link,a=n.frontmatter.repo_link,o=n.frontmatter.ios_link,c=n.frontmatter.cover_image?n.frontmatter.cover_image.childImageSharp.fluid:null,u=n.frontmatter.description,m="featured project "+e+" demo",b="featured project "+e+" repo",g="featured project "+e+" App store";return i.a.createElement(D,{key:e},i.a.createElement(J,null,i.a.createElement(v.a,{href:t||(r||(a||(o||"#"))),rel:"noopener"},i.a.createElement(d.b,null,e)),i.a.createElement(X,null,r&&i.a.createElement("a",{href:r,target:"_blank",rel:"noopener",title:"Demo Link","aria-label":m},i.a.createElement(l.a,{icon:"itch-io",prefix:"fab"})),a&&i.a.createElement("a",{href:a,target:"_blank",rel:"noopener",title:"Repo Link","aria-label":b},i.a.createElement(l.a,{icon:"github",prefix:"fab"})),o&&i.a.createElement("a",{href:o,target:"_blank",rel:"noopener",title:"Ios Link","aria-label":g},i.a.createElement(l.a,{icon:"apple",prefix:"fab"})))),i.a.createElement("a",{"aria-label":r?m:a?b:"featured project "+e,href:t||(r||(a||"#")),rel:"noopener"},c&&i.a.createElement(s.a,{hasHover:!0},i.a.createElement(p.a,{fluid:c}))),i.a.createElement(_,null,i.a.createElement(A,null,i.a.createElement("p",null,u)),i.a.createElement(f.a,{techs:n.frontmatter.techs})))}));return i.a.createElement(O,null,e)},L=t("vrFN"),H=t("Q+NF"),q=t("cDEv"),z=t("DHv3");function F(){var n=Object(r.a)(["\n  margin-top: 3rem;\n"]);return F=function(){return n},n}var N=Object(a.a)(d.a)(F()),P=(e.default=function(n){var e=n.data.allMarkdownRemark.nodes;return console.log(e),i.a.createElement(c.a,{menuLinks:H.a},i.a.createElement(L.a,{title:"Projects"}),i.a.createElement(q.a,null,i.a.createElement(N,null,"Projects"),i.a.createElement(z.a,null),i.a.createElement(I,{projects:e})))},"749514784")},DHv3:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t("AcpX");function a(){var n=Object(r.a)(["\n  height: 1px;\n  width: 100%;\n  margin-top: 3rem;\n  background-color: var(--body-color);\n"]);return a=function(){return n},n}var o=t("5D9J").a.div(a())},"Et+L":function(n,e,t){"use strict";var r=t("AcpX"),a=t("5D9J"),o=t("q1tI"),i=t.n(o),c=t("ckOl");function l(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n\n  color: var(--body-color);\n  margin: 0 1rem 0.5rem 0;\n\n  & > svg {\n    color: var(--primary-color);\n    height: 0.8rem;\n    margin-right: 0.25rem;\n  }\n"]);return l=function(){return n},n}function u(){var n=Object(r.a)(["\n  margin-top: 0.8rem;\n  display: flex;\n  flex-wrap: wrap;\n"]);return u=function(){return n},n}var p=a.a.section(u()),f=a.a.span(l());e.a=function(n){var e=n.techs;return i.a.createElement(p,null,e.map((function(n){return i.a.createElement(f,{key:n},i.a.createElement(c.a,{icon:"caret-right"}),n)})))}},"I/mr":function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return p}));var r=t("AcpX"),a=t("5D9J");function o(){var n=Object(r.a)(["\n  color: var(--title-color);\n  margin: 10px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -15px;\n    left: 0;\n    width: 110%;\n    height: 2px;\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  color: var(--title-color);\n  margin: 20px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  width: 100%;\n  position: relative;\n  font-weight: 800;\n  margin: 20px 0;\n  color; var(--title-color);\n\n  &:first-letter {\n    color: var(--primary-color);\n  }\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -30px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]);return c=function(){return n},n}var l=a.a.h1(c()),u=a.a.h2(i()),p=a.a.h3(o())},bjXa:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t("AcpX");function a(){var n=Object(r.a)(["\n  text-decoration: none;\n\n  &:hover > * {\n    cursor: pointer;\n    color: var(--primary-color);\n  }\n"]);return a=function(){return n},n}var o=t("5D9J").a.a(a())},i1eh:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return l}));var r=t("AcpX"),a=t("5D9J");function o(){var n=Object(r.a)(["\n  min-width: 300px;\n  min-height: 200px;\n  position: relative;\n\n  .gatsby-image-wrapper {\n    overflow: unset !important;\n  }\n\n  .gatsby-image-wrapper:before {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    right: -10px;\n    width: 98%;\n    height: 98%;\n    border: 2px solid var(--primary-color);\n    transition: all ease var(--transition-fast);\n  }\n"]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  min-width: 300px;\n  min-height: 200px;\n  position: relative;\n\n  & .gatsby-image-wrapper * {\n    transition: transform var(--transition-fast) ease-in-out !important;\n  }\n\n  &:hover .gatsby-image-wrapper * {\n    transform: scale(1.1);\n  }\n"]);return i=function(){return n},n}var c=a.a.div(i()),l=a.a.div(o())}}]);
//# sourceMappingURL=component---src-pages-projects-js-1e2e087135fe4fdd269c.js.map