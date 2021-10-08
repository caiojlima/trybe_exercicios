import { Component } from "react";
import './Preview.css'

class Preview extends Component {
  render() {
    const { state: { name, email, cpf, endereco, cidade, estado, casa, descricao, curriculo, preview } } = this.props;
    return (
      <div className={ preview }>
        <h4>Nome: <span>{name}</span></h4>
        <h4>Email: <span>{email}</span></h4>
        <h4>CPF: <span>{cpf}</span></h4>
        <h4>Endereço: <span>{endereco}</span></h4>
        <h4>Cidade: <span>{cidade}</span></h4>
        <h4>Estado: <span>{estado}</span></h4>
        <h4>Tipo: <span>{(casa) ? 'Casa' : 'Apartamento'}</span></h4>
        <h4>Resumo do Curriculo: <span>{curriculo}</span></h4>
        <h4>Descrição do cargo: <span>{descricao}</span></h4>
      </div>
    );
  }
}

export default Preview;
