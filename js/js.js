// Thanh Car Xào
function loadCarMonXao() {
  return fetch("../Car/CarMonXao.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonXao").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}
// Thanh Car Xào HS
function loadCarMonXaoHS() {
  return fetch("../Car/CarMonXaoHS.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonXaoHS").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}

//  thanh Car

function loadCar() {
  return fetch("../Car/Car.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("container-card").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}

// Thanh Car Món Nước Ăn Sáng
function loadCarMonNuocAnSang() {
  return fetch("../Car/CarMonNuocAnSang.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonNuocAnSang").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}
// Thanh Car Món Ăn Trưa
function loadCarMonAnTrua() {
  return fetch("../Car/CarMonAnTrua.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonAnTrua").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}
// Thanh Car Món Lẩu
function loadCarMonLau() {
  return fetch("../Car/CarMonLau.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonLau").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}
window.onload = function () {
  loadCarMonXao();
  loadCarMonXaoHS();
  loadCar();
  loadCarMonNuocAnSang();
  loadCarMonAnTrua();
  loadCarMonLau();
};
