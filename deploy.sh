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

#
# git push -f https://${wmIuv87hcrm2AUmtGez5VA}@github.com/<ChengGPBU>/<ChengGPBU>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:<ChengGPBU>/<ChengGPBU>.github.io.git master


cd -