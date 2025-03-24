<h1 style="text-align:center;">Lesson 15</h1>

String

- Three quotes
- Using slesh
- Length
- Accessing
- Comparison
- Iteration
- Spread operator

<hr><br><br><br><br><br>

# `string`

<br>

> JavaScript'da `string` — bu matn qatori bo‘lib, uni qo‘shtirnoq (""), bir tirnoq ('') yoki backtick (``) ichiga olish mumkin.

<br><br>

## `Three quotes`

### Qoʻshtirnoq `""` bilan:

> Qoʻshtirnoq orqali string yaratish odatiy usul hisoblanadi.

```
let str = "Hello, World!";
```

<br>

### Bir tirnoq `''` bilan:

> Bir tirnoq bilan string yaratish ham mumkin.

```
let str = 'Hello, World!';
```

<br>

### Backtick (``) bilan:

> Backtick orqali template literal yaratish mumkin. U orqali string ichiga o‘zgaruvchilar kiritish va ko‘p qatorli string yaratish qulay.

- Backtick `${}` orqali interpolatsiya qilish imkonini beradi.
- `Ko‘p qatorli` string yozish mumkin:

<br>

```
let name = "JavaScript";
let str = `Hello, ${name}!`;
```

<br>

Qachon ishlatiladi:

- Qoʻshtirnoq (") - Oddiy string yaratishda
- Bir tirnoq (') - Oddiy string yaratishda
- Backtick (``) - Interpolatsiya yoki ko‘p qatorli string yozishda

<br><br>

## `Using slesh`

> JavaScript’da string ichida slash `\` qochirish belgisi sifatida ishlatiladi. U maxsus belgilardan oldin qo‘yilib, ularni to‘g‘ri talqin qilishga yordam beradi.

<br>

### Mashhur qochirish belgilar (Escape Characters)

| Belgilar | Tavsif                     | Misol                 | Natija                           |
| -------- | -------------------------- | --------------------- | -------------------------------- |
| `\'`     | Bir tirnoqni qochirish     | `'It\'s ok'`          | `It's ok`                        |
| `\"`     | Qoʻshtirnoqni qochirish    | `"He said \"hello\""` | `He said "hello"`                |
| `\\`     | Backslashni qochirish      | `"C:\\Windows"`       | `C:\Windows`                     |
| `\n`     | Yangi qatorga o‘tish       | `"Hello\nWorld"`      | Hello<br>World                   |
| `\t`     | Tab qoʻshish               | `"Hello\tWorld"`      | Hello World                      |
| `\b`     | Bitta belgi o‘chirish      | `"abc\bdef"`          | `abdef`                          |
| `\r`     | Kursorni boshiga qaytarish | `"Hello\rWorld"`      | `World`                          |
| `\f`     | Form feed                  | `"Hello\fWorld"`      | `Hello` + yangi qatorda `World`  |
| `\v`     | Vertical tab               | `"Hello\vWorld"`      | `Hello` + vertical tab + `World` |

---

 **Qachon ishlatiladi?**  
- Qoʻsh tirnoq yoki bir tirnoqni string ichida ishlatishda  
- Yangi qatordan boshlash yoki tab kiritishda  
- Fayl yoʻllari yoki maxsus belgilarni qochirishda

---


<br><br>


##  `\'` - Bir tirnoqni qochirish

```
let str = 'It\'s a beautiful day!';
console.log(str); // It's a beautiful day!
```
<br>

## `\"` - Qoʻshtirnoqni qochirish

```
let str = "He said \"Hello\" to everyone.";
console.log(str); // He said "Hello" to everyone.
```

### `\\` - Backslashni qochirish

```
let path = "C:\\Windows\\System32";
console.log(path); // C:\Windows\System32
```
<br>

### `\n` - Yangi qatorga o‘tish

```
let message = "Hello\nWorld";
console.log(message);
/*
Hello
World
*/
```
<br>

### `\t` - Tab qoʻshish

```
let message = "Hello\tWorld";
console.log(message); // Hello    World
```
<br>

### `\b` - Bitta belgi o‘chirish

```
let text = "abc\bdef";
console.log(text); // abdef
```

### `\r` - Kursorni boshiga qaytarish

```
let text = "Hello\rWorld";
console.log(text); // World
```
<br>

### `\f` - Form feed

> Konsolda `\f` odatda ko‘rinmaydi, lekin u yangi sahifaga o‘tish yoki chop etishda ishlatiladi.

```
let text = "Hello\fWorld";
console.log(text); // Hello + yangi qatorda World
```
<br>

### `\v` — Vertical tab

> Konsolda \v odatda ko‘rinmaydi, lekin ba’zi muhitlarda vertikal oraliq qo‘shadi.

```
let text = "Hello\vWorld";
console.log(text); // Hello + vertical tab + World
```

<br><br>

## `Length`

>`length` xususiyati (property) string uzunligini bildiradi, ya'ni string ichidagi belgilarning umumiy sonini qaytaradi (bo'sh joylar, belgilar, raqamlar va boshqalar ham hisobga olinadi).

<br>

Qoida:

- `string.length` — string uzunligini qaytaradi.
- Bo‘sh string `""` uzunligi 0 ga teng.
- `Unicode` belgilarining uzunligi ham hisobga olinadi.

<br>

```
let str = "Hello, world!";
console.log(str.length); // 13

let emptyStr = "";
console.log(emptyStr.length); // 0

let emoji = "👋🌍";
console.log(emoji.length); // 2 (har bir emoji bitta belgi deb hisoblanadi)
```
<br><br>

## `Accessing`

>`Accessing` — bu string yoki array ichidagi elementlarga murojaat qilishni bildiradi. JavaScript-da index orqali string yoki array ichidagi elementlarga murojaat qilinadi.

<br>

- `String` ichidagi elementga murojaat qilish qoidasi:
- `string[index]` — index orqali belgiga murojaat qilinadi.
- Index 0 dan boshlanadi.

```
let str = "JavaScript";

// 0-index orqali birinchi elementga murojaat qilish
console.log(str[0]); // "J"

// Oxirgi elementga murojaat qilish
console.log(str[str.length - 1]); // "t"

// 4-indexdagi elementga murojaat qilish
console.log(str[4]); // "S"

// Mavjud bo‘lmagan indeksga murojaat qilish
console.log(str[20]); // undefined
```
<br><br>

## `Comparison`

>`Stringda Comparison` — bu string (matn) tipidagi qiymatlarni solishtirish jarayoni. JavaScript’da stringlar Unicode kodlariga asoslangan holda solishtiriladi.

<br>

Stringlarni solishtirish qoidalari:

- Katta-kichik harflar farqlanadi `A !== a`
- Unicode tartibiga ko‘ra solishtiriladi masalan, `a → 97, b → 98`
- Chapdan o‘ngga tartibda solishtiriladi.
- Birinchi belgilar bir xil bo‘lsa, keyingi belgilar solishtiriladi.

<br>

```
// 1. Tenglikni tekshirish
console.log("apple" == "apple"); // true
console.log("apple" === "Apple"); // false (katta-kichik harf farqli)

// 2. Kattalik va kichiklikni tekshirish
console.log("banana" > "apple"); // true ("b" → 98, "a" → 97)
console.log("apple" < "banana"); // true

// 3. Unicode asosida solishtirish
console.log("a" > "A"); // true (97 > 65)
console.log("apple" > "applE"); // true ("e" → 101, "E" → 69)

// 4. Bo‘sh stringlarni solishtirish
console.log("" == ""); // true
console.log("" < "a"); // true

```
<br>



![](https://naveenr.net/content/images/2017/03/ascii-codes.gif)

<br><br>

## `Spread operator`

>Stringda spread operator `...` string ichidagi har bir belgini alohida qilib, array elementlariga ajratadi.



Qoidalar:
- Spread operator stringni iterable qilib, har bir belgisini array elementiga aylantiradi.
- Har bir belgi (shu jumladan, bo‘sh joylar, emoji va boshqalar) alohida element sifatida olinadi.

<br><br>

### Stringni arrayga aylantirish:

```
const str = "Hello";
const chars = [...str];

console.log(chars); // ['H', 'e', 'l', 'l', 'o']
```
<br>

### Stringni array bilan birlashtirish:

```
const str = "Hi";
const extra = ['!', '!'];

const combined = [...str, ...extra];
console.log(combined); // ['H', 'i', '!', '!']
```
<br>

### Stringdagi harflarni qayta ishlash:

>Masalan, stringni har bir belgisini katta harfga o‘tkazish:

```
const str = "javascript";
const upperChars = [...str].map(char => char.toUpperCase());

console.log(upperChars); // ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T']
```
<br>

### Stringdagi belgilarga kirish:

```
const str = "Hello";
const [first, second, ...rest] = [...str];

console.log(first); // H
console.log(second); // e
console.log(rest); // ['l', 'l', 'o']
```

<br>


 ## Qachon ishlatiladi:
- Stringni arrayga o‘zgartirish kerak bo‘lsa
- Stringdagi belgilarni qayta ishlash kerak bo‘lsa
- Stringni boshqa array yoki object bilan birlashtirish kerak bo‘lsa




<br><br>

## `Iteration`

>Stringda iteration — bu string ichidagi har bir belgi (harf, bo‘sh joy, belgi) ustida birma-bir yurib chiqish jarayoni.

<br>

### String iteratsiya qilish uchun quyidagi usullardan foydalanish mumkin:

- `for`
- `for...of`
- `forEach()` 
- `map() `
- `while`

<br>


## `for` bilan iteration - Indeks orqali stringni har bir belgisini ko‘rib chiqish:

```
const str = "Hello";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// H, e, l, l, o
```

<br>

## `for...of` bilan iteration - Stringni iterable qilib, har bir belgi bo‘yicha ishlash:

```
const str = "World";

for (const char of str) {
  console.log(char);
}
// W, o, r, l, d
```

<br>

## `forEach()` bilan iteration - Spread operator bilan stringni arrayga aylantirib, forEach() bilan iteratsiya qilish:

```
const str = "JavaScript";

[...str].forEach(char => {
  console.log(char);
});
// J, a, v, a, S, c, r, i, p, t
```

<br>

## `map()` - bilan stringni arrayga o‘zgartirib, elementlarni qayta ishlash:

```
const str = "Code";

const result = [...str].map(char => char.toUpperCase());
console.log(result);
// ['C', 'O', 'D', 'E']
```
<br>


## `while loop` - bilan indeks orqali iteratsiya qilish:

```
const str = "Hello";
let i = 0;

while (i < str.length) {
  console.log(str[i]);
  i++;
}
// H, e, l, l, o
```