// cách dùng rút gọn
const fetchApi = (url) => {
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return result;
};

// Get category
fetchApi("https://dummyjson.com/products/categories").then((data) => {
  let htmls = "";
  data.forEach((item) => {
    htmls += `
          <div class="category-item">${item.slug} </div>
          `;
  });
  console.log(htmls);
  const divCategory = document.querySelector("#category");
  divCategory.innerHTML = htmls;
});

// Get Products
fetchApi("https://dummyjson.com/products/category/fragrances").then((data) => {
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

// Cách bình thường
//GET category , dùng forEach
// fetch("https://dummyjson.com/products/categories") // data từ server trả về
//   .then((response) => response.json()) // sau đó nhận dược phannr hồi trả về
//   .then((data) => {
//     // dữ liệu dạng javascript
//     let htmls = "";
//     data.forEach((item) => {
//       htmls += `
//       <div class="category-item">${item.slug} </div>
//       `;
//     });
//     console.log(htmls);
//     const divCategory = document.querySelector("#category");
//     divCategory.innerHTML = htmls;
//   });
// // End Get category

// //Get Product
// fetch("https://dummyjson.com/products/category/fragrances")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.products);
//     let htmls = "";
//     data.products.forEach((item) => {
//       htmls += `
//            <div class="product-item">
//              <img src="${item.thumbnail}" alt="${item.title}" />
//             <h3>${item.title}</h3>
//          <p>${item.price}</p>
//       </div>
//       `;
//     });
//     console.log(htmls);
//     const divProducts = document.querySelector("#products");
//     divProducts.innerHTML = htmls;
//   });
//End Get Product
