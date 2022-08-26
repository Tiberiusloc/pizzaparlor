//Business Logic
function Pizza (size, sauce, dip) {
this.size = size
this.sauce = sauce
this.dipping = dip
this.toppings = [];
this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  this.size = this.size;
  if(this.size.includes("Small")) {
    this.price = 8;
  } else if (this.size.includes('Medium')) {
    this.price = 10;
  } else {
    this.price = 12
  }
  return this.price
}

Pizza.prototype.saucePrice = function() {
  this.sauce = this.sauce;
  if(this.sauce === 'Red Sauce') {
    this.price += 2;
  } else if (this.size === 'White Sauce') {
    this.price += 3;
  } else {
    this.price += 0
  }
  return this.price
}

Pizza.prototype.dippingPrice = function() {
  this.dipping = this.dipping;
  if(this.dipping.includes("Ranch")) {
    this.price += 2;
  } else if (this.dipping.includes("Marinara")) {
    this.price += 1;
  } else {
    this.price += 0
  }
  return this.price
}

Pizza.prototype.toppingPrice = function() {
  return this.price += (this.toppings.length * 2);
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let size = document.querySelector("#pizza-size").value;
  let sauce = document.querySelector("#sauce-option").value;
  let dip = document.querySelector("#dipping-option").value;
  let toppings = [];
  let toppingchoices = document.querySelectorAll('input[name="topping"]:checked')
  toppingchoices.forEach((toppingchoices) => {
    toppings.push(toppingchoices.value)
    console.log(toppings)
    console.log(sauce)
    console.log(size)
    console.log(dip)

  });
  let pizza = new Pizza(size, sauce, dip)

  pizza.sizePrice()
  console.log(pizza.sizePrice())
  pizza.saucePrice()
  pizza.dippingPrice()
  pizza.toppingPrice()
  const totalPrice = pizza.price
  document.querySelector("span#totalprice").innerText = totalPrice
}



window.addEventListener("load", function() {
  document.querySelector("form#pizzaform").addEventListener("submit", handleFormSubmission);
})


