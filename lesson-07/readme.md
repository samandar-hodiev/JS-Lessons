<h1 style="text-align:center;">Lesson 7 </h1>

- isNaN
  - isNaN qanday ishlaydi
  - isNaN vs Number.isNaN()
- Boolean constructor
- Boolean(value) vs new Boolean(value)
- Truthy and Falsy values


<hr><br><br><br>

# isNaN

> isNaN -
> Agar qiymat NaN bo‘lsa → true qaytaradi.<br>
> Agar qiymat raqam bo‘lsa yoki raqamga o‘girilsa → false qaytaradi.

Syntax: `isNaN(value)`

<br><br>

## `isNaN()` qanday ishlaydi?

`isNaN(value)` quyidagi bosqichlarda ishlaydi:<br>

- Agar qiymat son bo‘lsa, to‘g‘ridan-to‘g‘ri false qaytaradi.
- Agar qiymat string bo‘lsa, JS uni avtomatik raqamga o‘giradi:

- "123" → 123 (raqam bo‘ldi) → false
- "Hello" → NaN (o‘gira olmadi) → true
- Agar qiymat boolean (true/false) bo‘lsa, true → 1, false → 0 bo‘ladi.
- Agar qiymat undefined yoki obyekt bo‘lsa, NaN bo‘ladi.

<br><br>

## `isNaN()` vs `Number.isNaN()`

> isNaN() ba’zi noto‘g‘ri natijalar berishi mumkin, chunki u qiymatni avtomatik son ga aylantirishga harakat qiladi.

```
console.log(isNaN("123"));   // false (string → number)
console.log(isNaN("abc"));   // true  (string → NaN)
console.log(isNaN(true));    // false (true → 1)
console.log(isNaN(undefined));// true  (undefined → NaN)
console.log(isNaN(null));    // false (null → 0)
```

> Yechim: Number.isNaN() – bu faqat haqiqiy NaN bo‘lsa true qaytaradi.

```
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN("abc"));    // false (string hech qachon NaN emas)
console.log(Number.isNaN("123"));    // false
console.log(Number.isNaN(undefined));// false
console.log(Number.isNaN(null));     // false
```

> `isNaN(value)` → qiymatni avval numberga o‘girishga harakat qiladi, keyin `NaN` bo‘lsa `true` qaytaradi.
> `Number.isNaN(value)` → faqat haqiqiy `NaN` bo‘lsa `true` qaytaradi (xatolarni oldini oladi).

> Agar aniq `NaN`ni tekshirmoqchi bo‘lsangiz → `Number.isNaN()` ishlatish tavsiya etiladi.!

<hr><br><br><br><br>

# Boolean constructor

> JavaScript'da Boolean konstruktori qiymatni true yoki false ga o‘girish uchun ishlatiladi.

```
let bool1 = Boolean(1);    // true
let bool2 = Boolean(0);    // false
let bool3 = Boolean("salom"); // true
let bool4 = Boolean("");   // false
```

<br><br>

# Boolean(value) vs new Boolean(value)

| Turi               | Tavsifi Natija                                      |
| ------------------ | --------------------------------------------------- |
| Boolean(value)     | Primitiv true yoki false qaytaradi. true yoki false |
| new Boolean(value) | Boolean obyekt yaratadi. {} (obyekt bo‘ladi)        |


<br>

```
console.log(Boolean("hello"));    // true (Primitiv)

console.log(new Boolean("hello"));// [Boolean: true] (Obyekt)
```


> `new Boolean(value)` obyekt qaytaradi va obyekt har doim true bo‘ladi!

<hr><br><br><br><br>

# Truthy and Falsy values

- Falsy values 
   
   - false
   - 0 
   - -0
   - ""
   - null
   - undefined
   - NaN

<br>

- Truthy values 
   
    - " "
    - {}
    - []
    - 12
    - -5
    - "false"
    - infinitiy
    - -infinitiy
    - ETC...
