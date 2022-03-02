"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[6957],{6803:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-aa863f00",path:"/reference/faq.html",title:"常见问题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"1、如何监视 SQL？",slug:"_1、如何监视-sql",children:[]},{level:3,title:"2、MySql Enum 映射",slug:"_2、mysql-enum-映射",children:[]},{level:3,title:"3、多个 IFreeSql 实例，如何注入使用？",slug:"_3、多个-ifreesql-实例-如何注入使用",children:[]},{level:3,title:"4、TransactionalAttribute + UnitOfWorkManager 事务传播",slug:"_4、transactionalattribute-unitofworkmanager-事务传播",children:[]},{level:3,title:"5、怎么执行 SQL 返回实体列表？",slug:"_5、怎么执行-sql-返回实体列表",children:[]},{level:3,title:"6、错误：【主库】状态不可用，等待后台检查程序恢复方可使用。xxx",slug:"_6、错误-【主库】状态不可用-等待后台检查程序恢复方可使用。xxx",children:[]},{level:3,title:"7、错误：【主库】对象池已释放，无法访问。",slug:"_7、错误-【主库】对象池已释放-无法访问。",children:[]},{level:3,title:"8、错误：ObjectPool.Get 获取超时（10秒）。",slug:"_8、错误-objectpool-get-获取超时-10秒-。",children:[]}],git:{updatedTime:1646187567e3,contributors:[{name:"IGeekFan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"reference/faq.md"}},1472:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var e=a(6252);const t=(0,e.uE)('<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h3 id="_1、如何监视-sql" tabindex="-1"><a class="header-anchor" href="#_1、如何监视-sql" aria-hidden="true">#</a> 1、如何监视 SQL？</h3><p>方法一：UseMonitorCommand + UseNoneCommandParameter</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;线程：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">cmd<span class="token punctuation">.</span>CommandText</span><span class="token punctuation">}</span></span><span class="token string">\\r\\n&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">UseNoneCommandParameter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>方法二：Aop.CurdBefore/CurdAfter</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>CurdAfter <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>ElapsedMilliseconds <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span>\n    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;线程：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Sql</span><span class="token punctuation">}</span></span><span class="token string">\\r\\n&quot;</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h3 id="_2、mysql-enum-映射" tabindex="-1"><a class="header-anchor" href="#_2、mysql-enum-映射" aria-hidden="true">#</a> 2、MySql Enum 映射</h3><p>默认情况 c# 枚举会映射为 MySql Enum 类型，如果想映射为 int 在 FreeSqlBuilder Build 之后执行以下 Aop 统一处理：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntityProperty <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType<span class="token punctuation">.</span>IsEnum<span class="token punctuation">)</span>\n    e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h3 id="_3、多个-ifreesql-实例-如何注入使用" tabindex="-1"><a class="header-anchor" href="#_3、多个-ifreesql-实例-如何注入使用" aria-hidden="true">#</a> 3、多个 IFreeSql 实例，如何注入使用？</h3>',12),p={href:"https://github.com/dotnetcore/FreeSql/issues/44",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("https://github.com/dotnetcore/FreeSql/issues/44"),c=(0,e._)("hr",null,null,-1),l=(0,e._)("h3",{id:"_4、transactionalattribute-unitofworkmanager-事务传播",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_4、transactionalattribute-unitofworkmanager-事务传播","aria-hidden":"true"},"#"),(0,e.Uk)(" 4、TransactionalAttribute + UnitOfWorkManager 事务传播")],-1),u={href:"https://github.com/dotnetcore/FreeSql/issues/289",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("https://github.com/dotnetcore/FreeSql/issues/289"),r=(0,e.uE)('<hr><h3 id="_5、怎么执行-sql-返回实体列表" tabindex="-1"><a class="header-anchor" href="#_5、怎么执行-sql-返回实体列表" aria-hidden="true">#</a> 5、怎么执行 SQL 返回实体列表？</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//直接查询</span>\nfsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//嵌套一层做二次查询</span>\nfsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithSql</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h3 id="_6、错误-【主库】状态不可用-等待后台检查程序恢复方可使用。xxx" tabindex="-1"><a class="header-anchor" href="#_6、错误-【主库】状态不可用-等待后台检查程序恢复方可使用。xxx" aria-hidden="true">#</a> 6、错误：【主库】状态不可用，等待后台检查程序恢复方可使用。xxx</h3><p>一般是数据库连接失败，才会出现，请检查程序与数据库之间的网络。具体按 xxx 给出的提示进行排查。</p><hr><h3 id="_7、错误-【主库】对象池已释放-无法访问。" tabindex="-1"><a class="header-anchor" href="#_7、错误-【主库】对象池已释放-无法访问。" aria-hidden="true">#</a> 7、错误：【主库】对象池已释放，无法访问。</h3><p>原因一：手工调用了 fsql.Dispose，之后仍然使用它</p><p>原因二：使用了 IdleBus 管理 IFreeSql，错误的方式如下：</p><ul><li>a) 不要构建了 IFreeSql 再丢去注册</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>var fsql <span class="token operator">=</span> new <span class="token function">FreeSqlBulder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;key01&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> fsql<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//错了，错了，错了</span>\n\nib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;key01&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> new <span class="token function">FreeSqlBulder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正确</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>b) 尽量每次都使用 ib.Get 获得 IFreeSql 对象(避免存对象引用)，IdleBus 内部超时释机制一时触发，再使用引用对象，就会报这个报错</li></ul><p>原因三：检查项目的系统事件，是否在异常之前触发</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span>ProcessExit <span class="token operator">+=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">//记录日志</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nConsole<span class="token punctuation">.</span>CancelKeyPress <span class="token operator">+=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">//记录日志  </span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果确定问题，可以在 FreeSqlBuilder 构建对象的时候 UseExitAutoDisposePool(false) 关闭这个机制</p><hr><h3 id="_8、错误-objectpool-get-获取超时-10秒-。" tabindex="-1"><a class="header-anchor" href="#_8、错误-objectpool-get-获取超时-10秒-。" aria-hidden="true">#</a> 8、错误：ObjectPool.Get 获取超时（10秒）。</h3><p>原因一：UnitOfWork 使用未释放，请保证程序内使用 UnitOfWork 的地方会执行 Dispose</p><p>原因二：Max Pool Size 设置过小，程序访问量过高</p><p>监视 fsql.Ado.MasterPool.Statistics，它的值：Pool: 5/100, Get wait: 0, GetAsync await: 0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>5 为可用连接数，值为0后开始排队\n100 为当前最大连接数\nGet await 为同步方法获取连接的排队数量（超过10秒就会报错）\nGetAsync await 为异步方法获取连接的排队数量\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>监视 FreeSql.UnitOfWork.DebugBeingUsed 这个静态字典，存储正在使用事务的工作单元</p><p>注意：尽量不要使用 fsql.Ado.MasterPool.Get() 或 GetAsync() 方法，否则请检查姿势。</p><hr>',25),k={},d=(0,a(3744).Z)(k,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[(0,e._)("a",p,[o,(0,e.Wm)(a)])]),c,l,(0,e._)("p",null,[(0,e._)("a",u,[i,(0,e.Wm)(a)])]),r],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);