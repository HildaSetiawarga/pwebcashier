function order(){
    var invoice = document.forme;

    var pintel = 7000 * eval(invoice.pintel.value);
    var pdok = 10000 * eval(invoice.pdok.value);

    var TotalPrice = 0;

    var TotalPrice = pintel + pdok;
        if(TotalPrice>50000){
            invoice.Total.value = TotalPrice;
            invoice.Discount.value = 5000;
            invoice.Payment.value = TotalPrice - eval(invoice.Discount.value);
        }
        else{
            invoice.Total.value = TotalPrice;
            invoice.Discount.value = 0;
            invoice.Payment.value = TotalPrice - eval(invoice.Discount.value);
        }

    var PaymentReceived = parseInt(invoice.PaymentReceived.value);
    
    
    var Changee = PaymentReceived - TotalPrice;
    if(isNaN(PaymentReceived)||isNaN(TotalPrice)){
        alert("Please Enter Received Payment");
    }
    else{
        invoice.Total.value = TotalPrice;
        invoice.Changee.value = PaymentReceived - TotalPrice;
    }
}

function resetForm(){
    document.forme.reset();
}