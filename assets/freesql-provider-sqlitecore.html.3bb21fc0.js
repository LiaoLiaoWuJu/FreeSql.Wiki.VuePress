import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,c,a as n,b as t,F as i,e as s,d as e,o as l}from"./app.32c52fc9.js";const u={},r=n("h1",{id:"freesql-provider-sqlitecore",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#freesql-provider-sqlitecore","aria-hidden":"true"},"#"),s(" FreeSql.Provider.SqliteCore")],-1),d=s("FreeSql.Provider.SqliteCore\u662F"),k=n("code",null,"FreeSql",-1),v=s("\u57FA\u4E8E\u5FAE\u8F6F\u63D0\u4F9B\u7684\u6700\u65B0\u7684"),m={href:"https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/?tabs=netcore-cli",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"Microsoft.Data.Sqlite.Core",-1),h=s("\u9A71\u52A8\u7684\u5B9E\u73B0\u3002 "),g=n("strong",null,"\u9700\u8981\u53E6\u5916\u5B89\u88C5\u5BF9\u5E94\u7684bundle_xxx",-1),q=s("\u5B9E\u73B0\u52A0\u5BC6\u3002"),y=e(`<h3 id="\u652F\u6301\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u7248\u672C" aria-hidden="true">#</a> \u652F\u6301\u7684\u7248\u672C</h3><ul><li>.NETStandard2.0+</li><li>net6.0</li><li>SQLite\uFF083.7 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF09</li></ul><p>\u5B89\u88C5<code>FreeSql.Provider.SqliteCore</code>\u5305\u3002</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet add package FreeSql.Provider.SqliteCore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E0D\u652F\u6301\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u652F\u6301\u52A0\u5BC6" aria-hidden="true">#</a> \u4E0D\u652F\u6301\u52A0\u5BC6</h2><p>0.\u5B89\u88C5\u5305\u3002</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet add package SQLitePCLRaw.bundle_e_sqlite3 
dotnet add package FreeSql.Provider.SqliteCore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F4\u63A5\u6B63\u5E38\u4F7F\u7528\u5176\u4ED6\u5305\u4E00\u6837\u4F7F\u7528FreeSql\u5373\u53EF\u3002<code>SQLitePCLRaw.bundle_e_sqlite3 </code>\u5305\u4E0D\u652F\u6301\u52A0\u5BC6\uFF0C\u4F46\u6B64\u79CD\u65B9\u5F0F\u662F\u5B98\u65B9\u5B9E\u73B0\u7684<code>SQlite</code>\u7248\u672C,\u4E8C\u9009\u4E00\u5C31\u884C</p><table><thead><tr><th>\u6346\u7ED1</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>SQLitePCLRaw.bundle_e_sqlite3</td><td>\u5728\u6240\u6709\u5E73\u53F0\u4E0A\u63D0\u4F9B\u4E00\u81F4\u7248\u672C\u7684 <code>SQLite</code>\u3002 \u5305\u62EC FTS4\u3001FTS5\u3001JSON1 \u548C R* \u6811\u6269\u5C55\u3002 \u5EFA\u8BAE\u4F7F\u7528</td></tr><tr><td>SQLitePCLRaw.bundle_e_sqlcipher</td><td>\u63D0\u4F9B <code>SQLCipher</code> \u7684\u975E\u5B98\u65B9\u5F00\u653E\u6E90\u4EE3\u7801\u5185\u90E8\u7248\u672C\uFF0C<strong>\u652F\u6301\u52A0\u5BC6</strong>\u3002</td></tr></tbody></table><h1 id="freesql-provider-sqlitecore\u5982\u4F55\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#freesql-provider-sqlitecore\u5982\u4F55\u52A0\u5BC6" aria-hidden="true">#</a> FreeSql.Provider.SqliteCore\u5982\u4F55\u52A0\u5BC6</h1><p>\u90A3\u6211\u4EEC\u4E0D\u5B89\u88C5 <code>SQLitePCLRaw.bundle_e_sqlite3</code>\u5305\uFF0C\u6362<code>SQLitePCLRaw.bundle_e_sqlcipher</code></p><h2 id="\u53EA\u6709sqlcipher\u624D\u652F\u6301\u52A0\u5BC6\u3002" tabindex="-1"><a class="header-anchor" href="#\u53EA\u6709sqlcipher\u624D\u652F\u6301\u52A0\u5BC6\u3002" aria-hidden="true">#</a> \u53EA\u6709<strong>sqlcipher</strong>\u624D\u652F\u6301\u52A0\u5BC6\u3002</h2><p>0.\u9009\u62E9\u4E00\u4E2A\u76EE\u5F55\uFF0C\u521B\u5EFA\u4E00\u4E2A\u63A7\u5236\u53F0\u9879\u76EE<code>OvOv.FreeSqlMicrosoftSqliteCore</code></p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet new console -n OvOv.FreeSqlMicrosoftSqliteCore
cd OvOv.FreeSqlMicrosoftSqliteCore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.\u5B89\u88C5\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package SQLitePCLRaw.bundle_e_sqlcipher
dotnet <span class="token function">add</span> package FreeSql.Provider.SqliteCore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8FDE\u63A5\u4E32\u76F4\u63A5\u6307\u5B9APassword=xxx\u5373\u53EF</li></ol><p>\u521B\u5EFA\u4E00\u4E2A\u7C7B<code>g.cs</code>,\u53EF\u76F4\u63A5\u901A\u8FC7<code>g.sqlite</code>\u8BBF\u95EE\u5230<code>IFreeSql</code>\u5BF9\u8C61</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">g</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=local.db;Password=123qwe&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseLazyLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>
                    cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n\u7EBF\u7A0B&quot;</span> <span class="token operator">+</span> Thread<span class="token punctuation">.</span>CurrentThread<span class="token punctuation">.</span>ManagedThreadId <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> fsql<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u52A0\u5BC6,\u589E\u52A0\u4E00\u4E9B\u6570\u636E\u3002<code>Program.cs</code>\u4E2D\u6D4B\u8BD5</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">IInsert<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span> insert <span class="token operator">=</span> g<span class="token punctuation">.</span>sqlite<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Insert</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> a <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> a<span class="token operator">++</span><span class="token punctuation">)</span> items<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Topic</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">$&quot;newTitle</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">a</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> Clicks <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> affrows <span class="token operator">=</span> insert<span class="token punctuation">.</span><span class="token function">AppendData</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ExecuteAffrows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;affrows\uFF1A&quot;</span> <span class="token operator">+</span> affrows<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> g<span class="token punctuation">.</span>sqlite<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;count\uFF1A&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">.</span>Count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;tb_topic_insert&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">class</span> <span class="token class-name">Topic</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> IsPrimary <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u9879\u76EE</p><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>dotnet run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u9A8C\u8BC1\u662F\u5426\u767B\u5F55\u662F\u5426\u52A0\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u662F\u5426\u767B\u5F55\u662F\u5426\u52A0\u5BC6" aria-hidden="true">#</a> \u9A8C\u8BC1\u662F\u5426\u767B\u5F55\u662F\u5426\u52A0\u5BC6\uFF1F</h4><p>\u91CD\u65B0\u8FD0\u884C\u65F6\uFF0C\u5220\u9664 \u8FDE\u63A5\u4E32\u4E2D\u7684Password,\u53D1\u73B0\u65E0\u6CD5\u83B7\u53D6\u6570\u636E\u3002\u6216\u4F7F\u7528<code>Navicat Premium </code>\u5DE5\u5177\u53D1\u73B0\u65E0\u6CD5\u8FDE\u63A5\u3002</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> .UseConnectionString(FreeSql.DataType.Sqlite, @&quot;Data Source=local.db;&quot;) 
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> .UseConnectionString(FreeSql.DataType.Sqlite, @&quot;Data Source=|DataDirectory|local.db;Password=123qwe&quot;)
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u793A\u5982\u4E0B\u5185\u5BB9\uFF0C\u4F46\u4F7F\u7528\u5BC6\u7801\u65F6\u53C8\u80FD\u6B63\u5E38\u8BBF\u95EE\u6570\u636E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SqliteException: SQLite Error 26: &#39;file is not a database&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F8\u6BD4\u5305 <code>FreeSql.Provider.Sqlite</code>\u6765\u8BF4\uFF0C\u76EE\u524D\u5B58\u5728\u4E00\u4E9B\u9650\u5236\uFF0C</p><h4 id="datadirectory-\u9ED8\u8BA4\u4E0D\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#datadirectory-\u9ED8\u8BA4\u4E0D\u652F\u6301" aria-hidden="true">#</a> |DataDirectory| \u9ED8\u8BA4\u4E0D\u652F\u6301</h4><p>\u9700\u8981\u4F7F\u7528\u524D\uFF0C\u6307\u5B9A\u5177\u4F53\u7684\u6587\u4EF6\u5939\uFF0C\u6B64\u5904\u76F8\u5F53\u4E8E\u6307\u5B9A\u4E86\u5F53\u524D<code>dll</code>\u6240\u5728\u76EE\u5F55\uFF0C\u5373<code>bin/Debug/net6.0</code>\u3002\u53C2\u8003</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">string</span></span> dataSubDirectory <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>AppContext<span class="token punctuation">.</span>BaseDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Directory<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">)</span>
    Directory<span class="token punctuation">.</span><span class="token function">CreateDirectory</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>

AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span><span class="token function">SetData</span><span class="token punctuation">(</span><span class="token string">&quot;DataDirectory&quot;</span><span class="token punctuation">,</span> dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5373</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">g</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span> sqliteLazy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Lazy<span class="token punctuation">&lt;</span>IFreeSql<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">string</span></span> dataSubDirectory <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>AppContext<span class="token punctuation">.</span>BaseDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Directory<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">)</span>
            Directory<span class="token punctuation">.</span><span class="token function">CreateDirectory</span><span class="token punctuation">(</span>dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        AppDomain<span class="token punctuation">.</span>CurrentDomain<span class="token punctuation">.</span><span class="token function">SetData</span><span class="token punctuation">(</span><span class="token string">&quot;DataDirectory&quot;</span><span class="token punctuation">,</span> dataSubDirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name"><span class="token keyword">var</span></span> fsql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FreeSql<span class="token punctuation">.</span>FreeSqlBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseConnectionString</span><span class="token punctuation">(</span>FreeSql<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>Sqlite<span class="token punctuation">,</span> <span class="token string">@&quot;Data Source=|DataDirectory|local.db;Password=123qwe&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseAutoSyncStructure</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseLazyLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">UseMonitorCommand</span><span class="token punctuation">(</span>
                    cmd <span class="token operator">=&gt;</span> Trace<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n\u7EBF\u7A0B&quot;</span> <span class="token operator">+</span> Thread<span class="token punctuation">.</span>CurrentThread<span class="token punctuation">.</span>ManagedThreadId <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> cmd<span class="token punctuation">.</span>CommandText<span class="token punctuation">)</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> fsql<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IFreeSql</span> sqlite <span class="token operator">=&gt;</span> sqliteLazy<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),f=s("\u5177\u4F53\u7684\u94FE\u63A5\u4E32\uFF0C\u8BF7\u53C2\u8003 "),S={href:"https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/connection-strings",target:"_blank",rel:"noopener noreferrer"},w=s("https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/connection-strings"),_=e(`<h4 id="\u6570\u5B66\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B66\u51FD\u6570" aria-hidden="true">#</a> \u6570\u5B66\u51FD\u6570</h4><p>\u5982\u4E0B\u51FD\u6570\u4E0D\u652F\u6301</p><ul><li>Floor</li><li>Ceiling</li><li>Log10</li><li>Pow</li><li>Sqrt</li><li>Cos</li></ul><h4 id="timespantest" tabindex="-1"><a class="header-anchor" href="#timespantest" aria-hidden="true">#</a> TimeSpanTest</h4><p>\u6D4B\u8BD5 \u7C7B\u4E2D \u4E0D\u901A\u8FC7\u3001ulong\u6700\u5927\u503C\uFF0C\u6700\u5C0F\u503C\uFF0C\u8D85\u51FA\u8303\u56F4\u3002</p><ul><li>\u4E0D\u652F\u6301</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>  <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Days</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      <span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">select</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">.</span>TimeOfDay<span class="token punctuation">.</span>Days <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0D\u652F\u6301</li></ul><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code> <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Minutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      <span class="token class-name"><span class="token keyword">var</span></span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">select</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">.</span>TimeOfDay<span class="token punctuation">.</span>Minutes <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B8C\u6574\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u4EE3\u7801" aria-hidden="true">#</a> \u5B8C\u6574\u4EE3\u7801</h4>`,10),x={href:"https://github.com/luoyunchong/dotnetcore-examples/blob/master/Database-Drivers/OvOv.FreeSqlMicrosoftSqliteCore/Program.cs",target:"_blank",rel:"noopener noreferrer"},C=s("https://github.com/luoyunchong/dotnetcore-examples/blob/master/Database-Drivers/OvOv.FreeSqlMicrosoftSqliteCore/Program.cs"),D=n("h2",{id:"ios",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ios","aria-hidden":"true"},"#"),s(" iOS")],-1),L={href:"https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/xamarin#ios",target:"_blank",rel:"noopener noreferrer"},T=s("https://docs.microsoft.com/zh-cn/dotnet/standard/data/sqlite/xamarin#ios"),F=e(`<p><code>Microsoft.Data.Sqlite</code> \u5C1D\u8BD5\u81EA\u52A8\u521D\u59CB\u5316 <code>SQLitePCLRaw</code> \u6346\u7ED1\u3002 \u9057\u61BE\u7684\u662F\uFF0C\u7531\u4E8E\u9488\u5BF9 <code>Xamarin.iOS</code> \u7684\u9884\u5148 (AOT) \u7F16\u8BD1\u5B58\u5728\u9650\u5236\uFF0C\u56E0\u6B64\u5C1D\u8BD5\u5931\u8D25\uFF0C\u5E76\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF\u3002</p><blockquote><p>\u9700\u8981\u8C03\u7528 <code>SQLitePCL.raw.SetProvider()</code>\u3002 \u5982\u679C\u4F7F\u7528\u7684\u662F\u6346\u7ED1\u5305\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 <code>SQLitePCL.Batteries.Init()</code> \u6765\u5B8C\u6210\u6B64\u64CD\u4F5C\u3002</p></blockquote><p>\u82E5\u8981\u521D\u59CB\u5316\u8BE5\u7ED1\u5B9A\uFF0C\u8BF7\u5728\u4F7F\u7528 <code>Microsoft.Data.Sqlite</code> \u4E4B\u524D\uFF0C\u5C06\u4EE5\u4E0B\u4EE3\u7801\u884C\u6DFB\u52A0\u5230\u5E94\u7528\u3002</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>SQLitePCL<span class="token punctuation">.</span>Batteries_V2<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5373\u5728\u4E0A\u65B9\u5B9A\u4E49<code>FreeSql</code>\u5355\u4F8B\u65F6\uFF0C\u5728<code>new Lazy</code>\u5185\uFF0C\u8C03\u7528\u4E00\u6B21\u5373\u53EF</p>`,5);function P(I,z){const a=o("ExternalLinkIcon");return l(),c(i,null,[r,n("p",null,[d,k,v,n("a",m,[b,t(a)]),h,g,q]),y,n("p",null,[f,n("a",S,[w,t(a)])]),_,n("ul",null,[n("li",null,[n("a",x,[C,t(a)])])]),D,n("p",null,[n("a",L,[T,t(a)])]),F],64)}var M=p(u,[["render",P],["__file","freesql-provider-sqlitecore.html.vue"]]);export{M as default};
