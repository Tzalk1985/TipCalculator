
function tipcount() {
    bill = parseFloat(document.getElementById("bill").value);
    tip = parseFloat(document.getElementById("tip").value);
    people = parseFloat(document.getElementById("people").value);
    tipAsPersent = tip / 100;
    totalTipAmount = bill * tipAsPersent;
    totalBill = bill + totalTipAmount;
    billPerPerson = totalBill / people;
    finalAmount = parseFloat(billPerPerson);



    console.log(finalAmount);

    document.getElementById('billPerPerson').innerHTML = finalAmount + " € ο καθένας" ;
    document.getElementById('totalBill').innerHTML = "Σύνολο : " + totalBill + " € " ;
}
