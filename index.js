function myFunction() {
  var billTotal = document.getElementById("billTotal").value;
  var tipPercent = document.getElementById("tip-percent").value;

  var tipAmount = (billTotal * tipPercent) / 100;

  var totalBillWithTip = parseFloat(billTotal) + parseFloat(tipAmount);

  document.getElementById("tipAmount").value = tipAmount.toFixed(2);
  document.getElementById("totalBillWithTip").value =
    totalBillWithTip.toFixed(2);
}
