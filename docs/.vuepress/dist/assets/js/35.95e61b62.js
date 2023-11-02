(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{201:function(v,_,t){"use strict";t.r(_);var e=t(0),r=Object(e.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"git-命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-命令行"}},[v._v("#")]),v._v(" git 命令行")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/17583395/23828785/ddc1ef96-0717-11e7-8d47-26c0556dbdb5.jpeg",alt:"git"}})]),v._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[v._v("#")]),v._v(" 目录")]),v._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"##%E6%9C%AC%E5%9C%B0%E5%BA%93"}},[v._v("本地库")])])]),v._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93"}},[v._v("远程仓库")])])]),v._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86"}},[v._v("分支管理")])]),v._v(" "),t("p",[v._v("3.1 "),t("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF"}},[v._v("创建与合并分支")])]),v._v(" "),t("p",[v._v("3.2 "),t("a",{attrs:{href:"#%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81"}},[v._v("解决冲突")])])]),v._v(" "),t("li",[t("p",[t("a",{attrs:{href:"#%E6%A0%87%E7%AD%BE%E7%AE%A1%E7%90%86"}},[v._v("标签管理")])]),v._v(" "),t("p",[v._v("4.1 "),t("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E6%A0%87%E7%AD%BE"}},[v._v("创建标签")])]),v._v(" "),t("p",[v._v("4.2 "),t("a",{attrs:{href:"#%E6%93%8D%E4%BD%9C%E6%A0%87%E7%AD%BE"}},[v._v("操作标签")])])])]),v._v(" "),t("br"),v._v(" "),t("h2",{attrs:{id:"本地库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地库"}},[v._v("#")]),v._v(" 本地库")]),v._v(" "),t("p",[v._v("初始化一个 Git 版本库")]),v._v(" "),t("pre",[t("code",[v._v(" git init  \n")])]),v._v(" "),t("p",[v._v("查看 Git 版本库状态")]),v._v(" "),t("pre",[t("code",[v._v(" git status  \n")])]),v._v(" "),t("p",[v._v("查看被改动文件的详细信息")]),v._v(" "),t("pre",[t("code",[v._v(" git diff <fileName>  \n")])]),v._v(" "),t("p",[v._v("将文件加入缓存区")]),v._v(" "),t("pre",[t("code",[v._v(" git add <fileName>  \n")])]),v._v(" "),t("p",[v._v("提交到版本库")]),v._v(" "),t("pre",[t("code",[v._v(" git commit -m 'message'  \n")])]),v._v(" "),t("p",[v._v("查看版本库操作日志")]),v._v(" "),t("pre",[t("code",[v._v(" git log  \n")])]),v._v(" "),t("p",[v._v("格式显示版本库操作日志")]),v._v(" "),t("pre",[t("code",[v._v(" git log --pretty=oneline  \n")])]),v._v(" "),t("p",[v._v("回滚（重置）版本库")]),v._v(" "),t("pre",[t("code",[v._v(" git reset --hard <版本号>  \n")])]),v._v(" "),t("p",[t("strong",[v._v("工作区（Woking Directory）")])]),v._v(" "),t("pre",[t("code",[v._v(" 就是你在电脑里能看到的目录，或者说你当前 Git 版本库所在的文件夹  \n")])]),v._v(" "),t("p",[t("strong",[v._v("版本库（Repository）")])]),v._v(" "),t("p",[v._v("工作区有一个隐藏的目录 .git,这个不算工作区,而是 Git 的版本库")]),v._v(" "),t("p",[v._v("Git的版本库里存了很多东西，其中最重要的就是称为 "),t("code",[v._v("stage")]),v._v("(或者叫 "),t("code",[v._v("index")]),v._v(") 的暂存区，")]),v._v(" "),t("p",[v._v("还有 Git 为我们自动创建的第一个分支 "),t("code",[v._v("master")]),v._v("，以及指向 "),t("code",[v._v("master")]),v._v(" 的一个指针叫做 "),t("code",[v._v("HEAD")]),v._v("。")]),v._v(" "),t("p",[v._v("撤销工作区修改")]),v._v(" "),t("pre",[t("code",[v._v(" git checkout -- <fileName>  \n")])]),v._v(" "),t("p",[v._v("撤销暂存区修改")]),v._v(" "),t("pre",[t("code",[v._v(" git reset HEAD <fileName>  \n")])]),v._v(" "),t("p",[v._v("删除文件")]),v._v(" "),t("pre",[t("code",[v._v(" git rm <fileName>  \n")])]),v._v(" "),t("br"),v._v(" "),t("h2",{attrs:{id:"远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[v._v("#")]),v._v(" 远程仓库")]),v._v(" "),t("p",[v._v("关联远程仓库")]),v._v(" "),t("pre",[t("code",[v._v(" git remote add origin git@github.com:<github地址>/<仓库名称>.git  \n")])]),v._v(" "),t("p",[v._v("将内容推送的远程库")]),v._v(" "),t("pre",[t("code",[v._v(" git push -u origin <分支>  \n\ngit push origin <分支>  \n")])]),v._v(" "),t("p",[v._v("第一次推送 "),t("code",[v._v("master")]),v._v(" 分支时，加上了 "),t("code",[v._v("-u")]),v._v(" 参数，Git 不但会把本地的 "),t("code",[v._v("master")]),v._v(" 分支内容推送到远程新的 "),t("code",[v._v("master")]),v._v(" 分支，")]),v._v(" "),t("p",[v._v("还会把本地的 "),t("code",[v._v("master")]),v._v(" 分支和远程的 "),t("code",[v._v("master")]),v._v(" 分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),v._v(" "),t("p",[v._v("克隆远程库")]),v._v(" "),t("pre",[t("code",[v._v(" git clone git@github.com:<github地址>/<仓库名称>.git  \n")])]),v._v(" "),t("br"),v._v(" "),t("h2",{attrs:{id:"分支管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[v._v("#")]),v._v(" 分支管理")]),v._v(" "),t("h3",{attrs:{id:"创建与合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支"}},[v._v("#")]),v._v(" 创建与合并分支")]),v._v(" "),t("p",[v._v("创建并切换分支")]),v._v(" "),t("pre",[t("code",[v._v(" git checkout -b <branchName>  \n")])]),v._v(" "),t("p",[v._v("查看分支")]),v._v(" "),t("pre",[t("code",[v._v(" git branch  \n")])]),v._v(" "),t("p",[v._v("切换分支")]),v._v(" "),t("pre",[t("code",[v._v(" git checkout <branchName>  \n")])]),v._v(" "),t("p",[v._v("合并分支")]),v._v(" "),t("pre",[t("code",[v._v(" git merge <branchName>  \n")])]),v._v(" "),t("p",[v._v("删除分支")]),v._v(" "),t("pre",[t("code",[v._v(" git branch -d <branchName>  \n")])]),v._v(" "),t("h3",{attrs:{id:"解决冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[v._v("#")]),v._v(" 解决冲突")]),v._v(" "),t("p",[v._v("查看分支合并情况")]),v._v(" "),t("pre",[t("code",[v._v(" git log --graph --pertty=oneline --abbrev-commit  \n")])]),v._v(" "),t("p",[v._v("储藏")]),v._v(" "),t("pre",[t("code",[v._v(" git stash  \n")])]),v._v(" "),t("p",[v._v("查看储藏列表")]),v._v(" "),t("pre",[t("code",[v._v(" git stash list  \n")])]),v._v(" "),t("p",[v._v("应用储藏")]),v._v(" "),t("pre",[t("code",[v._v(" git stash apply <stash@{xx}>  \n")])]),v._v(" "),t("p",[v._v("删除储藏")]),v._v(" "),t("pre",[t("code",[v._v(" git stash drop <index | stash>  \n")])]),v._v(" "),t("p",[v._v("应用并删除储藏")]),v._v(" "),t("pre",[t("code",[v._v(" git stash pop <index | stash>  \n")])]),v._v(" "),t("p",[v._v("显示储藏信息")]),v._v(" "),t("pre",[t("code",[v._v(" git stash show <index | stash>  \n")])]),v._v(" "),t("p",[v._v("查看远程库信息")]),v._v(" "),t("pre",[t("code",[v._v(" git remote  \n")])]),v._v(" "),t("p",[v._v("查看远程库详细信息")]),v._v(" "),t("pre",[t("code",[v._v(" git remote -v  \n")])]),v._v(" "),t("p",[v._v("推送分支")]),v._v(" "),t("pre",[t("code",[v._v(" git push origin <branchName>\n")])]),v._v(" "),t("br"),v._v(" "),t("h2",{attrs:{id:"标签管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标签管理"}},[v._v("#")]),v._v(" 标签管理")]),v._v(" "),t("h3",{attrs:{id:"创建标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[v._v("#")]),v._v(" 创建标签")]),v._v(" "),t("p",[v._v("创建标签")]),v._v(" "),t("pre",[t("code",[v._v(" git tag <name>  \n")])]),v._v(" "),t("p",[v._v("查看标签")]),v._v(" "),t("pre",[t("code",[v._v(" git tag  \n")])]),v._v(" "),t("p",[v._v("为commit id 添加标签")]),v._v(" "),t("pre",[t("code",[v._v(" git tag <commit id>  \n")])]),v._v(" "),t("p",[v._v("查看标签信息")]),v._v(" "),t("pre",[t("code",[v._v(" git show <tagName>  \n")])]),v._v(" "),t("p",[v._v("创建带有说明的标签")]),v._v(" "),t("pre",[t("code",[v._v(" git tag -a <tagName> -m 'your message'  \n")])]),v._v(" "),t("h3",{attrs:{id:"操作标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作标签"}},[v._v("#")]),v._v(" 操作标签")]),v._v(" "),t("p",[v._v("删除标签")]),v._v(" "),t("pre",[t("code",[v._v(" git tag -d <tagName>  \n")])]),v._v(" "),t("p",[v._v("推送标签到远程")]),v._v(" "),t("pre",[t("code",[v._v(" git push origin <tagName>  \n")])]),v._v(" "),t("p",[v._v("推送所以标签")]),v._v(" "),t("pre",[t("code",[v._v(" git push origin --tags  \n")])]),v._v(" "),t("p",[v._v("删除远程标签")]),v._v(" "),t("p",[v._v("删除远程标签需，要先删除本地标签，然后再执行")]),v._v(" "),t("pre",[t("code",[v._v(" git push origin :refs/tags/<tagNameg>")])])])}],!1,null,null,null);_.default=r.exports}}]);