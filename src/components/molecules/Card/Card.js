import { Component } from '../../../core/Component';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price'];
  }

  render() {
    const { image, title, description, price } = this.props;
    return `
            <div class="card">
               <img class="image-fit" src="${image}" alt="image">
               <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <small class="card-title pricing-card-title">${price}$</small>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
            </div>
      `;
  }
}

customElements.define('it-card', Card);
