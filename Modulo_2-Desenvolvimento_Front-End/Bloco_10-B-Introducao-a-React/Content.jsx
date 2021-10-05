      // Content.jsx
      import React from 'react';

      const conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composição de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composição de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ]
      class Content extends React.Component {
        render() {
          return(
            <div className="content">
              {conteudos.map(({ conteudo, status, bloco }) => (
                <div key={conteudo} className="card">
                  <h4>{`O conteudo é: ${conteudo}`}</h4>
                  <p>{`status: ${status}`}</p>
                  <p>{`bloco: ${bloco}`}</p>
                </div>
              ))}
            </div>
          );
        }
      }

      export default Content;