import { Component } from "react";
import TextArea from "./TextArea";
import Input from "./Input";

class JobsInfo extends Component {
  render() {
    const { state: { curriculo, descricao }, callback } = this.props;
    return (
      <fieldset className="jobs-info">
        <TextArea  callback={ callback } value={ curriculo } id="curriculo" length="1000" required={true} text="Resumo do currículo: " />
        <Input  callback={ callback } value={ descricao } id="descricao" type="text" length="500" required={true} text="Descrição do Cargo: " />
      </fieldset>
    );
  }
}

export default JobsInfo;