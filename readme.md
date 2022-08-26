"Make a userPizza constructor to gather user inputs and create userPizza object"

"Create objects for the size, sauce, toppings, dipping sauces, that are included in our have prize and size"

"Connect input values with correct object names so user can make selection and return cost of pizza"

Describe userPizza (userSize, userSauce, userTopping)

Test 1: It should take the user inputs and create a pizza with the correct inputs"
Code:
  userPizza("small", "marinara", "cheese")
Expected Return:
userPizza {size: 'small', sauce: 'marinara', topping: 'cheese'}
 
Test 2: It should allow the user to input multiple toppings into our userPizza function
Code: 
  userPizza("small", "ranch", "cheese and pepperoni")
Expected Return:
userPizza {size: 'small', sauce: 'marinara', 'ranch' topping = [] to allow to push toppings into array for multiple options?