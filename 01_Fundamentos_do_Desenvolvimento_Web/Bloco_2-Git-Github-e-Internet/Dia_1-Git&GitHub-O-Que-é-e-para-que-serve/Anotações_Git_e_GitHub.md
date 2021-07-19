#Bloco 2 – Git, Github e Internet:

##Git & Github – Entendendo os Comandos

**Branch** – Uma versão editável do seu código

**Branch Master** – Branch principal do seu código, onde você vai dar deploy, ou seja, colocar no ar.

**Branch Feature** – Branch  independente da Branch Master, a qual pode sofrer commit e pode ser agregada a Branch Master depois.

**Commit** – Mudanças que são enviadas e agregadas na Branch


**SSH ou  Security Shell** - é um protocolo de criptografia de rede que serve para transferir dados de forma segura mesmo em redes inseguras. Usando o protocolo SSH, você pode se conectar ao GitHub sem precisar digitar seu nome e chave de acesso pessoal a cada comando executado.

**HTTPS ou Hypertext Transfer Protocol Secure** - é uma extensão do protocolo de internet HTTP (você verá mais sobre esse protocolo no dia de conteúdo que trata sobre internet!) que utiliza certificados digitais para autenticar os dados e permitir que eles sejam criptografados de forma segura.


**Uma explicação mais detalhada da diferença entre esses dois modelos foge do escopo dessa aula, mas nesse momento basta saber que como o SSH nos permite pular a etapa de digitar login e senha do Github a cada comando, será o modelo de autenticação padrão.**

###Comandos:

**git init**: cria um repositório Git na pasta a qual se encontra.
 
**git status**: verifica se o repositório Git foi de fato iniciado.

**git add .**:  adiciona todos os arquivos modificados.

**git add** *arquivo*: adiciona um arquivo específico.

**git remote add** *apelido do repositorio* git@github.com:user-github/repo-name.git: Sincroniza dois repositórios e adiciona um apelido para ele

**git push** *apelido do repositorio* **main**: Atualiza o repositório do GitHub com as informações do repositório local.

**git rm** *arquivo*: remove um arquivo específico.

**git restore** *arquivo.txt*: restaura os arquivos do diretório que foram deletados sem add

**git commit -m “Mensagem sobre alteração feita”**: cria um commit, um ponto na história desse arquivo.

**git branch**: mostra as branchs que tem no repositório e qual estamos (*)

**git branch** *nome da branch*:  cria uma branch nova

**git checkout** *nome da branch*: muda de branch para a especificada no comando.

**git checkout -b** *nome da branch*: Cria e muda para a branch nova.

**git merge main**: adiciona as alterações feitas na branch main para a branch atualmente utilizada.

**git branch -D** *nome da branch*: deleta uma branch.

**git branch -M main**: mudar a branch atual para main.

**git log**: mostra todas as alteraçoes de arquivos daquela branch.

**git clone** *link do repositorio*: clona o repositorio do git hub pro terminal.

**code** *arquivo*: abre o arquivo (conflituoso) no editor de texto.
