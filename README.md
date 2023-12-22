# Projeto 🚀

Está em andamento o desenvolvimento de um pequeno projeto que inicialmente oferecerá algumas rotas de API. Essas rotas permitirão realizar o login e, posteriormente, agendar horários. A intenção é evoluir esse projeto para se tornar um aplicativo voltado ao agendamento de jogos em um campo de futebol, aonde será implementado testes automatizados em algumas camadas, como de unidade, integração.

Mas o que seria estes testes?


- Testes Unitários(Unidade): Como o nome já dá a dica é um teste que irá cobrir uma pequena unidade do projeto, uma função, classe ou módulo isso depende do contexto do projeto, mas de forma breve será testado uma pequena parte do projeto isoladamente removendo as dependências possíveis. 
- Testes de Integração: Já o de integração testa a conexão entre um ou mais componentes do projeto, validando se ambos os componentes estão funcionando em harmonia.


# Tecnologias 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)&nbsp;

## Getting Started

`https://github.com/jonathandasilvaalves/project-with-unittest`

## Configuração do Banco de Dados

1. **Criação do Banco de Dados PostgreSQL:**
   - Utilize um container Docker para criar o banco de dados. Execute o seguinte comando:

     ```bash
     docker run --name docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres
     ```

   Isso criará um container com o banco de dados pronto para uso.

1.1 **Configuração do arquivo .env:**
   - Configure os dados de conexão no arquivo `.env`.

1.2 **Migração do Banco de Dados:**
   - Execute o seguinte comando para criar as tabelas no banco:

     ```bash
     yarn sequelize db:migrate
     ```

## Instalação e Execução do Projeto

2. **Instalação de Dependências:**
   - Execute `yarn` ou `npm install` dentro do diretório do projeto para instalar as dependências.

3. **Iniciar o Projeto:**
   - Execute o seguinte comando para iniciar o projeto:

     ```bash
     yarn dev:server
     ```

   O projeto estará pronto e funcionando!

## Testes

Para os testes dentro do arquivo package.json foi criado o comando `test` podendo ser
executado com `yarn test` ou `npm run test`.

Isso executará todas as validações, criando um banco de dados temporário para armazenar a massa de dados gerada durante os testes.

O console exibirá os resultados das execuções, indicando sucesso ou falha.
## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.