import _ from "lodash";
import { MyProductList, MyTagList } from "../sourceProduct.js";
import { ProductCardRender } from "../product-card/product-card.js";

class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    var rawData = ``;

    for (var index in MyProductList) {
      var data = MyProductList[index];
      rawData = rawData + ProductCardRender(data);
    }

    var container = `
    <style>
      .container-product-cards {
        display: flex;
        flex-wrap: wrap;
        background-color: rgb(139, 139, 139);
        color: white !important;
        position: relative;
      }
    </style>
      <div class="container-product-cards" ">
      ${rawData}
      </div>
    `;
    this.shadow.innerHTML = container;
  }
}

customElements.define("product-card-list", ProductCard);
