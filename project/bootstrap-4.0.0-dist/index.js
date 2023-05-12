function calculateZakat() {
    var income = document.getElementById("income").value;
    var assets = document.getElementById("assets").value;
    var zakat = 0.025 * (parseInt(income) + parseInt(assets) );
    document.getElementById("zakatResult").innerHTML = "Your Zakat is: " + zakat.toFixed(2) ;
}