"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3021],{22304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151);const r={sidebar_label:"user_proxy_agent",title:"agentchat.user_proxy_agent"},s=void 0,a={id:"reference/agentchat/user_proxy_agent",title:"agentchat.user_proxy_agent",description:"UserProxyAgent",source:"@site/docs/reference/agentchat/user_proxy_agent.md",sourceDirName:"reference/agentchat",slug:"/reference/agentchat/user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/user_proxy_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/user_proxy_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"user_proxy_agent",title:"agentchat.user_proxy_agent"},sidebar:"referenceSideBar",previous:{title:"groupchat",permalink:"/autogen/docs/reference/agentchat/groupchat"},next:{title:"utils",permalink:"/autogen/docs/reference/agentchat/utils"}},c={},l=[{value:"UserProxyAgent",id:"userproxyagent",level:2},{value:"__init__",id:"__init__",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"userproxyagent",children:"UserProxyAgent"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class UserProxyAgent(ConversableAgent)\n"})}),"\n",(0,i.jsx)(n.p,{children:"(In preview) A proxy agent for the user, that can execute code and provide feedback to the other agents."}),"\n",(0,i.jsxs)(n.p,{children:["UserProxyAgent is a subclass of ConversableAgent configured with ",(0,i.jsx)(n.code,{children:"human_input_mode"})," to ALWAYS\nand ",(0,i.jsx)(n.code,{children:"llm_config"})," to False. By default, the agent will prompt for human input every time a message is received.\nCode execution is enabled by default. LLM-based auto reply is disabled by default.\nTo modify auto reply, register a method with ",(0,i.jsx)(n.a,{href:"conversable_agent#register_reply",children:(0,i.jsx)(n.code,{children:"register_reply"})}),".\nTo modify the way to get human input, override ",(0,i.jsx)(n.code,{children:"get_human_input"})," method.\nTo modify the way to execute code blocks, single code block, or function call, override ",(0,i.jsx)(n.code,{children:"execute_code_blocks"}),",\n",(0,i.jsx)(n.code,{children:"run_code"}),", and ",(0,i.jsx)(n.code,{children:"execute_function"})," methods respectively."]}),"\n",(0,i.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def __init__(name: str,\n             is_termination_msg: Optional[Callable[[Dict], bool]] = None,\n             max_consecutive_auto_reply: Optional[int] = None,\n             human_input_mode: Literal["ALWAYS", "TERMINATE",\n                                       "NEVER"] = "ALWAYS",\n             function_map: Optional[Dict[str, Callable]] = None,\n             code_execution_config: Optional[Union[Dict,\n                                                   Literal[False]]] = None,\n             default_auto_reply: Optional[Union[str, Dict, None]] = "",\n             llm_config: Optional[Union[Dict, Literal[False]]] = False,\n             system_message: Optional[Union[str, List]] = "",\n             description: Optional[str] = None)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," ",(0,i.jsx)(n.em,{children:"str"})," - name of the agent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"is_termination_msg"})," ",(0,i.jsx)(n.em,{children:"function"}),' - a function that takes a message in the form of a dictionary\nand returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_consecutive_auto_reply"})," ",(0,i.jsx)(n.em,{children:"int"}),' - the maximum number of consecutive auto replies.\ndefault to None (no limit provided, class attribute MAX_CONSECUTIVE_AUTO_REPLY will be used as the limit in this case).\nThe limit only plays a role when human_input_mode is not "ALWAYS".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"human_input_mode"})," ",(0,i.jsx)(n.em,{children:"str"}),' - whether to ask for human inputs every time a message is received.\nPossible values are "ALWAYS", "TERMINATE", "NEVER".\n(1) When "ALWAYS", the agent prompts for human input every time a message is received.\nUnder this mode, the conversation stops when the human input is "exit",\nor when is_termination_msg is True and there is no human input.\n(2) When "TERMINATE", the agent only prompts for human input only when a termination message is received or\nthe number of auto reply reaches the max_consecutive_auto_reply.\n(3) When "NEVER", the agent will never prompt for human input. Under this mode, the conversation stops\nwhen the number of auto reply reaches the max_consecutive_auto_reply or when is_termination_msg is True.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"function_map"})," ",(0,i.jsx)(n.em,{children:"dict[str, callable]"})," - Mapping function names (passed to openai) to callable functions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code_execution_config"})," ",(0,i.jsx)(n.em,{children:"dict or False"})," - config for the code execution.\nTo disable code execution, set to False. Otherwise, set to a dictionary with the following keys:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'work_dir (Optional, str): The working directory for the code execution.\nIf None, a default working directory will be used.\nThe default working directory is the "extensions" directory under\n"path_to_autogen".'}),"\n",(0,i.jsx)(n.li,{children:"use_docker (Optional, list, str or bool): The docker image to use for code execution.\nDefault is True, which means the code will be executed in a docker container. A default list of images will be used.\nIf a list or a str of image name(s) is provided, the code will be executed in a docker container\nwith the first image successfully pulled.\nIf False, the code will be executed in the current environment.\nWe strongly recommend using docker for code execution."}),"\n",(0,i.jsx)(n.li,{children:"timeout (Optional, int): The maximum execution time in seconds."}),"\n",(0,i.jsx)(n.li,{children:"last_n_messages (Experimental, Optional, int): The number of messages to look back for code execution. Default to 1."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"default_auto_reply"})," ",(0,i.jsx)(n.em,{children:"str or dict or None"})," - the default auto reply message when no code execution or llm based reply is generated."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"llm_config"})," ",(0,i.jsx)(n.em,{children:"dict or False"})," - llm inference configuration.\nPlease refer to ",(0,i.jsx)(n.a,{href:"/docs/reference/oai/client#create",children:"OpenAIWrapper.create"}),"\nfor available options.\nDefault to false, which disables llm-based auto reply."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"system_message"})," ",(0,i.jsx)(n.em,{children:"str or List"})," - system message for ChatCompletion inference.\nOnly used when llm_config is not False. Use it to reprogram the agent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"})," ",(0,i.jsx)(n.em,{children:"str"})," - a short description of the agent. This description is used by other agents\n(e.g. the GroupChatManager) to decide when to call upon this agent. (Default: system_message)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);