"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[4181],{2874:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-19eea59d",path:"/guide/code-first.html",title:"code-first",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"迁移结构",slug:"迁移结构",children:[{level:3,title:"FreeSql提供两种CodeFirst移迁方法，自动和手动。",slug:"freesql提供两种codefirst移迁方法-自动和手动。",children:[]},{level:3,title:"自动同步实体结构【开发环境必备】",slug:"自动同步实体结构【开发环境必备】",children:[]},{level:3,title:"禁用迁移",slug:"禁用迁移",children:[]}]},{level:2,title:"备注",slug:"备注",children:[{level:3,title:"手工同步实体结构",slug:"手工同步实体结构",children:[]}]},{level:2,title:"实体特性",slug:"实体特性",children:[]}],git:{updatedTime:1651681268e3,contributors:[{name:"igeekfan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/code-first.md"}},6633:(n,s,a)=>{a.r(s),a.d(s,{default:()=>L});var t=a(6252);const p=(0,t.uE)('<h1 id="code-first" tabindex="-1"><a class="header-anchor" href="#code-first" aria-hidden="true">#</a> code-first</h1><p><code>FreeSql</code> 支持 <code>CodeFirst</code> 迁移结构至数据库，这应该是(<code>O/RM</code>)必须标配的一个功能。</p><p>与其他(<code>O/RM</code>)不同的是：<code>FreeSql</code>支持更多的数据库特性，而不只是支持基础的数据类型，这既是优点也是缺点，优点是充分利用数据库特性辅助开发，缺点是切换数据库变得困难。不同程序员的理念可能不太一致，<code>FreeSql</code>尽量把功能支持到极致，至于是否使用是项目组技术衡量的另一个问题。</p><p>尽管多种数据库适配逻辑非常复杂，<code>FreeSql</code>始终秉承优化程序开发习惯的原则尽量去实现，中间碰到了一些非技术无法攻克的难题，比如数据库的自定义类型，和实体类本身就是一种冲突，为了减少使用成本，诸如此类的数据库功能没有得到支持。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> connectionString<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//自动同步实体结构【开发环境必备】，FreeSql不会扫描程序集，只有CRUD时才会生成表。</span>\n    <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//请务必定义成 Singleton 单例模式</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="迁移结构" tabindex="-1"><a class="header-anchor" href="#迁移结构" aria-hidden="true">#</a> 迁移结构</h2>',6),e=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"创建数据库"),(0,t._)("th",null,"Sqlite"),(0,t._)("th",null,"Sql Server"),(0,t._)("th",null,"MySql"),(0,t._)("th",null,"PostgreSQL"),(0,t._)("th",null,"Oracle")])],-1),o=(0,t._)("td",null,null,-1),c=(0,t._)("td",null,"√",-1),l=(0,t.Uk)("X "),u={href:"https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Infrastructure/FreeSql/FreeSqlExtension.cs#L153",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("参考"),r=(0,t.Uk)("X "),k={href:"https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Infrastructure/FreeSql/FreeSqlExtension.cs#L129",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("参考"),b=(0,t.Uk)("X"),m={href:"https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Infrastructure/FreeSql/FreeSqlExtension.cs#L233",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("参考"),y=(0,t._)("td",null,"X",-1),g=(0,t.uE)('<table><thead><tr><th>实体＆表对比</th><th>添加</th><th>改名</th><th>删除</th></tr></thead><tbody><tr><td></td><td>√</td><td>√</td><td>X</td></tr></tbody></table><table><thead><tr><th>实体属性＆字段对比</th><th>添加</th><th>修改可空</th><th>修改自增</th><th>修改类型</th><th>改名</th><th>删除</th><th>备注</th></tr></thead><tbody><tr><td></td><td>√</td><td>√</td><td>√</td><td>√</td><td>√</td><td>X</td><td>√</td></tr></tbody></table><blockquote><p>为了保证安全，不提供删除字段。</p></blockquote><p>警告：如果实体类属性，与数据库表字段不完整映射的时候，未映射的字段有可能发生丢失。</p><blockquote><p>原因：某些迁移对比操作是：创建临时表、导入旧表数据、删除旧表。</p></blockquote><h3 id="freesql提供两种codefirst移迁方法-自动和手动。" tabindex="-1"><a class="header-anchor" href="#freesql提供两种codefirst移迁方法-自动和手动。" aria-hidden="true">#</a> FreeSql提供两种CodeFirst移迁方法，自动和手动。</h3><p><strong>注意</strong>：谨慎、谨慎、谨慎在生产环境中使用该功能。</p><p><strong>注意</strong>：谨慎、谨慎、谨慎在生产环境中使用该功能。</p><p><strong>注意</strong>：谨慎、谨慎、谨慎在生产环境中使用该功能。</p><h3 id="自动同步实体结构【开发环境必备】" tabindex="-1"><a class="header-anchor" href="#自动同步实体结构【开发环境必备】" aria-hidden="true">#</a> 自动同步实体结构【开发环境必备】</h3><p>自动同步实体结构到数据库，程序运行中检查实体表是否存在，然后迁移执行创建或修改。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span>IsAutoSyncDataStructure <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>此功能默认为开启状态，发布正式环境后，请修改此设置。</p></blockquote><blockquote><p>虽然【自动同步实体结构】功能开发非常好用，但是有个坏处，就是数据库后面会很乱，没用的字段可能一大堆，应尽量控制实体或属性命名的修改。</p></blockquote>',14),f=(0,t._)("li",null,[(0,t.Uk)("注意：只有当CURD到此表时，才会自动生成表结构。如需系统运行时迁移表结构，请使用"),(0,t._)("strong",null,"SyncStructure"),(0,t.Uk)("方法")],-1),v=(0,t._)("code",null,"FreeSql",-1),w=(0,t.Uk)("不会帮你生成数据库，需要你手动创建数据库。"),q=(0,t.Uk)("如果你使用"),T=(0,t._)("code",null,"Mysql",-1),S=(0,t.Uk)("、"),x=(0,t._)("code",null,"Sql Server",-1),C=(0,t.Uk)("，需要自动创建数据库.请参考此代码，自行copy，"),A={href:"https://github.com/luoyunchong/lin-cms-dotnetcore/blob/master/src/LinCms.Infrastructure/FreeSql/FreeSqlExtension.cs",target:"_blank",rel:"noopener noreferrer"},E=(0,t.Uk)("FreeSqlExtension.cs"),F=(0,t.uE)('<h3 id="禁用迁移" tabindex="-1"><a class="header-anchor" href="#禁用迁移" aria-hidden="true">#</a> 禁用迁移</h3><p>当【实体类】对应的是数据库【视图】或者其他时，可通过 [Table(DisableSyncStructure = true)] 禁用指定的实体迁移操作。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DisableSyncStructure <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">ModelDisableSyncStructure</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsPrimary <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> pkid <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><p>FreeSql CodeFirst 支持将 c# 代码内的注释，迁移至数据库的备注。先决条件：</p><p>1、实体类所在程序集，需要开启 xml 文档功能；</p><p>2、xml 文件必须与程序集同目录，且文件名：xxx.dll -&gt; xxx.xml；</p><blockquote><p>v1.5.0+ 版本增加了对 Description 特性的解析，优先级低于 c# 代码注释；</p></blockquote><h3 id="手工同步实体结构" tabindex="-1"><a class="header-anchor" href="#手工同步实体结构" aria-hidden="true">#</a> 手工同步实体结构</h3><p>提供接口方法实现对比实体，与数据库中的变化部分，返回SQL语句。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t1 <span class="token operator">=</span> mysql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetComparisonDDLStatements</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">ushort</span></span> fusho <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>cccddd<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Topic<span class="token punctuation">`</span></span> <span class="token punctuation">(</span> \n    <span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span> \n    <span class="token identifier"><span class="token punctuation">`</span>Clicks<span class="token punctuation">`</span></span> <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> \n    <span class="token identifier"><span class="token punctuation">`</span>Title<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n    <span class="token identifier"><span class="token punctuation">`</span>CreateTime<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> \n    <span class="token identifier"><span class="token punctuation">`</span>fusho<span class="token punctuation">`</span></span> <span class="token keyword">SMALLINT</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">UNSIGNED</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> \n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>Id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">Engine</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>提供接口方法实现同步结构</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> t2 <span class="token operator">=</span> fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SyncStructure</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//同步实体类型到数据库</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="批量生成表结构" tabindex="-1"><a class="header-anchor" href="#批量生成表结构" aria-hidden="true">#</a> 批量生成表结构</h4><ul><li>void SyncStructure(params Type[]) 重载方法支持数组,同步实体类型集合到数据库</li><li>IEntity类，是实体类所在程序集的一个类即可。</li></ul><p>方法1：扫描 IEntity类所在程序集，反射得到类上有特性标签为TableAttribute 的所有类，该方法需在实体类上指定了 [Table(Name = &quot;xxx&quot;)]特性标签</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>public <span class="token keyword">static</span> Type<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">GetTypesByTableAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    List<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> tableAssembies <span class="token operator">=</span> new List<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">foreach</span> <span class="token punctuation">(</span>Type type in Assembly<span class="token punctuation">.</span><span class="token function">GetAssembly</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>IEntity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetExportedTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token function">foreach</span> <span class="token punctuation">(</span>Attribute attribute in type<span class="token punctuation">.</span><span class="token function">GetCustomAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>attribute is TableAttribute tableAttribute<span class="token punctuation">)</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>tableAttribute<span class="token punctuation">.</span>DisableSyncStructure <span class="token operator">==</span> false<span class="token punctuation">)</span>\n                    tableAssembies<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> tableAssembies<span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>调用</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token function">SyncStructure</span><span class="token punctuation">(</span><span class="token function">GetTypesByTableAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>方法2：通过命名空间得到所有要创建的实体类.根据需要调整entitiesFullName下的命名空间值。比如我们创建一个Entities文件夹，用于存放实体类。该方法通过筛选 IEntity类所在程序集所有的实体类。他们的命名空间都是LinCms.Entities开头，内部通过StartsWith判断。</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>public <span class="token keyword">static</span> Type<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">GetTypesByNameSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    List<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span> tableAssembies <span class="token operator">=</span> new List<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    List<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> entitiesFullName <span class="token operator">=</span> new List<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token string">&quot;LinCms.Entities.Settings&quot;</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;LinCms.Entities.Base&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">foreach</span> <span class="token punctuation">(</span>Type type in Assembly<span class="token punctuation">.</span><span class="token function">GetAssembly</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>IEntity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetExportedTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token function">foreach</span> <span class="token punctuation">(</span>var fullname in entitiesFullName<span class="token punctuation">)</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span>FullName<span class="token punctuation">.</span><span class="token function">StartsWith</span><span class="token punctuation">(</span>fullname<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> type<span class="token punctuation">.</span>IsClass<span class="token punctuation">)</span>\n                tableAssembies<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> tableAssembies<span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>或通过调用同步所有表结构</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token function">SyncStructure</span><span class="token punctuation">(</span><span class="token function">GetTypesByNameSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="实体特性" tabindex="-1"><a class="header-anchor" href="#实体特性" aria-hidden="true">#</a> 实体特性</h2><p>指定实体的表名，指定 Name 后，实体类名变化不影响数据库对应的表。FreeSql尽量支持了对多数据库或schema支持，不防试试指定表名为：其他数据库.表名，不同数据库的指定方式有差异，这一点以后深入解答。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;db2.tb_topic111&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">Topic</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>无指定实体的表名，修改为实体类名。指定数据库旧的表名，修改实体命名时，同时设置此参数为修改之前的值，CodeFirst才可以正确修改数据库表；否则将视为【创建新表】。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>OldName <span class="token operator">=</span> <span class="token string">&quot;Topic&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">Topic2</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>cccddd<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Topic<span class="token punctuation">`</span></span> <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> <span class="token identifier"><span class="token punctuation">`</span>cccddd<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Topic2<span class="token punctuation">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改字段类型，把 Title 类型改为 varchar(128)。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>DbType <span class="token operator">=</span> <span class="token string">&quot;varchar(128)&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>cccddd<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Topic2<span class="token punctuation">`</span></span> <span class="token keyword">MODIFY</span> <span class="token identifier"><span class="token punctuation">`</span>Title<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>指定属性的字段名，这样指定后，修改实体的属性名不影响数据库对应的列。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;titl2&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>无指定属性的字段名，修改为属性名，指定数据库旧的列名，修改实体属性命名时，同时设置此参数为修改之前的值，CodeFirst才可以正确修改数据库字段；否则将视为【新增字段】。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>OldName <span class="token operator">=</span> <span class="token string">&quot;Title2&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>cccddd<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>Topic2<span class="token punctuation">`</span></span> CHANGE <span class="token keyword">COLUMN</span> <span class="token identifier"><span class="token punctuation">`</span>Title2<span class="token punctuation">`</span></span> <span class="token identifier"><span class="token punctuation">`</span>Title<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>',38),_={},L=(0,a(3744).Z)(_,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("table",null,[e,(0,t._)("tbody",null,[(0,t._)("tr",null,[o,c,(0,t._)("td",null,[l,(0,t._)("a",u,[i,(0,t.Wm)(a)])]),(0,t._)("td",null,[r,(0,t._)("a",k,[d,(0,t.Wm)(a)])]),(0,t._)("td",null,[b,(0,t._)("a",m,[h,(0,t.Wm)(a)])]),y])])]),g,(0,t._)("ul",null,[f,(0,t._)("li",null,[v,w,(0,t._)("strong",null,[q,T,S,x,C,(0,t._)("a",A,[E,(0,t.Wm)(a)])])])]),F],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);