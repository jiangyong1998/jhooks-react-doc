import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.0c768d29.js";const p=JSON.parse('{"title":"Class: LocalStorage<T>","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/utils.LocalStorage.md","filePath":"dist/classes/utils.LocalStorage.md"}'),o={name:"dist/classes/utils.LocalStorage.md"},l=r('<p><a href="./../README.html">jhooks-react</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/utils.html">utils</a> / LocalStorage</p><h1 id="class-localstorage-t" tabindex="-1">Class: LocalStorage&lt;T&gt; <a class="header-anchor" href="#class-localstorage-t" aria-label="Permalink to &quot;Class: LocalStorage&lt;T\\&gt;&quot;">​</a></h1><p><a href="./../modules/utils.html">utils</a>.LocalStorage</p><h2 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h2 id="implements" tabindex="-1">Implements <a class="header-anchor" href="#implements" aria-label="Permalink to &quot;Implements&quot;">​</a></h2><ul><li><code>IStorage</code>&lt;<code>T</code>&gt;</li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./utils.LocalStorage.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./utils.LocalStorage.html#defaultvalue">defaultValue</a></li><li><a href="./utils.LocalStorage.html#key">key</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./utils.LocalStorage.html#getitem">getItem</a></li><li><a href="./utils.LocalStorage.html#removeitem">removeItem</a></li><li><a href="./utils.LocalStorage.html#setitem">setItem</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new LocalStorage</strong>&lt;<code>T</code>&gt;(<code>key</code>, <code>defaultValue</code>)</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>defaultValue</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/jiangyong1998/jhooks-react/blob/688a6de/src/utils/storage.ts#L10" target="_blank" rel="noreferrer">utils/storage.ts:10</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="defaultvalue" tabindex="-1">defaultValue <a class="header-anchor" href="#defaultvalue" aria-label="Permalink to &quot;defaultValue&quot;">​</a></h3><p>• <strong>defaultValue</strong>: <code>T</code></p><h4 id="implementation-of" tabindex="-1">Implementation of <a class="header-anchor" href="#implementation-of" aria-label="Permalink to &quot;Implementation of&quot;">​</a></h4><p>IStorage.defaultValue</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/jiangyong1998/jhooks-react/blob/688a6de/src/utils/storage.ts#L9" target="_blank" rel="noreferrer">utils/storage.ts:9</a></p><hr><h3 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;key&quot;">​</a></h3><p>• <strong>key</strong>: <code>string</code></p><h4 id="implementation-of-1" tabindex="-1">Implementation of <a class="header-anchor" href="#implementation-of-1" aria-label="Permalink to &quot;Implementation of&quot;">​</a></h4><p>IStorage.key</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/jiangyong1998/jhooks-react/blob/688a6de/src/utils/storage.ts#L8" target="_blank" rel="noreferrer">utils/storage.ts:8</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getitem" tabindex="-1">getItem <a class="header-anchor" href="#getitem" aria-label="Permalink to &quot;getItem&quot;">​</a></h3><p>▸ <strong>getItem</strong>(): <code>T</code></p><p>获取值</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/jiangyong1998/jhooks-react/blob/688a6de/src/utils/storage.ts#L19" target="_blank" rel="noreferrer">utils/storage.ts:19</a></p><hr><h3 id="removeitem" tabindex="-1">removeItem <a class="header-anchor" href="#removeitem" aria-label="Permalink to &quot;removeItem&quot;">​</a></h3><p>▸ <strong>removeItem</strong>(): <code>void</code></p><p>删除值</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/jiangyong1998/jhooks-react/blob/688a6de/src/utils/storage.ts#L33" target="_blank" rel="noreferrer">utils/storage.ts:33</a></p><hr><h3 id="setitem" tabindex="-1">setItem <a class="header-anchor" href="#setitem" aria-label="Permalink to &quot;setItem&quot;">​</a></h3><p>▸ <strong>setItem</strong>(<code>value</code>): <code>void</code></p><p>设置值</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/jiangyong1998/jhooks-react/blob/688a6de/src/utils/storage.ts#L15" target="_blank" rel="noreferrer">utils/storage.ts:15</a></p>',63),i=[l];function s(n,d,h,c,u,m){return t(),a("div",null,i)}const b=e(o,[["render",s]]);export{p as __pageData,b as default};
