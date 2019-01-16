import React, { Component } from 'react';
import miBg from '../../assets/mi_bg.svg';
import './style.css';

class Char extends Component {
  render() {
    return (
      <div className="square">
        <div className="wrap">
          <div className="content">
            <span
              className="char"
              style={{
                backgroundImage: `url(${miBg})`
              }}
            >
              {this.props.c}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Char;
