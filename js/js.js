// Thanh Car Xào
function loadCarMonXao() {
  return fetch("CarMonXao.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonXao").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}
// Thanh Car Xào HS
function loadCarMonXaoHS() {
  return fetch("CarMonXaoHS.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("CarMonXaoHS").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}

//  thanh Car

function loadCar() {
  return fetch("Car.html") // Thêm return để đảm bảo trả về Promise
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("container-card").innerHTML = data;
    })
    .catch((error) => console.log(" Lỗi khi tải card:", error));
}
window.onload = function () {
  loadCarMonXao();
  loadCarMonXaoHS();
  loadCar();
};
