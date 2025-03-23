<h1 style="text-align:center;">Lesson 5 </h1>

## Math object

- constants, properties
- methods
- random

<hr><br><br><br>

# constants, properties

| Xususiyat    | Qiymat             | Tavsif                                                     |
| ------------ | ------------------ | ---------------------------------------------------------- |
| Math.E       | 2.718281828459045  | Euler soni, natural logarifmlar asosi.                     |
| Math.PI      | 3.141592653589793  | Pi soni, doiraning aylana uzunligining diametriga nisbati. |
| Math.SQRT2   | 1.4142135623730951 | 2 ning kvadrat ildizi.                                     |
| Math.SQRT1_2 | 0.7071067811865476 | 1/2 ning kvadrat ildizi.                                   |
| Math.LN2     | 0.6931471805599453 | 2 ning natural logarifmi.                                  |
| Math.LN10    | 2.302585092994046  | 10 ning natural logarifmi.                                 |
| Math.LOG2E   | 1.4426950408889634 | E ning 2 asosidagi logarifmi.                              |
| Math.LOG10E  | 0.4342944819032518 | E ning 10 asosidagi logarifmi.                             |

<hr><br><br><br>

# Math methods

| Metod                    | Tavsif                                                                          |
| ------------------------ | ------------------------------------------------------------------------------- |
| Math.abs(x)              | x ning mutlaq qiymatini qaytaradi.                                              |
| Math.exp(x)              | e ning x darajasini qaytaradi.                                                  |
| Math.hypot(...values)    | Berilgan argumentlarning kvadratlari yig'indisining kvadrat ildizini qaytaradi. |
| Math.log(x)              | x ning natural logarifmini qaytaradi.                                           |
| Math.log10(x)            | x ning 10 asosidagi logarifmini qaytaradi.                                      |
| Math.log1p(x)            | 1 + x ning natural logarifmini qaytaradi.                                       |
| Math.log2(x)             | x ning 2 asosidagi logarifmini qaytaradi.                                       |
| Math.max(...values)      | Berilgan argumentlar orasidan eng katta qiymatni qaytaradi.                     |
| Math.min(...values)      | Berilgan argumentlar orasidan eng kichik qiymatni qaytaradi.                    |
| Math.pow(x, y)           | x ning y darajasini qaytaradi.                                        |
| Math.random()            | 0 (kiritilgan) va 1 (kiritilmagan) oralig'ida tasodifiy sonni qaytaradi.        |
| Math.sign(x)             | x ning ishorasini aniqlaydi: manfiy uchun -1, musbat uchun 1, nol uchun 0.      |
| Math.sqrt(x)             | x ning kvadrat ildizini qaytaradi.                                              |
| Math.round(x)            | x ni eng yaqin butun songa yaxlitlaydi.                                         |
| Math.ceil(x)             | x ni yuqoriga qarab eng yaqin butun songa yaxlitlaydi.                          |
| Math.floor(x)            | x ni pastga qarab eng yaqin butun songa yaxlitlaydi.                            |
| Math.trunc(x)            | x ning butun qismini qaytaradi, kasr qismini olib tashlaydi.                    |

<hr><br><br><br>

# random

- returns a random number between 0 (inclusive), and 1 (exclusive) [0, 1)
- `Math.floor(Math.random() * (max - min) ) + min;` [min, max)
- `Math.floor(Math.random() * (max - min + 1) ) + min;` [min, max]
