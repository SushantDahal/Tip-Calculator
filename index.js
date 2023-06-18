function myFunction() {
  var billTotal = document.getElementById("billTotal").value;
  var tipPercent = document.getElementById("tip-percent").value;

  if (billTotal === "" || tipPercent === "") {
    alert("Enter the Value in empty field!");
  } else {
    var tipAmount = (billTotal * tipPercent) / 100;

    var totalBillWithTip = parseFloat(billTotal) + parseFloat(tipAmount);

    document.getElementById("tipAmount").value = tipAmount.toFixed(2);
    document.getElementById("totalBillWithTip").value =
      totalBillWithTip.toFixed(2);
  }
}

const tipRange = document.getElementById("tipRange");
const tipPercentInput = document.getElementById("tip-percent");

tipRange.addEventListener("input", function () {
  tipPercentInput.value = tipRange.value;
  myFunction();
});
