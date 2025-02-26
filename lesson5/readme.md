<h1 style="text-align:center;">Lesson 5 </h1>

## Math object

- constants, properties
- methods
- random

<hr><br><br><br>

# constants, properties

| Math.E         |         returns Euler's number 2.711111 |
| -------------- | --------------------------------------- |
| Math.PI        | returns PI                              |
| Math.SQRT2     | returns the square root of 2            |
| Math.SQRT1_2   | returns the square root of 1/2          |
| Math.LN2       | returns the natural logarithm of 2      |
| Math.LN10      | returns the natural logarithm of 10     |
| Math.LOG2E     | returns base 2 logarithm of E           |
| Math.LOG10E    | returns base 10 logarithms of E         |

<hr><br><br><br>

# Math methods

| method                     | return                                                                  |
| -------------------------- | ----------------------------------------------------------------------- |
| Math.round(x)              | Returns x rounded to its nearest integer                                |
| Math.trunc(x)              | Returns the integer part of x                                           |
| Math.ceil(x)               | Returns x rounded up to its nearest integer                             |
| Math.floor(x)              | Returns x rounded down to its nearest integer                           |
| Math.sign(x)               | Returns 1, 0, and -1 for positive, zero, and negative, respectively     |
| Math.pow()                 | Returns the value of x to the power of y                                |
| Math.sqrt()                | Returns the square root of x:                                           |
| Math.abs()                 | Returns the absolute (positive) value of x:                             |
| Math.min() and Math.max()  | Returns the lowest or highest value in a list of arguments              |
| Math.cos(x) or Math.sin(x) | Returns the cosine and the sine                                         |
| Math.random()              | Returns a random number between 0 (inclusive), and 1 (exclusive) [0, 1) |

<hr><br><br><br>

# random

- returns a random number between 0 (inclusive), and 1 (exclusive) [0, 1)
- `Math.floor(Math.random() * (max - min) ) + min;` [min, max)
- `Math.floor(Math.random() * (max - min + 1) ) + min;` [min, max]