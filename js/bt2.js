let btnInCrease = document.getElementById("btn");
btnInCrease.addEventListener("click", getInCrease);
function getInCrease(){
    let numberInCrease = Number(document.getElementById("number").value);
    function inCrease(numberInCrease){
        return numberInCrease +1;
    }
    let result = inCrease(numberInCrease);
    document.getElementById("result").innerHTML = `Giá trị vừa nhập là '${numberInCrease}'`
    document.getElementById("result1").innerHTML = `Giá trị vừa được tăng lên 1 là '${result}'`;
}