import { fetchApiAsyncAwait } from "./helpers/fetchAPI.js";

fetchApiAsyncAwait("http://localhost:3000/products").then((data) => {
  // dùng từ json-server
  let htmls = "";
  data.products.forEach((item) => {
    htmls += `
                 <div class="product-item">
                   <img src="${item.thumbnail}" alt="${item.title}" />
                  <h3>${item.title}</h3>
               <p>${item.price}</p>
            </div>
            `;
  });
  console.log(htmls);
  const divProducts = document.querySelector("#products");
  divProducts.innerHTML = htmls;
});
