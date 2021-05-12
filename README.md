# PODCASTR
É uma aplicação que foi desenvolvida durante a semana #NLW5 na trilha de React, com o objeto de criar uma interface WEB que lista os Podcasts da RockeatSeat, levando para o usuário todas as informações importantes sobre o epsódio, permitindo com que ele consiga pular e voltar o epsódio através de controles de um **Player desenvolvido do zero**. Nesta a aplicação também foram usados alguns conceitos de UI/UX.

![alt text](https://thumbs2.imgbox.com/42/7c/4FaCGMIw_t.png)

---

Essa apicação foi construída utilizando o framework next que busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar o desenvolvimento fornecendo uma estrutura completa para o início de um projeto.

Neste projeto foram praticados os seguintes conteudos:

- #### Fluxo de API:
     A *API* permite que o Server se comunique com a nossa aplicação React sem precisar saber como eles foram implementados. Isso simplifica o desenvolvimento da aplicações, gerando mais flexibilidade, caso queiramos consumir esses dados também numa aplicação mobile, por exemplo.

    Neste projetos usamos  a biblioteca *axios* para consumir os dados da API, como no exemplo abaixo:

    ~~~
    import axios from 'axios';
        export const api = axios.create({ baseURL: 'http://localhost:3333/'
    })
    ~~~

<br>

- #### Componente, propriedade e estado:
    **Componente:** Componentes permitem a divisão da UI da aplicação em partes independentes, reutilizáveis. Ela trata cada parte da aplicação como um bloco isolado. Os componentes são como funções JavaScript. Eles aceitam entradas e retornam elementos React que descrevem o que deve aparecer na tela.
    <br>
    **Propriedade:** São os valores que um componente recebe do ‘componente pai’, recebido como se fossem um "argumento" de uma função.
    <br>
    **Estado:** O estado (state) de um componente React é uma propriedade do componente onde colocamos dados que, quando mudados, devem causar uma nova renderização.

- ### Server-side-render (SSR):
    É o processo de pegar todos os Javascript e todos os CSS de um site que, geralmente é carregado no browser (client-side), e renderizá-los como estático do lado do servidor.

- ### Static-site-generation (SSG):
    Um gerador de site estático solicita uma página e, em seguida, gera sua visualização sob demanda com antecedência para que a visualização esteja pronta para servir antes do tempo. E faz isso para todas as visualizações possíveis de um site no momento da construção.

- ### Criação de estilos globais:
    Foi utilizado o conceito de estilos globais, fazzendo com que a estilização possa ser acessada em qualquer parte da aplicação utilizando o *Sass* que é uma linguagem de pré-processamento de estilo.

- ### Configuração de fonte externas:
    Pegando as fontes disponibilizadas pelo google e incorporando no site.

- ### Roteamanto com do NextJS:
    No roteamento entre páginas no next é necessário que se crie um pasta no projeto com um arquivo recebendo um nome de forma de variável, para que os arquivos de páginas sejam gerados com os nomes de maneira dinâmica. Isso para que a aplicação possa criar páginas estáticas se necessário, facilitando assim a organização das páginas no projeto. Veja o exemplo:
    <br>
    - *Primeiro o caminho da rota é passado pelo atributo href do Link que é emcaminhado para a pastade espisódios passando o id do episódio como parametro para que o next consiga gerar as páginas dinamicamente durante a renderização na WEB:* 
    ![alt text](https://thumbs2.imgbox.com/7b/b7/R0hqcepZ_t.png)
    <br>
<<<<<<< HEAD
     - *Para isso a pasta de epiśodios já deve estar criada com o nome do arquive entre colchetes para que as paginas sejam geradas dinamicamente:*
     ![alt text](https://images2.imgbox.com/68/40/YbjsbhOB_o.png)
    <br>
    - *E depois os dados, do episódio nesse caso, podem ser solicitados através de uma requisição a API, passando o id do Episódio que foi aberto, passando como parampretro da API o slug, que contém o id do Epiódio que foi passado ao clicar no Link que direciona para a rota da página:*
=======
     
     - *Para isso a pasta de epiśodios já deve estar criada com o nome do arquive entre colchetes para que as paginas sejam geradas dinamicamente:*

     ![alt text](https://images2.imgbox.com/68/40/YbjsbhOB_o.png)
    <br>
    - *E depois os dados, do episódio nesse caso, podem ser solicitados através de uma requisição a API, passando o id do Episódio que foi aberto, passando como parampretro da API o slug, que contém o id do Epiódio que foi passado ao clicar no Link que direciona para a rota da página:*
    
>>>>>>> f27b3ba36faa680801f008ea49ff2c09d9a62de7
    ![alt text](https://thumbs2.imgbox.com/c6/46/sdgPf2jR_t.png)


- ### ContextAPI:
    É um recurso do React que permite compartilhar o estado em todo o aplicativo (ou parte dele) de maneira leve e fácil.

- ### Ref:
    Neste caso o Ref (biblioteca useREf) foi necssário para que fosse possível acessar as propriedades natives do elemento Audio do HTML, para que fosse possível controlar a reprodução dos episódios do podcast. Veja o exemplo de uso abaixo:
    <br>
    - *A importação da biblioteca useRef*
    ![alt text](https://thumbs2.imgbox.com/62/74/oTgbOSQY_t.png)
    <br>
    - *A utilização do Ref na aplicação:*
<<<<<<< HEAD
=======
    
>>>>>>> f27b3ba36faa680801f008ea49ff2c09d9a62de7
    ![alt text](https://thumbs2.imgbox.com/03/44/ijIXTg6U_t.png)

    ---
    ## Componente do Player
    Foi criado do zero a interface e as funcionalidades de controle da reprodução dos episódios dos podcasts utilizando, utilizando o Ref da tag ```<audio />``` do HTML.

    Todas as funcionalidades que são chamadas no componentes foram declaradas e passadas para o componente Player através do contextAPI.

    Foram criadas as seguintes funcionalidades:

    - ### Tocar anterior e próximo episódio:
        Nestas funcionalidades, antes de tocar o antterior ou próximo episódio, a aplicação verifica se ele é o último da lista de reprodução, se for, não será possível pular. Também é verificado se a reprodução está em modo aleatŕio, se estiver a funcionalidade de pular episódio é liberada:
        <br>
        - *Código da função próximo episódio:*
        ![alt text](https://thumbs2.imgbox.com/ec/77/uGyBBWSo_t.png)

        - *Código da função episódio anterior:*
        ![alt text](https://thumbs2.imgbox.com/f7/4a/5cQN6gNC_t.png)

        - *Demonstração:*
        ![alt text](https://s3.gifyu.com/images/next-prev.gif)

    - ### Controle de Loop:
        Esta funcão do player, com o código bem simples, tem a responsabilidade de checar se o botão de Loop do episódio está ativado. Se estiver, o episódio irá reniniciar e começará a tocar automaticamente sozinho.

        - *Código da função de Loop:*
        ![alt text](https://thumbs2.imgbox.com/0c/ed/4ngqnyx5_t.png)

        - *Demonstração:*
        ![alt text](https://s3.gifyu.com/images/loop.gif)

    - ### Controle de shuffle:
        Esta função do player tem a responsabilidade de checar se o botão de aleatório está ativado. Se estiver, ao clicar para tocar próximo eṕisódio irá ser reproduzido um episódio que não é possível prever qual será.

        - *Código da função de Loop:*
        ![alt text](https://thumbs2.imgbox.com/83/99/bPtDBx4W_t.png)

    - ### Controle de tempo pelo slider:
        Esta função torna possível a alteração do tempo atual de reprodução do episódio apenas movimentando a "bolinha" do slider no player, usando o componente Slider para mostrar o progresso visual.

        - *Código de controle por slider:*
        ![alt text](https://thumbs2.imgbox.com/52/b6/2uJeJlIv_t.png)

        ![alt text](https://thumbs2.imgbox.com/d0/16/SsdF4LG8_t.png)

        - *Demonstração:*
        ![alt text](https://s3.gifyu.com/images/slider-demo.gif)

---
## Também coloquei em pratica algumas funcionalidades a mais no projeto:

- ### Responsividade:
    Deixei o site com capacidade de se adaptar a qualquer tamanho de tela sem que aja alguma quebra de layout indesejada. Para que isso fosse possível, tiver que remodelar o visual do componete player para que fosse possível o usuário conseguir ter a informaççao atual do episódio e ter acesso aos controles do player, sem que ficasse desconfortavel para ele. Veja o exemplo de como ele fica abaixo:

<<<<<<< HEAD
    ![alt text](https://s3.gifyu.com/images/demo-respo.gif)
=======
    ![alt text](https://s3.gifyu.com/images/respde.gif)
>>>>>>> f27b3ba36faa680801f008ea49ff2c09d9a62de7
