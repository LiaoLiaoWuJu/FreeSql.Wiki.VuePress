"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[8740],{5748:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0a96cd2d",path:"/guide/navigate-attribute.html",title:"导航属性✨",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"OneToOne 一对一",slug:"onetoone-一对一",children:[]},{level:3,title:"ManyToOne 多对一",slug:"manytoone-多对一",children:[]},{level:3,title:"OneToMany 一对多",slug:"onetomany-一对多",children:[]},{level:3,title:"Parent 父子",slug:"parent-父子",children:[]},{level:3,title:"ManyToMany 多对多",slug:"manytomany-多对多",children:[]}],git:{updatedTime:1651030409e3,contributors:[{name:"luoyunchong",email:"luoyunchong@foxmai.com",commits:1}]},filePathRelative:"guide/navigate-attribute.md"}},9527:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var p=a(6252);const e=(0,p._)("h1",{id:"导航属性✨",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#导航属性✨","aria-hidden":"true"},"#"),(0,p.Uk)(" 导航属性✨")],-1),t=(0,p._)("p",null,"导航属性是 FreeSql 的特色功能之一，可通过约定配置、或自定义配置对象间的关系。",-1),o=(0,p._)("p",null,"导航属性有 OneToMany, ManyToOne, ManyToMany, OneToOne, Parent 五种配置关系。",-1),c=(0,p._)("p",null,"有了导航属性，多表查询会非常方便，lambda 表达式中直接使用导航对象点点点，舒服！！",-1),l=(0,p._)("ul",null,[(0,p._)("li",null,"可约定（命名约定），可不约定（需指定 Navigate 特性关联）；"),(0,p._)("li",null,"无关联的，查询时可以指明 On 条件，LeftJoin(a => a.Parent.Id == a.ParentId)；"),(0,p._)("li",null,"已关联的，直接使用导航对象就行，On 条件会自动附上；")],-1),u={href:"https://www.cnblogs.com/kellynic/p/13575053.html",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("《导航属性【到底】可以解决什么问题？》"),k=(0,p.uE)('<h1 id="自定义导航关系" tabindex="-1"><a class="header-anchor" href="#自定义导航关系" aria-hidden="true">#</a> 自定义导航关系</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//导航属性，OneToMany</span>\n<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>song_tag<span class="token punctuation">.</span>song_id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>song_tag<span class="token punctuation">&gt;</span></span> Obj_song_tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token comment">//在 song_tag 查找 song_id 属性，与 本实体.主键 关联</span>\n\n<span class="token comment">//导航属性，ManyToOne/OneToOne</span>\n<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>song_id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Obj_song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token comment">//在 本实体 查找 song_id 属性，与 Song.主键 关联</span>\n\n<span class="token comment">//导航属性，ManyToMany</span>\n<span class="token punctuation">[</span><span class="token function">Navigate</span><span class="token punctuation">(</span>ManyToMany <span class="token operator">=</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">tag_song</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>tag<span class="token punctuation">&gt;</span></span> tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr><p>也可以使用 FluentApi 在外部设置导航关系：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>fsql<span class="token punctuation">.</span>CodeFirst<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigEntity</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>实体类<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a\n    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>roles<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">多对多中间实体类</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Navigate</span><span class="token punctuation">(</span>b <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>users<span class="token punctuation">,</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>优先级，特性 &gt; FluentApi</p><blockquote><p>注意：</p></blockquote><p>1、属性设置 Column(IsIgnore = true) 后，导航属性会失效</p><p>2、Navigate 设置的字符串是 类属性名，不是表 字段名！！！</p><h1 id="检测导航属性" tabindex="-1"><a class="header-anchor" href="#检测导航属性" aria-hidden="true">#</a> 检测导航属性</h1><p>如何检测一个导航属性是否配置生效：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> tbref <span class="token operator">=</span> g<span class="token punctuation">.</span>sqlite<span class="token punctuation">.</span>CodeFirst\n    <span class="token punctuation">.</span><span class="token function">GetTableByEntity</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">GetTableRef</span><span class="token punctuation">(</span><span class="token string">&quot;Children&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>GetTableRef(string propertyName, bool isThrow);</p><h1 id="约定命名-无须指明-navigate" tabindex="-1"><a class="header-anchor" href="#约定命名-无须指明-navigate" aria-hidden="true">#</a> 约定命名（无须指明 Navigate）</h1><h3 id="onetoone-一对一" tabindex="-1"><a class="header-anchor" href="#onetoone-一对一" aria-hidden="true">#</a> OneToOne 一对一</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">UserExt</span> UserExt <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserExt</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id、UserExtId、UserExt_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">User</span> User <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',16),i={href:"https://github.com/2881099/FreeSql/issues/45",target:"_blank",rel:"noopener noreferrer"},d=(0,p.Uk)("《OneToOne 一对一，怎么添加数据？》"),b=(0,p.uE)('<h3 id="manytoone-多对一" tabindex="-1"><a class="header-anchor" href="#manytoone-多对一" aria-hidden="true">#</a> ManyToOne 多对一</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>\n\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="onetomany-一对多" tabindex="-1"><a class="header-anchor" href="#onetomany-一对多" aria-hidden="true">#</a> OneToMany 一对多</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> AUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>User<span class="token punctuation">&gt;</span></span> BUsers <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、UserId、User_id</span>\n\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> AGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> AGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> BGroupId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> BGroup <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',4),y={href:"https://github.com/2881099/FreeSql/issues/46",target:"_blank",rel:"noopener noreferrer"},m=(0,p.Uk)("《OneToMany 一对多，怎么添加数据？》"),w=(0,p.uE)('<h3 id="parent-父子" tabindex="-1"><a class="header-anchor" href="#parent-父子" aria-hidden="true">#</a> Parent 父子</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Group</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//Id、GroupId、Group_id</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> ParentId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">//ParentId、Parent_id</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">Group</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Group<span class="token punctuation">&gt;</span></span> Childs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>父子关系，与一对多其实差不多，添加数据参数上面的连接；</p><h3 id="manytomany-多对多" tabindex="-1"><a class="header-anchor" href="#manytomany-多对多" aria-hidden="true">#</a> ManyToMany 多对多</h3><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">class</span> <span class="token class-name">Song</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Song_tag</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Song_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Song</span> Song <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Tag_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Tag <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Tag</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> Parent_id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">Tag</span> Parent <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Song<span class="token punctuation">&gt;</span></span> Songs <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name">ICollection<span class="token punctuation">&lt;</span>Tag<span class="token punctuation">&gt;</span></span> Tags <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Song、Tag、Song_tag，这三个实体使用了 OneToMany、ManyToOne、Parent、ManyToMany 4种关系。</p>',6),g={},h=(0,a(3744).Z)(g,[["render",function(n,s){const a=(0,p.up)("ExternalLinkIcon");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,t,o,c,l,(0,p._)("p",null,[(0,p._)("a",u,[r,(0,p.Wm)(a)])]),k,(0,p._)("p",null,[(0,p._)("a",i,[d,(0,p.Wm)(a)])]),b,(0,p._)("p",null,[(0,p._)("a",y,[m,(0,p.Wm)(a)])]),w],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);