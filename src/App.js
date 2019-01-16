import React, { Component } from 'react';
import Char from './components/char';
import './App.css';
import pinyinUtil from './pinyinUtil';
import domtoimage from 'dom-to-image';

const pinyin = str => pinyinUtil.getPinyin(str);
function downloadImg(format) {
  const fn = {
    png: 'toPng',
    jpeg: 'toJpeg',
    svg: 'toSvg'
  };

  domtoimage[fn[format]](document.getElementById('result')).then(function(
    dataUrl
  ) {
    var link = document.createElement('a');
    link.download = `new-words.${format}`;
    link.href = dataUrl;
    link.click();
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordName: '新程员',
      wordDesc:
        '新程员解释：新程员就是说喜欢造轮子，但是又造的很一般；喜欢划水，但是又不敢明目张胆地划；喜欢写代码，但是下了班就只想睡觉的快乐程序员。',
      hideInput: false
    };
  }
  onNameInput = event => {
    this.setState({
      wordName: event.target.value.trim()
    });
  };
  onDescInput = event => {
    this.setState({
      wordDesc: event.target.value
    });
  };

  onClick = event => {
    this.setState({ hideInput: !this.state.hideInput });
  };

  onDownloadClick = event => {
    this.setState({ hideInput: !this.state.hideInput });
    downloadImg('png');
  };

  render() {
    const { hideInput, wordName, wordDesc } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">新名词生成器</h1>
          <div id="result" className="result">
            <div className="nameChar">
              {wordName && wordName.length
                ? wordName.split('').map((c, i) => <Char key={i} c={c} />)
                : '*请在下方输入框输入'}
            </div>
            <div className="pinyin">{wordName && pinyin(wordName)}</div>
            {hideInput ? null : (
              <input
                className="nameInput"
                type="text"
                placeholder="*最多输入十个字符"
                maxLength={10}
                value={wordName}
                onChange={this.onNameInput}
              />
            )}
            <p className="name">{wordName}：</p>
            <p className="desc">{wordDesc}</p>
            {hideInput ? null : (
              <textarea
                className="descInput"
                placeholder="*输入新名词的解释"
                value={wordDesc}
                onChange={this.onDescInput}
              />
            )}
          </div>
          <div className="btn-group">
            <button className="btn preview-btn" onClick={this.onClick}>
              {hideInput ? '修改' : '预览'}
            </button>
            <button className="btn download-btn" onClick={this.onDownloadClick}>
              下载
          </button>
          </div>
          <p className="author">
            © made by
            <a href="https://geekplux.com">GeekPlux</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
