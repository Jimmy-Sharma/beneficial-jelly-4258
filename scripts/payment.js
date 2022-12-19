console.log("checkout.js");
let cardPayment = document.querySelector("#C_D_card");

cardPayment.onclick = () => {
	document.querySelector("#cardPayment").style.display = "block";
	document.querySelector("#popularbanks").style.display = "none";
	document.querySelector("#otherWallets").style.display = "none";
	document.querySelector("#UPIpayment").style.display = "none";
};

let netPayment = document.querySelector("#N_banking");
netPayment.onclick = () => {
	document.querySelector("#cardPayment").style.display = "none";
	document.querySelector("#popularbanks").style.display = "block";
	document.querySelector("#otherWallets").style.display = "none";
	document.querySelector("#UPIpayment").style.display = "none";
};

let walletPayment = document.querySelector("#O_wallets");
walletPayment.onclick = () => {
	document.querySelector("#cardPayment").style.display = "none";
	document.querySelector("#popularbanks").style.display = "none";
	document.querySelector("#otherWallets").style.display = "block";
	document.querySelector("#UPIpayment").style.display = "none";
};

let upiPayment = document.querySelector("#Upi");
upiPayment.onclick = () => {
	document.querySelector("#cardPayment").style.display = "none";
	document.querySelector("#popularbanks").style.display = "none";
	document.querySelector("#otherWallets").style.display = "none";
	document.querySelector("#UPIpayment").style.display = "block";
};

let COD = document.querySelector("#Cash_on_Delivery");
let CODcount = 0;
COD.onclick = () => {
	document.querySelector("#cardPayment").style.display = "none";
	document.querySelector("#popularbanks").style.display = "none";
	document.querySelector("#otherWallets").style.display = "none";
	document.querySelector("#UPIpayment").style.display = "none";
	CODcount++;
};

let select = document.querySelector("#selectBanks");
var count = 0;
console.log("count:", count);
select.onclick = () => {
	count++;
};

var OWcount = 0;
let selctOW = document.querySelector("#otherWallets_button");
selctOW.onclick = () => {
	OWcount++;
};

let checkout = document.querySelector(".checkout");
checkout.onclick = () => {
	let cardNo = document.querySelector("#cardNo").value;
	let cardName = document.querySelector("#cardName").value;
	let cardCVV = document.querySelector("#cardCVV").value;
	let upiCod = document.querySelector("#thisIsUpi").value;
	let alert1 = document.querySelector("#makeCardP1None");
	let alert2 = document.querySelector("#makeCardP2None");

	if (cardNo.length != 16 || cardName.length < 3 || cardCVV.length != 3) {
		alert1.style.display = "block";
		alert2.style.display = "block";
	}
	if (
		(cardNo.length == 16 &&
			cardName.length >= 3 &&
			cardCVV.length == 3) ||
		count >= 2 ||
		OWcount >= 1 ||
		upiCod.includes(">") ||
		CODcount > 0
	) {
		alert1.style.display = "none";
		alert2.style.display = "none";
		localStorage.setItem("flag", JSON.stringify("true"));
		window.location.reload();
		alert("Your order has been placed");
		window.location.href = "index.html";
	}

	JSON.parse(localStorage.removeItem("cart_data"))
	JSON.parse(localStorage.removeItem("payment"))
};

// DOM manupulation
let subtotal = document.querySelector("#subtotal>span+span");
let deliveryCharge = document.querySelector("#delivery_charges>span+span");
let totalPrice = document.querySelector("#total>span+span");
let total__price_to_pay = document.querySelector("#totalPrice__");

let amount=JSON.parse(localStorage.getItem("payment"))
let total_amt=amount+99
totalPrice.innerText="₹ "+total_amt
subtotal.innerText="₹ "+amount
total__price_to_pay.innerText="₹ "+amount

deliveryCharge.innerText="₹ 99"

