import React, { Component } from 'react';
import miBg from '../../assets/mi_bg.svg';
import './style.css';

class Char extends Component {
  render() {
    return (
      <span
        className="char"
        style={{
          backgroundImage: `url(${miBg})`
        }}
      >
        {this.props.c}
      </span>
    );
  }
}

export default Char;
