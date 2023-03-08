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
                  <div class="container">
                     <h5 class="card-title">${title}</h5>
                     <p class="card-text">${description}</p>
                  </div>
                  <div class="container d-flex align-items-center">
                     <small class="card-title pricing-card-title m-0">${price}$</small>
                     <a href="#" class="btn btn-primary m-2 p-1">Go somewhere</a>
                  </div>
               </div>
            </div>
      `;
  }
}

customElements.define('it-card', Card);
