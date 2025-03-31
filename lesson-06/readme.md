<h1 style="text-align:center;">Lesson 6 </h1>

- Number constructor
- Number Properties
- Number constructor (Number methods)
- Type conversion and coercion




<hr><br><br><br>

# Constructor of Number

>Number konstruktori ikkita asosiy vazifani bajaradi:

<br>

Sintaksis: 1) `Number()`  2) `new Number()`

- `new` bilan chaqirilsa – Number obyektini yaratadi.
- `new`siz xolatda chaqirilsa – qiymatni oddiy primitiv songa o‘zgartiradi.

<br><br>

> Oddiy qiymatni songa o‘zgartirish uchun odatda `Number(value)` usuli ko‘proq ishlatiladi. Obyekt sifatida yaratish esa kamroq uchraydi.

<br>

- `Number(value)` – qiymatni songa o‘zgartiradi.
- `new Number(value)` – yangi Number obyektini yaratadi.

<br>

```
console.log(Number("123"));  // 123 (number)
console.log(Number(true));   // 1
console.log(Number(false));  // 0
console.log(Number(null));   // 0
console.log(Number("abc"));  // NaN (Not a Number)
```



<br><br>

> `new Number(value)` - Number Object xosil qilish
> Agar `Number()` `new` bilan chaqirilsa, u obyekt (`Number object`) xosil qilindi.

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


# `Number` constructor metodlari

<br>

| Metod | Tavsifi | Misol |
|-------|---------|-------|
| **Number.isFinite(value)** | Qiymat cheksiz emasligini tekshiradi | `Number.isFinite(10) - true` |
| **Number.isInteger(value)** | Qiymat butun son ekanini tekshiradi | `Number.isInteger(10) - true` |
| **Number.isNaN(value)** | Qiymat `NaN` ekanini tekshiradi | `Number.isNaN(NaN) - true` |
| **Number.isSafeInteger(value)** | Qiymat xavfsiz butun son ekanini tekshiradi | `Number.isSafeInteger(2**53 - 1) - true` |
| **Number.parseFloat(value)** | Qiymatni floating-point songa o‘zgartiradi | `Number.parseFloat("3.14") - 3.14` |
| **Number.parseInt(value)** | Qiymatni butun songa o‘zgartiradi | `Number.parseInt("42.5") - 42` |

















<hr><br><br><br>

# Type conversion and coercion

- … → number
  - Number constructor
  - +n 
  - n \* 1

<br>

- … → string
  - String constructor
  - toString()
  - n + “”
