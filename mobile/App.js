import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

/** View utiliza no lugar de div, section, etc.
 * Text para qualquer tipo de texto
 * Não tem semântica
 * Estilização não tem className, não tem ID, precisa colocar um style e usar a componente Stylesheet
 * O display padrão é flex para todos os elementos 
 * Propriedades não tem hifem, ele usa capitalização background-color vira backgroundColor
 * tudo o que for definido na propriedade leva '', por exemplo backgroundColor: '#7159C1'
 * Herança de Estilos, o StyleSheet não funciona como casscata, button {color: '#FFF'} não pode 
 * passar para um button.className{alignItems: 'center'} para ter a prop { color: '#FFF' }  
 * Estilização é própria, cada elemento tem a sua. 
 */

export default function App() {
  return (
    <Routes />
  );
}
