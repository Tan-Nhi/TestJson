import { tong } from "./helpers/tong.js";
import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";

//          Ví dụ 1: dạng thường

// function ham1() {
//   console.log("Ham 1");
// }
// function ham2() {
//   console.log("Ham 2");
// }
//
// ham1();
// ham2();

//           Ví dụ 2: Dạng CallBacks
// biến a đặt tên truyền gì vào cũng được
// function ham1(a) {
//   console.log("Ham 1");
//   a(); // Gọi hàm callback
// }
// function ham2() {
//   console.log("Ham 2");
// }

// ham1(ham2); //truyền đối số của hàm 1

//          Ví dụ 3

// function kiemTraSoDuong(so) {
//   if (so >= 0) {
//     console.log("Đay là số dương");
//   } else {
//     console.log("Đay là số âm");
//   }
// }

// function kiemTraChanLe(so) {
//   if (so % 2 == 0) {
//     console.log("Đây là số chẵn");
//   } else {
//     console.log("Đây là số lẻ");
//   }
// }

// function tong(a, b, callback) {
//   let ketqua = a + b;
//   console.log(ketqua);
//   //   kiemTraSoDuong(ketqua); đây là truyền theo cách thường
//   //   kiemTraChanLe(ketqua);
//   callback(ketqua); // truyền theo cách callback
// }

// tong(12, 18); cách thường

tong(12, 18, kiemTraSoDuong);
tong(12, 18, kiemTraChanLe); // truyền theo cách callback
