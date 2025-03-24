<h1 style="text-align:center;">Lesson 15</h1>

## String Methods

<br><br><br><br>

---

| Metod                     | Tavsif                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| **length**                | String uzunligini qaytaradi.                                                               |
| **charAt()**              | Berilgan indeksdagi belgi qiymatini qaytaradi.                                             |
| **charCodeAt()**          | Berilgan indeksdagi belgining ASCII kodini qaytaradi.                                      |
| **at()**                  | Berilgan indeksdagi belgi qiymatini qaytaradi (musbat va manfiy indekslarni qabul qiladi). |
| **toUpperCase()**         | Stringni katta harflarga o‘zgartiradi.                                                     |
| **toLowerCase()**         | Stringni kichik harflarga o‘zgartiradi.                                                    |
| **trim()**                | Boshidagi va oxiridagi bo‘sh joylarni olib tashlaydi.                                      |
| **trimStart()**           | Faqat boshidagi bo‘sh joylarni olib tashlaydi.                                             |
| **trimEnd()**             | Faqat oxiridagi bo‘sh joylarni olib tashlaydi.                                             |
| **concat()**              | Bir nechta stringlarni birlashtiradi.                                                      |
| **includes()**            | String ichida berilgan substring mavjudligini tekshiradi (`true` yoki `false` qaytaradi).  |
| **indexOf()**             | String ichidagi substring birinchi uchragan indeksni qaytaradi.                            |
| **lastIndexOf()**         | String ichidagi substring oxirgi uchragan indeksni qaytaradi.                              |
| **startsWith()**          | String berilgan substring bilan boshlanishini tekshiradi.                                  |
| **endsWith()**            | String berilgan substring bilan tugashini tekshiradi.                                      |
| **repeat()**              | Stringni berilgan marta qaytaradi.                                                         |
| **padStart()**            | Stringni belgilangan uzunlikka yetkazish uchun boshiga belgi qo‘shadi.                     |
| **padEnd()**              | Stringni belgilangan uzunlikka yetkazish uchun oxiriga belgi qo‘shadi.                     |
| **slice()**               | Berilgan indekslar oralig‘idagi stringni kesib oladi.                                      |
| **substring()**           | Berilgan indekslar oralig‘idagi stringni kesib oladi.                                      |
| **substr()** _(Eskirgan)_ | Berilgan indekslar oralig‘idagi stringni kesib oladi.                                      |
| **replace()**             | Berilgan substringni yangi qiymat bilan almashtiradi (birinchi uchraganini).               |
| **replaceAll()**          | Berilgan substringni yangi qiymat bilan almashtiradi (hammasini).                          |
| **split()**               | Stringni berilgan belgi bo‘yicha arrayga ajratadi.                                         |
| **match()**               | Stringni regex bilan solishtirib, natijani array shaklida qaytaradi.                       |
| **matchAll()**            | Regex bilan barcha mos keluvchi natijalarni array shaklida qaytaradi.                      |
| **search()**              | Berilgan substring yoki regex birinchi mosligini topib, indeksni qaytaradi.                |

---

<br><br><br><br>

# `length`

> `length` — string uzunligini qaytaradi (string ichidagi belgilarning umumiy soni).

<br>

Sintaksis:

```
string.length;
```

Xususiyatlari:

- length — property hisoblanadi, metod emas.
- Bo‘sh string uchun 0 qaytaradi.
- Probel, belgi va maxsus belgilar ham hisobga olinadi.

<hr><br><br><br>

# `charAt()`

> `charAt()` — string ichidagi berilgan indeksdagi belgini qaytaradi.

<br>

Sintaksis:

```
string.charAt(index);
```

Xususiyatlari:

- Indeks 0 dan boshlanadi.
- Agar indeks mavjud bo‘lmasa, bo‘sh string ("") qaytaradi.
- Manfiy indekslarda ishlamaydi (manfiy indeks uchun at() metodidan foydalanish kerak).

<br>

Misollar:

```
const str = "JavaScript";

console.log(str.charAt(0)); // "J"

console.log(str.charAt(4)); // "S"

console.log(str.charAt(20)); // ""

console.log(str.charAt(-1)); // ""
```

<hr><br><br><br>

# `charCodeAt()`

> `charCodeAt()` — string ichidagi berilgan indeksdagi belgining Unicode (ASCII) kodini qaytaradi.

<br>

Sintaksis:

```
string.charCodeAt(index);
```

Xususiyatlari:

- Indeks 0 dan boshlanadi.
- Agar indeks mavjud bo‘lmasa, NaN qaytaradi.
- Unicode qiymati 0 dan 65535 gacha bo‘ladi.

<br>
Misollar:

```
const str = "JavaScript";


console.log(str.charCodeAt(0)); // 74

console.log(str.charCodeAt(4)); // 83

console.log(str.charCodeAt(20)); // NaN
```

<br>

# Unicode kodini belgi shakliga o‘tkazish uchun:

## `String.fromCharCode()`

metodidan foydalaniladi:

```
console.log(String.fromCharCode(74)); // "J"
```

<hr><br><br><br>

# `at()`

> `at()` — string ichidagi berilgan indeksdagi belgini qaytaradi (musbat va manfiy indekslarni qabul qiladi).

<br>

Sintaksis:

```
string.at(index);
```

<br>

Xususiyatlari:

- Musbat indekslar boshidan boshlab hisoblaydi.
- Manfiy indekslar oxiridan hisoblaydi.
- Agar indeks mavjud bo‘lmasa, undefined qaytaradi.
- ES2022 versiyasida qo‘shilgan.

<br>

Misollar:

```
const str = "JavaScript";

// Musbat indeks bilan
console.log(str.at(0)); // "J"
console.log(str.at(4)); // "S"

// Manfiy indeks bilan (oxiridan hisoblaydi)
console.log(str.at(-1)); // "t"
console.log(str.at(-4)); // "r"

// Mavjud bo‘lmagan indeks
console.log(str.at(20)); // undefined
```

<hr><br><br><br>

# `toUpperCase()`

> `toUpperCase()` — stringdagi barcha kichik harflarni katta harfga o‘zgartiradi.

<br>

Sintaksis:

```
string.toUpperCase();
```

<br>

Xususiyatlari:

- Asosiy stringni o‘zgartirmaydi (yangi string qaytaradi).
- Bo‘sh joylar, raqamlar va belgilar o‘zgarmaydi.
- Unicode bilan ishlaydi.

<br>

Misollar:

```
const str = "JavaScript";

// Katta harfga o‘zgartirish
console.log(str.toUpperCase()); // "JAVASCRIPT"

// Asosiy string o‘zgarmaydi
console.log(str); // "JavaScript"

// Bo‘sh joylar va belgilarga ta’sir qilmaydi
console.log("hello world!".toUpperCase()); // "HELLO WORLD!"
```

<hr><br><br><br>

# `toLowerCase()`

<br>

> `toLowerCase()` — stringdagi barcha katta harflarni kichik harfga o‘zgartiradi.
> <br>

Sintaksis:

```
string.toLowerCase();
```

<br>

Xususiyatlari:

- Asosiy stringni o‘zgartirmaydi (yangi string qaytaradi).
- Bo‘sh joylar, raqamlar va belgilar o‘zgarmaydi.
- Unicode bilan ishlaydi.

<br>

Misollar:

```
const str = "JavaScript";

// Kichik harfga o‘zgartirish
console.log(str.toLowerCase()); // "javascript"

// Asosiy string o‘zgarmaydi
console.log(str); // "JavaScript"

// Bo‘sh joylar va belgilarga ta’sir qilmaydi
console.log("HELLO WORLD!".toLowerCase()); // "hello world!"
```

<hr><br><br><br>

# `trim()`

> `trim()` — stringning boshidagi va oxiridagi bo‘sh joylarni olib tashlaydi.

<br>

Sintaksis:

<br>

```
string.trim();
```

<br>

Xususiyatlari:

- Asosiy stringni o‘zgartirmaydi (yangi string qaytaradi).
- Boshidagi va oxiridagi bo‘sh joylar, yangi qatordan (\n), tab belgisi (\t) olib tashlanadi.
- Ichki bo‘sh joylar o‘zgarmaydi.

<br>

Misollar:

```
const str = "   Hello, World!   ";

// Bosh va oxiridagi bo‘sh joylarni olib tashlash
console.log(str.trim()); // "Hello, World!"

// Asosiy string o‘zgarmaydi
console.log(str); // "   Hello, World!   "

// Ichki bo‘sh joylar o‘zgarmaydi
console.log("  Hello   World  ".trim()); // "Hello   World"
```

<hr><br><br><br>

# `trimStart()`

> `trimStart()` — stringning boshidagi bo‘sh joylarni olib tashlaydi.

<br>

Sintaksis:

```
string.trimStart();
```

<br>

Xususiyatlari:

- Asosiy stringni o‘zgartirmaydi (yangi string qaytaradi).
- Faqat boshidagi bo‘sh joylarni olib tashlaydi.
- Ichki va oxiridagi bo‘sh joylar o‘zgarmaydi.

<br>

Misollar:

```
const str = "   Hello, World!   ";

// Boshidagi bo‘sh joylarni olib tashlash
console.log(str.trimStart()); // "Hello, World!   "

// Asosiy string o‘zgarmaydi
console.log(str); // "   Hello, World!   "

// Ichki va oxiridagi bo‘sh joylar o‘zgarmaydi
console.log("  Hello   World  ".trimStart()); // "Hello   World  "
```

<hr><br><br><br>

# `trimEnd()`

> `trimEnd()` — stringning oxiridagi bo‘sh joylarni olib tashlaydi.

<br>

Sintaksis:

```
string.trimEnd();
```

Xususiyatlari:

- Asosiy stringni o‘zgartirmaydi (yangi string qaytaradi).
- Faqat oxiridagi bo‘sh joylarni olib tashlaydi.
- Ichki va boshidagi bo‘sh joylar o‘zgarmaydi.

<br>

Misollar:

```
const str = "   Hello, World!   ";

// Oxiridagi bo‘sh joylarni olib tashlash
console.log(str.trimEnd()); // "   Hello, World!"

// Asosiy string o‘zgarmaydi
console.log(str); // "   Hello, World!   "

// Ichki va boshidagi bo‘sh joylar o‘zgarmaydi
console.log("  Hello   World  ".trimEnd()); // "  Hello   World"
```

<hr><br><br><br>

# `concat()`

> `concat()` — bir nechta stringlarni birlashtirib, yangi string yaratadi.

<br>

Sintaksis:

```
string1.concat(string2, string3, ...);
```

Xususiyatlari:

- Asosiy stringni o‘zgartirmaydi (yangi string qaytaradi).
- Har qanday miqdordagi stringlarni birlashtirishi mumkin.
- - operatoriga alternativa sifatida ishlatiladi.

<br>

Misollar:

```
const str1 = "Hello";
const str2 = "World";

// Ikkita stringni birlashtirish
console.log(str1.concat(" ", str2)); // "Hello World"

// Ko‘p stringlarni birlashtirish
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"
```

<hr><br><br><br>

# `includes()`

> `includes()` — string ichida berilgan substring mavjud yoki mavjud emasligini true/false ko‘rinishida qaytaradi.

<br>

Sintaksis:

```
string.includes(searchString, position);
```

<br>

Parametrlar:

| Parametr     | Tavsif                                        | Majburiy            |
| ------------ | --------------------------------------------- | ------------------- |
| searchString | Qidirilayotgan substring                      | ha                  |
| position     | Qidirishni qaysi indeksdan boshlash kerakligi | yo'q (standart — 0) |

<br>

Xususiyatlari:

- true yoki false qaytaradi.
- Katta-kichik harflarga e’tibor beradi.
- Unicode bilan ishlaydi.
- indexOf() metodiga alternativa sifatida ishlatiladi.

<br>

Misollar:

```
const str = "JavaScript is awesome";

// Substring mavjud bo‘lsa — true qaytaradi
console.log(str.includes("Script")); // true

// Substring mavjud bo‘lmasa — false qaytaradi
console.log(str.includes("script")); // false (katta-kichik harf farqi bor)

// Qidirishni ma’lum indeksdan boshlash
console.log(str.includes("is", 10)); // false (10-indeksdan boshlab qidiradi)

// Asosiy string o‘zgarmaydi
console.log(str); // "JavaScript is awesome"
```

<hr><br><br><br>

# `indexOf()`

> `indexOf()` — string ichida berilgan substringning birinchi uchragan indeksini qaytaradi.

<br>

Sintaksis:

```
string.indexOf(searchString, fromIndex);
```

<br>

Parametrlar:

| Parametr     | Tavsif                                        | Majburiy           |
| ------------ | --------------------------------------------- | ------------------ |
| searchString | Qidirilayotgan substring                      | ha                 |
| fromIndex    | Qidirishni qaysi indeksdan boshlash kerakligi | yo' (standart — 0) |

<br>

Xususiyatlari:
- Agar substring topilsa, birinchi indeksni qaytaradi.
- Agar substring topilmasa, -1 qaytaradi.
- Katta-kichik harflarga e’tibor beradi.
- Unicode bilan ishlaydi.

<br>

Misollar:

```
const str = "JavaScript is awesome";

// Substring topilsa, birinchi indeksni qaytaradi
console.log(str.indexOf("Script")); // 4

// Substring topilmasa, -1 qaytaradi
console.log(str.indexOf("script")); // -1 (katta-kichik harf farqi bor)

// Qidirishni ma’lum indeksdan boshlash
console.log(str.indexOf("is", 10)); // -1 (10-indeksdan boshlab qidiradi)

// Asosiy string o‘zgarmaydi
console.log(str); // "JavaScript is awesome"
```