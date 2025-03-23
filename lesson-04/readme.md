<h1 style="text-align:center;">Lesson 4 </h1>

## Operators

- Assignment
- Comparison
- Logical
- Nullish coalescing `??`

<hr> <br><br><br>

# Assignment

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \_=      | x \_= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

<hr> <br><br><br>

# Comparison

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| >=       | greater than or equal to          |
| <        | less than                         |
| <=       | less than or equal to             |

<hr> <br><br><br>

# Logical


`and = &&` <br>
`not = !` <br>
`or = ||` <br>


| Operator | Description               | Examples                                                                                             |
| -------- | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| &&       | logical and (conjunction) | true && true = true <br> true && false = false <br> false & true = false <br> false && false = false |
| !        | logical not (inversion)   | !true → false !false → true                                                                          |
| or       | logical or (dis-junction) | true or true = true <br> true or false = true <br> false or true = true <br> false or false = false  |


<hr> <br><br><br>

#  Nullish coalescing `??`

```
let nullish = 123 ? false
```