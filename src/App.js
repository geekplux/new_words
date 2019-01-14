import React, { Component } from 'react';
import Char from './components/char';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordName: '新名词',
      wordDesc: '新名词解释',
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

  render() {
    const { hideInput, wordName, wordDesc } = this.state;

    return (
      <div className="App">
        <p className="title">新名词生成器</p>
        <div className="name">
          {wordName &&
            wordName.length &&
            wordName.split('').map((c, i) => <Char key={i} c={c} />)}
        </div>
        {hideInput ? null : (
          <input
            className="nameInput"
            type="text"
            placeholder="*只能输入中文"
            value={wordName}
            onChange={this.onNameInput}
          />
        )}
        <p className="nameNormal">{wordName}：</p>
        <p className="desc">{wordDesc}</p>
        {hideInput ? null : (
          <textarea
            className="descInput"
            placeholder="输入新名词的解释"
            value={wordDesc}
            onChange={this.onDescInput}
          />
        )}
        <button className="btn" onClick={this.onClick}>
          {hideInput ? '修改' : '完成'}
        </button>
        <a className="author" href="https://geekplux.com">
          © GeekPlux
        </a>
      </div>
    );
  }
}

export default App;
