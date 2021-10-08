import { Component } from 'react';
import Input from './Input';

class Radio extends Component {
  render() {
    const { choices, casa, apartamento, callback } = this.props;
    return(
      <div>
        {choices.map((choice) => <Input key={ choice } callback={ callback } type="radio" id={ choice.toLowerCase() } text={ choice } family="house-type" require={ true } value={ (choice === 'Casa') ? casa : apartamento } />)}
      </div>
    );
  }
}

export default Radio;
