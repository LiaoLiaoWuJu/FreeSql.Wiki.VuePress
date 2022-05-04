"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[5304],{5116:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-135e4503",path:"/guide/aop.html",title:"AOP✨",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"审计 CRUD",slug:"审计-crud",children:[]},{level:2,title:"审计属性值",slug:"审计属性值",children:[]},{level:2,title:"审计命令",slug:"审计命令",children:[]},{level:2,title:"审计迁移脚本",slug:"审计迁移脚本",children:[]},{level:2,title:"自定义实体特性",slug:"自定义实体特性",children:[]},{level:2,title:"Ado.net 读取拦截",slug:"ado-net-读取拦截",children:[]},{level:2,title:"表达式拦截",slug:"表达式拦截",children:[]},{level:2,title:"修改decimal默认特性",slug:"修改decimal默认特性",children:[]}],git:{updatedTime:1651681268e3,contributors:[{name:"igeekfan",email:"luoyunchong@foxmail.com",commits:1}]},filePathRelative:"guide/aop.md"}},1334:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(6252);const t=(0,p.uE)('<h1 id="aop✨" tabindex="-1"><a class="header-anchor" href="#aop✨" aria-hidden="true">#</a> AOP✨</h1><p>FreeSql AOP 已有的功能介绍，未来为会根据用户需求不断增强。</p><h2 id="审计-crud" tabindex="-1"><a class="header-anchor" href="#审计-crud" aria-hidden="true">#</a> 审计 CRUD</h2><p>如果因为某个 sql 骚操作耗时很高，没有一个相关的审计功能，排查起来可以说无从下手。</p><p>FreeSql 支持简单的类似功能：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>CurdAfter <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>ElapsedMilliseconds <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span> \n    <span class="token punctuation">{</span>\n        <span class="token comment">//记录日志</span>\n        <span class="token comment">//发送短信给负责人</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>只需要一个事件，就可以对全局起到作用。</p><p>还有一个 CurdBefore 在执行 sql 之前触发，常用于记录日志或开发调试。</p><h2 id="审计属性值" tabindex="-1"><a class="header-anchor" href="#审计属性值" aria-hidden="true">#</a> 审计属性值</h2><p>实现插入/更新时统一处理某些值，比如某属性的雪花算法值、创建时间值、甚至是业务值。</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>AuditValue <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Column<span class="token punctuation">.</span>CsType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">long</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> \n        e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetCustomAttribute</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SnowflakeAttribute<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> \n        e<span class="token punctuation">.</span>Value<span class="token punctuation">?.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>\n        e<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Snowflake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Snowflake</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>当属性的类型是 long，并且标记了 [Snowflake]，并且当前值是 0，那么在插入/更新时它的值将设置为雪花id值。</p></blockquote><blockquote><p>说明：SnowflakeAttribute 是使用者您来定义，new Snowflake().GetId() 也是由使用者您来实现</p></blockquote><p>如果命名规范，可以在 aop 里判断，if (e.Property.Name == &quot;createtime&quot;) e.Value = DateTime.Now;</p><h2 id="审计命令" tabindex="-1"><a class="header-anchor" href="#审计命令" aria-hidden="true">#</a> 审计命令</h2><p>fsql.Aop.CommandBefore、fsql.Aop.CommandAfterHandler 这两个事件触发所有 SQL 命令的执行前、和执行后。</p><p>执行后的事件会附带异常信息、耗时信息等。</p><p>建议在开发模式下开启无参数化模式，new FreeSqlBuilder().UseNoneCommandParameter(true)。</p><blockquote><p>提示：new FreeSqlBuilder().UseMonitorCommand 也可以审计命令执行前后。</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql1<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>CommandAfter <span class="token operator">+=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EventHandler<span class="token punctuation">&lt;</span>CommandAfterEventArgs<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Exception <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n   <span class="token punctuation">{</span>\n     <span class="token comment">//做一些日志记录的操作。以下为示例。</span>\n     Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Message:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Exception<span class="token punctuation">.</span>Message </span><span class="token punctuation">}</span></span><span class="token string">\\r\\nStackTrace:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Exception<span class="token punctuation">.</span>StackTrace</span><span class="token punctuation">}</span></span><span class="token string">\\r\\nCommandText:</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Command<span class="token punctuation">.</span>CommandText</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="审计迁移脚本" tabindex="-1"><a class="header-anchor" href="#审计迁移脚本" aria-hidden="true">#</a> 审计迁移脚本</h2><p>FreeSql 自带迁移功能，那么迁移的 SQL 语句长啥样，你可能会好奇。</p><ul><li><p>比如创建表时；</p></li><li><p>比如添加字段时；</p></li><li><p>比如修改表名、修改字段名时；</p></li><li><p>又比如字段类型更改之后时；</p></li></ul><p>这些操作在 FreeSql.CodeFirst 实现下基本不需要理会，而且我们只推荐在开发环境使用自动迁移的功能，正式环境可使用其他工具替代此操作。</p><p>但我们仍然可能需要对项目做完整的日志记录。</p><p>fsql.Aop.SyncStructureBefore、fsql.Aop.SyncStructureAfter 这两个事件将排上用场。</p><h2 id="自定义实体特性" tabindex="-1"><a class="header-anchor" href="#自定义实体特性" aria-hidden="true">#</a> 自定义实体特性</h2><p>比如项目内已经使用了其它 orm，如 efcore，这样意味着实体中可能存在 [Key]，但它与 FreeSql [Column(IsPrimary = true] 不同。</p><p>Q： FreeSql 实体特性为啥这么别扭？</p><p>A： 为了考虑一致性用法，全部封装在 ColumnAttribute 下，这样用户使用起来，不用到处 using 或者 回忆特性应该用哪个名字，如自增 [Column(IsIdentity = true)] 即可。</p><p>FreeSql 提供 AOP 自定义特性功能，实现与多个 orm 共同拥有一套实体特性，可避免重复定义特性。</p><blockquote><p>v1.4.0+ 已自动识别 EFCore 实体特性 Key/Required/NotMapped/MaxLength/StringLength/DatabaseGenerated/Table/Column</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntity <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> \n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> attr <span class="token operator">=</span> e<span class="token punctuation">.</span>EntityType<span class="token punctuation">.</span><span class="token function">GetCustomAttributes</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyTableAttribute</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">MyTableAttribute</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>attr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n        e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>Name <span class="token operator">=</span> attr<span class="token punctuation">.</span>Name<span class="token punctuation">;</span> <span class="token comment">//表名</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nfsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntityProperty <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> \n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> attr <span class="token operator">=</span> e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span><span class="token function">GetCustomAttributes</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">MyColumnAttribute</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token class-name">MyColumnAttribute</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>attr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n        e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>Name <span class="token operator">=</span> attr<span class="token punctuation">.</span>Name<span class="token punctuation">;</span> <span class="token comment">//字段名</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MyTable</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">YourEntity</span>\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">MyColumn</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> pkid <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyTableAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Attribute</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">MyTableAttribute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">MyColumnAttribute</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Attribute</span></span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">MyColumnAttribute</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> name<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="ado-net-读取拦截" tabindex="-1"><a class="header-anchor" href="#ado-net-读取拦截" aria-hidden="true">#</a> Ado.net 读取拦截</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>AuditDataReader <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>DataReader<span class="token punctuation">.</span><span class="token function">GetFieldType</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Index<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">string</span></span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> \n      e<span class="token punctuation">.</span>Value <span class="token operator">==</span> DBNull<span class="token punctuation">.</span>Value<span class="token punctuation">)</span>\n        e<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="表达式拦截" tabindex="-1"><a class="header-anchor" href="#表达式拦截" aria-hidden="true">#</a> 表达式拦截</h2><p>FreeSql 内部表达式支持非常丰富，对各大数据库的兼容度也做得很好。</p>',37),e=(0,p.Uk)("有关表达式支持的程度，可参阅："),o=(0,p.Uk)("表达式函数"),c=(0,p.uE)('<p>即便如此丰富，也仍然无法满足用户需求，FreeSql 对外开放了自定义表达式解析接口：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ParseExpression <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Expression<span class="token punctuation">.</span>NodeType <span class="token operator">==</span> Call <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>Expression<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;get_Item&quot;</span><span class="token punctuation">)</span>\n        e<span class="token punctuation">.</span>Result <span class="token operator">=</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这个解析有点复杂，当 <code>e.Expression</code> 很复杂的时候，我们还提供了 <code>e.FreeParse</code> 方法，使用它相当于调用 <code>FreeSql</code> 内置表达式解析引擎，辅助您进行解析。</p><h2 id="修改decimal默认特性" tabindex="-1"><a class="header-anchor" href="#修改decimal默认特性" aria-hidden="true">#</a> 修改decimal默认特性</h2><p>因为默认decimal只支持decimal(10,2)，范围太小，我们可以全局修改decimal类型的支持范围，比如支持decimal(18,6)</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql1<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntityProperty <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">decimal</span></span><span class="token punctuation">)</span><span class="token operator">||</span> e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType <span class="token operator">==</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">decimal</span><span class="token punctuation">?</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n       e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>Precision <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>\n       e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>Scale <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',6),l={},u=(0,a(3744).Z)(l,[["render",function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("blockquote",null,[(0,p._)("p",null,[e,(0,p.Wm)(a,{to:"/guide/expression-function.html"},{default:(0,p.w5)((()=>[o])),_:1})])]),c],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);