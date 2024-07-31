# Site de Hamburgueria com carrinho de Compras

Este projeto é uma simulação de um carrinho de compras desenvolvido com React, com o objetivo de praticar estilização com SASS, consumo de API e gerenciamento de estado. A aplicação foi criada para seguir o design fornecido em um Figma específico e implementa diversas funcionalidades essenciais para uma experiência de compra online.

## Funcionalidades Implementadas

1. **Estilização**:
   - Todos os componentes foram estilizados utilizando SASS, seguindo o design especificado no Figma. A aplicação é completamente responsiva, adaptando-se a diferentes tamanhos de tela para uma experiência de usuário otimizada em dispositivos móveis e desktops.

2. **Trazendo os Produtos da API e Busca**:
   - Utilizando o hook `useEffect`, os produtos foram buscados de uma API externa e armazenados no estado adequado. Além disso, uma funcionalidade de busca foi implementada para permitir que os usuários filtrem os produtos de acordo com suas preferências.

3. **Gerenciamento do Carrinho**:
   - Foi desenvolvida a lógica para adicionar e remover itens do carrinho, com os produtos sendo retirados da lista fornecida pela API. A persistência dos dados do carrinho foi garantida através do uso de `localStorage`, utilizando o `useEffect`.

4. **Modal**:
   - Implementação de um modal com comportamento simples de abertura e fechamento, utilizando condicionais no JSX para controle de exibição.
   - O modal foi refinado para fechar ao clicar fora dele ou pressionar a tecla "Esc". Para isso, foram criados hooks personalizados que gerenciam esses comportamentos, aprimorando a experiência do usuário.


