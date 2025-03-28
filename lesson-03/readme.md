<h1 style="text-align:center;">Lesson 3 </h1>

## - JavaScript Data Types (Ma'lumot Turlari)
## - Arithmetic (mixture)

<br><br><br>

JavaScript’da data turlari **2 ta asosiy guruhga** bo‘linadi:

1. **Primitive Types** (Primitiv turlar)
2. **Reference Types** (No primativee turlar)

<br><br><br>

<img src="./images/variables.png" style="width:35%;">

---

<br>

## Primitive Types (Primitiv turlar)

Bu turlar **oddiy qiymatlar** bilan ishlaydi. Qiymat **stack** xotirada saqlanadi.

<br>

# JavaScript Ma'lumot Turlari


| Type          | Misol                   | Tushuntirish          |
| ------------- | ----------------------- | --------------------- |
| **String**    | `"Hello"`               | Matn                  |
| **Number**    | `42`                    | Son (butun yoki kasr) |
| **Boolean**   | `true`, `false`         | Mantiqiy qiymat       |
| **Undefined** | `undefined`             | Qiymat berilmagan     |
| **Null**      | `null`                  | Bo‘sh qiymat          |
| **BigInt**    | `12345678901234567890n` | Katta sonlar          |
| **Symbol**    | `Symbol('id')`          | Unikal kalit yaratadi |

---

<br><br><br>

## Reference Types (Referens turlar)

Bu turlar **obyektlar** bilan ishlaydi.

| Type         | Misol              | Tushuntirish      |
| ------------ | ------------------ | ----------------- |
| **Object**   | `{ name: "John" }` | Obyekt            |
| **Array**    | `[1, 2, 3]`        | Array             |
| **Function** | `function() {}`    | Funksiya          |
| **Date**     | `new Date()`       | Sana obyektlari   |
| **RegExp**   | `/ab+c/`           | Muntazam ifodalar |

---

<hr> <br> <br> <br>

# JavaScript’da Primitive va Reference turlar o‘rtasidagi asosiy farqlar

## `Primitive turlar`

- Qiymat to‘g‘ridan-to‘g‘ri o‘zgaruvchiga saqlanadi.
- Yangi o‘zgaruvchiga ko‘chirilganda qiymatning nusxasi olinadi.
- O‘zgarmaydi (immutable) — qiymatni o‘zgartirib bo‘lmaydi, faqat yangisini berish mumkin.
- Stack’da saqlanadi.

<br>

Misol:

```
let a = 10;
let b = a; // b'ga a qiymatining nusxasi ko'chiriladi
b = 20;

console.log(a); // 10
console.log(b); // 20
```

b = a qilinganda a qiymati nusxalanadi, lekin a o‘zgarmaydi.

<br><br> <br>

## `Reference turlar`

<br>

> `Stack` va `Heap` kompyuterning xotirasida (RAM) joylashadi. Ular bir xil xotirada ishlaydi, lekin boshqarilish tartibi va maqsadi jihatidan farqlanadi.

<br>

## Stack va Heap qayerda joylashgan?

> Kompyuterning RAM xotirasi uch qismga bo‘linadi:

- `Code Segment` - Kodlar saqlanadi
- `Stack Segment` - Primitive turlar..
- `Heap Segment` - Obyektlar va murakkab turlar saqlanadi

<br>

## Stack qayerda joylashadi va qanday ishlaydi?

- Stack RAM’ning yuqori qismida joylashadi.
- Stack LIFO (Last In, First Out) tartibda ishlaydi — oxirgi kiritilgan birinchi chiqadi.
- Ma’lumotlar statik (o‘lchami oldindan ma’lum) bo‘ladi.
- Stack tez ishlaydi, lekin hajmi kichikroq bo‘ladi.

<br>

Misol:

```
function test() {
  let a = 10; // Stack'ga yoziladi
  let b = 20; // Stack'ga yoziladi
}
test();


Jarayon:

- test() chaqirilganda, Stack’da yangi kontekst (frame) yaratiladi.
- a va b qiymatlari Stack’da saqlanadi.
- test() tugagach, Stack’dan frame olib tashlanadi.
```

<br>

## Heap qayerda joylashadi va qanday ishlaydi?

- Heap RAM’ning pastki qismida joylashadi.
- Heap dinamik (o‘lchami oldindan ma’lum emas) ma’lumotlar uchun ishlatiladi.
- Heap’dagi ma’lumotlar manzil (reference) orqali boshqariladi.
- Heap’ga kiritilgan ma’lumotlar ko‘proq xotira egallaydi va sekinroq ishlaydi.

<br>

Misol:

```
let obj = { name: "John" };
```

Bu kodda nima bo‘layotganini qadam-baqadam ko‘rib chiqamiz:

<br>

### 1. Obyekt yaratish

```
{ name: "John" }
```

- `{ name: "John" }` — obyekt literal.
- Yangi obyekt yaratish uchun JavaScript Heap xotirasidan joy ajratadi.
- Heap — bu dinamik ma’lumotlar saqlanadigan xotira bo‘lib, obyektlar, array va funksiyalar shu yerga yoziladi.

<br>

Heap ichidagi obyekt:

HEAP:

```
{ name: "John" }
```

<br>

### 2. Stack’da obyekt uchun manzil yaratish

```
let obj = { name: "John" };
```

- obj — bu o‘zgaruvchi (variable).
- obj Stack’da joylashadi, chunki Stack’da primitive turlar va obyektning Heap’dagi manzili saqlanadi.
- obj ning qiymati obyektning o‘zi emas, Heap’dagi manzil bo‘ladi.

<br>

Misol:

```
{ name: "John" } Heap’da 0x001A manzilida joylashadi.

obj Stack’da 0x001A manzilini saqlaydi.
```

### 3. Natija qanday ko‘rinadi?

Stack va Heap o‘zaro bog‘langan holda ko‘rinadi:

<br>

```
STACK                         HEAP
-------------------          -----------------
| obj | 0x001A | ---------> | { name: "John" } |
-------------------          -----------------
```

- obj Stack’da obyektning manzilini (0x001A) saqlaydi.
- Manzil orqali Heap’dagi obyektga murojaat qilinadi.

<br>

### 4. Obyekt qiymatini o‘qish

```
console.log(obj.name); // "John"
```

obj.name ni o‘qishda quyidagilar bo‘ladi:

- JavaScript Stack’dagi obj ga murojaat qiladi.
- Stack’da obj qiymati (0x001A) orqali Heap’ga boradi.
- Heap’da 0x001A manziliga kirib, name maydonini o‘qiydi.
- Natija: "John" chiqadi.

<br>

### 5. Obyekt qiymatini o‘zgartirish

```
obj.name = "Mike";
```

- obj orqali Heap’dagi manzilga boriladi (0x001A).
- Heap’dagi { name: "John" } obyektining qiymati "Mike" ga o‘zgartiriladi.

<br>

Yangi holat:

```
STACK                         HEAP
-------------------          -----------------
| obj | 0x001A | ---------> | { name: "Mike" } |
-------------------          -----------------
```

<br>

### 6. Obyektni null qilish

```
obj = null;
```

- obj Stack’dagi manzilni o‘chiradi (ya’ni 0x001A ni olib tashlaydi).
- Endi `{ name: "Mike" }` obyektiga hech qanday murojaat yo‘q.
- Garbage Collector buni keraksiz deb hisoblab, obyektni xotiradan o‘chiradi.

<br>

Yangi holat:

```
STACK                         HEAP
-------------------          -----------------
| obj | null  |              X { name: "Mike" }
-------------------          -----------------
```

<br>

Xulosa:

```
let obj = { name: "John" }; yozilganda:
```

- `{ name: "John" }` obyekt Heap’da joylashadi.
- obj Stack’da Heap’dagi obyektning manzilini `0x001A` saqlaydi.
- Heap’dagi obyektga Stack’dagi manzil orqali kiriladi.

> Agar obyektga hech qanday murojaat qolmasa, Garbage Collector uni tozalaydi.Obyekt faqat manzil orqali boshqariladi.

<br><br><br><br>

## Primitive vs Reference turlar

| Xususiyat                    | Primitive                         | Reference                                |
| ---------------------------- | --------------------------------- | ---------------------------------------- |
| **Saqlanish joyi**           | Stack                             | Stack (manzil) + Heap (qiymat)           |
| **Qiymat o‘tkazish**         | Qiymatning nusxasi o‘tadi         | Manzil (reference) o‘tadi                |
| **O‘zgartirish**             | Yangi qiymat bilan almashtiriladi | Manzil orqali o‘zgartiriladi             |
| **Mustaqillik**              | O‘zgaruvchilar mustaqil           | Obyektlar bir-biriga bog‘liq             |
| **Tezlik**                   | Tez                               | Nisbatan sekin                           |
| **O‘zgarmaslik (Immutable)** | Ha                                | Yo‘q (faqat manzilni almashtirish bilan) |

<hr> <br> <br> <br> <br> <br><br> <br> <br> <br> <br><br> <br> <br> <br> <br>

# Arithmetic (mixture)

| syntax              | res |
| ------------------- | --- |
| num + str           | str |
| num /str(num)       | num |
| str(num) / str(num) | num |
| others              | NaN |

<hr> <br> <br> <br> <br> <br>
