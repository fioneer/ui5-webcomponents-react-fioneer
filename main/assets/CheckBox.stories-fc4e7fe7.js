import{M as h,C as d,f as c,b as u}from"./chunk-PCJTTTQV-ea334b5f.js";import{C as t}from"./index-4d42dfd9.js";import{V as r}from"./ValueState-ab6838cc.js";import{b as k}from"./DomRefTable.module-1c545b6d.js";import{D as S}from"./DocsHeader-2ac4c9ed.js";import{F as g}from"./Footer-ac703fb9.js";import{j as e}from"./jsx-runtime-6b79a019.js";import"./index-ccf6a75d.js";import{u as l}from"./index-f2208173.js";import"./iframe-663d599c.js";import"../sb-preview/runtime.js";import"./react-18-74db5ca2.js";import"./mapValues-4f30c9d2.js";import"./_baseForOwn-1047660d.js";import"./index-8d7a8128.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-f4b610e7.js";import"./_baseUniq-a28bb1ec.js";import"./index-356e4a49.js";import"./CheckBox-05a648ec.js";import"./Device-6afa24d0.js";import"./UI5Element-11982a12.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-03662f7f.js";import"./utils-f515de3e.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./slot-76e48863.js";import"./Icon-3498e12d.js";import"./Icons-234bf59e.js";import"./ValueState-2c5e5904.js";import"./AriaLabelHelper-43a261ec.js";import"./accept-6c83709e.js";import"./Label-f867a533.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-1a83921e.js";import"./class-map-341004db.js";import"./react-jss.esm-0528916b.js";import"./index-d2e5ea07.js";import"./decline-c1cc2557.js";import"./i18n-defaults-837f5aed.js";import"./information-2644a02f.js";import"./Button-3da2aede.js";import"./MarkedEvents-b83081e9.js";import"./index-d3b71bde.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-2d3c4974.js";import"./index-41e89c44.js";import"./Integer-f7f172c9.js";import"./index-b42ff7d3.js";import"./Avatar-d7b74462.js";import"./ResizeHandler-9ebe913c.js";import"./employee-e34ffee2.js";import"./index-476d75d7.js";import"./index-1842ce63.js";import"./Link-6cd3dd1c.js";import"./index-9da023d2.js";import"./TableOfContent-5077e852.js";import"./index-c310e45e.js";import"./index-da1c4f54.js";import"./index-c99715ba.js";import"./Popover-1f09fd29.js";import"./PopupsCommon.css-fd974b5a.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-9183c00a.js";import"./BrowserScrollbar.css-bcc05298.js";const y='## Usage\n\nYou can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default. In case you prefer text to wrap, set the `wrappingType` property to "Normal". The touchable area for toggling the `CheckBox` ends where the text ends.\n\nYou can disable the `CheckBox` by setting the `disabled` property to `true`, or use the `CheckBox` in read-only mode by setting the `readonly` property to `true`.\n\n## CSS Shadow Parts\n\n<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  \nThe `CheckBox` exposes the following CSS Shadow Parts:\n\n- root - Used to style the outermost wrapper of the `CheckBox`\n\n## Keyboard Handling\n\nThe user can use the following keyboard shortcuts to toggle the checked state of the `CheckBox`.\n\n- \\[SPACE, ENTER\\] - Toggles between different states: checked, not checked.\n';function j(o={}){const{wrapper:s}=Object.assign({},l(),o.components);return s?e.jsx(s,{...o,children:e.jsx(i,{})}):i();function i(){const a=Object.assign({h2:"h2",h1:"h1"},l(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"}}),`
`,e.jsx(S,{}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"example",children:"Example"}),`
`,e.jsx(d,{children:e.jsx(c,{name:"Default",children:x=>e.jsx(t,{...x})})}),`
`,e.jsx(a.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(k,{story:"Default"}),`
`,e.jsx(u,{children:y}),`
`,e.jsx(a.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(a.h2,{id:"checkbox-states",children:"CheckBox states"}),`
`,e.jsx(d,{children:e.jsx(c,{name:"CheckBox states",children:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})})}),`
`,e.jsx(g,{})]})}}const p=o=>e.jsx(t,{...o});p.storyName="Default";p.parameters={storySource:{source:`args => {
  return <CheckBox {...args} />;
}`}};const m=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]});m.storyName="CheckBox states";m.parameters={storySource:{source:`() => {
  return <>
          <CheckBox text="Error" valueState={ValueState.Error} />
          <CheckBox text="Warning" valueState={ValueState.Warning} />
          <CheckBox text="Disabled" disabled checked />
          <CheckBox text="Readonly" readonly checked />
          <CheckBox text="Error disabled" disabled valueState={ValueState.Error} checked />
          <CheckBox text="Warning disabled " disabled valueState={ValueState.Warning} checked />
          <CheckBox text="Error readonly" readonly valueState={ValueState.Error} checked />
          <CheckBox text="Warning readonly" readonly valueState={ValueState.Warning} checked />
        </>;
}`}};const n={title:"Inputs / CheckBox",component:t,args:{valueState:r.None,text:"CheckBox"},tags:["stories-mdx"],includeStories:["defaultStory","checkBoxStates"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:j};const _e=["defaultStory","checkBoxStates"];export{_e as __namedExportsOrder,m as checkBoxStates,n as default,p as defaultStory};
//# sourceMappingURL=CheckBox.stories-fc4e7fe7.js.map
