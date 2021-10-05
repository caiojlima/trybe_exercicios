# Internet:

### As peças que montam a Internet


Ao longo da sua carreira como desenvolvedor, você fará páginas incríveis que estarão disponíveis para usuários do mundo todo na Internet. Mas você já se perguntou como esse processo acontece? Antes de prosseguir na leitura, reflita um pouco sobre como você acredita que as suas páginas web funcionam!

O mundo Web é tão presente no nosso dia a dia que esquecemos o quão complexo ele é. Conhecê-lo será fundamental quando você começar a arquitetar o backend da sua aplicação, e muito importante para que você desenvolva páginas web que funcionem de fato.

Entender a Internet pode parecer intimidador pois há muitos termos específicos que são constantemente utilizados. Vamos começar a desmistificá-los fazendo aquilo que fazemos praticamente todos os dias ao abrir o nosso navegador: acesse www.google.com. O que está por trás desse acesso? Vamos listar primeiro os conceitos básicos para entendê-lo:

**Cliente**: Firefox, Mozilla, Chrome... qual o navegador você utilizou para fazer a sua pesquisa? O termo técnico para ele é cliente. O cliente é uma aplicação que está conectada à Internet. A sua principal função é receber a interação do usuário e traduzi-la em uma requisição para outro computador chamado Servidor Web. Apesar de usarmos o navegador para acessar à Internet, você pode pensar no seu computador como sendo o Cliente no modelo Cliente-Servidor. Todo computador tem um número único, como o seu CPF, chamado endereço IP. É através desse endereço que computadores, celulares e tablets são identificados.

**Servidor**: Como vimos no exemplo acima, nossa busca por www.google.com será enviada para um Servidor. O Servidor é um super computador conectado à Internet. Ele também tem o seu próprio endereço IP, assim como o seu computador. O Servidor espera por requisições de outras máquinas (clientes). Diferente do seu computador, um Servidor tem um software específico em execução que irá dizer como ele deve responder a uma requisição do seu navegador. A principal função do Servidor é armazenar, processar e entregar páginas web para os Clientes. Há diversos tipos de servidores, como Web Servers, Database Servers, File Servers, Application Servers. O servidor que usamos para fazer a busca por www.google.com é um Web Server.

**Endereço IP**: A sigla IP refere-se a Internet Protocol. O endereço IP é um identificador numérico para um dispositivo (computador, celular, tablet, impressora, roteador, servidor...) conectado à rede TCP/IP. Todo dispositivo conectado à Internet tem um endereço IP único que irá identificá-lo, e será usado para comunicar com outros dispositivos. Os endereços IP tem quatro campos de dígitos separados por pontos (exemplo: 244.155.65.2). Esses números são chamados de endereço lógico. Para localizar um dispositivo conectado à Internet o endereço lógico é convertido em um endereço físico por um software. Esse endereço físico faz parte do seu hardware e é conhecido por endereço de controle de acesso à mídia (MAC address).

**TCP/IP**: Essa sigla refere-se à Transmission Control Protocol/Internet Protocol. Um protocolo é um conjunto de regras, e o protocolo TCP/IP é utilizado para transmitir dados na rede. Ele também é o protocolo de comunicação mais utilizado no mundo Web.

**ISP**: ISP ou Internet Service Provider é o seu provedor de Internet. É qualquer empresa que nos fornece acesso ao maravilhoso mundo Web. Sem os seus serviços, não conseguiríamos fazer a nossa busca por www.google.com pois não estaríamos conectados à Internet.

**DNS**: DNS ou Domain Name System é um dispositivo com uma base de dados distribuída que gerencia os nomes de serviços, computadores ou qualquer dispositivo conectado à Internet. Ele é usado para relacionar o endereço nominal (google.com) com o endereço IP. Os servidores DNS são responsáveis por localizar e traduzir para números (um endereço IP) as buscas por sites que digitamos no navegador.

**Port Number**: O número de porta é um número de 16 bits utilizado para identificar uma porta específica no servidor, e está sempre associado ao endereço IP. O Port number é uma forma de identificar um processo específico encaminhado para o servidor.

**Host**: O Host é qualquer computador conectado à rede, seja como cliente, servidor ou qualquer outro tipo de dispositivo. Cada host tem um endereço IP único. Para o site que estamos buscando, www.google.com, o host é o servidor web que hospeda a página na web. É comum confundir o host com o servidor. Lembre-se que eles são coisas diferentes! O Servidor é um tipo de host - uma máquina específica com endereço IP. Por outro lado, o host pode ser também uma organização inteira que fornece um serviço de hospedagem para manter inúmeros servidores web.

**HTTP**: Hyper-text Transfer Protocol é o protocolo utilizado para a comunicação entre navegadores e servidores na Internet.

**URL**: O URL é a sigla para Uniform Resource Locators e identifica um recurso web específico. Podemos, como exemplo, mudar a nossa busca para https://www.google.com/travel/flights para pesquisar por preços de passagens aéreas. O URL identifica o protocolo que será utilizado para comunicarmos com o servidor (https), o nome do host (google.com) e o recurso que queremos acessar (travel/flights).

O funcionamento da Internet depende de regras, que são os protocolos. É através desses protocolos que conseguimos acessar páginas, fazer downloads, enviar emails. Dentre os protocolos, há dois que são frequentemente utilizados: o protocolo TCP/IP e o protocolo HTTP.
O Protocolo TCP/IP, como vimos, é a base de envio e recebimento de dados de toda a Internet. É um conjunto de regras que permite a comunicação entre todas as máquinas conectadas à Internet.
Vamos nos aprofundar um pouco mais sobre o que é o protocolo HTTP, quais seus principais verbos e o que significa ser RESTful ?
Você já aprendeu que, no modelo Cliente-Servidor, a troca de mensagens acontece através de requisições e respostas: o Cliente envia uma requisição ao Servidor, que irá lhe retornar uma resposta. Com o grande volume de dados envolvidos nessa operação, gerenciar essas mensagens não é uma tarefa fácil. Assim, Cliente e Servidor aderem a uma linguagem comum, com regras que alinham as expectativas de ambas as partes, de forma que eles sabem exatamente o que esperar. Essa linguagem é o que chamamos de protocolo HTTP.
Cada requisição e resposta trocada entre Cliente e Servidor é uma única transação HTTP. O HTTP é uma linguagem de texto, o que significa que as mensagens trocadas são quantificadas em bits. Cada mensagem é dividida em duas partes: o header e o body.
É importante ter em mente que o HTTP por si só não consegue transmitir dados. Ele ainda depende do protocolo TCP/IP para pegar as requisições e respostas entre duas máquinas. O HTTP é uma camada de abstração que padroniza a forma com que os hosts se comunicam.
Uma requisição ou resposta HTTP pura não é encriptada, sendo vulnerável a vários tipos de ataques. Por outro lado, HTTPS é uma forma mais segura de comunicação que utiliza a encriptação. Para adicionar mais essa camada de segurança, o HTTPS utiliza um segundo mecanismo de segurança: o SSL. Não se preocupe em entender os detalhes e as diferenças entre cada protocolo. Por hora, é interessante saber que eles existem. Websites grandes com milhares de usuários, como o Google e o Facebook, utilizam o protocolo HTTPS para manter as nossas senhas, informações pessoais e até mesmo detalhes de cartão de crédito em segurança na rede.

**HTTP Headers**
Como vimos, o protocolo HTTP é composto por Header e Body. O Header contém metadata (dados sobre dados) que incluem o tipo de requisição (GET, POST, PUT, DELETE), o caminho URL, o endereço IP dentre outros. Para a página que estamos usando como exemplo, na sessão Response Headers os mais importantes são:

**Content-Type**: text/plain Especifica como os dados são representados. Nesse exemplo, temos o texto sendo enviado como resposta no formato HTML.

**Server**: GitHub.com Servidor Web para onde as requisições estão sendo feitas.

**Status**: 200 OK Forma padrão para o servidor comunicar ao cliente sobre o resultado da requisição. O código 200 significa que o servidor encontrou o recurso e está enviando o resultado da requisição.

**Host**: api.github.com Host da aplicação

**cookie**: _octo=GH1.1.358825508.1593780201; _ga=GA1.2.60245099.1593780202; logged_in=yes; dotcom_user=isabellavjs; tz=America%2FSao_Paulo
Novamente, você não precisa saber todos os pares de nome-valor. Saber onde encontrá-los no seu navegador é o suficiente para você começar a explorá-los conforme a sua necessidade.

O servidor armazena então os dados (metadados) mais importantes para estabelecer uma comunicação com o cliente. O Body refere-se ao corpo da mensagem que está sendo transmitida. Você pode acessá-lo clicando em Response na barra superior. Para a requisição que fizemos, acessar a página https://github.com/, o body contém o HTML para a página que estamos querendo acessar. 

**Métodos HTTP**
Os métodos HTTP são os verbos que dizem ao servidor o que fazer com os dados no URL. Como vimos, o endereço URL identifica recursos específicos. Quando o cliente utiliza o endereço URL combinado a um verbo HTTP, o servidor saberá qual será a ação necessária para cada recurso. Os exemplos mais comuns são:

**GET**
O método GET é o mais comum, e é utilizado para ler informações encaminhadas pelo servidor para uma URL específica. As requisições GET são apenas para leitura, o que significa que os dados nunca poderão ser modificados no servidor. O servidor irá apenas retornar os dados, sem modificá-los. Assim, esse tipo de requisição é considerada uma operação segura, pois o efeito retornado será sempre o mesmo, independentemente do número de requisições feitas. Assim sendo, dizemos que requisições GET são idempotentes , o que significa que o efeito da requisição no servidor será sempre o mesmo - fazer milhões de requisições GET para o mesmo URL tem o mesmo efeito que uma única requisição. O método GET apenas retorna dados.
Requisições GET são respondidas com status 200 (OK) se o recurso que estamos querendo acessar for encontrado com sucesso, ou 404 (NOT FOUND) se a página não for encontrada.

**POST**
O método POST é utilizado para criar um novo recurso, como um formulário para login. Você usará o método POST para criar um recurso subordinado (ex: novo usuário) para a aplicação pai (ex: http://exemplo.com/usuario). Ao contrário do método GET, o método POST não é nem seguro e nem idempotente. Fazer duas ou mais requisições POSTS resultará em novos recursos criados (mesmo que idênticos). Requisições POST são retornadas com o status code 201 (CREATED) e um novo caminho no header com o Link do recurso criado.

**PUT**
O método PUT é utilizado para atualizar o recurso identificado pelo URL. Esse método também pode ser utilizado para criar um novo recurso. Requisições PUT não são consideradas operações seguras, pois o estado da aplicação é modificado no servidor. No entanto, o método PUT é idempotente porque múltiplas requisições PUT para atualizar um recurso têm o mesmo efeito que uma única requisição.
A resposta a requisição é o status code 200 (OK) se o recurso foi atualizado com sucesso, ou 404 (NOT FOUND) se ele não for encontrado.

**DELETE**
DELETE é utilizado para deletar um recurso identificado pelo URL. As requisições DELETE são idempotentes, pois quando deletamos um recurso ele será deletado. Você pode fazer milhares de requisições com o método DELETE que no fim o resultado será o mesmo: um recurso deletado.
A resposta requisição é o status code 200 (OK) se o recurso for deletado com sucesso, ou 404 (NOT FOUND) se o recurso que será deletado não existir.

**REST**
Você pode já ter ouvido falar do termo RESTful para descrever uma aplicação. REST é a sigla para Representational State Transfer. É um estilo de arquitetura utilizado no design de aplicações Web. O estado da aplicação são os dados necessários para que o servidor possa atender a uma determinada requisição. As regras do REST nos guiam a desenvolver sistemas mais performáticos, escaláveis, simples, de fácil manutenção e modificação, portátil e confiável. Dentre elas, podemos destacar:
Interface uniforme: define a interface entre cliente e servidor de forma a desacoplar a arquitetura da aplicação. Os verbos que vimos acima descrevem a grande maioria das regras para interface uniforme. Dentre as definições previstas pelo REST, as mais importantes são:
Recursos, como dados de um banco de dados, devem ser identificados na requisição e o cliente terá acesso apenas a representação do recurso (ex: JSON, HTML)
O cliente deve ter informações suficientes para manipular recursos no servidor utilizando representações
As mensagens trocadas entre cliente e servidor devem ser auto-descritivas
Stateless: Essa regra define que todos os dados do estado da aplicação que precisam ser manipulados em uma requisição devem estar contidos na própria requisição (URL, HTTP body, HTTP header) e o servidor deve encaminhar para o cliente todos os dados referentes ao estado na resposta (HTTP headers, status code, HTTP response body).
O protocolo HTTP é uma peça chave na comunicação entre cliente-servidor. Para construir aplicações RESTFul é necessário compreender o básico de HTTP. Assim, você será capaz de criar páginas performáticas e escaláveis que farão a diferença na vida de muitos usuários!

