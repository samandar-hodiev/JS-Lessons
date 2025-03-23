<h1 style="text-align:center;">Lesson 14</h1>

# JavaScript Array Metodlari

JavaScript'dagi barcha array metodlari:

# JavaScript Array Methods  
# JavaScript Array Methods  

1. `push()`  
2. `pop()`  
3. `unshift()`  
4. `shift()`  
5. `sort()`  
6. `reverse()`  
7. `splice()`  
8. `fill()`  
9. `copyWithin()`  
10. `indexOf()`  
11. `lastIndexOf()`  
12. `includes()`  
13. `slice()`  
14. `concat()`  
15. `join()`  
16. `flat()`  
17. `toString()`  
18. `at()`  

## 🔥 High Order Methods  
19. `find()`  
20. `findIndex()`  
21. `findLast()`  
22. `findLastIndex()`  
23. `map()`  
24. `filter()`  
25. `reduce()`  
26. `reduceRight()`  
27. `forEach()`  
28. `some()`  
29. `every()`  
30. `flatMap()`  

<hr>

<br><br><br><br><br><br><br><br>

## `Qo‘shish va olib tashlash`

| Metod       | Tavsifi                      |
| ----------- | ---------------------------- |
| `push()`    | oxiriga element qo‘shadi     |
| `pop()`     | oxiridan elementni o‘chiradi |
| `unshift()` | boshiga element qo‘shadi     |
| `shift()`   | boshidan elementni o‘chiradi |

<hr><br><br>

## `Tartiblash va almashtirish`

| Metod          | Tavsifi                                          |
| -------------- | ------------------------------------------------ |
| `sort()`       | elementlarni tartiblaydi                         |
| `reverse()`    | elementlarni teskarisiga o‘zgartiradi            |
| `splice()`     | element qo‘shadi, o‘chiradi yoki almashtiradi    |
| `fill()`       | elementlarni belgilangan qiymat bilan to‘ldiradi |
| `copyWithin()` | arraydagi elementlarni boshqa joyga ko‘chiradi   |

<hr><br><br>

# `Qidirish`

| Metod             | Tavsifi                                                        |
| ----------------- | -------------------------------------------------------------- |
| `indexOf()`       | berilgan element indeksini qaytaradi                           |
| `lastIndexOf()`   | berilgan elementning oxirgi indeksini qaytaradi                |
| `includes()`      | element bor-yo‘qligini tekshiradi (true yoki false)            |


<hr><br><br>

# `Ajratish va birlashtirish`

| Metod      | Tavsifi                                  |
| ---------- | ---------------------------------------- |
| `slice()`  | yangi array yaratadi (qirqib oladi)      |
| `concat()` | arraylarni birlashtiradi                 |
| `join()`   | array elementlarini stringga aylantiradi |

<hr><br><br>

# `Arrayni o‘zgartirish va tekislash`

| Metod        | Tavsifi                                                                   |
| ------------ | ------------------------------------------------------------------------- |
| `flat()`     | chuqur arrayni tekislaydi                                                 |
| `toString()` | arrayni stringga o‘zgartiradi                                             |
| `at()`       | indeks bo‘yicha elementni qaytaradi (manfiy indeksni qo‘llab-quvvatlaydi) |

<hr><br><br>
<!-- 
# `Qidirish va o‘zgartirish`

| Metod         | Tavsifi                                                                  |
| ------------- | ------------------------------------------------------------------------ |
| map()         | Har bir elementga berilgan funksiyani qo‘llaydi va yangi array qaytaradi |
| filter()      | Shartni qanoatlantiruvchi elementlardan yangi array yaratadi             |
| reduce()      | Array elementlarini bitta qiymatga qisqartiradi                          |
| reduceRight() | reduce() bilan bir xil, lekin o‘ngdan chapga ishlaydi                    |
| forEach()     | Har bir element uchun funksiyani bajaradi (hech nima qaytarmaydi)        |

<hr><br><br>

# `Tartiblash va ajratish`

| Metod     | Tavsifi                                                          |
| --------- | ---------------------------------------------------------------- |
| some()    | Hech bo‘lmaganda bitta element shartga mos kelsa, true qaytaradi |
| every()   | Barcha elementlar shartga mos kelsa, true qaytaradi              |
| sort()    | Elementlarni tartiblaydi                                         |
| reverse() | Elementlarni teskari tartibda o‘zgartiradi                       |

<hr><br><br>

# `Yangi array yaratish`

| Metod     | Tavsifi                                                         |
| --------- | --------------------------------------------------------------- |
| flatMap() | Har bir elementga funksiyani qo‘llaydi va natijani tekislaydi   |
| map()     | Har bir elementga funksiyani qo‘llaydi va yangi array qaytaradi |

<hr><br><br>

# `Qiymatni tekshirish`

| Metod           | Tavsifi                                                        |
| --------------- | -------------------------------------------------------------- |
| find()          | Shartni qanoatlantiruvchi birinchi elementni qaytaradi         |
| findIndex()     | Shartni qanoatlantiruvchi birinchi element indeksini qaytaradi |
| findLast()      | Shartni qanoatlantiruvchi oxirgi elementni qaytaradi           |
| findLastIndex() | Shartni qanoatlantiruvchi oxirgi element indeksini qaytaradi   | -->

<hr><br><br><br><br><br><br><br><br><br>

# `push()`

> `push()` - metodi arrayning oxiriga yangi element(lar)ni qo‘shadi va arrayning yangi uzunligini qaytaradi.

Sintaksis:

```
array.push(element1, element2, ..., elementN)
```

<br><br><br>

# `pop()`

> `pop()` metodi arrayning oxiridan elementni olib tashlaydi va o‘chirilgan elementni qaytaradi.

Sintaksis:

```
array.pop()
```

- pop() faqat oxiridagi bitta elementni o‘chiradi.
- Agar array bo‘sh bo‘lsa, undefined qaytaradi.
- Asl array o‘zgartiriladi.

<br><br><br>

# `unshift()`

> `unshift()` metodi arrayning boshiga yangi element(lar)ni qo‘shadi va arrayning yangi uzunligini qaytaradi.

Sintaksis:

```
array.unshift(element1, element2, ..., elementN)
```

- unshift() bir nechta element qo‘shishi mumkin.
- Asl array o‘zgartiriladi.
- Qo‘shilganidan so‘ng yangi uzunlikni qaytar

<br><br><br>

# `shift()`

> `shift()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u arrayning birinchi elementini olib tashlaydi va o‘sha elementni qaytaradi. Shu bilan birga, array uzunligi bitta kamayadi.

Sintaksis:

```
array.shift()
```

Qoidalar:

- shift() arrayni o‘zgartiradi (mutatsiya qiladi).
- Bo‘sh arrayga shift() qo‘llansa, undefined qaytaradi.

<br><br><br>

# `sort()`

> `sort()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u array elementlarini o‘zgartiradi va elementlarni `alfavit` yoki `Unicode` tartibida saralaydi.

Qoidalar:

- Agar compareFunction berilmasa, sort() elementlarni satr sifatida (Unicode tartibida) saralaydi.
- Agar compareFunction berilsa, u orqali maxsus tartiblash qoidalarini belgilash mumkin

<br>

Oddiy saralash (Unicode bo‘yicha):

```
let fruits = ["banana", "apple", "cherry"];

fruits.sort();
```

Raqamlarni saralash (compareFunction bilan):

```
let numbers = [40, 100, 1, 5, 25, 10];

numbers.sort((a, b) => a - b); // O'sish tartibida saralaydi



numbers.sort((a, b) => b - a); // Kamayish tartibida saralaydi

console.log(numbers); // [100, 40, 25, 10, 5, 1]
```

compareFunction qoidasi:

- (a - b) → O'sish tartibida.
- (b - a) → Kamayish tartibida.

<br><br><br>

# `reverse()`

> `reverse()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u array elementlarini teskari tartibda joylashtiradi va o‘sha arrayni o‘zgartiradi (mutatsiya qiladi).

Sintaksis:

```
array.reverse()
```

Qoidalar:

- `reverse()` yangi array yaratmaydi, balki mavjud arrayni o‘zgartiradi.
- Arrayni birinchi elementini oxiriga, oxirgisini boshiga o‘tkazadi.

<br><br><br>

# `splice()`

> `splice()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u arraydan elementlarni o‘chiradi, qo‘shadi yoki almashtiradi.

Sintaksis:

```
array.splice(start, deleteCount, item1, item2, ...)
```

Qoidalar:

- splice() arrayni mutatsiya qiladi (asl array o‘zgartiriladi).
- O‘chirilgan elementlar yangi array sifatida qaytariladi.
- deleteCount = 0 bo‘lsa, hech narsa o‘chirilmaydi, faqat element qo‘shiladi.

- O‘chirish uchun: splice(start, deleteCount)
- Qo‘shish uchun: splice(start, 0, item1, item2, ...)
- Almashtirish uchun: splice(start, deleteCount, item1, item2, ...) ✅

Parametrlar:

- start – Qaysi indeksdan boshlab o‘zgartirishni bildiradi.
- deleteCount (ixtiyoriy) – Nechta element o‘chirilishini bildiradi.
- item1, item2, ... (ixtiyoriy) – O‘chirilgan elementlar o‘rniga qo‘shiladigan yangi elementlar.

<br>

Element o‘chirish

```
let fruits = ["apple", "banana", "cherry", "orange"];

// 1-indeksdan boshlab 2 ta element o‘chirish
fruits.splice(1, 2);

console.log(fruits); // ["apple", "orange"]
```

<br>

Element qo‘shish

```
let fruits = ["apple", "banana", "cherry"];

// 1-indeksga yangi element qo‘shish (o‘chirishsiz)
fruits.splice(1, 0, "orange", "kiwi");

console.log(fruits); // ["apple", "orange", "kiwi", "banana", "cherry"]
```

<br>

Element almashtirish

```
let fruits = ["apple", "banana", "cherry"];

// 1-indeksdagi elementni almashtirish
fruits.splice(1, 1, "orange");

console.log(fruits); // ["apple", "orange", "cherry"]
```

<br><br><br>

# `fill()`

> `fill()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u arrayning barcha yoki bir qismini bir xil qiymat bilan to‘ldiradi.

Sintaksis:

```
array.fill(value, start, end)
```

Qoidalar:

- fill() arrayni mutatsiya qiladi (asl array o‘zgartiriladi).
- end indeksi kiritilmagan bo‘lsa, array oxirigacha to‘ldiriladi.

- Hammasini to‘ldirish uchun: fill(value)
- Qismni to‘ldirish uchun: fill(value, start, end)

Parametrlar:

- value – To‘ldiriladigan qiymat.
- start (ixtiyoriy) – Qaysi indeksdan boshlab to‘ldirishni bildiradi. (default: 0)
- end (ixtiyoriy) – Qaysi indeksgacha to‘ldirishni bildiradi (oxirgi indeks kirmaydi). (default: array.length)

<br>

1: Barcha elementlarni to‘ldirish

```
let numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers); // [0, 0, 0, 0, 0]
```

<br>

2: Faqat bir qismini to‘ldirish

```
let numbers = [1, 2, 3, 4, 5];

// 1-indeksdan 3-indeksgacha (3-indeks kirmaydi) 0 bilan to‘ldirish
numbers.fill(0, 1, 3);

console.log(numbers); // [1, 0, 0, 4, 5]
```

<br><br><br>

# `copyWithin()`

> `copyWithin()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u arrayning bir qismini ko‘chirish va uni arrayning boshqa joyiga o‘rnash uchun ishlatiladi. U yangi array yaratmaydi, balki mavjud arrayni o‘zgartiradi.

Sintaksis:

```
array.copyWithin(target, start, end)
```

Qoidalar:

- `copyWithin()` arrayni mutatsiya qiladi (asl array o‘zgartiriladi).
- Yangi array yaratmaydi.
- Qo‘chiriladigan qism asl arrayda saqlanadi.
- Agar target va start orasida moslik bo‘lmasa, hech qanday o‘zgarish bo‘lmaydi.

- Hammasini ko‘chirish uchun: `copyWithin(target)`
- Qismni ko‘chirish uchun: `copyWithin(target, start, end)`

Parametrlar:

- `target` – Ko‘chirilgan elementlar qayerga joylashtirilishini bildiradi.
- `start` (ixtiyoriy) – Qaysi indeksdan boshlab ko‘chirilishini bildiradi. (default: 0)
- `end` (ixtiyoriy) – Qaysi indeksgacha ko‘chirilishini bildiradi (oxirgi indeks kirmaydi). (default: array.length)

<br>

1: Elementlarni ko‘chirish

```
let numbers = [1, 2, 3, 4, 5];

// 0-indeksga 3 va 4 elementlarini ko‘chirish
numbers.copyWithin(0, 3);

console.log(numbers); // [4, 5, 3, 4, 5]
```

3-indeksdan boshlab 4, 5 elementlari 0-indeksga ko‘chirildi.

<br>

2: Belgilangan qismni ko‘chirish

```
let numbers = [10, 20, 30, 40, 50];

// 1-indeksga 3-4 indeksdagi elementlarni ko‘chirish
numbers.copyWithin(1, 3, 5);

console.log(numbers); // [10, 40, 50, 40, 50]
```

40, 50 elementlari 1-indeksga ko‘chirildi.

<br>

3: Manfiy indekslardan foydalanish

```
let numbers = [1, 2, 3, 4, 5];

// -2 → oxiridan 2-element (4)
// -4 → oxiridan 4-element (2)
numbers.copyWithin(-2, -4, -2);

console.log(numbers); // [1, 2, 3, 2, 3]
```

Manfiy indeks array oxiridan hisoblanadi:

- -2 -> 4-indeks
- -4 -> 1-indeks

<br><br><br>

# `indexOf()`

> `indexOf()` — bu JavaScript'dagi array metodlaridan biri bo‘lib, u array ichidagi berilgan qiymatning birinchi uchragan indeksini qaytaradi. Agar qiymat topilmasa, -1 qaytaradi.

Sintaksis:

```
array.indexOf(searchElement, fromIndex)
```

Qoidalar:

- `indexOf()` faqat birinchi uchragan indeksni qaytaradi.
- Qiymat topilmasa, `-1` qaytaradi.
  Qidirish qat'iy tenglik `===` orqali amalga oshadi.

- Qiymatni topish uchun: `indexOf(searchElement)`
- Ma'lum indeksdan boshlab qidirish uchun: indexOf(searchElement, fromIndex)

Parametrlar:

- searchElement – Qidirilayotgan element.
- fromIndex (ixtiyoriy) – Qidirishni qaysi indeksdan boshlash kerakligini bildiradi. (default: 0)

<br>

1: Qiymatning indeksini topish

```
let fruits = ["apple", "banana", "cherry", "banana"];

let index = fruits.indexOf("banana");

console.log(index); // 1
```

"banana" elementining birinchi uchragan indeksi 1.

<br>

2: Qiymat mavjud emasligi

```
let fruits = ["apple", "banana", "cherry"];

let index = fruits.indexOf("orange");

console.log(index); // -1
```

"orange" array ichida mavjud emas.

<br>

3: fromIndex bilan qidirish

```
let fruits = ["apple", "banana", "cherry", "banana"];

let index = fruits.indexOf("banana", 2);

console.log(index); // 3
```

fromIndex = 2 bo‘lgani uchun qidirish 2-indeksdan boshlangan va ikkinchi "banana" 3-indeksda ekanligi topilgan.

<br><br><br>

# `lastIndexOf`

Qoidalar:

- lastIndexOf() array ichidagi berilgan qiymatning oxirgi uchragan indeksini qaytaradi.
- Qiymat topilmasa, -1 qaytaradi.
- Qidirish qat'iy tenglik (===) orqali amalga oshadi.
- Qidirish oxiridan boshlab amalga oshadi.

Sintaksis:

```
array.lastIndexOf(searchElement, fromIndex)
```

Parametrlar:

- searchElement – Qidirilayotgan element.
- fromIndex (ixtiyoriy) – Qidirishni qaysi indeksdan boshlab orqaga qarab qidirish kerakligini bildiradi. (default: array.length - 1)

1: Qiymatning oxirgi uchragan indeksini topish

```
let fruits = ["apple", "banana", "cherry", "banana"];

let index = fruits.lastIndexOf("banana");

console.log(index); // 3
```

"banana" elementining oxirgi uchragan indeksi 3.

<br>

2: Qiymat mavjud emasligi

```
let fruits = ["apple", "banana", "cherry"];

let index = fruits.lastIndexOf("orange");

console.log(index); // -1
```

"orange" array ichida mavjud emas.

<br>

3: fromIndex bilan qidirish

```
let fruits = ["apple", "banana", "cherry", "banana"];

let index = fruits.lastIndexOf("banana", 2);

console.log(index); // 1
```

fromIndex = 2 bo‘lgani uchun qidirish 2-indeksdan orqaga qarab boshlangan va birinchi "banana" 1-indeksda ekanligi topilgan.

<br><br><br>

# `includes()`

Qoidalar:

- includes() array ichida berilgan qiymat bor yoki yo‘qligini tekshiradi.
- Qiymat topilsa true, topilmasa false qaytaradi.
- Qidirish qat'iy tenglik (===) orqali amalga oshadi.
- NaN qiymatini to‘g‘ri aniqlay oladi (indexOf() esa aniqlay olmaydi).
- Qidirish boshidan boshlab amalga oshadi.

Sintaksis:

```
array.includes(searchElement, fromIndex)
```

Parametrlar:

- searchElement – Qidirilayotgan element.
- fromIndex (ixtiyoriy) – Qidirishni qaysi indeksdan boshlash kerakligini bildiradi. (default: 0)

1: Qiymat mavjudligini tekshirish

```
let fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false
```

"banana" array ichida bor, "orange" esa yo‘q.

<br>

2: fromIndex bilan qidirish

```
let fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.includes("banana", 2)); // true
console.log(fruits.includes("apple", 2));  // false
```

fromIndex = 2 bo‘lgani uchun qidirish 2-indeksdan boshlangan.
"banana" 3-indeksda topilgan, "apple" esa 2-indeksdan keyin yo‘q.

<br>

3: NaN bilan ishlash

```
let numbers = [1, 2, NaN, 4, 5];

console.log(numbers.includes(NaN)); // true
console.log(numbers.indexOf(NaN));  // -1
```

includes() NaN ni to‘g‘ri topadi, indexOf() esa topa olmaydi.

<br><br><br>

# `find()`

Qoidalar:

- `find()` array ichidagi birinchi uchragan elementni qaytaradi.
- Berilgan shartni bajaradigan birinchi element topilgach, qidirish to‘xtaydi.
- Agar shartga mos element topilmasa, `undefined` qaytaradi.
- Qidirish boshidan boshlab amalga oshadi.
- `CallBack` funksiyada `true` qaytsa, element topilgan hisoblanadi.

<br>

Sintaksis:

```
array.find(callback(element, index, array))
```

Parametrlar:

- callback – Har bir elementni tekshirish uchun ishlatiladigan funksiya.
- element – Hozir tekshirilayotgan element.
- index (ixtiyoriy) – Hozir tekshirilayotgan elementning indeksi.
- array (ixtiyoriy) – Asosiy array.

<br>

1: Toq sonni topish

```
let numbers = [2, 4, 7, 8, 10];

let result = numbers.find(num => num % 2 !== 0);

console.log(result); // 7
```

7 birinchi toq son bo‘lgani uchun qaytarildi.

<br>

2: Ma'lum shartga mos element topilmasa

```
let numbers = [2, 4, 6, 8];

let result = numbers.find(num => num > 10);

console.log(result); // undefined
```

10 dan katta element yo‘qligi uchun undefined qaytdi.

<br>

3: Callback funksiyada indeksdan foydalanish

```
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" }
];

let user = users.find((user, index) => user.id === 2);

console.log(user); // { id: 2, name: 'Jane' }
```

id = 2 bo‘lgan element topildi.

<br>

Farqlari:

| Metod      | Qaytaradigan natija  | Qidirish tartibi | Qiymat topilmasa |
| ---------- | -------------------- | ---------------- | ---------------- |
| find()     | Elementni qaytaradi  | Boshidan         | undefined        |
| indexOf()  | Indeksni qaytaradi   | Boshidan         | -1               |
| includes() | true/false qaytaradi | v Boshidan       | false            |

- Shartga mos elementni topish uchun: find()
- Elementni emas, indeksni topish uchun: indexOf()
- Element bor yoki yo‘qligini tekshirish uchun: includes()

<br><br><br>

# `findIndex()`

> `findIndex()` array ichidagi birinchi mos keladigan elementning indeksini qaytaradi. Agar mos keladigan element topilmasa, -1 qaytaradi.

Sintaksis:

```
array.findIndex(callback(element, index, array))
```

Qachon ishlatish kerak ?

- Elementni topish kerak bo‘lsa - `find()`
- Elementning indeksini topish kerak bo‘lsa - `findIndex()`

<br>

Parametrlari:

| Parametr            | Tavsifi                                  |
| ------------------- | ---------------------------------------- |
| `callback`          | Har bir elementni tekshiradigan funksiya |
| `element`           | Joriy element                            |
| `index` (ixtiyoriy) | Joriy element indeksi                    |
| `array` (ixtiyoriy) | Asosiy array                             |

<br>

Qaytaradi:

- Mos keladigan element indeksini qaytaradi.
- Agar hech narsa topilmasa → -1 qaytaradi.

<br><br>

Son topish

```
const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex(num => num === 30);
```

30 elementi array ichida bor, u 2-indeksda joylashgan.

<br>

Shart bilan qidirish

```
const users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Vali' },
  { id: 3, name: 'Salim' }
];

const index = users.findIndex(user => user.name === 'Vali');
```

Vali obyekt sifatida array ichida bor, u 1-indeksda joylashgan.

<br>

Element topilmasa

```
const fruits = ['olma', 'banan', 'anor'];

const index = fruits.findIndex(fruit => fruit === 'uzum');
```

uzum array ichida yo‘q - -1 qaytaradi.

<br>

Murakkab shart bilan qidirish

```
const numbers = [7, 5, 9, 10, 13, 15];

const index = numbers.findIndex(num => num % 2 === 0);
```

Birinchi mos kelgan juft son – 10, u 3-indeksda joylashgan.

 <br>

Asosiy farqlar:

| Metod         | Tavsifi                                  | Topilmasa qaytaradi |
| ------------- | ---------------------------------------- | ------------------- |
| `find()`      | Birinchi mos elementni qaytaradi         | undefined           |
| `findIndex()` | Birinchi mos element indeksini qaytaradi | -1                  |

<br><br><br>

# `findLast()`

> `findLast()` array ichidagi oxirgi mos keladigan elementni qaytaradi. Agar mos keladigan element topilmasa, `undefined` qaytaradi.

<br>

Sintaksis:

```
array.findLast(callback(element, index, array))
```

Parametrlari:

| Parametr          | Tavsifi                                  |
| ----------------- | ---------------------------------------- |
| callback          | Har bir elementni tekshiradigan funksiya |
| element           | Joriy element                            |
| index (ixtiyoriy) | Joriy element indeksi                    |
| array (ixtiyoriy) | Asosiy array                             |

<br>

Qaytaradi:

- Oxirgi mos kelgan elementni qaytaradi.
- Agar hech narsa topilmasa - `undefined` qaytaradi.

<br>

Qachon ishlatish kerak?

- Oxirgi mos kelgan element kerak bo‘lsa - `findLast()`

<br><br><br>

# `findLastIndex()`

> `findLastIndex()` array ichidagi oxirgi mos keladigan elementning indeksini qaytaradi. Agar mos keladigan element topilmasa, `-1` qaytaradi.

<br>

Parametrlari:

| Parametr          | Tavsifi                                  |
| ----------------- | ---------------------------------------- |
| callback          | Har bir elementni tekshiradigan funksiya |
| element           | Joriy element                            |
| index (ixtiyoriy) | Joriy element indeksi                    |
| array (ixtiyoriy) | Asosiy array                             |

<br>

Qaytaradi:

- Oxirgi mos keladigan element indeksini qaytaradi.
- Agar hech narsa topilmasa → -1 qaytaradi.

<br><br>

Asosiy farqlar:

| Metod           | Tavsifi                                  | Topilmasa qaytaradi |
| --------------- | ---------------------------------------- | ------------------- |
| find()          | Birinchi mos elementni qaytaradi         | undefined           |
| findLast()      | Oxirgi mos elementni qaytaradi           | undefined           |
| findIndex()     | Birinchi mos element indeksini qaytaradi | -1                  |
| findLastIndex() | Oxirgi mos element indeksini qaytaradi   | -1                  |

<br>

Qachon ishlatish kerak?

- Birinchi mos kelgan element kerak bo‘lsa - `find()`
- Oxirgi mos kelgan element kerak bo‘lsa - `findLast()`
- Elementning birinchi indeksi kerak bo‘lsa - `findIndex()`
- Elementning oxirgi indeksi kerak bo‘lsa - `findLastIndex()`

<br><br><br>

# `slice()`

`slice()` – array metodlaridan biri bo‘lib, array ichidan qism (subarray) olish uchun ishlatiladi.
Bu metod asosiy arrayni o‘zgartirmaydi, faqat yangi array qaytaradi.

<br>

Sintaksis:

```
array.slice(start, end)
```

Parametrlari:

| Parametr | Tavsifi                                               |
| -------- | ----------------------------------------------------- |
| start    | Qaysi indeksdan boshlab qirqishni belgilaydi          |
| end      | Qaysi indeksgacha qirqishni belgilaydi (end kirmaydi) |

<br>

Qaytaradi:

- Yangi array qaytaradi (asosiy array o‘zgarmaydi).

<br>

1. Oddiy ishlatish

```
const arr = [10, 20, 30, 40, 50];

// 1-indeksdan boshlab 3-indeksgacha qirqadi (3 kirmaydi)
const sliced = arr.slice(1, 3);
```

20 va 30 qaytdi, lekin asosiy array o‘zgarmadi.

<br>

2. Faqat start ko‘rsatish

```
const arr = [10, 20, 30, 40, 50];

// 2-indeksdan boshlab oxirigacha oladi
const sliced = arr.slice(2);
```

30 dan boshlab oxirigacha qaytardi.

<br>

3. Manfiy indeks bilan ishlatish

```
const arr = [10, 20, 30, 40, 50];

// Manfiy indeks – oxirdan boshlab hisoblaydi
const sliced = arr.slice(-3, -1);
```

-3 - 30 dan boshlab -1 - 50 gacha oldi, lekin 50 kirmadi.

<br>

4. Hammasini olish

```
const arr = [10, 20, 30, 40, 50];

// Barcha elementlarni olish
const sliced = arr.slice();
```

Yangi array yaratdi (asosiy array o‘zgarmadi).

<br>

`slice()` bilan `splice()` farqi

| Metod    | Vazifasi                                      | Asosiy arrayga ta’sir qiladimi? |
| -------- | --------------------------------------------- | ------------------------------- |
| slice()  | Qirqib yangi array qaytaradi                  | Yo‘q (asosiy array o‘zgarmaydi) |
| splice() | Element qo‘shadi, o‘chiradi yoki almashtiradi | Ha (asosiy array o‘zgaradi)     |

<br>

## Qachon `slice()` ishlatish kerak:

- Arrayni o‘zgartirmasdan qirqib olish kerak bo‘lsa.
- Arrayning ma’lum qismini olish kerak bo‘lsa.
- Yangi array yaratish kerak bo‘lsa.
- Arrayni nusxalash kerak bo‘lsa.

## Qachon `splice()` ishlatish kerak:

- Arrayni o‘zgartirish kerak bo‘lsa.
- Element qo‘shish, o‘chirish yoki almashtirish kerak bo‘lsa.
- Arrayning o‘rtasiga yoki boshiga element qo‘shish yoki olib tashlash kerak bo‘lsa.

<br><br><br>

# `concat()`

> `concat()` – array metodlaridan biri bo‘lib, arraylarni birlashtirish uchun ishlatiladi.
> Bu metod asosiy arrayni o‘zgartirmaydi, faqat yangi array yaratadi.

<br>

Sintaksis:

```
array1.concat(array2, array3, ...)
```

<br>

Qachon ishlatiladi.?

- Ikki yoki undan ortiq arrayni birlashtirish kerak bo‘lsa.
- Arrayga yangi element(lar) qo‘shish kerak bo‘lsa (asosiy array o‘zgarmagan holda).
- Bir nechta array yoki oddiy qiymatlarni bitta arrayga birlashtirish kerak bo‘lsa.

<br>

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = arr1.concat(arr2);
```

<br><br><br>

# `join()`

> `join()` – array elementlarini stringga aylantirish uchun ishlatiladi.
> Bu metod asosiy arrayni o‘zgartirmaydi, faqat string qaytaradi.

<br>

```
const arr = ['Apple', 'Banana', 'Cherry'];

const result = arr.join(' - ');
```

<br><br><br>

# `flat()`

> `flat()` – array metodlaridan biri bo‘lib, chuqur arrayni tekislash uchun ishlatiladi.
> Bu metod asosiy arrayni o‘zgartirmaydi, faqat yangi array qaytaradi.

<br>

Sintaksis:

```
array.flat(depth)
```

<br>

Qachon ishlatiladi?

- Ichma-ich arraylarni bitta tekis arrayga aylantirish kerak bo‘lsa.
- Chuqurlikni boshqarish kerak bo‘lsa.

<br>

```
const arr = [1, 2, [3, 4, [5, 6]]];

const result = arr.flat();
```

<br><br><br>

# `toString()`

> `toString()` – array elementlarini stringga aylantirish uchun ishlatiladi.
> Bu metod asosiy arrayni o‘zgartirmaydi, faqat string qaytaradi

<br>

Sintaksis:

```
array.toString()
```

Qaytaradi:

- String qaytaradi (elementlar `,` bilan ajratiladi).

<br>

Qachon ishlatiladi?

- Array elementlarini string ko‘rinishiga keltirish kerak bo‘lsa.
- Arrayni o‘qiladigan formatga o‘zgartirish kerak bo‘lsa.

<br>

```
const arr = [1, 2, 3, 4, 5];

const result = arr.toString();
```

<br><br><br>

# `at()`

> `at()` – array metodlaridan biri bo‘lib, indeks bo‘yicha elementni qaytaradi.
> Musbat va manfiy indeks bilan ishlaydi (manfiy indeks arrayni oxiridan boshlab hisoblaydi).
> Bu metod asosiy arrayni o‘zgartirmaydi, faqat elementni qaytaradi.

<br>

Qachon ishlatiladi?

- Oxiridan hisoblash kerak bo‘lsa.
- [] bilan olish noqulay bo‘lsa.
- Kattaroq yoki kichikroq indeks bilan tekshirish kerak bo‘lsa.

<br>

```
const arr = [10, 20, 30, 40, 50];

let res = arr.at(2);
```
