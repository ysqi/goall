+++
title= "{{ replace .TranslationBaseName "-" " " | title }}"
date= {{.Date}}
draft= true
# GitHub提交地址
github = ""

# 图书原地址
link = ""
# 作者信息
[author]
    # 作者姓名
    name= ""
    # 作者主页 （可选）
    link= ""

# 图书信息
[book]
    # 出版社 （可选）
    publisher= ""
    # 出版时间 （可选）
    releaseDate = "" 
    # 是否免费 
    free= false
    # 图书封面图片地址
    cover = ""
    # 图书一句话介绍
    introduction= ""

# 图书在线阅读地址，如：PDF
[[book.reads]] 
name= ""
link= "" 
# 图书在线购买地址
[[book.buys]]
name= ""
link= "" 

+++