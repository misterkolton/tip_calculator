// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//   greeting = "Good evening";
// } else if (hourNow > 12) {
//   greeting = "Good afternoon";
// } else if (hourNow > 0) {
//   greeting = "Good morning";
// } else {
//   greeting = "Welcome";
// }
// document.write(greeting + "!);


// let billAmount = document.getElementById("billAmount").value
// let tipInput = document.getElementById("tipInput").value


// function logEvent(e) {
//     // Simply console logging the event
//     console.log("The whole Event: ", e);
//     // Now we're drilling into the events target (target being the DOM node that the event happened on)
//     console.log("Target: ", e.target);
//     // Now we want the value="" attribute off of the DOM node that the event happened on (if you look in HTML, <button value=(this is what you'll get in the console))/>
//     console.log("Value: ", e.target.value);
//   }

  

//   document.getElementById("billAmount").addEventListener("click", logEvent);
//   document.getElementById("tipInput").addEventListener("click", logEvent)

// let billAmount = 50

// function calculatedTip () {
//     tipInput * billAmount
//     console.log
// }
const tipSelectElement = document.getElementById("tipInput")
let billAmount =0;
let tipInput = tipSelectElement.value;
const tipOutput = document.querySelector(".tip-output")
const totalBill = document.querySelector(".total-bill")
const calulateButton = document.getElementById("calculate")
const billInputElement = document.getElementById("billInput")


function saveBill(e) {  
    billAmount = e.target.value 

}

function saveService(e) {  
    tipInput = e.target.value
}

function getTipAmount(amount, percentage) {
    return amount * percentage
    
}

function getTotalBill() {
    const tipAmount = getTipAmount(billAmount, tipInput)
    const calculatedBill = parseFloat(billAmount) + parseFloat(tipAmount)
    
    if (tipSelectElement.selectedIndex === 0) {
        alert("Select your service.")
        return
        
    }
    totalBill.innerHTML = (`Total Bill: $${calculatedBill}`)
   tipOutput.innerHTML = (`Tip: $${getTipAmount(billAmount, tipInput)}`)
}

billInputElement.addEventListener("change", saveBill)
calulateButton.addEventListener("click", getTotalBill)
tipSelectElement.addEventListener("change", saveService)

// console.log(billAmount);
// console.log(excellentTip);
// console.log(goodTip);
// console.log(fairTip);
// console.log(poorTip);

