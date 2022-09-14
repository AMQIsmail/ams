 // prompt with user area
 let user = prompt("Pleass Enter Your Name...");
 if(user){
 document.getElementById("user").innerHTML = "Hello, " + "' "+user+" ' " + " Welcome Our Website.";
 }else{
 let userArea = document.getElementById("userArea");
 userArea.style.display = 'none';
 }
 

 
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
   // Discount Coupon Condition
   if(totalAmount.innerHTML <= 999){
   let couponArea = document.getElementById("coupon_area");
   couponArea.style.display = "none";
   }
 }}
 
 
 
 // Coupon Area none
 let couponArea = document.getElementById("coupon_area");
 couponArea.style.display = "none";
 // Coupon Area function
 function discountCoupon(){
 // Coupon Apply
 let totalAmount = document.getElementById('total_amount');
 let totalAmountInt = parseInt(totalAmount.innerHTML);
 let couponInput = document.getElementById("couponInput");
 if(random == couponInput.value){
 totalAmount.innerHTML = totalAmountInt - 100;
 alert('Your Discount Success.');
 couponArea.style.display = "none";
 let message = document.getElementById("discountMessage");
 message.innerHTML = "<h4 style='color:green'>Your Discount Success full <br /> and Your Total Amount</h4>";
 document.getElementById("print").style.display = "block";
 // Increment Decrement button none
 document.getElementById('increment1').style.display = "none";
 document.getElementById('increment2').style.display = "none";
 document.getElementById('increment3').style.display = "none";
 document.getElementById('decrement1').style.display = "none";
 document.getElementById('decrement2').style.display = "none";
 document.getElementById('decrement3').style.display = "none";
 }else{
  alert("Dash not match Coupon code");
 }
 }
 
 // Window Print function
 function printWindow(){
  let confirmBox = confirm('Are You Seure Print, Click to Ok button.');
  if(confirmBox){
   window.print();
  }else{
  window.alert('Thank You for you Cancel.');
  }
 }