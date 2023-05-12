function calculateZakat() {
  var income = document.getElementById('income').value;
  var expenses = document.getElementById('expenses').value;
  var debts = document.getElementById('debts').value;
  var assets = document.getElementById('assets').value;

  var total = income - expenses - debts;
  var zakat = 0.025 * assets;

  if (total > zakat) {
    document.getElementById('result').innerHTML = "You need to pay zakat of " + zakat.toFixed(2) + " SR.";
  } else {
    document.getElementById('result').innerHTML = "You do not need to pay zakat.";
  }
}
























let zakah = window.prompt()

console.log( 0.025 * zakah +"pound")