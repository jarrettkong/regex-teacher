(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(44)},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(19),l=a.n(r),c=a(10),o=(a(27),a(2)),i=a(3),m=a(5),u=a(4),p=a(6),h=a(11),b=(a(28),function(){return s.a.createElement("header",{className:"Home-header"},s.a.createElement("h1",{className:"Home-name"},"/ Regex /"),s.a.createElement("p",{className:"Home-tagline"},"Learn Regular Expressions"),s.a.createElement("nav",{className:"Home-btn-container"},s.a.createElement(c.b,{to:"/learn",className:"App-btn"},"Learn"),s.a.createElement(c.b,{to:"/sandbox",className:"App-btn"},"Sandbox"),s.a.createElement("p",null,"Work in Progress")))}),f=(a(37),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e)))._handlePattern=function(e){a.setState({pattern:e.target.value})},a._handleFlags=function(e){a.setState({flags:e.target.value})},a._handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.pattern,s=t.flags;a.props.checkAnswer(n,s)},a.state={pattern:"",flags:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"RegexForm",onSubmit:this._handleSubmit},s.a.createElement("div",{className:"Regex-input-container main-container"},s.a.createElement("label",{htmlFor:"pattern-input"},"Pattern"),s.a.createElement("input",{type:"text",id:"pattern-input",spellCheck:"false",placeholder:"/pattern/",value:this.state.pattern,onChange:this._handlePattern,minLength:"1"})),s.a.createElement("div",{className:"Regex-input-container flag-container"},s.a.createElement("label",{htmlFor:"flag-input"},"Flags"),s.a.createElement("input",{type:"text",id:"flag-input",spellCheck:"false",placeholder:"/flags",value:this.state.flags,onChange:this._handleFlags,pattern:"[gimsxeU]*"})),s.a.createElement("input",{type:"submit",className:"RegexForm-submit"}))}}]),t}(n.Component)),d=(a(38),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("aside",{className:"Nav"},s.a.createElement(c.b,{to:"/",className:"home-icon Nav-icon"},s.a.createElement("i",{className:"material-icons"},"home")),s.a.createElement("button",{className:"reset-icon Nav-icon",onClick:this.props.resetProgress},s.a.createElement("i",{className:"material-icons"},"loop")),s.a.createElement("a",{href:"https://i.imgur.com/Wn8eOKG.png",target:"_blank",rel:"noopener noreferrer",className:"help-icon Nav-icon"},s.a.createElement("i",{className:"material-icons"},"help_outline")))}}]),t}(n.Component)),E=function(e){return s.a.createElement("div",{className:"Lesson-complete-container"},s.a.createElement("h1",{className:"Lesson-complete-text"},"Congratulations"),s.a.createElement("p",null,"You have completed the course, if you would like more practice, you can click the reset button to start over."),s.a.createElement("button",{className:"App-btn Lesson-btn",id:"resetButton",onClick:e.resetProgress},"Restart"))},g=(a(39),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).checkAnswer=function(e,t){var n=a.props.lesson.solutions;a.getResult(e,t).toString()===n.toString()&&a.props.completeLesson()},a.getResult=function(e,t){if(e.length){var n=a.props.lesson.cases,s=new RegExp(e,t);return n.map(function(e){return s.test(e)})}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.lesson,n=t.lessonNumber,r=t.nextLesson,l=s.a.createElement("button",{className:"Lesson-next-round App-btn",onClick:r},"Continue");return e=this.props.lessonNumber<=21?s.a.createElement("div",{className:"Lesson-container"},s.a.createElement(d,{resetProgress:this.props.resetProgress}),s.a.createElement("h2",{className:"Lesson-header"},"Lesson ",n),s.a.createElement("div",{className:"Lesson-grid"},s.a.createElement("section",{className:"Lesson-instructions Lesson-container"},s.a.createElement("h3",null,"Topic: ",s.a.createElement("span",{className:"Lesson-text"},a.topic)),s.a.createElement("h3",null,"Syntax: ",s.a.createElement("span",{className:"Lesson-text Lesson-code"},a.syntax)),s.a.createElement("h3",null,"Instructions: ",s.a.createElement("span",{className:"Lesson-text"},a.instructions)),s.a.createElement("h3",null,"Problem: ",s.a.createElement("span",{className:"Lesson-text"},a.problem)),s.a.createElement(f,{checkAnswer:this.checkAnswer}),s.a.createElement("h4",{className:"Lesson-reminder"},"NOTE: You will not need to include the // in your answer"),this.props.complete&&l))):s.a.createElement(E,{resetProgress:this.props.resetProgress}),s.a.createElement("section",{className:"Lesson",id:"Lesson"},e)}}]),t}(n.Component)),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={lessonNumber:1,complete:!1,isLoading:!0,lessons:[]},a.completeLesson=function(){a.setState({complete:!0})},a.resetProgress=function(){a.setState({lessonNumber:1},function(){localStorage.lessonNumber="1"})},a.nextLesson=function(){a.setState({lessonNumber:a.state.lessonNumber+1,complete:!1},function(){localStorage.lessonNumber=JSON.stringify(a.state.lessonNumber)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=parseInt(localStorage.lessonNumber)||1;this.setState({isLoading:!0},function(){fetch("https://fe-apps.herokuapp.com/api/v1/memoize/1901/jarrettkong/lessons").then(function(e){return e.json()}).then(function(a){return e.setState({lessons:a.lessons,isLoading:!1,lessonNumber:t})}).catch(function(e){return console.log(e)})})}},{key:"render",value:function(){var e=this.state,t=e.lessons,a=e.lessonNumber,n=e.complete,r=null;return this.state.isLoading||(r=s.a.createElement(g,{lessonNumber:a,lesson:t[a-1],complete:n,nextLesson:this.nextLesson,completeLesson:this.completeLesson,resetProgress:this.resetProgress})),s.a.createElement("main",null,r)}}]),t}(n.Component),x=(a(40),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s))))._handleForm=function(){var e=document.querySelector("#pattern-input").value,t=document.querySelector("#flag-input").value;a.props.handleForm(e,t)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",null,s.a.createElement("form",{className:"SandboxForm",onSubmit:this._handleSubmit},s.a.createElement("div",{className:"Sandbox-input-container main-container"},s.a.createElement("label",{htmlFor:"pattern-input"},"Pattern"),s.a.createElement("input",{type:"text",id:"pattern-input",spellCheck:"false",placeholder:"/pattern/",onChange:this._handleForm,minLength:"1"})),s.a.createElement("div",{className:"Sandbox-input-container flag-container"},s.a.createElement("label",{htmlFor:"flag-input"},"Flags"),s.a.createElement("input",{type:"text",id:"flag-input",spellCheck:"false",placeholder:"/flags",onChange:this._handleForm,pattern:"[gimsxeU]*"}))),s.a.createElement("hr",null),s.a.createElement("textarea",{name:"Sandbox-textarea",id:"Sandbox-textarea",className:"Sandbox-textarea",rows:"20",placeholder:"Enter the text you want to test your regular expression against...",spellCheck:"false",onChange:this.props.handleTextArea}))}}]),t}(n.Component)),v=(a(41),function(e){return s.a.createElement("section",{className:"SandboxResults"},s.a.createElement("h2",{className:"SandboxResults-header"},"Matches"),s.a.createElement("div",{className:"SandboxResults-container"},s.a.createElement("ol",{className:"SandboxResults-match-container"},e.matches.map(function(e,t){return s.a.createElement("li",{key:t,className:"SandboxResults-match"},e)}))))}),S=(a(42),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e)))._handleForm=function(e,t){a.setState({pattern:e,flags:t},function(){var e=a.getMatches();e&&a.setState({matches:e})})},a._handleTextArea=function(e){a.setState({inputValue:e.target.value},function(){var e=a.getMatches();e&&a.setState({matches:e})})},a.getMatches=function(){var e=a.state,t=e.pattern,n=e.flags,s=e.inputValue;try{var r=new RegExp(t,n);return s.match(r)}catch(l){return}},a.state={pattern:"",flags:"",inputValue:"",matches:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"Sandbox"},s.a.createElement(d,null),s.a.createElement("h1",{className:"Sandbox-header"},"Sandbox"),s.a.createElement("p",null,"Test your regular expressions with a custom input"),s.a.createElement("section",{className:"Sandbox-area"},s.a.createElement(x,{handleTextArea:this._handleTextArea,handleForm:this._handleForm}),s.a.createElement(v,{matches:this.state.matches})))}}]),t}(n.Component)),O=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"App",id:"App"},s.a.createElement(c.a,null,s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/",render:function(){return s.a.createElement(b,null)}}),s.a.createElement(h.a,{path:"/learn",render:function(){return s.a.createElement(N,null)}}),s.a.createElement(h.a,{path:"/sandbox",render:function(){return s.a.createElement(S,null)}}))))}}]),t}(n.Component));l.a.render(s.a.createElement(c.a,null,s.a.createElement(O,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.100e8ab4.chunk.js.map