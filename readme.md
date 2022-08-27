
# Pizza Parlor Project


#### By: _**Tiberius Lockett**_


#### This is an application where a user can input items and receive a pizza order.


## Technologies Used


* *_HTML_*  
* *_CSS_*  
* *_JavaScript_*
* *_Bootstrap_*


## Description


This site lets the user to choose pizza size, sauce, dips, and toppings to pick out a pizza to order. Using JavaScript to take inputs and return the final cost of a pizza.


## Setup/Installation Requirements

* Clone this repository to your desktop by using the URL.
* Open Git bash
* Change to directory you'd like to work in
* Use command Git Clone with URL
* Press Enter to command cloning
* Open folder where you cloned repository into
* Open index.html in your browser default broswer.


## Known Bugs


* If click button with different inputs will change price

## Tests

<details>
<summary>Tests</summary>
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
  let pizza = new Pizza("Small", "Red Sauce", "Ranch")
  pizza.sizePrice
Expected Return: 8

Describe saucePrice()

Test: "It should return price of pizza depending on sauce that was selected and add it to the size price."
Code:
  let pizza = new Pizza("Small", "Red Sauce", "Ranch")
  pizza.saucePrice()
Expected Return: 10

Describe dippingPrice()

Test: "It should return price of pizza depending on dip that was selected"
Code:
  let pizza = new Pizza("Small", "Red Sauce", "Ranch")
  pizza.dippingPrice()
Expected Return: 12

Describe toppingPrice()

Test: It should return the price of the pizza depending on number of toppings selected"
Code:
  let pizza = new Pizza("Small", "Red Sauce", "Ranch")
  pizza.toppingPrice()
Expected Return:
14
</details>

## License
[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)


Copyright (c) _08/2022_ _Tiberius Lockett_
