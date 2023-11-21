"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={title:"How to Assess Utility of LLM-powered Applications?",authors:["julianakiseleva","narabzad"],tags:["LLM","GPT","evaluation","task utility"]},o=void 0,s={permalink:"/autogen/blog/2023/11/20/AgentEval",source:"@site/blog/2023-11-20-AgentEval/index.mdx",title:"How to Assess Utility of LLM-powered Applications?",description:"Fig.1: A verification framework",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"evaluation",permalink:"/autogen/blog/tags/evaluation"},{label:"task utility",permalink:"/autogen/blog/tags/task-utility"}],readingTime:9.475,truncated:!1,authors:[{name:"Julia Kiseleva",title:"Senior Researcher at Microsoft Research",url:"https://github.com/julianakiseleva/",imageURL:"https://avatars.githubusercontent.com/u/5908392?v=4",key:"julianakiseleva"},{name:"Negar Arabzadeh",title:"PhD student at the University of Waterloo",url:"https://www.negara.me/",imageURL:"https://github.com/Narabzad.png",key:"narabzad"}],nextItem:{title:"AutoGen Meets GPTs",permalink:"/autogen/blog/2023/11/13/OAI-assistants"}},l={authorsImageUrls:[void 0,void 0]},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"<code>AgentEval</code> Framework",id:"agenteval-framework",children:[],level:2},{value:"<code>AgentEval</code> Results based on Math Problems Dataset",id:"agenteval-results-based-on-math-problems-dataset",children:[],level:2},{value:"Limitations and Future Work",id:"limitations-and-future-work",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2},{value:"Previous Research",id:"previous-research",children:[],level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig.1: A verification framework",src:a(9684).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)("em",null,"Fig.1 illustrates the general flow of AgentEval")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TL;DR:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a developer of an LLM-powered application, how can you assess the utility it brings to end users while helping them with their tasks?"),(0,i.kt)("li",{parentName:"ul"},"To shed light on the question above, we introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"AgentEval")," \u2014 the first version of the framework to assess the utility of any LLM-powered application crafted to assist users in specific tasks.  AgentEval aims to simplify the evaluation process by automatically proposing a set of criteria tailored to the unique purpose of your application. This allows for a comprehensive assessment, quantifying the utility of your application against the suggested criteria."),(0,i.kt)("li",{parentName:"ul"},"We demonstrate how ",(0,i.kt)("inlineCode",{parentName:"li"},"AgentEval")," work using ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/autogen/blog/2023/06/28/MathChat"},"math problems dataset")," as an example in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/autogen/blob/main/notebook/agenteval_cq_math.ipynb"},"following notebook"),". Any feedback would be useful for future development. Please contact us on our ",(0,i.kt)("a",{parentName:"li",href:"http://aka.ms/autogen-dc"},"Discord"),".")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null," AutoGen aims to simplify the development of LLM-powered multi-agent systems for various applications, ultimately making end users' lives easier by assisting with their tasks. Next, we all yearn to understand how our developed systems perform, their utility for users, and, perhaps most crucially, how we can enhance them. Directly evaluating multi-agent systems poses challenges as current approaches predominantly rely on success metrics \u2013 essentially, whether the agent accomplishes tasks. However, comprehending user interaction with a system involves far more than success alone. Take math problems, for instance; it's not merely about the agent solving the problem. Equally significant is its ability to convey solutions based on various criteria, including completeness, conciseness, and the clarity of the provided explanation. Furthermore, success isn't always clearly defined for every task."),(0,i.kt)("p",null," Rapid advances in LLMs and multi-agent systems have brought forth many emerging capabilities that we're keen on translating into tangible utilities for end users. We introduce the first version of ",(0,i.kt)("inlineCode",{parentName:"p"},"AgentEval")," framework - a tool crafted to empower developers in swiftly gauging the utility of LLM-powered applications designed to help end users accomplish the desired task."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig.2: An overview of the tasks taxonomy",src:a(6896).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)("em",null,"Fig. 2 provides  an overview of the tasks taxonomy")),(0,i.kt)("p",null,"Let's first look into an overview of the suggested task taxonomy that a multi-agent system can be designed for. In general, the tasks can be split into two types, where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Success is not clearly defined")," - refer to instances when users utilize a system in an assistive manner, seeking suggestions rather than expecting the system to solve the task. For example, a user might request the system to generate an email. In many cases, this generated content serves as a template that the user will later edit. However, defining success precisely for such tasks is relatively complex."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Success is clearly defined")," - refer to instances where we can clearly define whether a system solved the task or not. Consider agents that assist in accomplishing household tasks, where the definition of success is clear and measurable. This category can be further divided into two separate subcategories:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"The optimal solution exits")," - these are tasks where only one solution is possible. For example, if you ask your assistant to turn on the light, the success of this task is clearly defined, and there is only one way to accomplish it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Multiple solutions exist")," - increasingly, we observe situations where multiple trajectories of agent behavior can lead to either success or failure. In such cases, it is crucial to differentiate between the various successful and unsuccessful trajectories. For example, when you ask the agent to suggest you a food recipe or tell you a joke.")))),(0,i.kt)("p",null,"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"AgentEval")," framework, we are currently focusing on tasks where ",(0,i.kt)("em",{parentName:"p"},"Success is clearly defined"),". Next, we will introduce the suggeted framework."),(0,i.kt)("h2",{id:"agenteval-framework"},(0,i.kt)("inlineCode",{parentName:"h2"},"AgentEval")," Framework"),(0,i.kt)("p",null,"Our previous research on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/iglu-datasets"},"assistive agents in Minecraft")," suggested that the most optimal way to obtain human judgments is to present humans with two agents side by side and ask for preferences. In this setup of pairwise comparison, humans can develop criteria to explain why they prefer the behavior of one agent over another. For instance, ",(0,i.kt)("em",{parentName:"p"},"'the first agent was faster in execution,'")," or ",(0,i.kt)("em",{parentName:"p"},"'the second agent moves more naturally.'")," So, the comparative nature led humans to come up with a list of criteria that helps to infer the utility of the task. With this idea in mind, we designed ",(0,i.kt)("inlineCode",{parentName:"p"},"AgentEval")," (shown in Fig. 1), where we employ LLMs to help us understand, verify, and assess task ",(0,i.kt)("em",{parentName:"p"},"utility")," for the multi-agent system. Namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The goal of ",(0,i.kt)("inlineCode",{parentName:"li"},"CriticAgent")," is to suggest the list of criteria (Fig. 1), that can be used to assess task utility. This is an example of how ",(0,i.kt)("inlineCode",{parentName:"li"},"CriticAgent")," is defined using ",(0,i.kt)("inlineCode",{parentName:"li"},"Autogen"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'critic = autogen.AssistantAgent(\n    name="critic",\n    llm_config={"config_list": config_list},\n    system_message="""You are a helpful assistant. You suggest criteria for evaluating different tasks. They should be distinguishable, quantifiable, and not redundant.\n    Convert the evaluation criteria into a dictionary where the keys are the criteria.\n    The value of each key is a dictionary as follows {"description": criteria description, "accepted_values": possible accepted inputs for this key}\n    Make sure the keys are criteria for assessing the given task. "accepted_values" include the acceptable inputs for each key that are fine-grained and preferably multi-graded levels. "description" includes the criterion description.\n    Return only the dictionary."""\n)\n')),(0,i.kt)("p",null,"Next, the critic is given successful and failed examples of the task execution; then, it is able to return a list of criteria (Fig. 1). For reference, use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agenteval_cq_math.ipynb"},"following notebook"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The goal of ",(0,i.kt)("inlineCode",{parentName:"li"},"QuantifierAgent")," is to quantify each of the suggested criteria (Fig. 1), providing us with an idea of the utility of this system for the given task. Here is an example of how it can be defined:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'quantifier = autogen.AssistantAgent(\n    name="quantifier",\n    llm_config={"config_list": config_list},\n    system_message = """You are a helpful assistant. You quantify the output of different tasks based on the given criteria.\n    The criterion is given in a dictionary format where each key is a distinct criteria.\n    The value of each key is a dictionary as follows {"description": criteria description , "accepted_values": possible accepted inputs for this key}\n    You are going to quantify each of the criteria for a given task based on the task description.\n    Return a dictionary where the keys are the criteria and the values are the assessed performance based on accepted values for each criteria.\n    Return only the dictionary."""\n\n)\n')),(0,i.kt)("h2",{id:"agenteval-results-based-on-math-problems-dataset"},(0,i.kt)("inlineCode",{parentName:"h2"},"AgentEval")," Results based on Math Problems Dataset"),(0,i.kt)("p",null," As an example, after running CriticAgent, we obtained the following criteria to verify the results for math problem dataset:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Criteria"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Problem Interpretation"),(0,i.kt)("td",{parentName:"tr",align:null},"Ability to correctly interpret the problem"),(0,i.kt)("td",{parentName:"tr",align:null},'["completely off", "slightly relevant", "relevant", "mostly accurate", "completely accurate"]')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mathematical Methodology"),(0,i.kt)("td",{parentName:"tr",align:null},"Adequacy of the chosen mathematical or algorithmic methodology for the question"),(0,i.kt)("td",{parentName:"tr",align:null},'["inappropriate", "barely adequate", "adequate", "mostly effective", "completely effective"]')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Calculation Correctness"),(0,i.kt)("td",{parentName:"tr",align:null},"Accuracy of calculations made and solutions given"),(0,i.kt)("td",{parentName:"tr",align:null},'["completely incorrect", "mostly incorrect", "neither", "mostly correct", "completely correct"]')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Explanation Clarity"),(0,i.kt)("td",{parentName:"tr",align:null},"Clarity and comprehensibility of explanations, including language use and structure"),(0,i.kt)("td",{parentName:"tr",align:null},'["not at all clear", "slightly clear", "moderately clear", "very clear", "completely clear"]')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Code Efficiency"),(0,i.kt)("td",{parentName:"tr",align:null},"Quality of code in terms of efficiency and elegance"),(0,i.kt)("td",{parentName:"tr",align:null},'["not at all efficient", "slightly efficient", "moderately efficient", "very efficient", "extremely efficient"]')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Code Correctness"),(0,i.kt)("td",{parentName:"tr",align:null},"Correctness of the provided code"),(0,i.kt)("td",{parentName:"tr",align:null},'["completely incorrect", "mostly incorrect", "partly correct", "mostly correct", "completely correct"]')))),(0,i.kt)("p",null,"Then, after running QuantifierAgent, we obtained the results presented in Fig. 3, where you can see three models:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AgentChat"),(0,i.kt)("li",{parentName:"ul"},"ReAct"),(0,i.kt)("li",{parentName:"ul"},"GPT-4 Vanilla Solver")),(0,i.kt)("p",null,"Lighter colors represent estimates for failed cases, and brighter colors show how discovered criteria were quantified."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig.3: Results based on overall mathp roblems dataset `_s` stands for successful cases, `_f` - stands for failed cases",src:a(7635).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)("em",null,"Fig.3 presents results based on overall mathproblems datase `_s` stands for successful cases, `_f` - stands for failed cases")),(0,i.kt)("p",null,"We note that while applying agentEval to math problems, the agent was not exposed to any ground truth information about the problem. As such, this figure illustrates an estimated performance of the three different agents, namely, Autogen (blue), Gpt-4 (red), and ReAct (green). We observe that by comparing the performance of any of the three agents in successful cases (dark bars of any color) versus unsuccessful cases (lighter version of the same bar), we note that AgentEval was able to assign higher quantification to successful cases than that of failed ones. This observation verifies AgentEval's ability for task utility prediction. Additionally, AgentEval allows us to go beyond just a binary definition of success, enabling a more in-depth comparison between successful and failed cases."),(0,i.kt)("p",null,"It's important not only to identify what is not working but also to recognize what and why actually went well."),(0,i.kt)("h2",{id:"limitations-and-future-work"},"Limitations and Future Work"),(0,i.kt)("p",null,"The current implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"AgentEval")," has a number of limitations which are planning to overcome in the future:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The list of criteria varies per run (unless you store a seed). We would recommend to run ",(0,i.kt)("inlineCode",{parentName:"li"},"CriticAgent")," at least two times, and pick criteria you think is important for your domain."),(0,i.kt)("li",{parentName:"ul"},"The results of the ",(0,i.kt)("inlineCode",{parentName:"li"},"QuantifierAgent")," can vary with each run, so we recommend conducting multiple runs to observe the extent of result variations.")),(0,i.kt)("p",null,"To mitigate the limitations mentioned above, we are working on VerifierAgent, whose goal is to stabilize the results and provide additional explanations."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CriticAgent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QuantifierAgent")," can be applied to the logs of any type of application, providing you with an in-depth understanding of the utility your solution brings to the user for a given task."),(0,i.kt)("p",null,"We would love to hear about how AgentEval works for your application. Any feedback would be useful for future development. Please contact us on our ",(0,i.kt)("a",{parentName:"p",href:"http://aka.ms/autogen-dc"},"Discord"),"."),(0,i.kt)("h2",{id:"previous-research"},"Previous Research"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@InProceedings{pmlr-v176-kiseleva22a,\n  title = "Interactive Grounded Language Understanding in a Collaborative Environment: IGLU 2021",\n  author = "Kiseleva, Julia and Li, Ziming and Aliannejadi, Mohammad and Mohanty, Shrestha and ter Hoeve, Maartje and Burtsev, Mikhail and Skrynnik, Alexey and Zholus, Artem and Panov, Aleksandr and Srinet, Kavya and Szlam, Arthur and Sun, Yuxuan and Hofmann, Katja and C{\\^o}t{\\\'e}, Marc-Alexandre and Awadallah, Ahmed and Abdrazakov, Linar and Churin, Igor and Manggala, Putra and Naszadi, Kata and van der Meer, Michiel and Kim, Taewoon",\n  booktitle = "Proceedings of the NeurIPS 2021 Competitions and Demonstrations Track",\n  pages = "146--161",\n  year = 2022,\n  editor = "Kiela, Douwe and Ciccone, Marco and Caputo, Barbara",\n  volume = 176,\n  series = "Proceedings of Machine Learning Research",\n  month = "06--14 Dec",\n  publisher = "PMLR",\n  pdf =      {https://proceedings.mlr.press/v176/kiseleva22a/kiseleva22a.pdf},\n  url =      {https://proceedings.mlr.press/v176/kiseleva22a.html}.\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@InProceedings{pmlr-v220-kiseleva22a,\n  title = "Interactive Grounded Language Understanding in a Collaborative Environment: Retrospective on Iglu 2022 Competition",\n  author = "Kiseleva, Julia and Skrynnik, Alexey and Zholus, Artem and Mohanty, Shrestha and Arabzadeh, Negar and C\\^{o}t\\\'e, Marc-Alexandre and Aliannejadi, Mohammad and Teruel, Milagro and Li, Ziming and Burtsev, Mikhail and ter Hoeve, Maartje and Volovikova, Zoya and Panov, Aleksandr and Sun, Yuxuan and Srinet, Kavya and Szlam, Arthur and Awadallah, Ahmed and Rho, Seungeun and Kwon, Taehwan and Wontae Nam, Daniel and Bivort Haiek, Felipe and Zhang, Edwin and Abdrazakov, Linar and Qingyam, Guo and Zhang, Jason and Guo, Zhibin",\n  booktitle = "Proceedings of the NeurIPS 2022 Competitions Track",\n  pages = "204--216",\n  year = 2022,\n  editor = "Ciccone, Marco and Stolovitzky, Gustavo and Albrecht, Jacob",\n  volume = 220,\n  series = "Proceedings of Machine Learning Research",\n  month = "28 Nov--09 Dec",\n  publisher = "PMLR",\n  pdf = "https://proceedings.mlr.press/v220/kiseleva22a/kiseleva22a.pdf",\n  url = "https://proceedings.mlr.press/v220/kiseleva22a.html".\n}\n')))}d.isMDXComponent=!0},9684:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/agenteval-CQ-59f82d98878045817d02a3915839a92a.png"},7635:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/math-problems-plot-03ec81b957c85db6ad9b1da353784b96.png"},6896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tasks-taxonomy-c4b7c6fe465e12dddde9235c3ee8c281.png"}}]);