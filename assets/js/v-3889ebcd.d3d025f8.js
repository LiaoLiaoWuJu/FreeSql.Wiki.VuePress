"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[6349],{7977:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3889ebcd",path:"/en/guide/Delete-Data.html",title:"Delete",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Dynamic Conditions",slug:"dynamic-conditions",children:[]},{level:2,title:"Delete Conditions",slug:"delete-conditions",children:[]},{level:2,title:"ISelect.ToDelete Advanced Delete",slug:"iselect-todelete-advanced-delete",children:[]},{level:2,title:"Reference",slug:"reference",children:[]},{level:2,title:"API",slug:"api",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/Delete-Data.md"}},9959:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h1><p>Deleting data is a very dangerous operation. FreeSql does not support deletion very powerfully. By default, it only supports single-table and conditional deletion methods.</p><p>If it is executed when the <code>Where</code> condition is empty, only <code>0</code> or the <code>default</code> value is returned, and no real SQL delete operation is performed.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//Automatically synchronize the entity structure to the database</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Be sure to define as singleton mode</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="dynamic-conditions" tabindex="-1"><a class="header-anchor" href="#dynamic-conditions" aria-hidden="true">#</a> Dynamic Conditions</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> dywhere<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>dywhere</code> supports:</p><ul><li>Primary key value</li><li><code>new[] { PrimaryKey1, PrimaryKey2 }</code></li><li>Topic Object</li><li><code>new[] { TopicObject1, TopicObject2 }</code></li><li><code>new { id = 1 }</code></li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1 OR `Id` = 2)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t3 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1 OR `Id` = 2)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t4 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="delete-conditions" tabindex="-1"><a class="header-anchor" href="#delete-conditions" aria-hidden="true">#</a> Delete Conditions</h2><blockquote><p>For safety reasons, when there are no conditions, the delete action will not be executed to avoid deleting the entire table data by mistake. Delete the entire table data: <code>fsql.Delete&lt;T&gt;().Where(&quot;1=1&quot;).ExecuteAffrows()</code></p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t5 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> t6 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;id = @id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (id = @id)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;newtitle&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> t7 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` = 1)</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> items<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;newtitle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Clicks <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name"><span class="token keyword">var</span></span> t8 <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//DELETE FROM `Topic` WHERE (`Id` IN (1,2,3,4,5,6,7,8,9,10))</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="iselect-todelete-advanced-delete" tabindex="-1"><a class="header-anchor" href="#iselect-todelete-advanced-delete" aria-hidden="true">#</a> <code>ISelect.ToDelete</code> Advanced Delete</h2><p><code>IDelete</code> does not support navigation objects, multi-table association, etc. By default, <code>ISelect.ToDelete</code> can convert the query to <code>IDelete</code> so that the navigation object can be used to delete data:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Options<span class="token punctuation">.</span>xxx <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Note: This method is not to query the data to the memory and delete it cyclically. The above code generates and executes the following SQL:</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>T1<span class="token punctuation">`</span></span> <span class="token keyword">WHERE</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> a<span class="token punctuation">.</span>id <span class="token keyword">from</span> T1 a <span class="token keyword">left</span> <span class="token keyword">join</span> Options b <span class="token keyword">on</span> b<span class="token punctuation">.</span>t1id <span class="token operator">=</span> a<span class="token punctuation">.</span>id <span class="token keyword">where</span> b<span class="token punctuation">.</span>xxx <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The benefits of using this method for complex deletion:</p><ul><li>Preview data before deleting to prevent mistaken deletion operations;</li><li>Support complex deletion operations, for example: Use <code>Limit(10)</code> on <code>ISelect</code> to delete the first 10 records that meet the conditions;</li></ul><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Database-Transaction">《Database Transaction》</a></li><li><a href="Insert-Data">《FreeSql 101, Part 1: Insert Data》</a></li><li><a href="Update-Data">《FreeSql 101, Part 3: Update Data》</a></li><li><a href="Query-Data">《FreeSql 101, Part 4: Query Data》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Tenant">《Tenant》</a></li></ul><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Methods</th><th>Return</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>Where</td><td>&lt;this&gt;</td><td>Lambda</td><td>Expression conditions, only support entity basic members (not including navigation objects)</td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>string, parms</td><td>Raw SQL syntax conditions, <code>Where(&quot;id = @id&quot;, new { id = 1 })</code></td></tr><tr><td>Where</td><td>&lt;this&gt;</td><td>T1 | IEnumerable&lt;T1&gt;</td><td>Pass in the entity or collection, and use its primary key as the condition</td></tr><tr><td>CommandTimeout</td><td>&lt;this&gt;</td><td>int</td><td>Command timeout setting (seconds)</td></tr><tr><td>WithTransaction</td><td>&lt;this&gt;</td><td>DbTransaction</td><td>Set transaction object</td></tr><tr><td>WithConnection</td><td>&lt;this&gt;</td><td>DbConnection</td><td>Set the connection object</td></tr><tr><td>ToSql</td><td>string</td><td></td><td>Returns the SQL statement to be executed.</td></tr><tr><td>ExecuteAffrows</td><td>long</td><td></td><td>Execute SQL and return the number of rows affected.</td></tr><tr><td>ExecuteDeleted</td><td>List&lt;T1&gt;</td><td></td><td>Execute SQL and return the deleted records.</td></tr></tbody></table>',23),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);