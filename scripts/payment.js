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
		// alert("Your order has been placed");
		// window.location.href = "index.html";
	}
};

// DOM manupulation
let subtotal = document.querySelector("#subtotal>span+span");
let deliveryCharge = document.querySelector("#delivery_charges>span+span");
let gst = document.querySelector("#gst>span+span");
let totalPrice = document.querySelector("#total>span+span");
let discountSpan = document.querySelector("#discount>span+span");
let amountDetails = JSON.parse(localStorage.getItem("amountDetails"));
let total__price_to_pay = document.querySelector("#totalPrice__");

console.log("amountDetails: ", amountDetails);
let discount = amountDetails.discount;
let SubValue = amountDetails.add;

const amounDetailsAppend = (discountedPrice, totalPayablePrice) => {
	subtotal.innerHTML =
		"Rs." +
		(discountedPrice || totalPayablePrice).toLocaleString("en-IN");
	deliveryCharge.innerHTML = `Rs. 40.00`;
	gst.innerHTML = "Rs." + `${(discountedPrice || totalPayablePrice) * 0.18}`;

	//todo discount for...
	if (discountedPrice)
		discountSpan.innerHTML =
			"Rs." +
			(totalPayablePrice - discountedPrice).toLocaleString("en-IN");
	else discountSpan.innerHTML = `Rs. 0.00`;

	//totolprice...
	let val =
		(discountedPrice || totalPayablePrice) +
		40 +
		(discountedPrice || totalPayablePrice) * 0.18;
	totalPrice.innerHTML = `Rs. ${val.toLocaleString("en-IN")}`;
	total__price_to_pay.innerHTML = `Rs. ${val.toLocaleString("en-IN")}`;
};
amounDetailsAppend(discount, SubValue);
