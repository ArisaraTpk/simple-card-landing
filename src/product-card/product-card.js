import { TagRenderAll } from "../tag/tag";

export function ProductCardRender(data) {
  return `
     <style>
        .product-card {
          width: 250px;
          height: 350px;
          background-color: black;
          border-radius: 5%;
          margin: 8px;
          position: relative;
        }

        .img-product {
          padding: 20px;
          width: 200px;
          height: 200px;
          border-radius: 15%;
          padding-bottom: 10px;
        }

        .product-name {
          background: gray;
          width: 100px;
          font-size: small;
          display: inline-block;
          padding: 4px;
          border-radius: 4px;
          margin-top: 200px;
          margin-left: -180px;
          position: absolute;
        }

        .product-body {
          font-size: 12px;
          padding: 10px;
        }
     </style>
      <div class="product-card" >
        <img class="img-product" src="${data.img_url}" />
        <div class="product-name">${data.name}</div>
        <div class="product-body">${data.body}</div>
        ${TagRenderAll(data.tags)}
      </div>
      `;
}
