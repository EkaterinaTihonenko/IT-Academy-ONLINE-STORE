import { Component } from './core/Component';
import './components/organisms/header';

class App extends Component {
  render() {
    return `
      <div>
         <it-header></it-header>
      </div>
   `;
  }
}

customElements.define('it-app', App);
