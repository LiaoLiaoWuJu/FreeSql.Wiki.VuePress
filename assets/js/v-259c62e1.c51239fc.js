"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[2531],{9937:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-259c62e1",path:"/en/guide/getting-started.html",title:"Getting Started",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Models",slug:"models",children:[]},{level:2,title:"Packages",slug:"packages",children:[]},{level:2,title:"Declaring",slug:"declaring",children:[]},{level:2,title:"Migration",slug:"migration",children:[]},{level:2,title:"Query Data",slug:"query-data",children:[]},{level:2,title:"Insert Data",slug:"insert-data",children:[]},{level:2,title:"Update Data",slug:"update-data",children:[]},{level:2,title:"Delete Data",slug:"delete-data",children:[]},{level:2,title:"Reference",slug:"reference",children:[]}],git:{updatedTime:1648572783e3,contributors:[{name:"igeekfan",email:"igeekfan@foxmail.com",commits:1}]},filePathRelative:"en/guide/getting-started.md"}},9183:(n,a,s)=>{s.r(a),s.d(a,{default:()=>x});var e=s(6252);const t=(0,e.uE)('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><p>FreeSql is a powerful <strong>.NET ORM</strong> that supports all <em>.NET Standard</em> runtime platforms like <em>.NET Framework 4.0+</em>, <em>.NET Core 2.1+</em> and <em>Xamarin</em>, etc.</p><p>FreeSql supports MySql, SqlServer, PostgreSQL, Oracle, Sqlite, Firebird, Dameng, Shentong Database, Kingbase ES, Hangao Database, ClickHouse, GBase and MsAccess.</p><p>QQ Groups：4336577(full)、8578575(full)、<strong>52508226(available)</strong></p><h2 id="models" tabindex="-1"><a class="header-anchor" href="#models" aria-hidden="true">#</a> Models</h2><p>FreeSql uses a model to perform data access. The model is represented by an entity class to represent a database table or view for querying and saving data.</p><p>The entity model can be generated from an existing database, and FreeSql provides the <code>IDbFirst</code> interface to <a href="DbFirst-Mode">generate the entity model</a>.</p><p>Or you can create the model manually, and then create or modify the database based on the model. FreeSql provides an API for the <code>ICodeFirst</code> synchronization structure (it can even be synchronized automatically during the development phase).</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">FreeSql<span class="token punctuation">.</span>DataAnnotations</span><span class="token punctuation">;</span>\n<span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BlogId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Rating <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> Packages</h2><p>FreeSql.Provider.XXX (<a href="Install">Optional Providers</a>)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> packages FreeSql\ndotnet <span class="token function">add</span> packages FreeSql.Provider.Sqlite\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Install-Package FreeSql\nInstall-Package FreeSql.Provider.Sqlite\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="declaring" tabindex="-1"><a class="header-anchor" href="#declaring" aria-hidden="true">#</a> Declaring</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>\n     <span class="token comment">//Automatically synchronize the entity structure to the database.</span>\n     <span class="token comment">//FreeSql will not scan the assembly, and will generate a table if and only when the CRUD instruction is executed.</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> \n     <span class="token comment">//Be sure to define as singleton mode</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n    \n<span class="token comment">//Note: IFreeSql should be declared as a singleton in the project, not created every time it is used.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>.NET Core Singleton Startup.cs</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>\n    <span class="token comment">//Automatically synchronize the entity structure to the database.</span>\n    <span class="token comment">//FreeSql will not scan the assembly, and will generate a table if and only when the CRUD instruction is executed.</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',18),p={href:"https://github.com/dotnetcore/FreeSql/issues/44",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)(".NET Core injects multiple FreeSql instances"),l=(0,e._)("li",null,".NET Framework Singleton",-1),c=(0,e.uE)('<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DB</span>\n<span class="token punctuation">{</span>\n   <span class="token keyword">static</span> Lazy<span class="token operator">&lt;</span>IFreeSql<span class="token operator">&gt;</span>sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=db1.db&quot;</span><span class="token punctuation">)</span>\n        <span class="token comment">//Automatically synchronize the entity structure to the database.</span>\n        <span class="token comment">//FreeSql will not scan the assembly, and will generate a table if and only when the CRUD instruction is executed.</span>\n        <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> Sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Then when using it, use <code>fsql</code> directly through <code>IFreeSql fsql = DB.Sqlite;</code>.</p><p>IFreeSql is the top-level object of ORM, and all operations use its methods or properties:</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>\nfsql<span class="token punctuation">.</span>Select<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Query</span>\nfsql<span class="token punctuation">.</span>Insert<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Insert</span>\nfsql<span class="token punctuation">.</span>Update<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Update</span>\nfsql<span class="token punctuation">.</span>Delete<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Delete</span>\nfsql<span class="token punctuation">.</span>InsertOrUpdate<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// Insert or Update</span>\nfsql<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Transaction</span>\n\nfsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">;</span> <span class="token comment">//CodeFirst Object</span>\nfsql<span class="token punctuation">.</span>DbFirst<span class="token punctuation">;</span> <span class="token comment">//DbFirst Object</span>\nfsql<span class="token punctuation">.</span>Ado<span class="token punctuation">;</span> <span class="token comment">//Ado Object</span>\nfsql<span class="token punctuation">.</span>Aop<span class="token punctuation">;</span> <span class="token comment">//Aop Object</span>\nfsql<span class="token punctuation">.</span>GlobalFilter<span class="token punctuation">;</span> <span class="token comment">//Gloabl Filter Object</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="migration" tabindex="-1"><a class="header-anchor" href="#migration" aria-hidden="true">#</a> Migration</h2><p>When the program is running, <code>FreeSql</code> will check the <code>AutoSyncStructure</code> parameter, and use this condition to determine whether to compare the changes between the entity and the database structure to achieve the purpose of automatic migration. For more information, please refer to the <a href="CodeFirst-Mode">CodeFirst Documentation</a>.</p><blockquote><p>Note: Use this feature in a production environment with <strong>caution</strong>.</p></blockquote><blockquote><p>Note: Use this feature in a production environment with <strong>caution</strong>.</p></blockquote><blockquote><p>Note: Use this feature in a production environment with <strong>caution</strong>.</p></blockquote><h2 id="query-data" tabindex="-1"><a class="header-anchor" href="#query-data" aria-hidden="true">#</a> Query Data</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> blogs <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Rating <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Skip</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">//Query the record from line 100 to line 110</span>\n    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="insert-data" tabindex="-1"><a class="header-anchor" href="#insert-data" aria-hidden="true">#</a> Insert Data</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> blog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Blog</span> <span class="token punctuation">{</span> Url <span class="token operator">=</span> <span class="token string">&quot;http://sample.com&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nblog<span class="token punctuation">.</span>BlogId <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ExecuteIdentity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="update-data" tabindex="-1"><a class="header-anchor" href="#update-data" aria-hidden="true">#</a> Update Data</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Update</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url<span class="token punctuation">,</span> <span class="token string">&quot;http://sample2222.com&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url <span class="token operator">==</span> <span class="token string">&quot;http://sample.com&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="delete-data" tabindex="-1"><a class="header-anchor" href="#delete-data" aria-hidden="true">#</a> Delete Data</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Delete</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Url <span class="token operator">==</span> <span class="token string">&quot;http://sample.com&quot;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h1 id="freesqlbuilder" tabindex="-1"><a class="header-anchor" href="#freesqlbuilder" aria-hidden="true">#</a> FreeSqlBuilder</h1><table><thead><tr><th>Methods</th><th>Return</th><th>Description</th></tr></thead><tbody><tr><td>UseConnectionString</td><td>this</td><td>Connection string</td></tr><tr><td>UseSlave</td><td>this</td><td>Set up the slave database, support multipleslace databases.</td></tr><tr><td>UseConnectionFactory</td><td>this</td><td>Set up a custom database connection object (abandon the built-in object connection pool technology)</td></tr><tr><td>UseAutoSyncStructure</td><td>this</td><td><strong>[Recommended development environment]</strong> Automatically synchronize the entity structure to the database, and check entity creation or modification table structure during program operation</td></tr><tr><td>UseNoneCommandParameter</td><td>this</td><td>Do not use command parameterized execution. for <code>Insert/Update</code>, you can also temporarily use <code>IInsert/IUpdate.NoneParameter()</code></td></tr><tr><td>UseGenerateCommandParameterWithLambda</td><td>this</td><td>For lambda expression analysis, generate command parameterized execution</td></tr><tr><td>UseLazyLoading</td><td>this</td><td>Turn on the lazy loading function,</td></tr><tr><td>UseMonitorCommand</td><td>this</td><td>Monitor before and after global SQL execution.</td></tr><tr><td>UseNameConvert</td><td>this</td><td>Automatic name conversion Entity -&gt; Db</td></tr><tr><td>UseExitAutoDisposePool</td><td>this</td><td>Listen to the AppDomain.CurrentDomain.ProcessExit/Console.CancelKeyPress event to automatically release the connection pool (default true)</td></tr><tr><td>Build&lt;T&gt;</td><td>IFreeSql&lt;T&gt;</td><td>Create an IFreeSql object. Note: Singleton design, don’t repeat creation</td></tr></tbody></table><h1 id="connectionstrings" tabindex="-1"><a class="header-anchor" href="#connectionstrings" aria-hidden="true">#</a> ConnectionStrings</h1>',20),r=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"DataType"),(0,e._)("th",null,"ConnectionString")])],-1),i=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.MySql"),(0,e._)("td",null,"Data Source=127.0.0.1;Port=3306;User ID=root;Password=root; Initial Catalog=cccddd;Charset=utf8; SslMode=none;Min pool size=1")],-1),u=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.PostgreSQL"),(0,e._)("td",null,"Host=192.168.164.10;Port=5432;Username=postgres;Password=123456; Database=tedb;Pooling=true;Minimum Pool Size=1")],-1),d=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.SqlServer"),(0,e._)("td",null,"Data Source=.;User Id=sa;Password=123456;Initial Catalog=freesqlTest;TrustServerCertificate=true;Pooling=true;Min Pool Size=1")],-1),k=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.Oracle"),(0,e._)("td",null,"user id=user1;password=123456; data source=//127.0.0.1:1521/XE;Pooling=true;Min Pool Size=1")],-1),b=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.Sqlite"),(0,e._)("td",null,"Data Source=|DataDirectory|\\document.db; Attachs=xxxtb.db; Pooling=true;Min Pool Size=1")],-1),m=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.Firebird"),(0,e._)("td",null,"database=localhost:D:\\fbdata\\EXAMPLES.fdb;user=sysdba;password=123456")],-1),h=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.MsAccess"),(0,e._)("td",null,"Provider=Microsoft.Jet.OleDb.4.0;Data Source=d:/accdb/2003.mdb")],-1),g=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.Dameng(达梦)"),(0,e._)("td",null,"server=127.0.0.1;port=5236;user id=2user;password=123456789;database=2user;poolsize=5")],-1),S=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.ShenTong(神通)"),(0,e._)("td",null,"HOST=192.168.164.10;PORT=2003;DATABASE=OSRDB;USERNAME=SYSDBA;PASSWORD=szoscar55;MAXPOOLSIZE=2")],-1),y=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.KingbaseES(人大金仓)"),(0,e._)("td",null,"Server=127.0.0.1;Port=54321;UID=USER2;PWD=123456789;database=TEST;MAXPOOLSIZE=2")],-1),f=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.OdbcMySql"),(0,e._)("td",null,"Driver={MySQL ODBC 8.0 Unicode Driver}; Server=127.0.0.1;Persist Security Info=False; Trusted_Connection=Yes;UID=root;PWD=root; DATABASE=cccddd_odbc;Charset=utf8; SslMode=none;Min Pool Size=1")],-1),v=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.OdbcSqlServer"),(0,e._)("td",null,"Driver={SQL Server};Server=.;Persist Security Info=False; Trusted_Connection=Yes;Integrated Security=True; DATABASE=freesqlTest_odbc; Pooling=true;Min Pool Size=1")],-1),D=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.OdbcOracle"),(0,e._)("td",null,"Driver={Oracle in XE};Server=//127.0.0.1:1521/XE; Persist Security Info=False; Trusted_Connection=Yes;UID=odbc1;PWD=123456; Min Pool Size=1")],-1),q=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.OdbcPostgreSQL"),(0,e._)("td",null,"Driver={PostgreSQL Unicode(x64)};Server=192.168.164.10; Port=5432;UID=postgres;PWD=123456; Database=tedb_odbc;Pooling=true;Min Pool Size=1")],-1),_=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.OdbcDameng (达梦)"),(0,e._)("td",null,"Driver={DM8 ODBC DRIVER};Server=127.0.0.1:5236; Persist Security Info=False; Trusted_Connection=Yes; UID=USER1;PWD=123456789")],-1),F=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.OdbcKingbaseES (人大金仓)"),(0,e._)("td",null,"Driver={KingbaseES 8.2 ODBC Driver ANSI};Server=127.0.0.1;Port=54321;UID=USER2;PWD=123456789;database=TEST")],-1),P=(0,e._)("tr",null,[(0,e._)("td",null,"DataType.Odbc"),(0,e._)("td",null,"Driver={SQL Server};Server=.;Persist Security Info=False; Trusted_Connection=Yes;Integrated Security=True; DATABASE=freesqlTest_odbc; Pooling=true;Min pool size=1")],-1),w={href:"https://github.com/2881099/FreeSql/tree/master/Providers/FreeSql.Provider.Custom",target:"_blank",rel:"noopener noreferrer"},T=(0,e.Uk)("DataType.Custom"),I=(0,e._)("td",null,"Custom connection string, access any database",-1),U=(0,e.uE)('<h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><ul><li><a href="Install">《Install FreeSql》</a></li><li><a href="Insert-Data">《FreeSql 101, Part 1: Insert Data》</a></li><li><a href="Delete-Data">《FreeSql 101, Part 2: Delete Data》</a></li><li><a href="Update-Data">《FreeSql 101, Part 3: Update Data》</a></li><li><a href="Query-Data">《FreeSql 101, Part 4: Query Data》</a></li><li><a href="Repository-Layer">《Repository Layer》</a></li><li><a href="Filters-and-Global-Filters">《Filters and Global Filters》</a></li><li><a href="Unit-of-Work">《UnitOfWork》</a></li></ul>',2),C={},x=(0,s(3744).Z)(C,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",p,[o,(0,e.Wm)(s)])]),l]),c,(0,e._)("table",null,[r,(0,e._)("tbody",null,[i,u,d,k,b,m,h,g,S,y,f,v,D,q,_,F,P,(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("a",w,[T,(0,e.Wm)(s)])]),I])])]),U],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);