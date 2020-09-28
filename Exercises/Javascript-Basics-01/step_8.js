alert("Please fill the form");
document.getElementById("validate").onclick = function() {
    let age = parseInt(document.getElementById("age").value);
    console.log(age);
    let msg = (age > 17) ? "you are 18 or over" : "You are under 18"
    alert(msg);
    return false;
};