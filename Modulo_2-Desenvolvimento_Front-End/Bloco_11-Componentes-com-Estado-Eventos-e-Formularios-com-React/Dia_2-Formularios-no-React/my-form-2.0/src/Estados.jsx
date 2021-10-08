import { Component } from "react";

class Estados extends Component {
  render () {
    const estados = [ 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const { value, callback } = this.props;
    return (
      <div>
        <select name="estados" id="estado" value={ value } onChange={ callback } >
          {estados.map((estado) => (<option key={estado} >{estado}</option>))}
        </select>
      </div>
    );
  }
}

export default Estados;