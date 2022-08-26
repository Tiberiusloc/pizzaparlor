function Pizza (size, sauce, dip) {
this.size = size
this.sauce = sauce
this.dipping = dip
this.toppings = [];
this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  this.size = this.size;
  if(this.size === "small") {
    this.price = 8;
  } else if (this.size === 'medium') {
    this.price = 10;
  } else {
    this.price = 12
  }
  return this.price
}
