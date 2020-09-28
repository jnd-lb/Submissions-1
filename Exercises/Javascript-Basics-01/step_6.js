alert("Please Fill the for with 2 number to get the remainder of their division");

let calc = function() {
    let one = document.getElementById("first_number").value;
    let two = document.getElementById("second_number").value;
    alert(`${one} ÷ ${two} = ${one/two} and the remainder is ${one%two}`);
    return false;
}