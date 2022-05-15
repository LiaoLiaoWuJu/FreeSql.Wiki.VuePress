import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,c,a as n,b as t,F as l,d as e,e as s,o as i}from"./app.32c52fc9.js";const u={},r=e(`<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h1><h3 id="_1\u3001\u5982\u4F55\u76D1\u89C6-sql" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5982\u4F55\u76D1\u89C6-sql" aria-hidden="true">#</a> 1\u3001\u5982\u4F55\u76D1\u89C6 SQL\uFF1F</h3><p>\u65B9\u6CD5\u4E00\uFF1AUseMonitorCommand + UseNoneCommandParameter</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">static</span> <span class="token class-name">IFreeSql</span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>MySql<span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;\u7EBF\u7A0B\uFF1A</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">cmd<span class="token punctuation">.</span>CommandText</span><span class="token punctuation">}</span></span><span class="token string">\\r\\n&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">UseNoneCommandParameter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E8C\uFF1AAop.CurdBefore/CurdAfter</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>CurdAfter <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>ElapsedMilliseconds <span class="token operator">&gt;</span> <span class="token number">200</span><span class="token punctuation">)</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;\u7EBF\u7A0B\uFF1A</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">e<span class="token punctuation">.</span>Sql</span><span class="token punctuation">}</span></span><span class="token string">\\r\\n&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2\u3001mysql-enum-\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#_2\u3001mysql-enum-\u6620\u5C04" aria-hidden="true">#</a> 2\u3001MySql Enum \u6620\u5C04</h3><p>\u9ED8\u8BA4\u60C5\u51B5 c# \u679A\u4E3E\u4F1A\u6620\u5C04\u4E3A MySql Enum \u7C7B\u578B\uFF0C\u5982\u679C\u60F3\u6620\u5C04\u4E3A int \u5728 FreeSqlBuilder Build \u4E4B\u540E\u6267\u884C\u4EE5\u4E0B Aop \u7EDF\u4E00\u5904\u7406\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>Aop<span class="token punctuation">.</span>ConfigEntityProperty <span class="token operator">+=</span> <span class="token punctuation">(</span>s<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>Property<span class="token punctuation">.</span>PropertyType<span class="token punctuation">.</span>IsEnum<span class="token punctuation">)</span>
    e<span class="token punctuation">.</span>ModifyResult<span class="token punctuation">.</span>MapType <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name"><span class="token keyword">int</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3\u3001\u591A\u4E2A-ifreesql-\u5B9E\u4F8B-\u5982\u4F55\u6CE8\u5165\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u591A\u4E2A-ifreesql-\u5B9E\u4F8B-\u5982\u4F55\u6CE8\u5165\u4F7F\u7528" aria-hidden="true">#</a> 3\u3001\u591A\u4E2A IFreeSql \u5B9E\u4F8B\uFF0C\u5982\u4F55\u6CE8\u5165\u4F7F\u7528\uFF1F</h3>`,12),k={href:"https://github.com/dotnetcore/FreeSql/issues/44",target:"_blank",rel:"noopener noreferrer"},d=s("https://github.com/dotnetcore/FreeSql/issues/44"),m=n("hr",null,null,-1),v=n("h3",{id:"_4\u3001transactionalattribute-unitofworkmanager-\u4E8B\u52A1\u4F20\u64AD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4\u3001transactionalattribute-unitofworkmanager-\u4E8B\u52A1\u4F20\u64AD","aria-hidden":"true"},"#"),s(" 4\u3001TransactionalAttribute + UnitOfWorkManager \u4E8B\u52A1\u4F20\u64AD")],-1),h={href:"https://github.com/dotnetcore/FreeSql/issues/289",target:"_blank",rel:"noopener noreferrer"},b=s("https://github.com/dotnetcore/FreeSql/issues/289"),q=e(`<hr><h3 id="_5\u3001\u600E\u4E48\u6267\u884C-sql-\u8FD4\u56DE\u5B9E\u4F53\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u600E\u4E48\u6267\u884C-sql-\u8FD4\u56DE\u5B9E\u4F53\u5217\u8868" aria-hidden="true">#</a> 5\u3001\u600E\u4E48\u6267\u884C SQL \u8FD4\u56DE\u5B9E\u4F53\u5217\u8868\uFF1F</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//\u76F4\u63A5\u67E5\u8BE2</span>
fsql<span class="token punctuation">.</span>Ado<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Query</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u5D4C\u5957\u4E00\u5C42\u505A\u4E8C\u6B21\u67E5\u8BE2</span>
fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithSql</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_6\u3001\u9519\u8BEF-\u3010\u4E3B\u5E93\u3011\u72B6\u6001\u4E0D\u53EF\u7528-\u7B49\u5F85\u540E\u53F0\u68C0\u67E5\u7A0B\u5E8F\u6062\u590D\u65B9\u53EF\u4F7F\u7528\u3002xxx" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u9519\u8BEF-\u3010\u4E3B\u5E93\u3011\u72B6\u6001\u4E0D\u53EF\u7528-\u7B49\u5F85\u540E\u53F0\u68C0\u67E5\u7A0B\u5E8F\u6062\u590D\u65B9\u53EF\u4F7F\u7528\u3002xxx" aria-hidden="true">#</a> 6\u3001\u9519\u8BEF\uFF1A\u3010\u4E3B\u5E93\u3011\u72B6\u6001\u4E0D\u53EF\u7528\uFF0C\u7B49\u5F85\u540E\u53F0\u68C0\u67E5\u7A0B\u5E8F\u6062\u590D\u65B9\u53EF\u4F7F\u7528\u3002xxx</h3><p>\u4E00\u822C\u662F\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\uFF0C\u624D\u4F1A\u51FA\u73B0\uFF0C\u8BF7\u68C0\u67E5\u7A0B\u5E8F\u4E0E\u6570\u636E\u5E93\u4E4B\u95F4\u7684\u7F51\u7EDC\u3002\u5177\u4F53\u6309 xxx \u7ED9\u51FA\u7684\u63D0\u793A\u8FDB\u884C\u6392\u67E5\u3002</p><hr><h3 id="_7\u3001\u9519\u8BEF-\u3010\u4E3B\u5E93\u3011\u5BF9\u8C61\u6C60\u5DF2\u91CA\u653E-\u65E0\u6CD5\u8BBF\u95EE\u3002" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u9519\u8BEF-\u3010\u4E3B\u5E93\u3011\u5BF9\u8C61\u6C60\u5DF2\u91CA\u653E-\u65E0\u6CD5\u8BBF\u95EE\u3002" aria-hidden="true">#</a> 7\u3001\u9519\u8BEF\uFF1A\u3010\u4E3B\u5E93\u3011\u5BF9\u8C61\u6C60\u5DF2\u91CA\u653E\uFF0C\u65E0\u6CD5\u8BBF\u95EE\u3002</h3><p>\u539F\u56E0\u4E00\uFF1A\u624B\u5DE5\u8C03\u7528\u4E86 fsql.Dispose\uFF0C\u4E4B\u540E\u4ECD\u7136\u4F7F\u7528\u5B83</p><p>\u539F\u56E0\u4E8C\uFF1A\u4F7F\u7528\u4E86 IdleBus \u7BA1\u7406 IFreeSql\uFF0C\u9519\u8BEF\u7684\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><ul><li>a) \u4E0D\u8981\u6784\u5EFA\u4E86 IFreeSql \u518D\u4E22\u53BB\u6CE8\u518C</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBulder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;key01&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> fsql<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9519\u4E86\uFF0C\u9519\u4E86\uFF0C\u9519\u4E86</span>

ib<span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;key01&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSqlBulder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6B63\u786E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>b) \u5C3D\u91CF\u6BCF\u6B21\u90FD\u4F7F\u7528 ib.Get \u83B7\u5F97 IFreeSql \u5BF9\u8C61(\u907F\u514D\u5B58\u5BF9\u8C61\u5F15\u7528)\uFF0CIdleBus \u5185\u90E8\u8D85\u65F6\u91CA\u673A\u5236\u4E00\u65F6\u89E6\u53D1\uFF0C\u518D\u4F7F\u7528\u5F15\u7528\u5BF9\u8C61\uFF0C\u5C31\u4F1A\u62A5\u8FD9\u4E2A\u62A5\u9519</li></ul><p>\u539F\u56E0\u4E09\uFF1A\u68C0\u67E5\u9879\u76EE\u7684\u7CFB\u7EDF\u4E8B\u4EF6\uFF0C\u662F\u5426\u5728\u5F02\u5E38\u4E4B\u524D\u89E6\u53D1</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span>ProcessExit <span class="token operator">+=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
  <span class="token comment">//\u8BB0\u5F55\u65E5\u5FD7</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Console<span class="token punctuation">.</span>CancelKeyPress <span class="token operator">+=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
  <span class="token comment">//\u8BB0\u5F55\u65E5\u5FD7  </span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u786E\u5B9A\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728 FreeSqlBuilder \u6784\u5EFA\u5BF9\u8C61\u7684\u65F6\u5019 UseExitAutoDisposePool(false) \u5173\u95ED\u8FD9\u4E2A\u673A\u5236</p><hr><h3 id="_8\u3001\u9519\u8BEF-objectpool-get-\u83B7\u53D6\u8D85\u65F6-10\u79D2-\u3002" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u9519\u8BEF-objectpool-get-\u83B7\u53D6\u8D85\u65F6-10\u79D2-\u3002" aria-hidden="true">#</a> 8\u3001\u9519\u8BEF\uFF1AObjectPool.Get \u83B7\u53D6\u8D85\u65F6\uFF0810\u79D2\uFF09\u3002</h3><p>\u539F\u56E0\u4E00\uFF1AUnitOfWork \u4F7F\u7528\u672A\u91CA\u653E\uFF0C\u8BF7\u4FDD\u8BC1\u7A0B\u5E8F\u5185\u4F7F\u7528 UnitOfWork \u7684\u5730\u65B9\u4F1A\u6267\u884C Dispose</p><p>\u539F\u56E0\u4E8C\uFF1AMax Pool Size \u8BBE\u7F6E\u8FC7\u5C0F\uFF0C\u7A0B\u5E8F\u8BBF\u95EE\u91CF\u8FC7\u9AD8</p><p>\u76D1\u89C6 fsql.Ado.MasterPool.Statistics\uFF0C\u5B83\u7684\u503C\uFF1APool: 5/100, Get wait: 0, GetAsync await: 0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>5 \u4E3A\u53EF\u7528\u8FDE\u63A5\u6570\uFF0C\u503C\u4E3A0\u540E\u5F00\u59CB\u6392\u961F
100 \u4E3A\u5F53\u524D\u6700\u5927\u8FDE\u63A5\u6570
Get await \u4E3A\u540C\u6B65\u65B9\u6CD5\u83B7\u53D6\u8FDE\u63A5\u7684\u6392\u961F\u6570\u91CF\uFF08\u8D85\u8FC710\u79D2\u5C31\u4F1A\u62A5\u9519\uFF09
GetAsync await \u4E3A\u5F02\u6B65\u65B9\u6CD5\u83B7\u53D6\u8FDE\u63A5\u7684\u6392\u961F\u6570\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76D1\u89C6 FreeSql.UnitOfWork.DebugBeingUsed \u8FD9\u4E2A\u9759\u6001\u5B57\u5178\uFF0C\u5B58\u50A8\u6B63\u5728\u4F7F\u7528\u4E8B\u52A1\u7684\u5DE5\u4F5C\u5355\u5143</p><p>\u6CE8\u610F\uFF1A\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528 fsql.Ado.MasterPool.Get() \u6216 GetAsync() \u65B9\u6CD5\uFF0C\u5426\u5219\u8BF7\u68C0\u67E5\u59FF\u52BF\u3002</p><hr><h3 id="_9\u3001\u591A\u5E73\u53F0\u4EE3\u7801\u53C2\u8003-\u4F7F\u7528\u81EA\u5B9A\u4E49sqliteprovider-\u4F8B\u5982sqlite\u7528microsoft-data-sqlite\u6216\u8005\u53CD\u5C04mono-data-sqlite" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u591A\u5E73\u53F0\u4EE3\u7801\u53C2\u8003-\u4F7F\u7528\u81EA\u5B9A\u4E49sqliteprovider-\u4F8B\u5982sqlite\u7528microsoft-data-sqlite\u6216\u8005\u53CD\u5C04mono-data-sqlite" aria-hidden="true">#</a> 9\u3001\u591A\u5E73\u53F0\u4EE3\u7801\u53C2\u8003,\u4F7F\u7528\u81EA\u5B9A\u4E49SqliteProvider,\u4F8B\u5982Sqlite\u7528Microsoft.Data.Sqlite\u6216\u8005\u53CD\u5C04Mono.Data.Sqlite.</h3>`,26),g={href:"https://github.com/densen2014/FreeSqlDemos/tree/master/ARM_ConsoleApp",target:"_blank",rel:"noopener noreferrer"},f=s("arm/\u6811\u8393\u6D3E"),_=e(`<p><strong>\u6709\u6761\u4EF6\u7684\u540C\u5B66\u76F4\u63A5\u8BD5\u8BD5 FreeSql.Provider.SqliteCore \u5305,\u4F7F\u7528\u7684\u5C31\u662FMicrosoft.Data.Sqlite\u9A71\u52A8.</strong></p><p>1.\u6DFB\u52A0\u5305</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>FreeSql.Provider.Sqlite<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3.0.100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>Microsoft.Data.Sqlite<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6.0.3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4EE3\u7801</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name">Microsoft<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>Sqlite<span class="token punctuation">.</span>SqliteConnection</span> _database <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Microsoft<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>Sqlite<span class="token punctuation">.</span>SqliteConnection</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Data Source=document.db&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseConnectionFactory</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> _database<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">FreeSql<span class="token punctuation">.</span>Sqlite<span class="token punctuation">.</span>SqliteProvider<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">UseNoneCommandParameter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//\u5FC5\u987B\u5F00\u542F,\u56E0\u4E3AMicrosoft.Data.Sqlite\u5185\u63D2\u5904\u7406\u6709bug</span>
        <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>cmd <span class="token operator">=&gt;</span> Console<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),S={href:"https://github.com/densen2014/FreeSqlDemos/tree/master/UWP1",target:"_blank",rel:"noopener noreferrer"},x=s("UWP"),y=e(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>SQLite</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">string</span></span> dbpath <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>ApplicationData<span class="token punctuation">.</span>Current<span class="token punctuation">.</span>LocalFolder<span class="token punctuation">.</span>Path<span class="token punctuation">,</span> <span class="token string">&quot;sqliteSample.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SQLiteConnection</span> _database <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SQLiteConnection</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;Data Source=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">dbpath</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
           <span class="token punctuation">.</span><span class="token function">UseConnectionFactory</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> _database<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">FreeSql<span class="token punctuation">.</span>Sqlite<span class="token punctuation">.</span>SqliteProvider<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
           <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F={href:"https://github.com/densen2014/FreeSqlDemos/tree/master/xamarinFormApps",target:"_blank",rel:"noopener noreferrer"},w=s("Xamarin Forms,\u4EE3\u7801\u8F83\u591A"),C=s(" \u4E3B\u7A0B\u5E8F,\u63A5\u53E3\u83B7\u53D6rovider,\u5404\u4E2A\u5E73\u53F0\u81EA\u5DF1\u5B9E\u73B0."),P=e(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>Device<span class="token punctuation">.</span>RuntimePlatform <span class="token operator">==</span> Device<span class="token punctuation">.</span>iOS <span class="token operator">||</span> Device<span class="token punctuation">.</span>RuntimePlatform <span class="token operator">==</span> Device<span class="token punctuation">.</span>Android<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">UseConnectionFactory</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> DependencyService<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Get</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ISQLite<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetConnectionSqlite</span><span class="token punctuation">(</span><span class="token string">&quot;document&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">FreeSql<span class="token punctuation">.</span>Sqlite<span class="token punctuation">.</span>SqliteProvider<span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">UseNoneCommandParameter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),D={href:"https://github.com/densen2014/FreeSqlDemos/blob/master/xamarinFormApps/xamarinFormApp.iOS/SQLite_iOS.cs",target:"_blank",rel:"noopener noreferrer"},A=s("iOS\u90E8\u5206"),B={href:"https://github.com/densen2014/FreeSqlDemos/blob/master/xamarinFormApps/xamarinFormApp.Android/SQLite_droid.cs",target:"_blank",rel:"noopener noreferrer"},M=s("\u5B89\u5353\u90E8\u5206"),U=n("hr",null,null,-1),T=n("h3",{id:"_10\u3001-2-6-100\u5347\u7EA7\u52303-0-100-\u540E\u65E0\u6CD5\u8FDE\u63A5-sqlserver-\u63D0\u793A\u8BC1\u4E66\u65E0\u6548-\u63D0\u793A\u8BC1\u4E66\u94FE\u662F\u7531\u4E0D\u53D7\u4FE1\u4EFB\u7684\u9881\u53D1\u673A\u6784\u9881\u53D1\u7684",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10\u3001-2-6-100\u5347\u7EA7\u52303-0-100-\u540E\u65E0\u6CD5\u8FDE\u63A5-sqlserver-\u63D0\u793A\u8BC1\u4E66\u65E0\u6548-\u63D0\u793A\u8BC1\u4E66\u94FE\u662F\u7531\u4E0D\u53D7\u4FE1\u4EFB\u7684\u9881\u53D1\u673A\u6784\u9881\u53D1\u7684","aria-hidden":"true"},"#"),s(" 10\u3001 2.6.100\u5347\u7EA7\u52303.0.100 \u540E\u65E0\u6CD5\u8FDE\u63A5 sqlserver \u63D0\u793A\u8BC1\u4E66\u65E0\u6548, \u63D0\u793A\u8BC1\u4E66\u94FE\u662F\u7531\u4E0D\u53D7\u4FE1\u4EFB\u7684\u9881\u53D1\u673A\u6784\u9881\u53D1\u7684.")],-1),L=n("p",null,"\u8BF7\u5C1D\u8BD5:",-1),I=n("p",null,'1.\u8FDE\u63A5\u5B57\u7B26\u4E32\u91CC\u52A0\u5165 "Encrypt=True; TrustServerCertificate=True;"',-1),E=n("p",null,"2.\u4F7F\u7528FreeSql.Provider.SqlServerForSystem\u66FF\u6362FreeSql.Provider.SqlServer",-1),G=n("p",null,"\u6DF1\u5165\u8BA8\u8BBA\u8BF7\u8F6C\u5230 https://github.com/dotnetcore/FreeSql/issues/992#issuecomment-1005305027",-1);function W(O,Q){const a=o("ExternalLinkIcon");return i(),c(l,null,[r,n("p",null,[n("a",k,[d,t(a)])]),m,v,n("p",null,[n("a",h,[b,t(a)])]),q,n("p",null,[n("a",g,[f,t(a)])]),_,n("p",null,[n("a",S,[x,t(a)])]),y,n("p",null,[n("a",F,[w,t(a)]),C]),P,n("p",null,[n("a",D,[A,t(a)])]),n("p",null,[n("a",B,[M,t(a)])]),U,T,L,I,E,G],64)}var V=p(u,[["render",W],["__file","faq.html.vue"]]);export{V as default};
