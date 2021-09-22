const getRepos = require('../src/getRepos');

describe('O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL https://api.github.com/orgs/tryber/repos , faça um teste que verifique que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista.', () => {
  it('Verifica se existe o repositório sd-01-week4-5-project-todo-list', () => (
    getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
    })
  ));

  it('Verifica se existe o repositório sd-01-week4-5-project-meme-generator', () => (
    getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    })
  ));
});