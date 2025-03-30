//                  Ví dụ 1
// var a = 10;
// // var a; nếu không có giá trị thì nó sẽ là undefined, các hàm sẽ k đc thực thi
// var promise = new Promise((resolve, reject) => {
//   if (a !== undefined && a !== null && a !== "") {
//     resolve(a); // thành công
//   } else {
//     reject(a);
//   }
// });

// promise
//   .then((success) => {
//     console.log(success);
//     return success;
//   })
//   .then((success2) => {
//     console.log(success2);
//     const b = 20;
//     return success2 + b;
//   })
//   .then((success3) => {
//     const c = 30;
//     console.log(success3 + c);
//   })
//   .catch((errow) => {
//     console.log("Lỗi: ", errow);
//   })
//   .finally(() => {
//     console.log("Luôn luôn vào đây");
//   });

//                  Ví dụ 2

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(); // kết quả thành công
//   }, 3000);
// });

// console.log(promise);
// setTimeout(() => {
//   console.log("Sau 1 giây: ", promise);
// }, 1000);
// setTimeout(() => {
//   console.log("Sau 2 giây: ", promise);
// }, 2000);
// setTimeout(() => {
//   console.log("Sau 3 giây: ", promise);
// }, 3000);

//                  Ví dụ 3: Promise ALl

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;

let sum1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a + b);
  }, 2000);
});

let sum2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(c + d);
  }, 4000);
});

let sum3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(e + f);
  }, 6000);
});

Promise.all([sum1, sum2, sum3])
  .then(([sum1, sum2, sum3]) => {
    let sum = sum1 + sum2 + sum3;
    console.log(sum);
  })
  .catch(() => {})
  .finally(() => {});
