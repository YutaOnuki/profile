function smoothLink(e=0){const t=4,o=t/2+1,n=document.querySelector("#header"),i=n.querySelectorAll("div.navbar-menu > a");for(let n=0;n<i.length;n++)i[n].addEventListener("click",function(n){n.preventDefault();let i,d=window.pageYOffset;const r=n.target.getAttribute("href"),c=document.querySelector(r),l=c.getBoundingClientRect(),u=l.top+d-e;!function e(){if(i=d+Math.round((u-d)/t),window.scrollTo(0,i),d=i,document.body.clientHeight-window.innerHeight<i)return void window.scrollTo(0,document.body.clientHeight);i>=u+o||i<=u-o?window.setTimeout(e,7):window.scrollTo(0,u)}()})}let headH=document.getElementById("header").offsetHeight;document.body.style.marginTop=headH+"px",smoothLink(headH);