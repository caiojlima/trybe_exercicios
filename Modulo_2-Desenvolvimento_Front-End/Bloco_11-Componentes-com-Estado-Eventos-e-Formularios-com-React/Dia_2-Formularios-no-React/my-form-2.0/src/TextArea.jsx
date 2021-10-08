import { Component } from "react";

class TextArea extends Component {
  render() {
    const { length, required, id, text, value, callback } = this.props;
    return (
      <label htmlFor={ id }>{text}
        <textarea onChange={ callback } maxLength={ length } required={ required } id={ id } value={ value } />
      </label>
    );
  }
}

export default TextArea;