<h1 style="text-align:center;">Lesson 12</h1>

### Array

- What is array?
- Creating
- Type of array
- Length
- Accessing
- Changing
- Adding
- Deleting
- Destructing
- Spread operator

<br><br>

# `What is array?`

> Array — bir nechta qiymatlarni bitta o‘zgaruvchiga tartib bilan saqlash imkonini beruvchi ma’lumotlar turii.

- Qiymatlar indeks orqali tartib bilan joylashadi (indeks 0 dan boshlanadi).
- Har qanday ma’lumot turi (raqam, matn, obyekt, funksiya va boshqalar) array ichida saqlanishi mumkin.

<br><br><br>

# `creating`

> JavaScript’da array yaratishning 5 ta asosiy usuli bor:

<br>

## 1. Array literal `[]` orqali

Bu eng ko‘p ishlatiladigan va sodda usul:

```
let fruits = ["apple", "banana", "cherry"];
```

<br>

## 2. `new Array()` konstruktoridan foydalanish

Konstruktor orqali array yaratish:

```
let numbers = new Array(1, 2, 3, 4, 5);
```

Eslatma: Bitta raqam bersangiz, u array uzunligi deb qabul qilinadi:

```
let arr = new Array(5); // [ <5 empty items> ]
```

<br>

## 3. `Array.of()` bilan yaratish

Array.of() argument sifatida berilgan qiymatlar asosida array yaratadi:

```
let arr = Array.of(1, 2, 3);
```

<br>

## 4. `Array.from()` bilan yaratish

Array.from() iteratsiya qilinadigan obyektlardan array yaratadi:

```
let arr = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
```

<br>

## 5. Spread operator `...` bilan yaratish

Spread operator yordamida mavjud arraydan yangi array yaratish:

```
let original = [1, 2, 3];
let copy = [...original];
```

<br>

# JavaScript'da Array Yaratishning 5 Usuli

| #   | Usul               | Sintaksis                  | Tavsifi                                                                                     | Qachon ishlatiladi                              |
|-----|--------------------|----------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------|
| 1   | **Literal (`[]`)**   | `const arr = [1, 2, 3];`     | Eng sodda va keng tarqalgan usul. To‘g‘ridan-to‘g‘ri elementlar bilan array yaratadi.         | Ko‘p ishlatiladi, oddiy array yaratishda         |
| 2   | **Constructor (`new Array()`)** | `const arr = new Array(5);` | Berilgan uzunlikka ega yoki elementlar bilan array yaratadi.                                  | Kamdan-kam ishlatiladi, uzunlik ko‘rsatish kerak bo‘lsa |
| 3   | **Array.of()**         | `const arr = Array.of(1, 2, 3);` | Berilgan argumentlardan array yaratadi. **1 ta son** bo‘lsa ham, element sifatida qabul qiladi. | Aniq elementlar bilan array yaratishda           |
| 4   | **Array.from()**       | `const arr = Array.from('hello');` | Iterable yoki array-like obyektlardan array yaratadi.                                           | String, Set, Map yoki array-like obyektlarda     |
| 5   | **Spread (`...`)**     | `const arr = [...'hello'];`         | Iterable obyektni yoyib yangi array yaratadi.                                                   | Boshqa array yoki iterable obyektni yoyishda     |


<br>

Tavsiya:

- Ko‘proq `[]` va `spread` operator ishlatiladi.
- `Array.from()` va `Array.of()` maxsus holatlarda ishlatiladi.
- `new Array()` esa kamdan-kam ishlatiladi.


<br><br><br>

# `typeof array`

```
let arr = [1, 3, 5];

console.log(typeof arr);
```

<br><br><br>

# `Length`

```
let mountains = ["Everest", "Fuji", "Nanga Parbat"];

let len = mountains.length;

console.log(len); // 3

console.log(mountains[len-1]); // last element
```

<br><br><br>

# `Access and Changing`

> Accessing in array — bu array elementlariga murojaat qilish yoki ularning qiymatini olish jarayoni. JavaScript’da array elementlariga indeks orqali murojaat qilinadi. Indeks 0 dan boshlanadi.

Array ichidagi elementga murojaat qilish uchun [index] ishlatiladi:

```
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple" (birinchi element)
console.log(fruits[1]); // "banana" (ikkinchi element)
console.log(fruits[2]); // "cherry" (uchinchi element)
```

Oxirgi elementga murojaat qilish uchun length xususiyatidan foydalanish mumkin:

```
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[fruits.length - 1]);
```

Array ichidagi elementni o‘zgartirish mumkin:

```
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "orange";
```

<br>

| Usul                | Namuna              | Natija            | Qo‘llanishi                      |
| ------------------- | ------------------- | ----------------- | -------------------------------- |
| Indeks orqali       | arr[0]              | 1-element         | Standart usul                    |
| Oxirgi element      | arr[arr.length - 1] | Oxirgi element    | Oxirgi elementga murojaat qilish |
| O‘zgartirish        | arr[1] = 5          | Element o‘zgaradi | Qiymatni yangilash               |
| Chegara tashqarisi  | arr[5]              | undefined         | Mavjud bo‘lmagan element         |
| Salbiy indeks bilan | arr.at(-1)          | Oxirgi element    | Salbiy indeks orqali kirish      |


<br><br><br>

# `Adding`

>`Adding in array` — bu arrayga yangi elementlar qo‘shish jarayoni. JavaScript’da arrayga yangi element qo‘shishning bir nechta usullari bor biz xozircha indeks orqali qo'shishni ko'rib o'tamiz:


```
const fruits = ["Banana", "Orange", "Apple"];

fruits[fruits.length] = "Lemon";
```

Bu usulda `fruits.length` arrayning uzunligini bildiradi.

`fruits.length` doimo arraydagi elementlar sonini qaytaradi.

`fruits[fruits.length]` oxirgi indeksdan keyingi joyga murojaat qiladi, ya’ni oxiriga yangi element qo‘shadi.

<br>

```
const fruits = ["Banana", "Orange", "Apple"];

fruits[6] = "Lemon";
```

<br><br><br>

# `Deleting`

>`Deleting in array` — bu arraydan elementlarni o‘chirish jarayoni. JavaScript’da array elementlarini o‘chirishning bir nechta usullari mavjud buladan index orqali o'chirishni ko'rib o'tamiz:


>`delete arr[index]` — bu array elementini indeks orqali o‘chirish uchun ishlatiladi, lekin o‘chirilgan elementning o‘rni `undefined` bilan to‘ladi va array uzunligi o‘zgarmaydi.

Sintaksis:

```
delete array[index];
```
- `array` — element o‘chiriladigan array nomi.
- `index` — o‘chirilishi kerak bo‘lgan element indeksi.

<br>

```
let fruits = ["apple", "banana", "cherry"];

delete fruits[1]; 
```

### Kamchiliklari:

- O‘chirilgan joyni bo‘sh qoldiradi (undefined).
- Array uzunligini o‘zgartirmaydi.
- Tartibni saqlab qoladi, lekin bo‘sh teshik hosil qiladi.

<br><br><br>

# `Destructing`

### Array destructuring sintaksisi

```
const [element1, element2, ...rest] = array;
```

- element1, element2, ... - Array ichidagi elementlar indeks asosida ajratiladi.
- ...rest - Qolgan elementlar yangi array sifatida olinadi.

<br>

Misol:

```
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = numbers;
```


<br><br><br>

# `Spread operator`

```
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = [...arr1, ...arr2];
```