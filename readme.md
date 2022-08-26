
"Make a Pizza constructor to gather user inputs and create Pizza object"


Describe Pizza();

Test 1: It should take the user inputs and create a pizza and store the information"
Code:
  let pizza = new Pizza ("small", "marinara","ranch")
Expected Return:
Pizza {size: 'small', sauce: 'marinara', dipping: 'ranch', toppings: Array(0)}

Describe sizePrice()

Test: "It should return price of pizza depending on size that was selected"
Code:
  let pizza = new Pizza("Large")
  pizza.sizePrice