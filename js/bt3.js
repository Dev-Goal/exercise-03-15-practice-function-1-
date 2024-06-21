let btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let firstNumber = Number(document.getElementById("firstNumber").value);
  let secondNumber = Number(document.getElementById("secondNumber").value);
  function checkExpress(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
      alert("Welcome to Codegym");
    } else {
      return firstNumber + secondNumber;
    }
  }
  let result = checkExpress(firstNumber, secondNumber);
  if (result !== undefined) {
    alert(`Tổng 2 số là ${result}`);
  }
}

// function checkAndSum(param1, param2) {
//     if (param1 > param2) {
//         alert("Giá trị của tham số thứ nhất lớn hơn tham số thứ hai!");
//     } else {
//         return param1 + param2;
//     }
// }

// // Gọi hàm với các tham số khác nhau để kiểm tra
// checkAndSum(3, 5); // Sẽ hiển thị hộp thoại thông báo
// alert(checkAndSum(3, 5)); // Sẽ trả về 6
