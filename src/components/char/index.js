import React, { Component } from 'react';
import miBg from '../../assets/mi_bg.svg';
import './style.css';

class Char extends Component {
  render() {
    const { fontSize } = this.props;

    return (
      <div className="square">
        <div className="wrap">
          <div className="content">
            <span
              className="char"
              ref={this.setRef}
              style={{
                backgroundImage: `url(${miBg})`,
                fontSize,
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
