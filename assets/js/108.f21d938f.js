(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{519:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义元素交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义元素交互"}},[t._v("#")]),t._v(" 自定义元素交互 "),a("MigrationBadges",{attrs:{badges:t.$frontmatter.badges}})],1),t._v(" "),a("h2",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),a("ul",[a("li",[t._v("**BREAKING：**自定义元素白名单现在在模板编译期间执行，应该通过编译器选项而不是运行时配置来配置。")]),t._v(" "),a("li",[t._v("**BREAKING：**特定 "),a("code",[t._v("is")]),t._v(" prop 用法仅限于保留的 "),a("code",[t._v("<component>")]),t._v(" 标记")]),t._v(" "),a("li",[t._v("**NEW：**有了新的 "),a("code",[t._v("v-is")]),t._v(" 指令来支持 2.x 用例，其中在原生元素上使用了 "),a("code",[t._v("v-is")]),t._v(" 来处理原生 HTML 解析限制。")])]),t._v(" "),a("h2",{attrs:{id:"自主定制元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自主定制元素"}},[t._v("#")]),t._v(" 自主定制元素")]),t._v(" "),a("p",[t._v("如果我们想添加在 Vue 外部定义的自定义元素 (例如使用 Web 组件 API)，我们需要“指示”Vue 将其视为自定义元素。让我们以下面的模板为例。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plastic-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plastic-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-语法"}},[t._v("#")]),t._v(" 2.x 语法")]),t._v(" "),a("p",[t._v("在 Vue 2.x 中，将标记作为自定义元素白名单是通过 "),a("code",[t._v("Vue.config.ignoredElements")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这将使Vue忽略在Vue外部定义的自定义元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (例如：使用 Web Components API)")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ignoredElements "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plastic-button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法"}},[t._v("#")]),t._v(" 3.x 语法")]),t._v(" "),a("p",[a("strong",[t._v("在 Vue 3.0 中，此检查在模板编译期间执行")]),t._v("指示编译器将 "),a("code",[t._v("<plastic-button>")]),t._v(" 视为自定义元素：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果使用生成步骤：将 "),a("code",[t._v("isCustomElement")]),t._v(" 传递给 Vue 模板编译器，如果使用 "),a("code",[t._v("vue-loader")]),t._v("，则应通过 "),a("code",[t._v("vue-loader")]),t._v(" 的 "),a("code",[t._v("compilerOptions")]),t._v(" 选项传递：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack 中的配置")]),t._v("\nrules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.vue$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      compilerOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isCustomElement")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plastic-button'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("如果使用动态模板编译，请通过 "),a("code",[t._v("app.config.isCustomElement")]),t._v(" 传递：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isCustomElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plastic-button'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("需要注意的是，运行时配置只会影响运行时模板编译——它不会影响预编译的模板。")])])]),t._v(" "),a("h2",{attrs:{id:"定制内置元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定制内置元素"}},[t._v("#")]),t._v(" 定制内置元素")]),t._v(" "),a("p",[t._v("自定义元素规范提供了一种将自定义元素用作"),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义内置模板"),a("OutboundLink")],1),t._v("的方法，方法是向内置元素添加 "),a("code",[t._v("is")]),t._v(" 属性：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("plastic-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点击我!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Vue 对 "),a("code",[t._v("is")]),t._v(" 特殊 prop 的使用是在模拟 native attribute 在浏览器中普遍可用之前的作用。但是，在 2.x 中，它被解释为渲染一个名为 "),a("code",[t._v("plastic-button")]),t._v(" 的 Vue 组件，这将阻止上面提到的自定义内置元素的原生使用。")]),t._v(" "),a("p",[t._v("在 3.0 中，我们仅将 Vue 对 "),a("code",[t._v("is")]),t._v(" 属性的特殊处理限制到 "),a("code",[t._v("<component>")]),t._v(" tag。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在保留的 "),a("code",[t._v("<component>")]),t._v(" tag 上使用时，它的行为将与 2.x 中完全相同；")])]),t._v(" "),a("li",[a("p",[t._v("在普通组件上使用时，它的行为将类似于普通 prop：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("2.x 行为：渲染 "),a("code",[t._v("bar")]),t._v(" 组件。")]),t._v(" "),a("li",[t._v("3.x 行为：通过 "),a("code",[t._v("is")]),t._v(" prop 渲染 "),a("code",[t._v("foo")]),t._v(" 组件。")])])]),t._v(" "),a("li",[a("p",[t._v("在普通元素上使用时，它将作为 "),a("code",[t._v("is")]),t._v(" 选项传递给 "),a("code",[t._v("createElement")]),t._v(" 调用，并作为原生 attribute 渲染，这支持使用自定义的内置元素。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("plastic-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点击我！"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("2.x 行为：渲染 "),a("code",[t._v("plastic-button")]),t._v(" 组件。")])]),t._v(" "),a("li",[a("p",[t._v("3.x 行为：通过回调渲染原生的 button。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" is"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plastic-button'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])])]),t._v(" "),a("h2",{attrs:{id:"v-is-用于-dom-内模板解析解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-is-用于-dom-内模板解析解决方案"}},[t._v("#")]),t._v(" "),a("code",[t._v("v-is")]),t._v(" 用于 DOM 内模板解析解决方案")]),t._v(" "),a("blockquote",[a("p",[t._v("提示：本节仅影响直接在页面的 HTML 中写入 Vue 模板的情况。\n在 DOM 模板中使用时，模板受原生 HTML 解析规则的约束。一些 HTML 元素，例如 "),a("code",[t._v("<ul>")]),t._v("，"),a("code",[t._v("<ol>")]),t._v("，"),a("code",[t._v("<table>")]),t._v(" 和 "),a("code",[t._v("<select>")]),t._v(" 对它们内部可以出现的元素有限制，和一些像 "),a("code",[t._v("<li>")]),t._v("，"),a("code",[t._v("<tr>")]),t._v("，和 "),a("code",[t._v("<option>")]),t._v(" 只能出现在某些其他元素中。")])]),t._v(" "),a("h3",{attrs:{id:"_2x-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2x-语法"}},[t._v("#")]),t._v(" 2x 语法")]),t._v(" "),a("p",[t._v("在 Vue 2 中，我们建议通过在原生 tag 上使用 "),a("code",[t._v("is")]),t._v(" prop 来解决这些限制：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("blog-post-row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3-x-语法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法-2"}},[t._v("#")]),t._v(" 3.x 语法")]),t._v(" "),a("p",[t._v("随着 "),a("code",[t._v("is")]),t._v(" 的行为变化，我们引入了一个新的指令 "),a("code",[t._v("v-is")]),t._v("，用于解决这些情况：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("blog-post-row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("code",[t._v("v-is")]),t._v(" 函数像一个动态的 2.x "),a("code",[t._v(":is")]),t._v(" 绑定——因此，要按注册名称渲染组件，其值应为 JavaScript 字符串文本：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 不正确，不会渲染任何内容 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("blog-post-row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 正确 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("blog-post-row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"迁移策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移策略"}},[t._v("#")]),t._v(" 迁移策略")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("替换 "),a("code",[t._v("config.ignoredElements")]),t._v(" 与 "),a("code",[t._v("vue-loader")]),t._v(" 的 "),a("code",[t._v("compilerOptions")]),t._v(" (使用 build 步骤) 或 "),a("code",[t._v("app.config.isCustomElement")]),t._v(" (使用动态模板编译)")])]),t._v(" "),a("li",[a("p",[t._v("将所有非 "),a("code",[t._v("<component>")]),t._v(" tags 与 "),a("code",[t._v("is")]),t._v(" 用法更改为 "),a("code",[t._v('<component is="...">')]),t._v(" (对于 SFC 模板) 或 "),a("code",[t._v("v-is")]),t._v(" (对于 DOM 模板)。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);