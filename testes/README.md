# Testes Funcionais - Aplicação CRUD

Este README documenta os testes funcionais realizados sobre uma aplicação CRUD desenvolvida como parte do teste técnico para a vaga de Junior Frontend Engineer no programa CodeCamp.

## Funcionalidades Testadas

A aplicação oferece as seguintes funcionalidades, que foram abrangidas nos testes:

- [x] **Layout Responsivo:** Verificação da responsividade da interface em diferentes dispositivos e resoluções, garantindo uma experiência de usuário consistente em WEB e MOBILE.
  
- [x] **Autenticação e Armazenamento de Usuário:** Testes do fluxo de login, incluindo o armazenamento seguro do usuário no Session Storage após a autenticação bem-sucedida.
  
- [x] **Operações CRUD em Postagens:**
  - **Listagem de Posts:** Validação da exibição correta das postagens existentes.
  - **Criação de Posts:** Testes para garantir que novos posts sejam criados com sucesso e apareçam na lista.
  - **Edição de Posts:** Verificação da capacidade de editar posts existentes, incluindo a persistência das alterações.
  - **Remoção de Posts:** Confirmação de que os posts podem ser excluídos corretamente, com remoção refletida na interface.

## Metodologia de Testes

### 1. Testes de API

- [x] **Ferramenta Utilizada:** Postman
- [x] **Escopo:** Foram construídos cenários de testes para todas as operações CRUD (Create, Read, Update, Delete) na API, abrangendo os seguintes aspectos:
  - **Autenticação:** Validação de endpoints de login, com verificação de respostas para credenciais válidas e inválidas.
  - **Posts:** Testes das operações CRUD, incluindo validação de payloads, status codes, e integridade dos dados.
  - **Erros e Exceções:** Testes para garantir respostas apropriadas em caso de requisições incorretas ou dados inválidos.

### 2. Testes Manuais

- [x] **Plataformas:** WEB e MOBILE
- [x] **Escopo:** Realização de testes manuais para verificar a funcionalidade, usabilidade e responsividade da aplicação em diferentes dispositivos. Os cenários cobriram:
  - **Interação do Usuário:** Fluxos de login, criação, edição, e exclusão de posts.
  - **Experiência de Usuário:** Testes de responsividade e usabilidade em diferentes tamanhos de tela e dispositivos.
  - **Validação Visual:** Verificação de estilos e layout, assegurando que a aplicação se mantenha consistente visualmente.

## Possíveis Próximas Features

Durante os testes, foram identificadas áreas para melhorias futuras, que incluem:

- **Paginação de Posts:** Implementação de paginação para melhorar a navegação e o desempenho ao listar grande quantidade de posts.
- **Rotas Privadas:** Introdução de rotas privadas para restringir o acesso a determinadas páginas aos usuários logados.
- **Logout:** Adição de uma funcionalidade de logout para permitir que os usuários encerrem suas sessões de forma segura.
