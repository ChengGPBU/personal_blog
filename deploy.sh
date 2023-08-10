###
 # @Company: heytea
 # @Description: 
 # @Author: 程广
 # @Date: 2020-01-08 22:07:14
 # @LastEditTime : 2020-01-09 14:10:30
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# git push -f https://${access_token}@github.com/ChengGPBU/ChengGPBU.github.io.git master

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:ChengGPBU/ChengGPBU.github.io.git master

# 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 访问token
git push -f https://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@github.com/ChengGPBU/ChengGPBU.github.io.git master


cd -