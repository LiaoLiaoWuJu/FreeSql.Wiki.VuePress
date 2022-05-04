"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[8211],{6070:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-53a22a9b",path:"/en/guide/Unit-of-Work-Manager.html",title:"Unit of Work Manager",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Use FreeSql's repository transaction in ASP.NET Core",slug:"use-freesql-s-repository-transaction-in-asp-net-core",children:[]}],git:{updatedTime:1651681268e3,contributors:[{name:"igeekfan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"en/guide/Unit-of-Work-Manager.md"}},4682:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(6252);const p=(0,t.uE)('<h1 id="unit-of-work-manager" tabindex="-1"><a class="header-anchor" href="#unit-of-work-manager" aria-hidden="true">#</a> Unit of Work Manager</h1><h2 id="use-freesql-s-repository-transaction-in-asp-net-core" tabindex="-1"><a class="header-anchor" href="#use-freesql-s-repository-transaction-in-asp-net-core" aria-hidden="true">#</a> Use FreeSql&#39;s repository transaction in ASP.NET Core</h2><h4 id="step-1-configure-startup-cs" tabindex="-1"><a class="header-anchor" href="#step-1-configure-startup-cs" aria-hidden="true">#</a> Step 1: Configure Startup.cs</h4><p>Install NuGet packages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql\ndotnet <span class="token function">add</span> package FreeSql.DbContext\ndotnet <span class="token function">add</span> package FreeSql.Provider.MySqlConnector\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Configure <code>Startup.cs</code>:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">IServiceCollection</span> services<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n  <span class="token class-name">IConfigurationSection</span> Mysql <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token function">GetSection</span><span class="token punctuation">(</span><span class="token string">&quot;Mysql&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        Fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> Mysql<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">UseNameConvert</span><span class="token punctuation">(</span>NameConvertType<span class="token punctuation">.</span>PascalCaseToUnderscoreWithLower<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddSingleton</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>fsql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UnitOfWorkManager<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    services<span class="token punctuation">.</span><span class="token function">AddFreeRepository</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Startup</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Assembly<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//Add your own service, here is only an implementation</span>\n    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TransBlogService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Update your <code>appsettings.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;Mysql&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Data Source=127.0.0.1;Port=3306;User ID=root;Password=root;Initial Catalog=ovov_freesql_repository;Charset=utf8;SslMode=none;Max pool size=10&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>UnitOfWorkManager Members</th><th>Description</th></tr></thead><tbody><tr><td>IUnitOfWork Current</td><td>Return the current unit of work</td></tr><tr><td>void Binding(repository)</td><td>Hand over repository transaction to ir for management</td></tr><tr><td>IUnitOfWork Begin(propagation, isolationLevel)</td><td>Create unit of work</td></tr></tbody></table><ul><li>TransBlogService.cs</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Blog<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> _blogRepository<span class="token punctuation">;</span>\n<span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> _tagRepository<span class="token punctuation">;</span>\n<span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">UnitOfWorkManager</span> _unitOfWorkManager<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token function">TransBlogService</span><span class="token punctuation">(</span><span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Blog<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> blogRepository<span class="token punctuation">,</span> <span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> tagRepository<span class="token punctuation">,</span><span class="token class-name">UnitOfWorkManager</span> unitOfWorkManager<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    _blogRepository <span class="token operator">=</span> blogRepository <span class="token punctuation">;</span>\n    _tagRepository <span class="token operator">=</span> tagRepository <span class="token punctuation">;</span>\n    _unitOfWorkManager <span class="token operator">=</span> unitOfWorkManager<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">CreateBlogUnitOfWorkAsync</span><span class="token punctuation">(</span><span class="token class-name">Blog</span> blog<span class="token punctuation">,</span>List<span class="token operator">&lt;</span>Tag<span class="token operator">&gt;</span>tagList<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">IUnitOfWork</span> unitOfWork <span class="token operator">=</span> _unitOfWorkManager<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">try</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">await</span> _blogRepository<span class="token punctuation">.</span><span class="token function">InsertAsync</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            tagList<span class="token punctuation">.</span><span class="token function">ForEach</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span>\n            <span class="token punctuation">{</span>\n                r<span class="token punctuation">.</span>PostId <span class="token operator">=</span> blog<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">await</span> _tagRepository<span class="token punctuation">.</span><span class="token function">InsertAsync</span><span class="token punctuation">(</span>tagList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            unitOfWork<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>     \n            <span class="token comment">//Actually, Rollback may not be used. </span>\n            <span class="token comment">//Because the internal Dispose of IUnitOfWork will roll back the transaction without Commit. </span>\n            <span class="token comment">//But here can be Rollback in advance.</span>\n        \n            unitOfWork<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">//Log, </span>\n            <span class="token comment">//or use throw to continue throwing exceptions upwards</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">UpdateBlogAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> id<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">IUnitOfWork</span> unitOfWork <span class="token operator">=</span> _unitOfWorkManager<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">try</span>\n        <span class="token punctuation">{</span>\n            <span class="token class-name">Blog</span> blog <span class="token operator">=</span> _blogRepository<span class="token punctuation">.</span>Select<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span>Id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            blog<span class="token punctuation">.</span>IsDeleted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token keyword">await</span> _blogRepository<span class="token punctuation">.</span><span class="token function">UpdateAsync</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            unitOfWork<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">//Log, </span>\n            <span class="token comment">//or use throw to continue throwing exceptions upwards</span>\n            unitOfWork<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><table><thead><tr><th>IUnitOfWork Members</th><th>Description</th></tr></thead><tbody><tr><td>IFreeSql Orm</td><td>The object Select/Delete/Insert/Update/InsertOrUpdate is consistent with the unit of work transaction and can be omitted to pass WithTransaction</td></tr><tr><td>DbTransaction GetOrBeginTransaction()</td><td>Open the transaction, or return to the opened transaction</td></tr><tr><td>void Commit()</td><td>Commit transaction</td></tr><tr><td>void Rollback()</td><td>Rollback transaction</td></tr><tr><td>DbContext.EntityChangeReport EntityChangeReport</td><td>Entity change tracking within the unit of work</td></tr></tbody></table><h4 id="complete-code" tabindex="-1"><a class="header-anchor" href="#complete-code" aria-hidden="true">#</a> Complete code</h4>',14),e={href:"https://github.com/luoyunchong/dotnetcore-examples/blob/master/ORM/FreeSql/OvOv.Core/Domain/Blog.cs",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("Blog.cs"),c={href:"https://github.com/luoyunchong/dotnetcore-examples/blob/master/ORM/FreeSql/OvOv.Core/Domain/Tag.cs",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("Tag.cs"),u={href:"https://github.com/luoyunchong/dotnetcore-examples/blob/master/ORM/FreeSql/OvOv.FreeSql.AutoFac.DynamicProxy/Services/TransBlogService.cs",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("TransBlogService.cs"),i=(0,t.uE)('<p>The above uses generic repository.</p><p>If you want to rewrite a repository, how do you keep the same transaction as <code>UnitOfWorkManager</code>? You can inherit the existing <code>DefaultRepository&lt;,&gt;</code> and implement a custom repository <code>BlogRepository.cs</code>:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlogRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">DefaultRepository<span class="token punctuation">&lt;</span>Blog<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">IBlogRepository</span></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token function">BlogRepository</span><span class="token punctuation">(</span><span class="token class-name">UnitOfWorkManager</span> uowm<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">base</span><span class="token punctuation">(</span>uowm<span class="token punctuation">?.</span>Orm<span class="token punctuation">,</span> uowm<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span> <span class="token function">GetBlogs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> Select<span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>The interface is <code>IBlogRepository.cs</code>:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IBlogRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IBaseRepository<span class="token punctuation">&lt;</span>Blog<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token punctuation">{</span>\n        <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Blog<span class="token punctuation">&gt;</span></span> <span class="token function">GetBlogs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Inject this service in <code>startup.cs</code></p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>    services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddScoped</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IBlogRepository<span class="token punctuation">,</span> BlogRepository<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7),k={},b=(0,a(3744).Z)(k,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",e,[o,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",c,[l,(0,t.Wm)(a)])]),(0,t._)("li",null,[(0,t._)("a",u,[r,(0,t.Wm)(a)])])]),i],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);