import { Component } from "react";
import Input from "./Input";
import Estados from "./Estados";
import Radio from "./Radio";

class PersonalInfo extends Component {
  render() {
    const { state: { name, email, cpf, endereco, cidade, estado, casa, apartamento }, callback } = this.props;
    return (
      <fieldset className="personal-info">
        <Input  callback={ callback } value={ name } id="name" type="text" length="40" required={true} text="Nome: " />
        <Input  callback={ callback } value={ email } id="email" type="text" length="50" required={true} text="Email: " />
        <Input  callback={ callback } value={ cpf } id="cpf" type="text" length="11" required={true} text="CPF: " />
        <Input  callback={ callback } value={ endereco } id="endereco" type="text" length="200" required={true} text="Endereço: " />
        <Input  callback={ callback } value={ cidade } id="cidade" type="text" length="28" required={true} text="Cidade: " />
        <Estados callback={ callback } value={ estado } />
        <Radio callback={ callback } choices={['Casa', 'Apartamento']} casa={ casa } apartamento={ apartamento } />
      </fieldset>
    );
  }
}

export default PersonalInfo;