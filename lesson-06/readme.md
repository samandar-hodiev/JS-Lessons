<h1 style="text-align:center;">Lesson 6 </h1>

- Number constructor
- Number Properties
- Number constructor Methods
- Number methods
- Type conversion and coercion

  - … → number
  - … → string

- Number() vs new Number() farqi nima?

<hr><br><br><br>

# Number constructor

> JavaScript-da `Number()` funksiyasi va `new Number()` konstruktorining ishlashi farqlidir. Quyida ularning asosiy farqlarini..

<br>

> `Number(value)` → Primitive qiymat qaytaradi
> Agar `Number()` funksiyasi `new` so‘zisiz chaqirilsa, u berilgan qiymatni oddiy number (`primitiv`) ga o‘giradi.

```
console.log(Number("123"));  // 123 (number)
console.log(Number(true));   // 1
console.log(Number(false));  // 0
console.log(Number(null));   // 0
console.log(Number("abc"));  // NaN (Not a Number)
```

Xususiyatlar:

- Oddiy primitiv (number) qiymat qaytaradi.
- parseInt() yoki parseFloat() ga o‘xshab ishlaydi.
- Agar string ichida faqat raqam bo‘lsa, songa o‘giradi.
- Noto‘g‘ri qiymat bo‘lsa, NaN qaytaradi.

<br><br>

> `new Number(value)` → Number Object yaratadi
> Agar `Number()` `new` bilan chaqirilsa, u obyekt (`Number object`) yaratadi.

```
let numObj = new Number(123);
console.log(numObj);  // [Number: 123]
console.log(typeof numObj);  // "object"
```

Xususiyatlar:

- Obyekt (Number object) qaytaradi.
- Primitiv numberga qaraganda sekinroq ishlaydi.
- typeof orqali tekshirganda "object" qaytaradi.

<br>

## Foydalanishda muhim farqlar

Taqqoslash (== va ===)

```
console.log(Number(123) === 123);  // true  (primitiv son)
console.log(new Number(123) === 123);  // false (chunki biri object)
console.log(new Number(123) == 123);  // true (JS avtomatik obyektni primitive ga o‘giradi)
```

<hr><br><br><br>

# Number Properties

| Property                 | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| Number.MAX_VALUE         | JavaScript'dagi eng katta raqam (~1.79e+308).               |
| Number.MIN_VALUE         | JavaScript'dagi eng kichik musbat raqam (~5e-324).          |
| Number.MAX_SAFE_INTEGER  | JavaScript'dagi eng katta xavfsiz butun son (2^53 - 1).     |
| Number.MIN_SAFE_INTEGER  | JavaScript'dagi eng kichik xavfsiz butun son (-(2^53 - 1)). |
| Number.POSITIVE_INFINITY | Infinity qiymati.                                           |
| Number.NEGATIVE_INFINITY | -Infinity qiymati.                                          |
| Number.NaN               | NaN (Not a Number) qiymati.                                 |

<hr><br><br><br>

# Number Constructor Methods

| Metod                       | Tavsifi                                                         |
| --------------------------- | --------------------------------------------------------------- |
| Number.isFinite(value)      | Berilgan qiymat cheksiz emasligini tekshiradi.                  |
| Number.isInteger(value)     | Berilgan qiymat butun son (integer) ekanligini tekshiradi.      |
| Number.isNaN(value)         | Berilgan qiymat NaN ekanligini tekshiradi.                      |
| Number.isSafeInteger(value) | Berilgan qiymat JS da xavfsiz butun son ekanligini tekshira di. |
| Number.parseFloat(value)    | String yoki boshqa qiymatni floating-point songa aylantiradi.   |

<hr><br><br><br>

# Number methods

| Metod                       | Tavsifi                                         |
| --------------------------- | ----------------------------------------------- |
| Number.isFinite(value)      | Qiymat cheksiz emasligini tekshiradi.           |
| Number.isInteger(value)     | Qiymat butun son ekanligini tekshiradi.         |
| Number.isNaN(value)         | Qiymat NaN ekanligini tekshiradi.               |
| Number.isSafeInteger(value) | Qiymat xavfsiz butun son ekanligini tekshiradi. |
| Number.parseFloat(value)    | Qiymatni floating-point soniga aylantiradi.     |
| Number.parseInt(value)      | Qiymatni butun son ga aylantiradi.              |

<hr><br><br><br>

# Type conversion and coercion

- … → number
  - Number constructor
  - +n → optimal
  - n \* 1

<br>

- … → string
  - String constructor
  - toString() → optimal
  - n + “”
