alert("pleasse the form and see what you'll get");

/**Multiplies the shoe size by 2
Adds 5
Multiplies by 50
Subtracts the birth year
Adds 1766 */


let calc = function() {
    let size = document.getElementById("shoe_size").value;
    let year = document.getElementById("year").value;
    alert(`${(((size * 2) + 5)*50) - year + 1766} only god knows what does that mean`);
    return false;
}