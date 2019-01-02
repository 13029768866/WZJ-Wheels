# WZJ_Wheels

## 一、初始化

```
1、配置MIT协议，Create a file输入License
2、npm init配置包信息
3、安装vue
```

## 二、Webstrom使用小技巧

### 2.1、VCS（version control system）

### 2.2、基础配置

```
1、settings--keymap--ctrl+G
2、创建gitignore配置无需提交项
3、设置origin
4、settings--搜索unsign--勾选allow unsigned requests
```

## 三、样式设置

### 3.1、使用scss，使用css变量

```
:root{    // 设置变量
    --button-height:32px;
    --font-siez:14px;
    --button-bg: #fff;
    --button-active-bg:#eee;
    --border-radius: 4px;
    --color:#999;
    --border-color:#999;
    --border-color-hover: #666;
   }
使用时 var（--button-height）
```

## 四、parcel简易打包

```
npm install -g parcel-bundler
vue官网配置parcel
"alias": {
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
打包时禁止缓存
parcel index.html --no--cache
如果热加载失败请查看safe write
```

