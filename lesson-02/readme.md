<h1 style="text-align:center;">Lesson 2 </h1>

- variables

  - var
  - let
  - const

   <br>

- Arithmetic operator
  - (-)
  - (+)
  - (\*)
  - (/)
  - (\*\*)
  - (%)

<br><br><br><br>

# O'zgaruvchilar (variables)

> JavaScript-da o‘zgaruvchilar (variables) ma’lumotlarni saqlash uchun ishlatiladi. Ularni e’lon qilish uchun `var`, `let` va `const` kalit so‘zlaridan foydalaniladi.

<br>

<img src="./images/syntax.png" style="width:50%;">


<br>

## var

> ES6 dan oldingi eski usul.
> Funksiya scope (doirasi)ga ega.
> Qayta e’lon qilish mumkin.

```
var name = "John";
console.log(name); // John

var name = "Doe"; // Qayta e'lon qilish mumkin
console.log(name); // Doe
```

<br>

## let

> ES6 da kiritilgan zamonaviy usul.
> Block scope ({} ichida mavjud bo‘ladi).
> Qayta e’lon qilib bo‘lmaydi, lekin qiymatini o‘zgartirish mumkin.

```
let age = 25;
console.log(age); // 25

age = 30; // Qiymatini o'zgartirish mumkin
console.log(age); // 30

// let age = 40; // Xatolik: Qayta e’lon qilib bo‘lmaydi
```

<br>

## const

> O‘zgarmas (constant) o‘zgaruvchi yaratish uchun ishlatiladi.
> Qiymatini o‘zgartirish yoki qayta e’lon qilish mumkin emas.
> Dastur davomida o‘zgarishi kerak bo‘lmagan qiymatlar uchun ishlatiladi.

```
const PI = 3.14;
console.log(PI); // 3.14

// PI = 3.14159; // Xatolik: Qiymatini o‘zgartirib bo‘lmaydi
let va const ning var dan asosiy farqlari:
```

<br>

| Xususiyat              | var      | let   | const |
| ---------------------- | -------- | ----- | ----- |
| Scope                  | Funksiya | Block | Block |
| Qayta e’lon qilish     | Ha       | Yo‘q  | Yo‘q  |
| Qiymatini o‘zgartirish | Ha       | Ha    | Yo‘q  |

<br>

> Shuning uchun hozirgi zamonaviy JavaScript dasturlarida asosan let va const ishlatiladi.

<hr><br><br><br>

<h1>O'zgaruvchilarni (shakl) almashtirish</h1>

> O'zgaruvchilarning qiymatlarini bir-biri bilan almashtirish quyidagi kabi amalga oshiriladi:

    let A = 10;
    let B = 20;

    let K = A;
    A = B;
    B = K;

<hr><br><br><br>

## Identifikatorlar va nomlash qoidalari

> JavaScriptda o'zgaruvchi nomlarini tanlashda quyidagi qoidalarga amal qilish kerak:

- To'g'ri nomlar: Nomlar faqat harflar, raqamlar, pastki chiziq yoki dollar belgisidan iborat bo'lishi kerak.

- Raqamlar bilan boshlamaslik: O'zgaruvchi nomi raqam bilan boshlanmasligi kerak.

- Qisqa va tavsifli nomlar: Nomlar qisqa va ma'noli bo'lishi kerak.

- Kalit so'zlarni ishlatmaslik: Masalan, `var, let, const, if, else, switch, function, new, class` kabi so'zlar ishlatilmasligi kerak.

- Katta va kichik harflar: JavaScriptda nomlar katta-kichik harflarga sezgir, masalan, `a` va `A` ikki xil nom hisoblanadi.

<br>

## Nomlash uslublari:

PascalCase – Har bir so'zning bosh harfi katta qilib yoziladi, masalan, FirstName.

snake_case – So'zlar pastki chiziq bilan ajratiladi, masalan, first_name.

camelCase – Birinchi so'z kichik, keyingi so'zlar bosh harfi katta qilib yoziladi, masalan, firstName (tavsiya etiladi).

kebab-case – So'zlar chiziqcha bilan ajratiladi, masalan, first-name (JavaScriptda qo'llab-quvvatlanmaydi).

<hr><br><br><br>

# Arifmetik (arithmetic) operatorlar

| yozilishi | vazifai            |
| --------- | ------------------ |
| +         | qo’shish           |
| -         | ayirish            |
| -         | ko’paytirish       |
| /         | bo’lish            |
| \*\*      | darajaga ko'tarish |
| %         | qoldiqli bo’lish   |
