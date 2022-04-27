"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[9515],{1947:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-24de54ee",path:"/guide/insert-or-update.html",title:"新增和修改",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1、IFreeSql.InsertOrUpdate",slug:"_1、ifreesql-insertorupdate",children:[]},{level:2,title:"2、字典插入或更新",slug:"_2、字典插入或更新",children:[]},{level:2,title:"3、FreeSql.Repository 之 InsertOrUpdate",slug:"_3、freesql-repository-之-insertorupdate",children:[]},{level:2,title:"4、BeginEdit 批量编辑",slug:"_4、beginedit-批量编辑",children:[]},{level:2,title:"5、MySql 特有功能 On Duplicate Key Update",slug:"_5、mysql-特有功能-on-duplicate-key-update",children:[]},{level:2,title:"6、PostgreSQL 特有功能 On Conflict Do Update",slug:"_6、postgresql-特有功能-on-conflict-do-update",children:[]}],git:{updatedTime:1651030409e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmai.com",commits:1}]},filePathRelative:"guide/insert-or-update.md"}},7483:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="新增和修改" tabindex="-1"><a class="header-anchor" href="#新增和修改" aria-hidden="true">#</a> 新增和修改</h1><h2 id="_1、ifreesql-insertorupdate" tabindex="-1"><a class="header-anchor" href="#_1、ifreesql-insertorupdate" aria-hidden="true">#</a> 1、IFreeSql.InsertOrUpdate</h2><p>IFreeSql 定义了 InsertOrUpdate 方法实现添加或修改的功能，利用数据库特性：(v1.5.0+)</p><table><thead><tr><th>Database</th><th>Features</th><th></th><th>Database</th><th>Features</th></tr></thead><tbody><tr><td>MySql</td><td>on duplicate key update</td><td></td><td>达梦</td><td>merge into</td></tr><tr><td>PostgreSQL</td><td>on conflict do update</td><td></td><td>人大金仓</td><td>on conflict do update</td></tr><tr><td>SqlServer</td><td>merge into</td><td></td><td>神通</td><td>merge into</td></tr><tr><td>Oracle</td><td>merge into</td><td></td><td>南大通用</td><td>merge into</td></tr><tr><td>Sqlite</td><td>replace into</td><td></td><td>MsAccess</td><td>不支持</td></tr><tr><td>Firebird</td><td>merge into</td><td></td><td></td><td></td></tr></tbody></table><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">InsertOrUpdate</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">SetSource</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token comment">//需要操作的数据</span>\n  <span class="token comment">//.IfExistsDoNothing() //如果数据存在，啥事也不干（相当于只有不存在数据时才插入）</span>\n  <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当实体类有自增属性时，批量 InsertOrUpdate 最多可被拆成两次执行，内部计算出未设置自增值、和有设置自增值的数据，分别执行 insert into 和 上面讲到的 merge into 两种命令（采用事务执行）。</p><p>注意：FreeSql.Repository 通用仓储也有 InsertOrUpdate 方法，它们的机制不一样。</p><hr><h2 id="_2、字典插入或更新" tabindex="-1"><a class="header-anchor" href="#_2、字典插入或更新" aria-hidden="true">#</a> 2、字典插入或更新</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> dic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndic<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfsql<span class="token punctuation">.</span><span class="token function">InsertOrUpdateDict</span><span class="token punctuation">(</span>dic<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AsTable</span><span class="token punctuation">(</span><span class="token string">&quot;table1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WherePrimary</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//（产生 SQL 同上）</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h2 id="_3、freesql-repository-之-insertorupdate" tabindex="-1"><a class="header-anchor" href="#_3、freesql-repository-之-insertorupdate" aria-hidden="true">#</a> 3、FreeSql.Repository 之 InsertOrUpdate</h2><p>使用此方法需要引用 FreeSql.Repository 或 FreeSql.DbContext 功能包。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nrepo<span class="token punctuation">.</span><span class="token function">InsertOrUpdate</span><span class="token punctuation">(</span>实体<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果内部的状态管理存在数据，则更新。</p><p>如果内部的状态管理不存在数据，则查询数据库，判断是否存在。</p><blockquote><p>存在则更新，不存在则插入</p></blockquote><p>缺点：不支持批量操作</p><hr><h2 id="_4、beginedit-批量编辑" tabindex="-1"><a class="header-anchor" href="#_4、beginedit-批量编辑" aria-hidden="true">#</a> 4、BeginEdit 批量编辑</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">BeginEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BeginEdit01<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;1=1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> repo <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetRepository</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>BeginEdit01<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> cts <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类1_1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类1_2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类1_3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类2_1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类2_2&quot;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    repo<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>cts<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    repo<span class="token punctuation">.</span><span class="token function">BeginEdit</span><span class="token punctuation">(</span>cts<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//开始对 cts 进行编辑</span>\n\n    cts<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">BeginEdit01</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;分类2_3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    cts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">;</span>\n    cts<span class="token punctuation">.</span><span class="token function">RemoveAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    Assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> repo<span class="token punctuation">.</span><span class="token function">EndEdit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">BeginEdit01</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Guid</span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>上面的代码 EndEdit 方法执行的时候产生 3 条 SQL 如下：</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token string">&quot;BeginEdit01&quot;</span><span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">&#39;5f26bf07-6ac3-cbe8-00da-7dd74818c3a6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;分类2_3&#39;</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">UPDATE</span> <span class="token string">&quot;BeginEdit01&quot;</span> <span class="token keyword">SET</span> <span class="token string">&quot;Name&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;123123&#39;</span> \n<span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;5f26bf00-6ac3-cbe8-00da-7dd01be76e26&#39;</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token string">&quot;BeginEdit01&quot;</span> <span class="token keyword">WHERE</span> <span class="token punctuation">(</span><span class="token string">&quot;Id&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;5f26bf00-6ac3-cbe8-00da-7dd11bcf54dc&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>场景：winform 加载表数据后，一顿添加、修改、删除操作之后，点击【保存】</p><p>提醒：该操作只对变量 cts 有效，不是针对全表对比更新。</p><h2 id="_5、mysql-特有功能-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_5、mysql-特有功能-on-duplicate-key-update" aria-hidden="true">#</a> 5、MySql 特有功能 On Duplicate Key Update</h2><p>FreeSql.Provider.MySql 和 FreeSql.Provider.MySqlConnector 支持 MySql 特有的功能，On Duplicate Key Update。</p><p>这个功能也可以实现插入或更新数据，并且支持批量操作。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestOnDuplicateKeyUpdateInfo</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> item <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnDuplicateKeyUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-100&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO `TestOnDuplicateKeyUpdateInfo`(`id`, `title`, `time`) VALUES(100, &#39;title-100&#39;, &#39;2000-01-01 00:00:00.000&#39;)</span>\n<span class="token comment">//ON DUPLICATE KEY UPDATE</span>\n<span class="token comment">//`title` = VALUES(`title`), </span>\n<span class="token comment">//`time` = VALUES(`time`)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>OnDuplicateKeyUpdate() 之后可以调用的方法：</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td>IgnoreColumns</td><td>忽略更新的列，机制和 IUpdate.IgnoreColumns 一样</td></tr><tr><td>UpdateColumns</td><td>指定更新的列，机制和 IUpdate.UpdateColumns 一样</td></tr><tr><td>Set</td><td>手工指定更新的列，与 IUpdate.Set 功能一样</td></tr><tr><td>SetRaw</td><td>作为 Set 方法的补充，可传入 SQL 字符串</td></tr><tr><td>ToSql</td><td>返回即将执行的 SQL 语句</td></tr><tr><td>ExecuteAffrows</td><td>执行，返回影响的行数</td></tr></tbody></table><p>IInsert 与 OnDuplicateKeyUpdate 都有 IgnoreColumns、UpdateColumns 方法。</p><p>当插入实体/集合实体的时候，忽略了 time 列，代码如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OnDuplicateKeyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO `TestOnDuplicateKeyUpdateInfo`(`id`, `title`) VALUES(200, &#39;title-200&#39;)</span>\n<span class="token comment">//ON DUPLICATE KEY UPDATE</span>\n<span class="token comment">//`title` = VALUES(`title`), </span>\n<span class="token comment">//`time` = &#39;2000-01-01 00:00:00.000&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>我们发现，UPDATE time 部分变成了常量，而不是 VALUES(`time`)，机制如下：</p><p>当 insert 部分中存在的列，在 update 中将以 VALUES(`字段`) 的形式设置；</p><p>当 insert 部分中不存在的列，在 update 中将为常量形式设置，当操作实体数组的时候，此常量为 case when ... end 执行（与 IUpdate 一样）；</p><hr><h2 id="_6、postgresql-特有功能-on-conflict-do-update" tabindex="-1"><a class="header-anchor" href="#_6、postgresql-特有功能-on-conflict-do-update" aria-hidden="true">#</a> 6、PostgreSQL 特有功能 On Conflict Do Update</h2><p>FreeSql.Provider.PostgreSQL 支持 PostgreSQL 9.5+ 特有的功能，On Conflict(id) Do Update。</p><p>使用方法 MySql OnDuplicateKeyUpdate 大致相同。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime<span class="token punctuation">?</span></span> time <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-200&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">201</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-201&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">TestOnConflictDoUpdateInfo</span> <span class="token punctuation">{</span> id <span class="token operator">=</span> <span class="token number">202</span><span class="token punctuation">,</span> title <span class="token operator">=</span> <span class="token string">&quot;title-202&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> DateTime<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token string">&quot;2000-01-01&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">IgnoreColumns</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>time<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">NoneParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OnConflictDoUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//INSERT INTO &quot;&quot;testonconflictdoupdateinfo&quot;&quot;(&quot;&quot;id&quot;&quot;, &quot;&quot;title&quot;&quot;) VALUES(200, &#39;title-200&#39;), (201, &#39;title-201&#39;), (202, &#39;title-202&#39;)</span>\n<span class="token comment">//ON CONFLICT(&quot;&quot;id&quot;&quot;) DO UPDATE SET</span>\n<span class="token comment">//&quot;&quot;title&quot;&quot; = EXCLUDED.&quot;&quot;title&quot;&quot;, </span>\n<span class="token comment">//&quot;&quot;time&quot;&quot; = CASE EXCLUDED.&quot;&quot;id&quot;&quot; </span>\n<span class="token comment">//WHEN 200 THEN &#39;2000-01-01 00:00:00.000000&#39; </span>\n<span class="token comment">//WHEN 201 THEN &#39;2000-01-01 00:00:00.000000&#39; </span>\n<span class="token comment">//WHEN 202 THEN &#39;2000-01-01 00:00:00.000000&#39; END::timestamp</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',42),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);