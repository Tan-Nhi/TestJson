export function tong(a, b, callback) {
  let ketqua = a + b;
  console.log(ketqua);
  //   kiemTraSoDuong(ketqua); đây là truyền theo cách thường
  //   kiemTraChanLe(ketqua);
  callback(ketqua); // truyền theo cách callback
}
