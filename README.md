Here's my implementation of the task outlined below.

### Install

```sh
$ git clone <url>
$ cd to repo
$ npm install
$ yarn test
# or 
$ npm test
```
----------------------------------------
The Shopping Cart


Consider a store where each item has a price per unit, and may also have a volume price. For example, apples may be $1.00 each or 4 for $3.00.

Implement a point-of-sale scanning API that accepts an arbitrary ordering of products (similar to what would happen at a checkout line) and then returns the correct total price for an entire shopping cart based on the per unit prices or the volume prices as applicable.

Here are the products listed by code and the prices to use (there is no sales tax):

Product Code | Price

--------------------

A | $2.00 each or 4 for $7.00

B | $12.00

C | $1.25 or $6 for a six pack

D | $0.15


For your solution there should be a top level point of sale terminal service object, or namespace, that allows you to specify pricing, scan products, and calculate the total for a customer, similar to the pseudo code below. You are free to design and implement the code however you wish, including how you specify the prices in the system:

t= Terminal(PricingInfo)

t.scan(“A”)

t.scan(“B)”

t.scan(“C”)

t.total() -> $total for cart

Here are the minimal inputs you should use for your test cases. These test cases must be shown to work in your program:

Scan these items in this order: ABCDABAA; Verify the total price is $32.40.

Scan these items in this order: CCCCCCC; Verify the total price is $7.25.

Scan these items in this order: ABCD; Verify the total price is $15.40.