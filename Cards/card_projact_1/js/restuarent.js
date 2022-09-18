
// Increment function
function pieceIncrement(incrementPiece, singlePrice, storePiece){
// increment price pieceStore id
let increment = document.getElementById(incrementPiece);
let price = document.getElementById(singlePrice);
let pieceStore = document.getElementById(storePiece);

// condition
if (increment.value >= 5){
  alert("maximum 5 product alow");
  increment.value = 5;
}else{
 increment.value++;
 // convert
 let priceInt = Number(price.innerHTML);
 let pieceStoreInt = Number(pieceStore.innerHTML);
 let priceStoreTotal = pieceStoreInt + priceInt;
 // Set piece value
 pieceStore.innerHTML = priceStoreTotal;
 
 // Total Item id
 let totalItemAmount = document.getElementById('total_item_amount');
 let totalItemAmountInt = Number(totalItemAmount.innerHTML); // convert integer
 // set item price value
 let amountTotalItem = totalItemAmount.innerHTML = totalItemAmountInt + priceInt;
 
 // Total Amount and shipping id
 let shipping = document.getElementById('shipping');
 let totalAmount = document.getElementById('total_amount');
 let shippingInt = parseInt(shipping.innerHTML); // convert integer
 let totalAmountInt = parseInt(totalAmount.innerHTML); // convert integer
 // Set shipping charge
 let amountShippingTotal = totalAmount.innerHTML = amountTotalItem + shippingInt;
 
 // যখনই টোটাল এমাউন্ট 1000 উপরে হয়ে যাবে তখনই coupon_area এরিয়াটা শো করবে.
 // Discount Coupon Condition
 if(amountShippingTotal >= 1000){
 // Coupon Area Block
 let couponArea = document.getElementById("coupon_area");
 couponArea.style.display = "block";
 }
}
}







// Decrement function
function pieceDecrement(decrementPiece, singlePrice, storePiece){
// decrement price pieceStore id
let decrement = document.getElementById(decrementPiece);
let price = document.getElementById(singlePrice);
let pieceStore = document.getElementById(storePiece);

// condition
if (decrement.value <= 0){
  alert("minimum 1 product need");
  decrement.value = 0;
}else{
decrement.value--;

 // convert
  let priceInt = Number(price.innerHTML);
  let pieceStoreInt = Number(pieceStore.innerHTML);
  let priceStoreTotal = pieceStoreInt - priceInt;
  // Set piece minus value
  pieceStore.innerHTML = priceStoreTotal;
  
  // Total Item id
  let totalItemAmount = document.getElementById('total_item_amount');
  let totalItemAmountInt = Number(totalItemAmount.innerHTML); // convert integer
  // set item price value
  totalItemAmount.innerHTML = totalItemAmountInt - priceInt;
  
// Total Amount id
  let totalAmount = document.getElementById('total_amount');
  let totalAmountInt = parseInt(totalAmount.innerHTML); // convert integer
  // Minus Price 
  let minusTotalAmount = totalAmount.innerHTML = totalAmountInt - priceInt;
  // Minus shipping with condition
  if(minusTotalAmount <= 99){
    totalAmount.innerHTML = 0;
  }

// if টোটাল এমাউন্ট 1000 টাকার নিচে হয় আবার coupon_area এরিয়া NONE হয়ে যাবে
  // Discount Coupon Condition
  let couponArea = document.getElementById("coupon_area");
  if(totalAmount.innerHTML <= 999){
  couponArea.style.display = "none";
  }
}}







// Coupon Area none
// বাই ডিফল্ট গোপন এরিয়া NONE আছে
let couponArea = document.getElementById("coupon_area");
couponArea.style.display = "none";
// Coupon Area function
function discountCoupon(){
// Coupon Apply
let totalAmount = document.getElementById('total_amount');
let totalAmountInt = parseInt(totalAmount.innerHTML);
// এখানে আমরা couponInput কে ধরেছি এবং এর couponInput এর ভ্যালু সাথে রেনডম যদি সমান সমান হয় 
// তাহলে আমরা টোটাল from কে 100 minus করে সেট করে দিয়েছি এবং একটি এলার্ট মেসেজ দিয়েছি ইউর দিস্কাউন্ট সাকসেস
// এবং সাথে সাথে couponArea স্টাইল None করে দিয়েছি.
// রেনডম একটা ভেরিয়েবল এটা উপরে Defind করা আছে
let couponInput = document.getElementById("couponInput");
if(random == couponInput.value){

  // if is true set minus amount
totalAmount.innerHTML = totalAmountInt - 100;

// if is true display alert Sucess
alert('Your Discount Success.');

// if is true couponArea none
couponArea.style.display = "none";

// if is true block message
let message = document.getElementById("discountMessage");
message.innerHTML = "<h4 style='color:green'>Your Discount Success full <br /> and Your Total Amount</h4>";

// if is true block print button
document.getElementById("print").style.display = "block";

// if is true Increment Decrement button none
document.getElementById('increment1').style.display = "none";
document.getElementById('increment2').style.display = "none";
document.getElementById('increment3').style.display = "none";
document.getElementById('decrement1').style.display = "none";
document.getElementById('decrement2').style.display = "none";
document.getElementById('decrement3').style.display = "none";
}
}



// ফাংশনটা যদি ক্লিক করা হয় তাহলে একশন হবে
// Window Print function
function printWindow(){
 let confirmBox = confirm('Are You Seure Print, Click to Ok button.');
 if(confirmBox){
  window.print();
 }else{
 window.alert('Thank You for you Cancel.');
 // if is Cancel then display none print button,
document.getElementById("print").style.display = "none";
 }
}
