# Shopping Cart with React & Redux

As per the provided instructions, this is an implementation of a system that enables users to select items and adds them into a shopping cart. As items are added, deleted and amended from the shopping cart they can:
- view the number of items in the cart from the navigation bar at the top of the application.
- add/ delete to the quantity of a particular item, either in the shopping cart page or in the product page.

The shopping cart page displays all the items in the basket and the quantity of each item.

It also calculates the total cost of each item with the quantity bought.

A variable discount rate is applied, depending on the total cost of all items bought.

- 1% for total purchased that are £100 and under.
- 5% for total purchased that are £500 and under.
- 10% for total purchased that are £1000 and under.
- 15% for total purchased that are £100 and over.

Assumptions
- The application is built in React as a front-end implementation.
- Uses Jest for testing the application.
- Project can be run in both development or test mode.
- Data is mocked through a local json file.

Installation and setup

 Install Application

- Either fork or clone the repo onto your local machine.
- Run command ```npm install```    

Run Application

- To run the application ```npm start```

Test Application

A testing framework (jest) has been included in the ```/tests/App.test.js``` folder, running tests on the cost calculation functions.

- Test function that all items in the shopping bag are summed correctly.
- Test function that correct discount rate has been applied according to items total cost.
- Test function that total cost is correct after discount rate has been applied to the total cost of items in the shopping cart.

To run these tests:

  1. In a console run command ```npm run test```. (To initially trigger a test run the `a` character on the keyboard might need to be pressed.)

  2. Check console to see all tests have passed.
