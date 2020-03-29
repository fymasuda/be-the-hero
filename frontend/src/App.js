/**
 * CONCEITOS REACT<------------------------------------------------------------------------------
 * 
 * Componente: Uma função que retorna HTML, contendo um JSX
 * Quando tem algum código que se repete muitas vezes, se utiliza um componente.
 * Exemplo de Componente: "App.js", escrito Capitalizado
 * 
 * JSX (JavaScript XML - Html/XML escrito dentro do JS)
 * 
 * Propriedade: Possuem a estrutura de atributos do HTML, são utilizados para componentes
 * <Header title="Semana OmniStack" />  props da componente Header(props)
 * 
 * Estado: Uma informação que vai ser mantida pelo componente, se alterado, 
 * ele deve ser renderizado do zero.
 * 
 * Imutabilidade: Por uma questão de performance não pode alterar um valor do Estado diretamente, 
 * devemos SOBREPOR este valor. 
 * <----------------------------------------------------------------------------------------------
 */

  /** useState retorna um Array com 2 posições: [valor, funcaoDeAtualizacao]
   *  let [counter, setCounter] = useState(0);
   *  function increment() {
   *  setCounter(counter + 1);
   *  } 
   */

/*  <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div> */


import React, { useState } from 'react';

import Routes from './routes';

import './global.css'

function App() {
  return (
    <Routes />
  );
}

export default App;
