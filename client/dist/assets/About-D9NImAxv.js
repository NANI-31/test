import{G as Y,r as H,g as ee,a as $,u as te,j as t,c as B,m as D}from"./index-Bp61GfM9.js";function ne(u){return Y({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 0.5L16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5Z"},child:[]}]})(u)}var j={},V;function ae(){if(V)return j;V=1;function u(i){if(typeof window>"u")return;const c=document.createElement("style");return c.setAttribute("type","text/css"),c.innerHTML=i,document.head.appendChild(c),i}Object.defineProperty(j,"__esModule",{value:!0});var e=H();function g(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var n=g(e);u(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const m=e.forwardRef(function({style:c={},className:G="",autoFill:d=!1,play:f=!0,pauseOnHover:N=!1,pauseOnClick:E=!1,direction:a="left",speed:v=50,delay:L=0,loop:M=0,gradient:P=!1,gradientColor:I="white",gradientWidth:x=200,onFinish:T,onCycleComplete:X,onMount:A,children:w},Z){const[R,F]=e.useState(0),[y,O]=e.useState(0),[b,C]=e.useState(1),[k,J]=e.useState(!1),K=e.useRef(null),s=Z||K,h=e.useRef(null),p=e.useCallback(()=>{if(h.current&&s.current){const r=s.current.getBoundingClientRect(),S=h.current.getBoundingClientRect();let o=r.width,l=S.width;(a==="up"||a==="down")&&(o=r.height,l=S.height),C(d&&o&&l&&l<o?Math.ceil(o/l):1),F(o),O(l)}},[d,s,a]);e.useEffect(()=>{if(k&&(p(),h.current&&s.current)){const r=new ResizeObserver(()=>p());return r.observe(s.current),r.observe(h.current),()=>{r&&r.disconnect()}}},[p,s,k]),e.useEffect(()=>{p()},[p,w]),e.useEffect(()=>{J(!0)},[]),e.useEffect(()=>{typeof A=="function"&&A()},[]);const _=e.useMemo(()=>d?y*b/v:y<R?R/v:y/v,[d,R,y,b,v]),Q=e.useMemo(()=>Object.assign(Object.assign({},c),{"--pause-on-hover":!f||N?"paused":"running","--pause-on-click":!f||N&&!E||E?"paused":"running","--width":a==="up"||a==="down"?"100vh":"100%","--transform":a==="up"?"rotate(-90deg)":a==="down"?"rotate(90deg)":"none"}),[c,f,N,E,a]),U=e.useMemo(()=>({"--gradient-color":I,"--gradient-width":typeof x=="number"?`${x}px`:x}),[I,x]),z=e.useMemo(()=>({"--play":f?"running":"paused","--direction":a==="left"?"normal":"reverse","--duration":`${_}s`,"--delay":`${L}s`,"--iteration-count":M?`${M}`:"infinite","--min-width":d?"auto":"100%"}),[f,a,_,L,M,d]),q=e.useMemo(()=>({"--transform":a==="up"?"rotate(90deg)":a==="down"?"rotate(-90deg)":"none"}),[a]),W=e.useCallback(r=>[...Array(Number.isFinite(r)&&r>=0?r:0)].map((S,o)=>n.default.createElement(e.Fragment,{key:o},e.Children.map(w,l=>n.default.createElement("div",{style:q,className:"rfm-child"},l)))),[q,w]);return k?n.default.createElement("div",{ref:s,style:Q,className:"rfm-marquee-container "+G},P&&n.default.createElement("div",{style:U,className:"rfm-overlay"}),n.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:X,onAnimationEnd:T},n.default.createElement("div",{className:"rfm-initial-child-container",ref:h},e.Children.map(w,r=>n.default.createElement("div",{style:q,className:"rfm-child"},r))),W(b-1)),n.default.createElement("div",{className:"rfm-marquee",style:z},W(b))):null});return j.default=m,j}var re=ae();const ie=ee(re),se=["Software Development Engineer (SDE) ","Full Stack Developer","Mern Stack Developer","Frontend Developer","Backend Developer","Software Associate Developer"],le=()=>{const[u,e]=$.useState(1024),g=te(n=>n.global.theme);return $.useEffect(()=>{const n=()=>{const m=window.innerWidth;e(m)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),t.jsxs("div",{className:B(g==="dark"?"bg-[#111] text-white":"bg-white text-black","pb-10"),children:[t.jsxs("div",{className:"px-8 py-10 lg:px-20 ",children:[t.jsxs(D.h1,{initial:{opacity:.5,scale:.4,x:50},whileInView:{opacity:1,scale:1,x:0},transition:{type:"spring",stiffness:200,damping:50},viewport:{once:!0},className:"text-5xl hello",children:["About"," ",t.jsx("span",{className:"text-transparent bg-gradient-to-r from-[#b57e10] via-[#f9df7b] via-[#b57e10] to-[#c7992b] bg-clip-text",children:"Myself"})]}),t.jsxs("div",{className:"grid gap-5 pb-0 pt-15 lg:grid-cols-2",children:[t.jsx("div",{className:"order-2 my-auto lg:order-1 ",children:t.jsx(D.h3,{initial:{opacity:.2},whileInView:{opacity:1},transition:{type:"spring",stiffness:200,damping:100,delay:.1},className:`${u<=640?"leading-7 text-justify tracking-wide":"leading-9 text-justify"}`,children:"I am a Computer Science Engineering graduate who expertise in fullstack web development, specializing in the MERN stack (MongoDB, Express, React, Node.js). My skills include building dynamic, responsive web applications, integrating both frontend and backend seamlessly. I have hands-on experience with Next.js for server-side rendering, enhancing performance, and scalability. Additionally, I am proficient in creating user-friendly interfaces, managing databases, and developing RESTful APIs. My education in computer science has provided me with a strong foundation in programming, algorithms, and software development practices, enabling me to build efficient, scalable, and user-focused web applications."})}),t.jsx("div",{className:"order-1 lg:order-2",children:t.jsx(D.div,{initial:{opacity:0,scale:.4,y:-100},whileInView:{opacity:1,scale:1,y:0},transition:{type:"spring",stiffness:200,damping:50},viewport:{once:!0},className:"",children:t.jsx("img",{src:"bg1.jpg",width:"1000",height:"1000",alt:"",className:"md:max-w-[400px] rounded-2xl mx-auto border-r-1 border-b-1"})})})]})]}),t.jsx("div",{className:B(g==="dark"?"bg-white text-black":"bg-black text-white","py-4"),children:t.jsx("div",{className:"",children:t.jsx(ie,{className:"flex overflow-hidden text-2xl ",children:se.map((n,m)=>t.jsxs("div",{className:"flex items-center",children:[t.jsx("h1",{className:"ml-2 mr-2 text-sm font-bold tracking-widest uppercase md:mr-2",children:n}),t.jsx("div",{className:"mt-auto mb-auto font-bold tracking-wider",children:t.jsx(ne,{className:"m-auto text-xl text-orange-400 "})})]},m))})})})]})};export{le as default};
