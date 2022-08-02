---
title: 'personal website v3'
disqus: hackmd
---
# personal_website_v3
[Website](https://ingridkao.github.io/personal_website_v3/)

![Version](https://img.shields.io/github/package-json/v/ingridkao/personal_website_v3)
![Commit activity](https://img.shields.io/github/commit-activity/m/ingridkao/personal_website_v3?style=plastic)

# Table of Contents
* [Site Map](#site-map)
* [踩雷紀錄](#踩雷紀錄)
   * [Nuxt toggle dark mode](#nuxt-toggle-dark-mode)
   * [@tailwindcss/typography + @tailwindcss/color-mode](#tailwindcsstypography--tailwindcsscolor-mode)
* [Tool](#tool)
   * [1. TOC](#1-toc)


# Site Map
目前規劃的網站地圖，但現在完成度還極低...

``` bash
ingridkao
│   resume
│   contact
│
└───投資理財 | Investment
│   │   資產配置:PieChart
│   │   操作記錄
│   │
│   └───公司研究 | Research
│       │   MMM.txt
│       │   APPLE.txt
│       │   ...
│
└───Coding | F2E
│   │   List
│   │
│   └───Vue踩雷紀錄
│   |   |   Basic.txt
│   |   |   i18n.txt
│   |   |   Nuxt.txt
│   |   |   ...
│   |
│   └───部署筆記
│   |   |   Docker.txt
│   |   |   GCP.txt
│   |   |   SSL.txt
│   |   |   ...
│   |
│   └───SideProject
│   |   |   Taxi.txt
│   |   |   Mapbox.txt
│   |   |   ...
│   |
│   └───工具
│       |   ...
│
└───旅行 | Travel
│   │   Map&List
│   │
│   └───台灣
│   |   |   機車環西半部.txt
│   |   |   綠島.txt
│   |   |   花東.txt
│   |   |   ...
│   |
│   └───日本
│       |   大地藝術季.txt
│       |   瀨戶內海.txt
│       |   北海道.txt
│       |   ...
│
└───日常 | Commonplace
    │   List
    │
    └───閱讀摘要
    |   |   機車環西半部.txt
    |   |   綠島.txt
    |   |   ...
    |
    └───小記
        |   慢慢美.txt
        |   按摩地圖.txt
        |   轉職紀錄.txt
        |   ...
```


# 踩雷紀錄
[Website v2](https://ingridkao.github.io/personal_website_v2/)
上一個版本使用tailwind，最後因為太多奇妙的坑所以再改寫一次，在這邊繼續紀錄一些建置過程中花比較多時間的問題：

## Vueuse for nuxt2 & vue2.X
在另外一個專案使用，覺得Vueuse寫好蠻多常用組件，所以也用在這裡，不過在安裝的過程中碰到一些問題：

1. 依據官網建議`npm i -D @vueuse/nuxt @vueuse/core`
2. 會碰到無法解析mjs的問題，總之就是webpack不認識`mjs`
> [issues](https://github.com/polkadot-js/extension/issues/621)
3. 在`nuxt.config.js`中加入下面這一段就可以正常運作
```bash
...
    build: {
        extend (config) {
            config.module.rules.push({
                include: /node_modules/,
                test: /\.mjs$/,
                type: 'javascript/auto'
            })
        }
    },
...
```


# Tool
## 1. TOC
> 讓github支援TOC(Table of Contents)
> 使用[ekalinin/github-markdown-toc](https://github.com/ekalinin/github-markdown-toc)

紀錄一下使用方法：
1. 使用`ekalinin/github-markdown-toc`的安裝方式，在專案父層執行會產生一個資料夾`gh-md-toc`
    資料夾如下：
    └─ <Project>
    └─ <gh-md-toc>
2. 在父層下指令，意思大概是透過gh-md-toc來抓出專案README.md裡的title來製作TOC
    ```bash
    ./gh-md-toc personal_website_v3/README.md
    ```
3. 下完指令會出現抓出來的TOC，把他再貼到README.md就好了


## 2. Google Translate button
> google translate API需要token且超過字數會需要費用，為了避免這個問題，想要找尋
> 運用Google Translate button來做頁面翻譯，[可參考](https://www.w3schools.com/howto/howto_google_translate.asp)
> 參考*v-google-translate*寫法，[GitHub](https://github.com/i7eo/v-google-translate/blob/master/src/packages/src/index.vue)

紀錄實踐方法：
1. 組件於`components/GoogleTranslate.vue`
2. 原始方法是引入`//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`，在創建一個`new google.translate.TranslateElement`物件。
3. 不過這個長相真的有點欠佳，發現*v-google-translatem*也是引入Google Translate button，所以複製他的程式碼做法
4. v-google-translatem中的做法是先把googl translate先引入進去，比較重要的是運用`MutationObserver`這個原生Web APIs追蹤DOM物件狀態；並使用`dispatchEvent`創建自定義事件，詳細可以看該component裡面的註解。



tags: `Vue` `Nuxt`