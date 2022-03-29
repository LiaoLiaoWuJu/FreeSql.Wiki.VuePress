"use strict";(self.webpackChunkFreeSql_Wiki_VuePress=self.webpackChunkFreeSql_Wiki_VuePress||[]).push([[844],{8135:(e,r,t)=>{t.r(r),t.d(r,{data:()=>l});const l={key:"v-e45cc9ec",path:"/guide/install.html",title:"安装",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本",slug:"版本",children:[]},{level:2,title:"安装",slug:"安装-1",children:[]},{level:2,title:"Packages",slug:"packages",children:[]},{level:2,title:"学习指南",slug:"学习指南",children:[]}],git:{updatedTime:1648572783e3,contributors:[{name:"igeekfan",email:"igeekfan@foxmail.com",commits:1}]},filePathRelative:"guide/install.md"}},7100:(e,r,t)=>{t.r(r),t.d(r,{default:()=>hr});var l=t(6252);const n=(0,l.uE)('<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><p>FreeSql 是一个 .NET Standard 2.0 库，仅支持 .NET Framework 4.0 或 .NET Core 或更高版本的应用程序。</p><h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dotnet <span class="token function">add</span> package FreeSql\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> Packages</h2>',6),a=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"Package Name"),(0,l._)("th",null,"Version"),(0,l._)("th",null,"说明"),(0,l._)("th",null,"NUGET")])],-1),u=(0,l._)("td",null,[(0,l._)("a",{href:"Repository"},"FreeSql.Repository")],-1),o=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),s=(0,l._)("td",null,"通用仓储 + UnitOfWork 实现",-1),d={href:"https://www.nuget.org/packages/FreeSql.Repository",target:"_blank",rel:"noopener noreferrer"},i=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Repository",alt:"NuGet"},null,-1),_=(0,l._)("td",null,[(0,l._)("a",{href:"DbContext"},"FreeSql.DbContext")],-1),g=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),S=(0,l._)("td",null,"EFCore 的使用风格实现",-1),h={href:"https://www.nuget.org/packages/FreeSql.DbContext",target:"_blank",rel:"noopener noreferrer"},p=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.DbContext",alt:"NuGet"},null,-1),c=(0,l._)("td",null,"FreeSql.Provider.MySql",-1),q=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),f=(0,l._)("td",null,"基于 MySql.Data（Oracle官方）",-1),m={href:"https://www.nuget.org/packages/FreeSql.Provider.MySql",target:"_blank",rel:"noopener noreferrer"},b=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.MySql",alt:"NuGet"},null,-1),F=(0,l._)("td",null,"FreeSql.Provider.MySqlConnector",-1),k=(0,l._)("td",null,"NETStandard2.0、net45",-1),w=(0,l._)("td",null,"基于 MySqlConnector",-1),v={href:"https://www.nuget.org/packages/FreeSql.Provider.MySqlConnector",target:"_blank",rel:"noopener noreferrer"},P=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.MySqlConnector",alt:"NuGet"},null,-1),N=(0,l._)("td",null,"FreeSql.Provider.PostgreSQL",-1),E=(0,l._)("td",null,"NETStandard2.0、net45",-1),T=(0,l._)("td",null,"基于 PostgreSQL 9.5+",-1),W={href:"https://www.nuget.org/packages/FreeSql.Provider.PostgreSQL",target:"_blank",rel:"noopener noreferrer"},x=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.PostgreSQL",alt:"NuGet"},null,-1),y=(0,l._)("td",null,"FreeSql.Provider.SqlServer",-1),G=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),C=(0,l._)("td",null,"基于 SqlServer 2005+",-1),L={href:"https://www.nuget.org/packages/FreeSql.Provider.SqlServer",target:"_blank",rel:"noopener noreferrer"},M=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.SqlServer",alt:"NuGet"},null,-1),U=(0,l._)("td",null,"FreeSql.Provider.SqlServerForSystem",-1),D=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),O=(0,l._)("td",null,"基于 System.Data.SqlClient + SqlServer 2005+",-1),R={href:"https://www.nuget.org/packages/FreeSql.Provider.SqlServerForSystem",target:"_blank",rel:"noopener noreferrer"},Q=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.SqlServerForSystem",alt:"NuGet"},null,-1),z=(0,l._)("td",null,"FreeSql.Provider.Sqlite",-1),B=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),J=(0,l._)("td",null,null,-1),A={href:"https://www.nuget.org/packages/FreeSql.Provider.Sqlite",target:"_blank",rel:"noopener noreferrer"},K=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.Sqlite",alt:"NuGet"},null,-1),V=(0,l._)("td",null,"FreeSql.Provider.Oracle",-1),I=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),Z=(0,l._)("td",null,null,-1),H={href:"https://www.nuget.org/packages/FreeSql.Provider.Oracle",target:"_blank",rel:"noopener noreferrer"},Y=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.Oracle",alt:"NuGet"},null,-1),j=(0,l._)("td",null,"FreeSql.Provider.Firebird",-1),X=(0,l._)("td",null,"NETStandard2.0、net452",-1),$=(0,l._)("td",null,null,-1),ee={href:"https://www.nuget.org/packages/FreeSql.Provider.Firebird",target:"_blank",rel:"noopener noreferrer"},re=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.Firebird",alt:"NuGet"},null,-1),te=(0,l._)("td",null,"FreeSql.Provider.MsAccess",-1),le=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),ne=(0,l._)("td",null,null,-1),ae={href:"https://www.nuget.org/packages/FreeSql.Provider.MsAccess",target:"_blank",rel:"noopener noreferrer"},ue=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.MsAccess",alt:"NuGet"},null,-1),oe=(0,l._)("td",null,"FreeSql.Provider.Dameng",-1),se=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),de=(0,l._)("td",null,"基于 达梦数据库",-1),ie={href:"https://www.nuget.org/packages/FreeSql.Provider.Dameng",target:"_blank",rel:"noopener noreferrer"},_e=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.Dameng",alt:"NuGet"},null,-1),ge=(0,l._)("td",null,"FreeSql.Provider.ShenTong",-1),Se=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),he=(0,l._)("td",null,"基于 神舟通用数据库",-1),pe={href:"https://www.nuget.org/packages/FreeSql.Provider.ShenTong",target:"_blank",rel:"noopener noreferrer"},ce=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.ShenTong",alt:"NuGet"},null,-1),qe=(0,l._)("td",null,"FreeSql.Provider.KingbaseES",-1),fe=(0,l._)("td",null,"NETStandard2.0、net461",-1),me=(0,l._)("td",null,"基于 人大金仓数据库",-1),be={href:"https://www.nuget.org/packages/FreeSql.Provider.KingbaseES",target:"_blank",rel:"noopener noreferrer"},Fe=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.KingbaseES",alt:"NuGet"},null,-1),ke={href:"https://github.com/2881099/FreeSql/tree/master/Providers/FreeSql.Provider.Odbc",target:"_blank",rel:"noopener noreferrer"},we=(0,l.Uk)("FreeSql.Provider.Odbc"),ve=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),Pe=(0,l._)("td",null,"基于 ODBC",-1),Ne={href:"https://www.nuget.org/packages/FreeSql.Provider.Odbc",target:"_blank",rel:"noopener noreferrer"},Ee=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.Odbc",alt:"NuGet"},null,-1),Te={href:"https://github.com/2881099/FreeSql/tree/master/Providers/FreeSql.Provider.Custom",target:"_blank",rel:"noopener noreferrer"},We=(0,l.Uk)("FreeSql.Provider.Custom"),xe=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),ye=(0,l._)("td",null,"自定义数据库访问",-1),Ge={href:"https://www.nuget.org/packages/FreeSql.Provider.Custom",target:"_blank",rel:"noopener noreferrer"},Ce=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Provider.Custom",alt:"NuGet"},null,-1),Le=(0,l._)("td",null,"FreeSql.Extensions.LazyLoading",-1),Me=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),Ue=(0,l._)("td",null,"延时属性扩展包",-1),De={href:"https://www.nuget.org/packages/FreeSql.Extensions.LazyLoading",target:"_blank",rel:"noopener noreferrer"},Oe=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Extensions.LazyLoading",alt:"NuGet"},null,-1),Re=(0,l._)("td",null,"FreeSql.Extensions.JsonMap",-1),Qe=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),ze=(0,l._)("td",null,"Json 序列化扩展包",-1),Be={href:"https://www.nuget.org/packages/FreeSql.Extensions.JsonMap",target:"_blank",rel:"noopener noreferrer"},Je=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Extensions.JsonMap",alt:"NuGet"},null,-1),Ae=(0,l._)("td",null,"FreeSql.Extensions.Linq",-1),Ke=(0,l._)("td",null,"NETStandard2.0、net45、net40",-1),Ve=(0,l._)("td",null,"LinqToSql IQueryable 扩展包",-1),Ie={href:"https://www.nuget.org/packages/FreeSql.Extensions.Linq",target:"_blank",rel:"noopener noreferrer"},Ze=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Extensions.Linq",alt:"NuGet"},null,-1),He=(0,l._)("td",null,"FreeSql.Extensions.BaseEntity",-1),Ye=(0,l._)("td",null,"NETStandard2.0",-1),je=(0,l._)("td",null,null,-1),Xe={href:"https://www.nuget.org/packages/FreeSql.Extensions.BaseEntity",target:"_blank",rel:"noopener noreferrer"},$e=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Extensions.BaseEntity",alt:"NuGet"},null,-1),er=(0,l._)("td",null,"FreeSql.Generator",-1),rr=(0,l._)("td",null,"NETCoreapp3.1",-1),tr=(0,l.Uk)("从数据库生成实体类，"),lr={href:"https://www.cnblogs.com/igeekfan/p/freesql-generator.html",target:"_blank",rel:"noopener noreferrer"},nr=(0,l.Uk)("生成器是如何实现的？"),ar={href:"https://www.nuget.org/packages/FreeSql.Generator",target:"_blank",rel:"noopener noreferrer"},ur=(0,l._)("img",{src:"https://buildstats.info/nuget/FreeSql.Generator",alt:"NuGet"},null,-1),or=(0,l._)("h2",{id:"学习指南",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#学习指南","aria-hidden":"true"},"#"),(0,l.Uk)(" 学习指南")],-1),sr=(0,l.Uk)("FreeSql 除了支持基本的增删查改功能外，还支持基于现有数据库创建模型（"),dr=(0,l.Uk)("db-first"),ir=(0,l.Uk)("），和支持基于模型创建数据库（"),_r=(0,l.Uk)("code-first"),gr=(0,l.Uk)(")。"),Sr={},hr=(0,t(3744).Z)(Sr,[["render",function(e,r){const t=(0,l.up)("ExternalLinkIcon"),Sr=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("table",null,[a,(0,l._)("tbody",null,[(0,l._)("tr",null,[u,o,s,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",d,[i,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[_,g,S,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",h,[p,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[c,q,f,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",m,[b,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[F,k,w,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",v,[P,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[N,E,T,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",W,[x,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[y,G,C,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",L,[M,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[U,D,O,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",R,[Q,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[z,B,J,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",A,[K,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[V,I,Z,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",H,[Y,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[j,X,$,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",ee,[re,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[te,le,ne,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",ae,[ue,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[oe,se,de,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",ie,[_e,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[ge,Se,he,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",pe,[ce,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[qe,fe,me,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",be,[Fe,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("a",ke,[we,(0,l.Wm)(t)])]),ve,Pe,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",Ne,[Ee,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("a",Te,[We,(0,l.Wm)(t)])]),xe,ye,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",Ge,[Ce,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[Le,Me,Ue,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",De,[Oe,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[Re,Qe,ze,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",Be,[Je,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[Ae,Ke,Ve,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",Ie,[Ze,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[He,Ye,je,(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",Xe,[$e,(0,l.Wm)(t)])])])]),(0,l._)("tr",null,[er,rr,(0,l._)("td",null,[tr,(0,l._)("a",lr,[nr,(0,l.Wm)(t)])]),(0,l._)("td",null,[(0,l._)("strong",null,[(0,l._)("a",ar,[ur,(0,l.Wm)(t)])])])])])]),or,(0,l._)("p",null,[sr,(0,l.Wm)(Sr,{to:"/guide/db-first.html"},{default:(0,l.w5)((()=>[dr])),_:1}),ir,(0,l.Wm)(Sr,{to:"/guide/code-first.html"},{default:(0,l.w5)((()=>[_r])),_:1}),gr])],64)}]])},3744:(e,r)=>{r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,l]of r)t[e]=l;return t}}}]);