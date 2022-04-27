"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[7486],{2490:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-3464e36c",path:"/en/guide/Group-Aggregation-Query.html",title:"Group Aggregation Query",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Group Aggregation",slug:"group-aggregation",children:[]},{level:2,title:"Navigation Property Grouping",slug:"navigation-property-grouping",children:[]},{level:2,title:"Multi-table Grouping",slug:"multi-table-grouping",children:[]},{level:2,title:"Aggregate",slug:"aggregate",children:[]},{level:2,title:"API",slug:"api",children:[]},{level:2,title:"Reference",slug:"reference",children:[]}],git:{updatedTime:1651030409e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmai.com",commits:1}]},filePathRelative:"en/guide/Group-Aggregation-Query.md"}},7062:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="group-aggregation-query" tabindex="-1"><a class="header-anchor" href="#group-aggregation-query" aria-hidden="true">#</a> Group Aggregation Query</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n     <span class="token comment">//Be sure to define as singleton mode</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> \n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="group-aggregation" tabindex="-1"><a class="header-anchor" href="#group-aggregation" aria-hidden="true">#</a> Group Aggregation</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> tt2 <span class="token operator">=</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mod4 <span class="token operator">=</span> a<span class="token punctuation">.</span>Id <span class="token operator">%</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">Max</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>mod4<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>tt2<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> cou1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//SELECT substr(a.`Title`, 1, 2) as1, count(1) as2, avg(a.`Id`) as3 </span>\n<span class="token comment">//FROM `Topic` a </span>\n<span class="token comment">//GROUP BY substr(a.`Title`, 1, 2), (a.`Id` % 4) </span>\n<span class="token comment">//HAVING (count(1) &gt; 0 AND avg((a.`Id` % 4)) &gt; 0 AND max((a.`Id` % 4)) &gt; 0) AND (count(1) &lt; 300 OR avg((a.`Id` % 4)) &lt; 100) </span>\n<span class="token comment">//ORDER BY substr(a.`Title`, 1, 2), count(1) DESC</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>To find the aggregate value without grouping, please use <code>ToAggregate</code> instead of <code>ToList</code></p></blockquote><h2 id="navigation-property-grouping" tabindex="-1"><a class="header-anchor" href="#navigation-property-grouping" aria-hidden="true">#</a> Navigation Property Grouping</h2><p>If <code>Topic</code> has the navigation property <code>Category</code>, and <code>Category</code> has the navigation property <code>Area</code>, the navigation property grouping code is as follows:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Note: Write as above, an error will be reported and cannot be resolved <code>a.Key.Category.Area.Name</code>. The solution is to use <code>Include</code>:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Include</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">)</span>\n    <span class="token comment">//This line must be added, </span>\n    <span class="token comment">//otherwise only the Category will be grouped without its sub-navigation property Area</span>\n\n    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>However, you can also solve it like this:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Clicks<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Category<span class="token punctuation">.</span>Area <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Area<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="multi-table-grouping" tabindex="-1"><a class="header-anchor" href="#multi-table-grouping" aria-hidden="true">#</a> Multi-table Grouping</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>var list <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Select<span class="token operator">&lt;</span>Topic<span class="token punctuation">,</span> Category<span class="token punctuation">,</span> Area<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GroupBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> new <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">,</span> c<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Having</span><span class="token punctuation">(</span>g <span class="token operator">=</span><span class="token operator">&gt;</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">300</span> <span class="token operator">||</span> g<span class="token punctuation">.</span><span class="token function">Avg</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Item1<span class="token punctuation">.</span>Clicks<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span>g <span class="token operator">=</span><span class="token operator">&gt;</span> new <span class="token punctuation">{</span> count <span class="token operator">=</span> g<span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Name <span class="token operator">=</span> g<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>g.Value.Item1</code> corresponds to <code>Topic</code></li><li><code>g.Value.Item2</code> corresponds to <code>Category</code></li><li><code>g.Value.Item3</code> corresponds to <code>Area</code></li></ul><h2 id="aggregate" tabindex="-1"><a class="header-anchor" href="#aggregate" aria-hidden="true">#</a> Aggregate</h2><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>var list <span class="token operator">=</span> fsql<span class="token punctuation">.</span>Select<span class="token operator">&lt;</span>Topic<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span>a <span class="token operator">=</span><span class="token operator">&gt;</span> Convert<span class="token punctuation">.</span><span class="token function">ToInt32</span><span class="token punctuation">(</span><span class="token string">&quot;count(distinct title)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> out var count<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Method</th><th>Return</th><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>Return the SQL statement to be executed</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>Execute SQL query and return the records of the specified field. When the record does not exist, return a list with Count of 0.</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>Execute SQL query, and return the record of the field specified by field, and receive it as a tuple or basic type (int, string, long). If the record does not exist, return a list with Count of 0.</td></tr><tr><td>ToAggregate&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>Execute SQL query and return the aggregate result of the specified field. (Suitable for scenarios where GroupBy is not required)</td></tr><tr><td>Sum</td><td>T</td><td>Lambda</td><td>Specify a column to sum.</td></tr><tr><td>Min</td><td>T</td><td>Lambda</td><td>Specify a column to find the minimum.</td></tr><tr><td>Max</td><td>T</td><td>Lambda</td><td>Specify a column to find the maximum.</td></tr><tr><td>Avg</td><td>T</td><td>Lambda</td><td>Specify a column to average.</td></tr><tr><td>【Grouping】</td><td></td><td></td><td></td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>Lambda</td><td>Group by the selected column, GroupBy(a =&gt; a.Name)</td></tr><tr><td>GroupBy</td><td>&lt;this&gt;</td><td>string, parms</td><td>Group by raw sql statement, GroupBy(&quot;concat(name, @cc)&quot;, new { cc = 1 })</td></tr><tr><td>Having</td><td>&lt;this&gt;</td><td>string, parms</td><td>Filter by raw SQL statement aggregation conditions, Having(&quot;count(name) = @cc&quot;, new { cc = 1 })</td></tr><tr><td>【Members】</td><td></td><td></td><td></td></tr><tr><td>Key</td><td></td><td></td><td>Returns the object selected by GroupBy</td></tr><tr><td>Value</td><td></td><td></td><td>Return to the main table or the field selector of From&lt;T2,T3....&gt;</td></tr></tbody></table><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Query-from-Multi-Tablea">《Query from Multi Tables》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Linq-to-Sql">《LinqToSql》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li><li><a href="Performance">《Performance》</a></li><li><a href="Tenant">《Tenant》</a></li></ul>',21),p={},e=(0,s(3744).Z)(p,[["render",function(n,a){return t}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);