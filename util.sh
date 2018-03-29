# 替换
sed -ie "s|||" *.html
# 删除某个目录下所有的文件
find . -name '*.DS_Store' | xargs rm -f