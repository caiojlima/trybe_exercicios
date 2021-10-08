import { Component } from "react";

class Button extends Component {
  render() {
    const { id, type, text, callback } = this.props;
    return (
      <div>
        <button id={ id } type={ type } onClick={ callback } >{ text }</button>
      </div>
    );
  }
}

export default Button