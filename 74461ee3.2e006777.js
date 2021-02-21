(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return r})),n.d(e,"default",(function(){return c}));var o=n(3),s=(n(0),n(88));const a={id:"store",title:"Creating a Store"},i={unversionedId:"store",id:"store",isDocsHomePage:!1,title:"Creating a Store",description:"Here we will create a store for a hypothetical todo-list application.",source:"@site/docs/quick-store.md",slug:"/store",permalink:"/docs/store",editUrl:"https://github.com/wire-ts/website/edit/master/docs/quick-store.md",version:"current",sidebar:"someSidebar",previous:{title:"Structuring your App",permalink:"/docs/structure"},next:{title:"Creating a Root Store",permalink:"/docs/root-store"}},r=[{value:"Initial State",id:"initial-state",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Thunks",id:"thunks",children:[]},{value:"Selectors",id:"selectors",children:[]}],l={toc:r};function c({components:t,...e}){return Object(s.b)("wrapper",Object(o.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Here we will create a store for a hypothetical todo-list application."),Object(s.b)("h3",{id:"initial-state"},"Initial State"),Object(s.b)("p",null,"Let's start by defining our types. To get started with Wire, we will need to pass an initial state."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import { store } from "@wire-ts/wire";\n\ninterface Todo {\n  id: number;\n  task: string;\n  done: boolean;\n}\n\nconst initialState: { list: Todo[] }= { list: [] }\n\nexport default store(initialState)\n')),Object(s.b)("h3",{id:"actions"},"Actions"),Object(s.b)("p",null,"Now that we have our state type, we can start defining some actions. Actions are functions that take in the ",Object(s.b)("strong",{parentName:"p"},"current")," state, some arguments (optional), and output a ",Object(s.b)("strong",{parentName:"p"},"new")," state."),Object(s.b)("p",null,"To enforce good habits, Wire passes in the current state as an ",Object(s.b)("strong",{parentName:"p"},"immutable")," object. If you try to mutate the state, you will get a type error."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import { store } from "@wire-ts/wire";\n\ninterface Todo {\n  id: number;\n  task: string;\n  done: boolean;\n}\n\nexport default store({ list: [] as Todo[] }).actions({\n  add: (state, todo: Todo) => ({\n    ...state,\n    list: [...state.list, todo],\n  }),\n  remove: (state, id: number) => ({\n    ...state,\n    list: state.list.filter(todo => todo.id !== id),\n  }),\n});\n')),Object(s.b)("p",null,"And that's it. The data store is now ready to be included in a Root Store. You also probably want to define thunks for communicating with an API and, optionally, selectors."),Object(s.b)("h3",{id:"thunks"},"Thunks"),Object(s.b)("p",null,"Thunks are higher-level functions that can call other actions. Thunks do not return a new state and can only change the state via actions. Unlike actions, they can also be asynchronous."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import { store } from "@wire-ts/wire";\n\ninterface Todo {\n  id: number;\n  task: string;\n  done: boolean;\n}\n\nconst todos = store({ list: [] as Todo[] }).actions({\n  load: (state, todos: Todo[]) => ({ ...state, list: todos }),\n  add: (state, todo: Todo) => ({\n    ...state,\n    list: [...state.list, todo],\n  }),\n  remove: (state, id: number) => ({\n    ...state,\n    list: state.list.filter(todo => todo.id !== id),\n  }),\n}).thunks({\n  load: async () => {\n    const items = await yourAPICall();\n    todos.actions.load(items);\n  },\n  remove123: (someArg: boolean) => {\n    console.log(todos.state);\n    todos.actions.remove(123);\n  }\n});\n\nexport default todos;\n')),Object(s.b)("h3",{id:"selectors"},"Selectors"),Object(s.b)("p",null,"Selectors are functions that take in the current state, arguments (optional), and return some data computed from the state."),Object(s.b)("p",null,"Selectors are useful for avoiding code repetition when connecting React components to the state."),Object(s.b)("p",null,"Example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import { store } from "@wire-ts/wire";\n\ninterface Todo {\n  id: number;\n  task: string;\n  done: boolean;\n}\n\nconst todos = store({ list: [] as Todo[] }).actions({\n  load: (state, todos: Todo[]) => ({ ...state, list: todos }),\n  add: (state, todo: Todo) => ({\n    ...state,\n    list: [...state.list, todo],\n  }),\n  remove: (state, id: number) => ({\n    ...state,\n    list: state.list.filter(todo => todo.id !== id),\n  }),\n}).thunks({\n  load: async () => {\n    const items = await yourAPICall();\n    todos.actions.load(items);\n  },\n  remove123: (someArg: boolean) => {\n    console.log(todos.state);\n    todos.actions.remove(123);\n  }\n}).selectors({\n  incomplete: (state) => state.list.filter(t => !t.done)\n});\n')))}c.isMDXComponent=!0}}]);