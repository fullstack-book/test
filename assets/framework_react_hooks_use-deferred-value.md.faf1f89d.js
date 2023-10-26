import{_ as e,a as t,b as r}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.052e419c.js";import{_ as c,C as E,o as y,c as i,H as s,w as n,Q as u}from"./chunks/framework.27021b64.js";const B=JSON.parse('{"title":"React Hooks 系列 之 useDeferredValue","description":"","frontmatter":{},"headers":[],"relativePath":"framework/react/hooks/use-deferred-value.md","filePath":"framework/react/hooks/use-deferred-value.md","lastUpdated":1692084073000}'),d={name:"framework/react/hooks/use-deferred-value.md"},F=u(`<h1 id="react-hooks-系列-之-usedeferredvalue" tabindex="-1">React Hooks 系列 之 useDeferredValue <a class="header-anchor" href="#react-hooks-系列-之-usedeferredvalue" aria-label="Permalink to &quot;React Hooks 系列 之 useDeferredValue&quot;">​</a></h1><p><code>useDeferredValue</code> 钩子的主要目的是在 React 的并发模式中提供更流畅的用户体验，特别是在有高优先级和低优先级更新的情况下。以下是一些常见的使用场景及其示例：</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><h3 id="_1-响应性输入框与慢速列表" tabindex="-1">1. 响应性输入框与慢速列表 <a class="header-anchor" href="#_1-响应性输入框与慢速列表" aria-label="Permalink to &quot;1. 响应性输入框与慢速列表&quot;">​</a></h3><p>当用户在输入框中输入时，我们希望输入框能够立即响应，而不受其他慢速组件的影响。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">text</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setText</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">deferredText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDeferredValue</span><span style="color:#E1E4E8;">(text, { timeoutMs: </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;App&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{text} </span><span style="color:#B392F0;">onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setText</span><span style="color:#E1E4E8;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">MySlowList</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{deferredText} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">text</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">setText</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useState</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">deferredText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDeferredValue</span><span style="color:#24292E;">(text, { timeoutMs: </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;App&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{text} </span><span style="color:#6F42C1;">onChange</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setText</span><span style="color:#24292E;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">MySlowList</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{deferredText} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_2-搜索与结果显示" tabindex="-1">2. 搜索与结果显示 <a class="header-anchor" href="#_2-搜索与结果显示" aria-label="Permalink to &quot;2. 搜索与结果显示&quot;">​</a></h3><p>当用户在搜索框中输入查询时，我们希望搜索框能够立即更新，而搜索结果可能需要一些时间来获取和显示。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SearchApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">query</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setQuery</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">deferredQuery</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDeferredValue</span><span style="color:#E1E4E8;">(query, { timeoutMs: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{query} </span><span style="color:#B392F0;">onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setQuery</span><span style="color:#E1E4E8;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">SearchResults</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">query</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{deferredQuery} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SearchApp</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">query</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">setQuery</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useState</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">deferredQuery</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDeferredValue</span><span style="color:#24292E;">(query, { timeoutMs: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{query} </span><span style="color:#6F42C1;">onChange</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setQuery</span><span style="color:#24292E;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">SearchResults</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">query</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{deferredQuery} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-动画与数据加载" tabindex="-1">3. 动画与数据加载 <a class="header-anchor" href="#_3-动画与数据加载" aria-label="Permalink to &quot;3. 动画与数据加载&quot;">​</a></h3><p>当页面上有动画正在播放时，我们可能希望动画能够流畅地播放，而不受数据加载的影响。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AnimationApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setData</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">deferredData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDeferredValue</span><span style="color:#E1E4E8;">(data, { timeoutMs: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">LoadingAnimation</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">DataComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{deferredData} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AnimationApp</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">data</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">setData</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">deferredData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDeferredValue</span><span style="color:#24292E;">(data, { timeoutMs: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">LoadingAnimation</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">DataComponent</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{deferredData} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这些示例展示了如何使用 <code>useDeferredValue</code> 钩子在并发模式中优化性能和用户体验。</p><h2 id="usedeferredvalue-和防抖-debounce" tabindex="-1">useDeferredValue 和防抖（debounce） <a class="header-anchor" href="#usedeferredvalue-和防抖-debounce" aria-label="Permalink to &quot;useDeferredValue 和防抖（debounce）&quot;">​</a></h2><p><code>useDeferredValue</code> 和防抖（debounce）在某些方面有相似之处，特别是它们都涉及到延迟某些操作的执行。但它们的目的和实现方式是不同的。让我们来详细比较一下：</p><h3 id="_1-目的" tabindex="-1">1. 目的 <a class="header-anchor" href="#_1-目的" aria-label="Permalink to &quot;1. 目的&quot;">​</a></h3><ul><li><strong>useDeferredValue</strong>：它的主要目的是在 React 的并发模式中提供更流畅的用户体验。当有高优先级和低优先级的更新时，它允许低优先级的更新“滞后”于高优先级的更新。</li><li><strong>防抖</strong>：防抖的目的是减少函数的执行频率。当连续触发事件时，只有事件触发的间隔超过指定的延迟时间，函数才会执行。</li></ul><h3 id="_2-使用场景" tabindex="-1">2. 使用场景 <a class="header-anchor" href="#_2-使用场景" aria-label="Permalink to &quot;2. 使用场景&quot;">​</a></h3><ul><li><strong>useDeferredValue</strong>：常用于优化性能，例如当用户在输入框中输入时，我们希望输入框能够立即响应，而其他可能需要时间来处理的操作（如搜索结果的显示）可以稍后执行。</li><li><strong>防抖</strong>：常用于减少连续触发的事件的函数调用，例如搜索框的实时搜索、窗口大小调整、滚动事件等。</li></ul><h3 id="_3-实现方式" tabindex="-1">3. 实现方式： <a class="header-anchor" href="#_3-实现方式" aria-label="Permalink to &quot;3. 实现方式：&quot;">​</a></h3><ul><li><strong>useDeferredValue</strong>：是 React 的并发模式中的一个钩子，它与 React 的渲染机制紧密结合。</li><li><strong>防抖</strong>：通常通过 JavaScript 的 <code>setTimeout</code> 和 <code>clearTimeout</code> 来实现。</li></ul><p><strong>示例</strong>：</p><p>考虑一个实时搜索的场景：</p><ul><li><p>使用 <strong>防抖</strong>：当用户在搜索框中输入时，我们可能会使用防抖来确保只有在用户停止输入一段时间后才发送搜索请求。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wait</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timeout;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timeout);</span></span>
<span class="line"><span style="color:#E1E4E8;">    timeout </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, args), wait);</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">handleSearch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 发送搜索请求</span></span>
<span class="line"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">, </span><span style="color:#E36209;">wait</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timeout;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timeout);</span></span>
<span class="line"><span style="color:#24292E;">    timeout </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, args), wait);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">handleSearch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">query</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 发送搜索请求</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>使用 <strong>useDeferredValue</strong>：我们可以使输入框立即响应用户输入，而搜索结果的显示可以稍后进行，以提供更流畅的用户体验。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SearchApp</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">query</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">setQuery</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useState</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">deferredQuery</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useDeferredValue</span><span style="color:#E1E4E8;">(query);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{query} </span><span style="color:#B392F0;">onChange</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setQuery</span><span style="color:#E1E4E8;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#79B8FF;">SearchResults</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">query</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{deferredQuery} /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SearchApp</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">query</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">setQuery</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useState</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">deferredQuery</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useDeferredValue</span><span style="color:#24292E;">(query);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{query} </span><span style="color:#6F42C1;">onChange</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{</span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setQuery</span><span style="color:#24292E;">(e.target.value)} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#005CC5;">SearchResults</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">query</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">{deferredQuery} /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ul><p>总之，虽然 <code>useDeferredValue</code> 和防抖在某些方面有相似之处，但它们的目的、使用场景和实现方式是不同的。</p><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2>`,26);function b(m,h,g,C,D,f){const l=e,a=E("ClientOnly"),p=t,o=r;return y(),i("div",null,[F,s(a,null,{default:n(()=>[s(l)]),_:1}),s(a,null,{default:n(()=>[s(p)]),_:1}),s(a,null,{default:n(()=>[s(o)]),_:1})])}const _=c(d,[["render",b]]);export{B as __pageData,_ as default};
