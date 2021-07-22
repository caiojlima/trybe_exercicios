# Bloco 3 – Introdução à HTML e CSS

## Estrutura padrão de uma tag:

<nome da tag atributo=”valor”>
    conteúdo da tag
</nome da tag>

Exemplo:

<p id=”texto”>
   Olá mundo
</p>

Destrinchando um HTML:

<!Doctype html> Declara o tipo de arquivo, que no caso é o HTML 5.
<html lang=”pt-br”> Raíz de toda a página e a definição de qual linguagem da página.
   <head>  Configurações da página não visíveis.
   <meta charset=”UTF-8”> Conjunto de caracteres que pode ser utilizado naquela página.
   <title>Aprendendo HTML</title> Título da página. Fica escrito na aba do navegador.
   </head> Onde o head acaba.
   <body>  Corpo da página. Vão todas as tags que serão visíveis na página.
      <h1> Aprendizados </h1> Headings da página
      <h2> Meu apredizado começa aqui e agora! </h2> Headings da página.
      <p> Hoje eu começo minha jornada na trybe! </p> Parágrafo.
</body> Fecha o corpo do texto
</html> Fecha a raíz

**Tags:**

<br>- Faz uma quebra de linha.

<hr> - Linha Horizontal.

<strong></strong> - Negrito.

<em></em> -  Parece itálico mas tem um comportamento semântico diferente!

<ul></ul> - Lista não ordenada.

<ol></ol> - Lista ordenada com números.

<li></li> - Representa um item da lista.

<img src=”endereço ou caminho da imagem”> - Adiciona uma imagem.

<img width=”tamanho da largura em pixels”> - Regula o largura da imagem em pixels.

<img heigth=”tamanho da altura em pixels”> - Regula altura da imagem

<img alt=”descrição da imagem”> - Adiciona uma descrição pra imagem caso ela não carregue, ou a pessoa não consiga enxergar e queira saber o que é aquela imagem.

<a href=”URL”></a> - Cria um link externo para o endereço adicionado como referencia.

<li><a href”#id”></a></li> - Cria um link interno, que leva ao item com a ID de referencia.

<a target=”blank”></a> - Abre o link da referência em uma nova aba.

<center></center> - Centraliza elementos.

<ul class=”list-style”> - Cria uma classe para a lista desordenada de nome list style. (Aplica-se também para listas ordenadas.)
