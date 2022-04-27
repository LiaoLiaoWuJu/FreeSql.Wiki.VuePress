"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[7199],{3004:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2b3a8924",path:"/guide/fluent-api.html",title:"流式接口",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"优先级",slug:"优先级",children:[]}],git:{updatedTime:1651030409e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmai.com",commits:1}]},filePathRelative:"guide/fluent-api.md"}},1733:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(6252);const t=(0,p.uE)('<h1 id="流式接口" tabindex="-1"><a class="header-anchor" href="#流式接口" aria-hidden="true">#</a> 流式接口</h1><p>FreeSql 提供使用 Fluent Api， 在外部配置实体的数据库特性，Fluent Api 的方法命名与特性名保持一致，如下：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst\n    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestFluenttb1<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> \n    <span class="token punctuation">{</span>\n        a<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;xxdkdkdk1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;Id22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsIdentity</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DbType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(100)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsNullable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TestFluenttb2<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        a<span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;xxdkdkdk2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;Id22&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsIdentity</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        a<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DbType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(100)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsNullable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//以下为实体类</span>\n<span class="token keyword">class</span> <span class="token class-name">TestFluenttb1</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;defaultValue&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Table</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Name <span class="token operator">=</span> <span class="token string">&quot;cccccdddwww&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n<span class="token keyword">class</span> <span class="token class-name">TestFluenttb2</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;defaultValue&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><blockquote><p>fsql 是一个 IFreeSql 对象</p></blockquote><blockquote><p>这段配置尽量只执行一次，避免性能损耗</p></blockquote>',5),o=(0,p.Uk)("参考："),e=(0,p.Uk)("《实体特性说明》"),c=(0,p.uE)('<blockquote><p>FreeSql.DbContext v1.4.0+ 实现了 EfCore FluentApi 99% 相似的语法</p></blockquote><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Entity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>eb <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    eb<span class="token punctuation">.</span><span class="token function">ToTable</span><span class="token punctuation">(</span><span class="token string">&quot;tb_song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    eb<span class="token punctuation">.</span><span class="token function">Ignore</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Field1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasColumnType</span><span class="token punctuation">(</span><span class="token string">&quot;varchar(50)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsRequired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasMaxLength</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>RowVersion<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsRowVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    eb<span class="token punctuation">.</span><span class="token function">Property</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>CreateTime<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasDefaultValueSql</span><span class="token punctuation">(</span><span class="token string">&quot;current_timestamp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    eb<span class="token punctuation">.</span><span class="token function">HasKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    eb<span class="token punctuation">.</span><span class="token function">HasIndex</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>Title <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">IsUnique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasName</span><span class="token punctuation">(</span><span class="token string">&quot;idx_xxx11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//一对多、多对一</span>\n    eb<span class="token punctuation">.</span><span class="token function">HasOne</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasForeignKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//多对多</span>\n    eb<span class="token punctuation">.</span><span class="token function">HasMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Tags<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">Song_tag</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Entity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SongType<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>eb <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    eb<span class="token punctuation">.</span><span class="token function">HasMany</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Songs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">WithOne</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Type<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasForeignKey</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>TypeId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    eb<span class="token punctuation">.</span><span class="token function">HasData</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SongType</span>\n        <span class="token punctuation">{</span>\n            Id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            Name <span class="token operator">=</span> <span class="token string">&quot;流行&quot;</span><span class="token punctuation">,</span>\n            Songs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n            <span class="token punctuation">{</span>\n                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;真的爱你&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;爱你一万年&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SongType</span>\n        <span class="token punctuation">{</span>\n            Id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>\n            Name <span class="token operator">=</span> <span class="token string">&quot;乡村&quot;</span><span class="token punctuation">,</span>\n            Songs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n            <span class="token punctuation">{</span>\n                <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Song</span><span class="token punctuation">{</span> Title <span class="token operator">=</span> <span class="token string">&quot;乡里乡亲&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SongType</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Url <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> TypeId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">SongType</span> Type <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Field1 <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">long</span></span> RowVersion <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>数据库特性 &gt; 实体特性 &gt; FluentApi（配置特性） &gt; Aop（配置特性）</p>',4),u={},l=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[o,(0,p.Wm)(a,{to:"/guide/entity-attribute.html"},{default:(0,p.w5)((()=>[e])),_:1})]),c],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);