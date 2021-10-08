import { Component } from "react";

class Input extends Component {
  render() {
    const { type, length, required, id, text, family, value, callback } = this.props;
    return (
      <label htmlFor={ id } >{ text }
        <input id={ id } type={ type } maxLength={ length } required={ required } name={ family } value={ value } onChange={ callback } />
      </label>
    );
  }
}

export default Input;