function Pizza (size, sauce, dip) {
this.size = size
this.sauce = sauce
this.dipping = dip
this.toppings = [];
}

const sizes = [
  {size: "Small", price: 7},
  {size: "Medium", price: 10},
  {size: "Large", price: 12},
  {size: "Extra Large", price: 15},
]

const sauces = [
  {sauce: "Red Sauce", price: 0},
  {sauce: "White Sauce", price: 2},
  {sauce: "Suprise", price: 4}
]

const dippings = [
  {dipping: "Ranch", price: 1},
  {dipping: "Chipotle Ranch", price: 1},
  {dipping: "Marinara", price: 1},
  {dipping: "Buffalo", price: 1}
]
