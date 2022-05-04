"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[812],{8638:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0255c2a9",path:"/guide/freesql-provider-sqlitecore.html",title:"FreeSql.Provider.SqliteCore",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"支持的版本",slug:"支持的版本",children:[]},{level:2,title:"不支持加密",slug:"不支持加密",children:[]},{level:2,title:"只有sqlcipher才支持加密。",slug:"只有sqlcipher才支持加密。",children:[]},{level:2,title:"iOS",slug:"ios",children:[]}],git:{updatedTime:1651681268e3,contributors:[{name:"igeekfan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/freesql-provider-sqlitecore.md"}},6696:(n,s,a)=>{a.r(s),a.d(s,{default:()=>D});var e=a(6252);const t=(0,e._)("h1",{id:"freesql-provider-sqlitecore",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#freesql-provider-sqlitecore","aria-hidden":"true"},"#"),(0,e.Uk)(" FreeSql.Provider.SqliteCore")],-1),p=(0,e.Uk)("FreeSql.Provider.SqliteCore是"),o=(0,e._)("code",null,"FreeSql",-1),c=(0,e.Uk)("基于微软提供的最新的"),l={href:"https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/?tabs=netcore-cli",target:"_blank",rel:"noopener noreferrer"},u=(0,e._)("code",null,"Microsoft.Data.Sqlite.Core",-1),i=(0,e.Uk)("驱动的实现。 "),r=(0,e._)("strong",null,"需要另外安装对应的bundle_xxx",-1),k=(0,e.Uk)("实现加密。"),d=(0,e.uE)('<h3 id="支持的版本" tabindex="-1"><a class="header-anchor" href="#支持的版本" aria-hidden="true">#</a> 支持的版本</h3><ul><li>.NETStandard2.0+</li><li>net6.0</li><li>SQLite（3.7 及以上版本）</li></ul><p>安装<code>FreeSql.Provider.SqliteCore</code>包。</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet add package FreeSql.Provider.SqliteCore\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="不支持加密" tabindex="-1"><a class="header-anchor" href="#不支持加密" aria-hidden="true">#</a> 不支持加密</h2><p>0.安装包。</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet add package SQLitePCLRaw.bundle_e_sqlite3 \ndotnet add package FreeSql.Provider.SqliteCore\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>直接正常使用其他包一样使用FreeSql即可。<code>SQLitePCLRaw.bundle_e_sqlite3 </code>包不支持加密，但此种方式是官方实现的<code>SQlite</code>版本,二选一就行</p><table><thead><tr><th>捆绑</th><th>描述</th></tr></thead><tbody><tr><td>SQLitePCLRaw.bundle_e_sqlite3</td><td>在所有平台上提供一致版本的 <code>SQLite</code>。 包括 FTS4、FTS5、JSON1 和 R* 树扩展。 建议使用</td></tr><tr><td>SQLitePCLRaw.bundle_e_sqlcipher</td><td>提供 <code>SQLCipher</code> 的非官方开放源代码内部版本，<strong>支持加密</strong>。</td></tr></tbody></table><h1 id="freesql-provider-sqlitecore如何加密" tabindex="-1"><a class="header-anchor" href="#freesql-provider-sqlitecore如何加密" aria-hidden="true">#</a> FreeSql.Provider.SqliteCore如何加密</h1><p>那我们不安装 <code>SQLitePCLRaw.bundle_e_sqlite3</code>包，换<code>SQLitePCLRaw.bundle_e_sqlcipher</code></p><h2 id="只有sqlcipher才支持加密。" tabindex="-1"><a class="header-anchor" href="#只有sqlcipher才支持加密。" aria-hidden="true">#</a> 只有<strong>sqlcipher</strong>才支持加密。</h2><p>0.选择一个目录，创建一个控制台项目<code>OvOv.FreeSqlMicrosoftSqliteCore</code></p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet new console -n OvOv.FreeSqlMicrosoftSqliteCore\ncd OvOv.FreeSqlMicrosoftSqliteCore\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>1.安装包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package SQLitePCLRaw.bundle_e_sqlcipher\ndotnet <span class="token function">add</span> package FreeSql.Provider.SqliteCore\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>连接串直接指定Password=xxx即可</li></ol><p>创建一个类<code>g.cs</code>,可直接通过<code>g.sqlite</code>访问到<code>IFreeSql</code>对象</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">g</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=local.db;Password=123qwe&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseLazyLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>\n                    cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n线程&quot;</span> <span class="token operator">+</span> Thread<span class="token punctuation">.</span>CurrentThread<span class="token punctuation">.</span>ManagedThreadId <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span>\n                    <span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> fsql<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>测试加密,增加一些数据。<code>Program.cs</code>中测试</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">IInsert<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span> insert <span class="token operator">=</span> g<span class="token punctuation">.</span>sqlite<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> items<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;newTitle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Clicks <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> insert<span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;affrows：&quot;</span> <span class="token operator">+</span> affrows<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> g<span class="token punctuation">.</span>sqlite<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;count：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">.</span>Count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;tb_topic_insert&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">Topic</span>\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>运行项目</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet run\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="验证是否登录是否加密" tabindex="-1"><a class="header-anchor" href="#验证是否登录是否加密" aria-hidden="true">#</a> 验证是否登录是否加密？</h4><p>重新运行时，删除 连接串中的Password,发现无法获取数据。或使用<code>Navicat Premium </code>工具发现无法连接。</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> .UseConnectionString(FreeSql.DataType.Sqlite, @&quot;Data Source=local.db;&quot;) \n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> .UseConnectionString(FreeSql.DataType.Sqlite, @&quot;Data Source=|DataDirectory|local.db;Password=123qwe&quot;)\n</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示如下内容，但使用密码时又能正常访问数据。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SqliteException: SQLite Error 26: &#39;file is not a database&#39;.\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>相比包 <code>FreeSql.Provider.Sqlite</code>来说，目前存在一些限制，</p><h4 id="datadirectory-默认不支持" tabindex="-1"><a class="header-anchor" href="#datadirectory-默认不支持" aria-hidden="true">#</a> |DataDirectory| 默认不支持</h4><p>需要使用前，指定具体的文件夹，此处相当于指定了当前<code>dll</code>所在目录，即<code>bin/Debug/net6.0</code>。参考</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">string</span></span> dataSubDirectory <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>AppContext<span class="token punctuation">.</span>BaseDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Directory<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    Directory<span class="token punctuation">.</span><span class="token function">CreateDirectory</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nAppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span><span class="token function">SetData</span><span class="token punctuation">(</span><span class="token string">&quot;DataDirectory&quot;</span><span class="token punctuation">,</span> dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>即</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">g</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">string</span></span> dataSubDirectory <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>AppContext<span class="token punctuation">.</span>BaseDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Directory<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            Directory<span class="token punctuation">.</span><span class="token function">CreateDirectory</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span><span class="token function">SetData</span><span class="token punctuation">(</span><span class="token string">&quot;DataDirectory&quot;</span><span class="token punctuation">,</span> dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=|DataDirectory|local.db;Password=123qwe&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseLazyLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>\n                    cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n线程&quot;</span> <span class="token operator">+</span> Thread<span class="token punctuation">.</span>CurrentThread<span class="token punctuation">.</span>ManagedThreadId <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span>\n                    <span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> fsql<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>',34),b=(0,e.Uk)("具体的链接串，请参考 "),m={href:"https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/connection-strings",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/connection-strings"),h=(0,e.uE)('<h4 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h4><p>如下函数不支持</p><ul><li>Floor</li><li>Ceiling</li><li>Log10</li><li>Pow</li><li>Sqrt</li><li>Cos</li></ul><h4 id="timespantest" tabindex="-1"><a class="header-anchor" href="#timespantest" aria-hidden="true">#</a> TimeSpanTest</h4><p>测试 类中 不通过、ulong最大值，最小值，超出范围。</p><ul><li>不支持</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Days</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n      <span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      data<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">select</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">.</span>TimeOfDay<span class="token punctuation">.</span>Days <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>不支持</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code> <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Minutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n      <span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      data<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">select</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">.</span>TimeOfDay<span class="token punctuation">.</span>Minutes <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h4>',10),q={href:"https://github.com/luoyunchong/dotnetcore-examples/blob/master/Database-Drivers/OvOv.FreeSqlMicrosoftSqliteCore/Program.cs",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("https://github.com/luoyunchong/dotnetcore-examples/blob/master/Database-Drivers/OvOv.FreeSqlMicrosoftSqliteCore/Program.cs"),f=(0,e._)("h2",{id:"ios",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#ios","aria-hidden":"true"},"#"),(0,e.Uk)(" iOS")],-1),v={href:"https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/xamarin#ios",target:"_blank",rel:"noopener noreferrer"},S=(0,e.Uk)("https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/xamarin#ios"),w=(0,e.uE)('<p><code>Microsoft.Data.Sqlite</code> 尝试自动初始化 <code>SQLitePCLRaw</code> 捆绑。 遗憾的是，由于针对 <code>Xamarin.iOS</code> 的预先 (AOT) 编译存在限制，因此尝试失败，并出现以下错误。</p><blockquote><p>需要调用 <code>SQLitePCL.raw.SetProvider()</code>。 如果使用的是捆绑包，可以通过调用 <code>SQLitePCL.Batteries.Init()</code> 来完成此操作。</p></blockquote><p>若要初始化该绑定，请在使用 <code>Microsoft.Data.Sqlite</code> 之前，将以下代码行添加到应用。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>SQLitePCL<span class="token punctuation">.</span>Batteries_V2<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>即在上方定义<code>FreeSql</code>单例时，在<code>new Lazy</code>内，调用一次即可</p>',5),C={},D=(0,a(3744).Z)(C,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,o,c,(0,e._)("a",l,[u,(0,e.Wm)(a)]),i,r,k]),d,(0,e._)("p",null,[b,(0,e._)("a",m,[g,(0,e.Wm)(a)])]),h,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",q,[y,(0,e.Wm)(a)])])]),f,(0,e._)("p",null,[(0,e._)("a",v,[S,(0,e.Wm)(a)])]),w],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);