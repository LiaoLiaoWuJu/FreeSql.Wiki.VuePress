"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[4901],{8375:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-38f50e54",path:"/en/guide/Lazy-Loading.html",title:"Lazy Loading",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Many-to-Many Lazy Loading",slug:"many-to-many-lazy-loading",children:[]},{level:2,title:"Summary",slug:"summary",children:[]},{level:2,title:"Reference",slug:"reference",children:[]}],git:{updatedTime:1651030409e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmai.com",commits:1}]},filePathRelative:"en/guide/Lazy-Loading.md"}},8625:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading" aria-hidden="true">#</a> Lazy Loading</h1><p>FreeSql supports lazy loading of navigation properties, that is, data is loaded (read) when we need it. It supports navigation properties of <em>One-to-One</em>, <em>Many-to-One</em>, <em>One-to-Many</em>, and <em>Many-to-Many</em> relationships.</p><p>When we want to query a certain order information and display its corresponding order detailed records, we hope to use lazy loading to achieve. This not only speeds up the reading speed, but also avoids loading unnecessary data. Lazy loading is usually used for <em>foreach loop</em> queries.</p><p>When we are defining the <em>Model</em>, we need to add the <code>virtual</code> keyword in front of the properties. As follows:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> OrderID <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> OrderTitle <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> CustomerName <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> TransactionDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>OrderDetail<span class="token punctuation">&gt;</span></span> OrderDetails <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderDetail</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> DetailId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> OrderId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Order</span> Order <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>The Lazy Loading function is <em>turn-off</em> by default. When using this function, please turn it on at the place of declaration.</p></blockquote><blockquote><p>Lazy loading function depends on <em>FreeSql.Extensions.LazyLoading</em> package, please go to NuGet to download.</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseLazyLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//Enable Lazy Loading</span>\n    <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>\n        cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//Monitor SQL commands before execution</span>\n     <span class="token comment">//Be sure to define as singleton mode</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token class-name"><span class="token keyword">var</span></span> order <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Order<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>OrderID <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Query from Order table</span>\n<span class="token class-name"><span class="token keyword">var</span></span> orderDetail1 <span class="token operator">=</span> order<span class="token punctuation">.</span>OrderDetails<span class="token punctuation">;</span> <span class="token comment">//First visit, query the database</span>\n<span class="token class-name"><span class="token keyword">var</span></span> orderDetail2 <span class="token operator">=</span> order<span class="token punctuation">.</span>OrderDetails<span class="token punctuation">;</span> <span class="token comment">//Second visit, do not query from the database</span>\n<span class="token class-name"><span class="token keyword">var</span></span> order1 <span class="token operator">=</span> orderDetail1<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Access the navigation properties without querying the database at this time. Because this property is already populated when OrderDetails is queried</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Console output:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>OrderID<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>OrderTitle<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>CustomerName<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>TransactionDate<span class="token punctuation">`</span></span> \n<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>Order<span class="token punctuation">`</span></span> a \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>OrderID<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span>\n\n<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>DetailId<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>OrderId<span class="token punctuation">`</span></span> \n<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>OrderDetail<span class="token punctuation">`</span></span> a \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>OrderId<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>FreeSql lazy loading supports navigation properties of <em>One-to-One</em>, <em>Many-to-One</em>, <em>One-to-Many</em>, and <em>Many-to-Many</em> relationships. The first three are similar. We separately introduce the <em>Many-to-Many</em> relationship.</p><h2 id="many-to-many-lazy-loading" tabindex="-1"><a class="header-anchor" href="#many-to-many-lazy-loading" aria-hidden="true">#</a> Many-to-Many Lazy Loading</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> Create_time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span><span class="token punctuation">?</span></span> Is_deleted <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Song_tag</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Song_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Tag_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">partial</span> <span class="token keyword">class</span> <span class="token class-name">Tag</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> Parent_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">decimal</span><span class="token punctuation">?</span></span> Ddd <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>As above, there are three tables: <strong>Song</strong>, <strong>Tag</strong>, and their relationship table.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> songs <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Take 10 pieces of song</span>\n<span class="token class-name"><span class="token keyword">var</span></span> songs1 <span class="token operator">=</span> songs<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Tags<span class="token punctuation">;</span> <span class="token comment">//First visit, query the database</span>\n<span class="token class-name"><span class="token keyword">var</span></span> songs2 <span class="token operator">=</span> Songs<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Tags<span class="token punctuation">;</span> <span class="token comment">//Second visit, do not query from the database</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Console output:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Create_time<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Is_deleted<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Title<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Url<span class="token punctuation">`</span></span> \n<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>Song<span class="token punctuation">`</span></span> a \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span>\n\n<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Parent_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Ddd<span class="token punctuation">`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Name<span class="token punctuation">`</span></span> \n<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>Tag<span class="token punctuation">`</span></span> a \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token keyword">exists</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token number">1</span> \n<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>Song_tag<span class="token punctuation">`</span></span> b \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Song_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">AND</span> b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Tag_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> \n<span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2><p>Advantages: Load data only when needed, without pre-planning, avoiding the inefficiency problems caused by various complicated outer joins, indexes, and view operations.</p><p>Defect: Interacting with DB many times, performance degradation.</p><p>If you want to use data in a loop, use <a href="Greed-Loading">Greed Loading</a>, otherwise use <strong>Lazy Loading</strong>.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Query-from-Multi-Tablea">《Query from Multi Tables》</a></li><li><a href="Return-Data">《Return Data》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Lazy-Loading">《FreeSql Optimization: Lazy Loading》</a></li><li><a href="Greed-Loading">《FreeSql Optimization: Greed Loading》</a></li><li><a href="Expression-Function">《Expression Function》</a></li></ul>',23),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);