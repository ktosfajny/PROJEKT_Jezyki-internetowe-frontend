(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/netrunner.13901a4c.png"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=(a(14),a(15),a(16),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"background__star background__star--1"}),r.a.createElement("div",{className:"background__star background__star--2"}),r.a.createElement("div",{className:"background__star background__star--3"}),r.a.createElement("div",{className:"background__star background__star--4"}),r.a.createElement("div",{className:"background__star background__star--5"}),r.a.createElement("div",{className:"background__star background__star--6"}),r.a.createElement("div",{className:"background__star background__star--7"}),r.a.createElement("div",{className:"background__star background__star--8"}))}),l=(a(17),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header__title"},"FUTURE IS ",r.a.createElement("span",{className:"header__neon"},"NOW")))}),i=a(2),u=a(3),m=a(5),d=a(4),f=(a(18),a(8)),_=a.n(f),h=a(1),E=(a(19),function(e){return r.a.createElement("div",{className:"aboutme__info-box"},r.a.createElement("h3",{className:"aboutme__info-title"},e.title),r.a.createElement("p",{className:"aboutme__info"},e.message,r.a.createElement("span",{className:"aboutme__cursor"},"|")))}),p=(a(20),function(e){return r.a.createElement("div",{className:"aboutme__right-subtitle-box"},r.a.createElement("span",{className:"aboutme__right-subtitle"},e.title))}),N=function(e){return r.a.createElement("span",{className:"aboutme__cybershape-neon-".concat(e.type)})},v=(a(21),function(e){return r.a.createElement("div",{className:"aboutme__title-wrap"},r.a.createElement("h2",{className:"aboutme__title"},"Architect ",r.a.createElement("span",{className:"aboutme__span"})))}),b=(a(22),function(e){return r.a.createElement("div",{className:"aboutme__imageDiv"},r.a.createElement("img",{className:"aboutme__image",src:e.image,alt:"architect pic"}))}),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={message1:"",message2:"",letterIndex1:0,letterIndex2:0,intervalsAreSet:!1},e.interval="",e.interval2="",e.text={text1:"The are many galactic races in our galaxy: Grey alien, Reptilians, Energy beeing, Pleiades and so on. In order to be in good relations with each other race, we need to present ourselves as great, strong and willful beeings. So if you feel you are fitting us, let us know!",text2:"Bio-mechanics, Net-runners, Hardware Mechanics, Smart ones and everyone who feel capable to handle cosmic tasks! Take the test and check if you are the one we are looking for!"},e.showNextLetter=function(t){if(1===t){var a=e.state,n=a.message1,r=a.letterIndex1,s=e.text.text1,c=n;e.setState({message1:c+=s[r],letterIndex1:r+1})}else{var o=e.state,l=o.message2,i=o.letterIndex2,u=e.text.text2,m=l;e.setState({message2:m+=u[i],letterIndex2:i+1})}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".aboutme__info");window.addEventListener("scroll",(function(){window.pageYOffset>.7*document.querySelector(".header").clientHeight&&!e.state.intervalsAreSet&&(h.a.to(t,1,{width:"100%"}),setTimeout((function(){e.interval=setInterval(e.showNextLetter.bind(e,1),80),e.interval2=setInterval(e.showNextLetter.bind(e,2),80)}),1e3),e.setState({intervalsAreSet:!0}))}))}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.letterIndex1,a=e.letterIndex2,n=this.text,r=n.text1,s=n.text2;t>=r.length-1&&clearInterval(this.interval),a>=s.length&&clearInterval(this.interval2)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearInterval(this.interval2)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"aboutme__wrapper"},r.a.createElement("div",{className:"aboutme__right-titles"},r.a.createElement(p,{title:"History"}),r.a.createElement(p,{title:"Mission Data"})),r.a.createElement("div",{className:"aboutme__cybershape"},r.a.createElement(N,{type:"top"}),r.a.createElement(N,{type:"right"}),r.a.createElement("div",{className:"aboutme__ls"},r.a.createElement(v,null),r.a.createElement(b,{image:_.a})),r.a.createElement("div",{className:"aboutme__rs"},r.a.createElement(E,{title:"WE NEED YOUR HELP",message:this.state.message1}),r.a.createElement(E,{title:"WHO WE NEED?",message:this.state.message2})))))}}]),a}(r.a.Component),w=(a(23),a(24),function(e){return r.a.createElement("div",{className:"recruit__btn",onClick:e.click},r.a.createElement("span",{className:"recruit__btn-span"}),r.a.createElement("span",{className:"recruit__btn-span"}),r.a.createElement("span",{className:"recruit__btn-span"}),r.a.createElement("span",{className:"recruit__btn-span"}))}),I=(a(25),function(e){return r.a.createElement("div",{className:"recruit__answer"},r.a.createElement("div",{className:"recruit__answerInfo"},e.answerInfo),r.a.createElement("button",{className:"recruit__option-btn recruit__option-btn--".concat(e.colorClass),onClick:e.click},"Choose"))}),k=function(e){return r.a.createElement("img",{className:"recruit__characterImage",src:"https://future-is-now-server.herokuapp.com/api/".concat(e.character),alt:"character"})},y=(a(26),function(e){return r.a.createElement("div",{className:"recruit__questionHolder"},r.a.createElement("h3",{className:"recruit__questionNR"},r.a.createElement("span",null,e.questionNR)),r.a.createElement("p",{className:"recruit__questionInfo"},r.a.createElement("span",null,e.questionInfo)))}),x=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).nextQuestionNR=0,e.currentState=[0,0,0,0],e.state={questionNR:"",questionInfo:"",answerInfo1:"",answerInfo2:"",answerInfo3:"",answerInfo4:"",showCharacterImage:!1,character:"",mainButtonIsClicked:!1,spansAreNotVisible:!1},e.handleFadingBeforeResult=function(t){var a=document.querySelectorAll(".recruit__answer"),n=document.querySelectorAll(".recruit__questionHolder span");a.forEach((function(e){h.a.to(e,1,{opacity:0})})),n.forEach((function(e){h.a.to(e,1,{opacity:0})})),setTimeout((function(){e.fillQuestionElements(t,2)}),1e3),setTimeout((function(){e.fillQuestionElements(t,1)}),1001),setTimeout((function(){n.forEach((function(e){h.a.to(e,2,{delay:1,opacity:1})}));var e=document.querySelector(".recruit__characterImage");h.a.to(e,2,{delay:1,opacity:1})}),1002)},e.handleFetchData=function(t){var a=e.currentState;a.forEach((function(e,n){n+1===t&&a[n]++})),fetch("https://future-is-now-server.herokuapp.com/api/question",{method:"POST",body:JSON.stringify({nextQuestionNR:e.nextQuestionNR,stats:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e:console.log("something went wrong!")})).then((function(e){return e.json()})).then((function(t){t.result?e.handleFadingBeforeResult(t):e.fillQuestionElements(t)}))},e.handleMainButtonClick=function(t){e.handleFetchData();var a=t.target;e.state.mainButtonIsClicked||(a.classList.add("clicked"),e.setState({mainButtonIsClicked:!0})),h.a.to(a,2,{top:"20%"}),h.a.to(a,2,{display:"none",opacity:0});var n=document.querySelector(".recruit__questionsBox");h.a.to(n,1,{delay:3,display:"block",opacity:1})},e.handleFetchNextQuestion=function(t){e.nextQuestionNR++,e.handleFetchData(t)},e}return Object(u.a)(a,[{key:"fillQuestionElements",value:function(e,t){if(e.result){var a=e.character,n=a.name,r=a.info;1===t?this.setState({questionNR:n,questionInfo:r}):2===t&&this.setState({showAnswers:!1,showCharacterImage:!0,character:n,spansAreNotVisible:!0})}else{var s=e.question,c=s.questionNR,o=s.questionInfo,l=s.answerInfo;this.setState({questionNR:c,questionInfo:o,answerInfo1:l[0],answerInfo2:l[1],answerInfo3:l[2],answerInfo4:l[3],showAnswers:!0})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.questionNR,n=t.questionInfo,s=t.answerInfo1,c=t.answerInfo2,o=t.answerInfo3,l=t.answerInfo4,i=t.showAnswers,u=t.showCharacterImage,m=t.character,d=t.spansAreNotVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"recruit__wrapper"},r.a.createElement(w,{click:this.handleMainButtonClick}),r.a.createElement("div",{className:"recruit__questionsBox"},r.a.createElement("div",{className:"recruit__cybershape"},r.a.createElement("div",{className:"recruit__ls"},r.a.createElement(y,{spansVisible:d,questionNR:a,questionInfo:n})),r.a.createElement("div",{className:"recruit__rs"},r.a.createElement("div",{className:"recruit__answersHolder"},u&&r.a.createElement(k,{character:m}),i&&r.a.createElement(I,{answerInfo:s,click:function(){return e.handleFetchNextQuestion(1)},colorClass:"blue"}),i&&r.a.createElement(I,{answerInfo:c,click:function(){return e.handleFetchNextQuestion(2)},colorClass:"green"}),i&&r.a.createElement(I,{answerInfo:o,click:function(){return e.handleFetchNextQuestion(3)},colorClass:"yellow"}),i&&r.a.createElement(I,{answerInfo:l,click:function(){return e.handleFetchNextQuestion(4)},colorClass:"red"})))))))}}]),a}(r.a.Component);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"background"},r.a.createElement(o,null)),r.a.createElement("header",{className:"header"},r.a.createElement(l,null)),r.a.createElement("section",{className:"aboutme"},r.a.createElement(g,null)),r.a.createElement("section",{className:"recruit"},r.a.createElement(x,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f4012f2e.chunk.js.map