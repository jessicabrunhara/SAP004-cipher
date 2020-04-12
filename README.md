# a c o l h a

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Conhecimentos adquiridos](#3-conhecimentos-adquiridos)
* [4. Como usar a Acolha](#4-como-usar-a-acolha)
* [5. Checklist](#5-checklist)
* [6. Hacker edition](#6-hacker-edition)
* [7. Considerações técnicas](#7-considerações-técnicas)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)
* [9. Checklist](#9-checklist)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

O que eu tenho que fazer exatamente? Neste projeto você criará a primeira
aplicação web do _bootcamp_. Nela o usuário poderá cifrar e decrifrar um texto
indicando a chave de deslocamento (_offset_).

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

* Mensagens secretas para alguma pessoa.
* Ferramenta de mensagens internas de uma organização em uma zona de conflito.
* Cifrar cartões de crédito.
* Criar senhas seguras para email.

## 3. Conhecimentos Adquiridos

Neste projeto você aprenderá a construir uma aplicação web (_WebApp_) que irá
interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

Em outras palavras, você aprenderá:

* Organizar o seu tempo e priorizar as tarefas em um ambiente com **alta
  incerteza**.
* Entender as **necessidade do usuário** e propor uma solução.
* Entender a importância do processo de prototipação durante a criação de um
  produto digital.
* Conhecer os princípios básicos de desenho visual.
* Utilizar _tags_ semânticas de HTML e elementos de formulário.
* Mostrar elementos de formulário na tela usando **HTML** e **CSS**.
* Utilizar diversos tipos de seletores no CSS: elementos, classe e id.
* Utilizar o modelo de caixas do CSS (border, margin, padding).
* Definir regras de estilo do CSS.
* Permitir ao usuário interagir com elementos do DOM e fazer que a aplicação
  responda (cifrar/decifrar) quando os **evento de DOM** ocorrerem.
* Manipular _**strings**_ (cadeias de texto).
* Usar **controle de fluxo** (loops, condicionais, ...).
* Atualizar a tela com os resultados (**manipular o DOM**) através de
  **innerHTML** ou **textContent**.
* **Implementar uma função** dada a descrição do seu comportamento.
* Verificar que as suas funções façam o esperado (**usando provas unitárias
  (_unit test_) com Jest**).
* Configurar a sua conta de git.
* Fazer o _fork_ e _clone_ do repositório do projeto.
* Manter o seu repositório remoto sempre atualizado (commit, pull, push).
* Subir o seu projeto para o Github Pages.

## 4. Como usar a Acolha

* Este projeto deve ser resolvido individualmente.
* O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.

## 5. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [X] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [x] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [x] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [x] Usar VanillaJS.
* [x] **Não** usar `this`.
* [x] Implementar `cipher.encode`.
* [x] Implementar `cipher.decode`.
* [x] Passar o linter com a configuração definida.
* [x] Passar as provas unitárias.
* [x] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [x] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [x] Interface que permita escrever um texto para ser cifrado.
* [x] Interface que mostre o resultado da cifra corretamente.
* [x] Interface que permita escrever um texto para ser decifrado.
* [x] Interface que mostre o resultado decifrado corretamente.
