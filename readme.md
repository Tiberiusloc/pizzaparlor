"Make a Pizza constructor to gather user inputs and create Pizza object"

Describe Pizza();

Test 1: It should take the user inputs and create a pizza with the correct inputs"
Code:
  let pizza = new Pizza("small","cheese","pepperoni","bacon")
Expected Return:
  Pizza {size: 'small', topping1: 'cheese', topping2: 'pepperoni', topping3: 'bacon'}

Describe totalCost()

Test 1: It should add the cost of different toppings and size and return no cost if no toppings are selected.
Code: 
   let pizza = new Pizza("0","0","0","0")
Expected Return:
  Total cost = 0;