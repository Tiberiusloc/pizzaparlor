function Pizza (size, sauce, dip) {
this.size = size
this.sauce = sauce
this.dipping = dip
this.toppings = [];
this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  this.size = this.size;
  if(this.size === 'Small') {
    this.price = 8;
  } else if (this.size === 'Medium') {
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
  if(this.dipping === 'Ranch') {
    this.price += 2;
  } else if (this.dipping === 'Marinara') {
    this.price += 1;
  } else {
    this.price += 0
  }
  return this.price
}

