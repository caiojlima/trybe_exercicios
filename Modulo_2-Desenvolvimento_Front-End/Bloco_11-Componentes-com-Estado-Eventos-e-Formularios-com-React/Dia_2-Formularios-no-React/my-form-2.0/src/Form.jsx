import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import JobsInfo from "./JobsInfo";
import Button from "./Button";
import Preview from "./Preview";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      email:"",
      cpf:"",
      endereco:"",
      cidade:"",
      estado:"",
      casa:true,
      apartamento:"",
      curriculo:"",
      descricao:"",
      preview:"hidden",
    }
  }

  handleInputs = ({ target: { id, value, checked } }) => {
    this.setState(() => (id === 'casa') ? { [id]: checked, apartamento:"", } :(id === 'apartamento') ? { [id]: checked, casa:"", } : { [id]: value })
  }

  submitButton = () => {
    this.setState({
      preview: 'preview',
    })
  }

  resetButton = () => {
    this.setState({
      name:"",
      email:"",
      cpf:"",
      endereco:"",
      cidade:"",
      estado:"",
      casa:"",
      apartamento:"",
      curriculo:"",
      descricao:"",
      preview:"hidden"
    });
  }

  render() {
    return (
      <main>
        <form className="form">
        <PersonalInfo state={this.state} callback={ this.handleInputs } />
        <JobsInfo state={ this.state } callback={ this.handleInputs } />
        <div className="bnt-container">
          <Button callback={ this.submitButton } type="button" id="submit-btn" text="Enviar" />
          <Button callback={ this.resetButton } type="button" id="reset-btn" text="Limpar" />
        </div>      
        </form>
        <Preview state={ this.state } />
      </main>
    );
  }
}

export default Form;
