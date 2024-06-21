let btnCheck = document.getElementById("btn");
btnCheck.addEventListener("click", getCheck);
function getCheck() {
  let Star = [
    "Polaris",
    "Aldebaran",
    "Deneb",
    "Vega",
    "Altair",
    "Dubhe",
    "Regulus",
  ];
  let Constellation = [
    "Ursa Minor",
    "Tarurus",
    "Cygnus",
    "Lyra",
    "Aquila",
    "Ursa Major",
    "Leo",
  ];
  let findStForCons = document.getElementById("txt").value;
  function checkStar(findStForCons) {
    let index_star = 0;
    let result = "";
    for (let i = 0; i < Star.length; i++) {
      if (Star[i] == findStForCons) {
        index_star = i;
        for (let j = 0; j < Constellation.length; j++) {
          if (index_star == j) {
            result = Constellation[j];
            return result;
          } else {
            result = "Không tìm thấy ngôi sao";
            return result;
          }
        }
      } else {
        result = "Không tìm thấy chòm sao";
        return result;
      }
    }
  }
  let resultStar = checkStar(findStForCons);
  document.getElementById("result1").innerHTML = `${resultStar}`;
}
