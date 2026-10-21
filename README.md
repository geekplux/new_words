# 新名词生成器 · New Words

给你造的新词配一张「词典卡片」：输入词语和释义，自动标注拼音，每个字放进米字格，一键导出图片。

Coin a Chinese word, write its definition, and get a dictionary-style card with pinyin and 米字格 character boxes, ready to download.

**在线使用 · Try it:** [newwords.vercel.app](https://newwords.vercel.app/)

![新名词生成器预览](preview/new-words.now.sh_(iPad).png)

## 功能 · Features

- 最多 10 个字，字号随字数自动缩放
- 拼音自动生成（基于 [pinyinjs](https://github.com/sxei/pinyinjs)）
- 「预览」隐藏输入框，「修改」继续编辑
- 导出 PNG、SVG 或 JPEG

## 本地运行 · Run locally

```bash
yarn
yarn start   # 开发
yarn build   # 打包
```

基于 Create React App（React 16）。

## 致谢 · Thanks

- [pinyinjs](https://github.com/sxei/pinyinjs)
- [dom-to-image](https://github.com/tsayen/dom-to-image)

## More from GeekPlux

我是 GeekPlux（Sean），做数据可视化的前端工程师，2011 年起在 [geekplux.com](https://geekplux.com) 写作，大多是中文。

- [geekplux.com](https://geekplux.com)：文章与近况
- [Projects](https://geekplux.com/projects)：其他作品，比如用 Markdown 画图表的 [markvis](https://github.com/geekplux/markvis)

## License

MIT © [GeekPlux](https://geekplux.com)
