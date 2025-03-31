<h1 style="text-align:center;">Lesson 11 </h1>

- Functions

  - What is it?
  - Built-in examples
  - Declaration and calling
  - Parameters vs argument
  - Example
  - Returning
  - Default values
  - Naming
  - First-class citizens

- Local scope

- Anonymous functions
  - Immediately Invoked Function Execution(IIFE)
  - Function expression
  - Arrow function

<hr><br><br><br><br>

# `What is it?`

- Funksiya – bu ma’lum bir kodni qayta ishlatish imkonini beruvchi tuzilma.
- Kodni takrorlamaslik va qayta ishlatish uchun funksiyalar ishlatiladi.

<hr><br><br><br><br>

# `Built-in examples`

JavaScript’da oldindan tayyorlangan funksiyalarga misollar:

`console.log()`
`Math.max()`
`parseInt()`
`setTimeout()`

<hr><br><br><br><br>

# `Declaration and calling`

- Funksiyani e’lon qilish:

```
function sayHello() {
    console.log('Hello!');
  }
```

- Funksiyani chaqirish:

```
sayHello(); // 'Hello!'
```

<hr><br><br><br><br>

# `Parameters vs Argument`

| Parameter                             | Argument                         |
| ------------------------------------- | -------------------------------- |
| Funksiya e’lon qilinishida aniqlanadi | Funksiya chaqirilganda uzatiladi |
| Misol: function sum(a, b) {}          | Misol: sum(2, 3)  a = 2, b = 3  |

<br>

- Misol:

```
function greet(name) { // 'name' - parameter
  console.log('Hello, ' + name);
}

greet('JavaScript'); // 'JavaScript' - argument
```

<hr><br><br><br><br>

# `Example`

```
function say() {
	console.log("Hello world !")
}

function perimetr(a, b) {
	let p = 2 * (a + b);
	console.log(p);
}
```

<hr><br><br><br><br>

# `Return`

- return – qiymat qaytaradi
- console.log() – faqat konsolga chiqaradi
- return – funksiyani bajarilishini to‘xtatadi
- return orqali qaytgan qiymatni boshqa joyda ishlatish mumkin

<br>

```
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```
<hr><br><br><br><br>

# `Default values`

```
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}

greet(); // 'Hello, Guest'
greet('Samandar'); // 'Hello, Samandar'
```
<hr><br><br><br><br>

# `Naming`

- camelCase ishlatiladi
- Nomi funksiyaning maqsadini aks ettirishi kerak
- Maslahat: `getData()`, `calculateSum()`, `showMessage()`


### Noto‘g‘ri nomlar:

- x() – tushunarsiz nom
- foo() – manosiz nom

<hr><br><br><br><br>

# `First-class citizens`

> First-Class Citizens (yoki First-Class Functions) – JavaScript’da funksiyalarni boshqa ma’lumot turlari kabi ishlatish mumkinligini bildiradi.

 JavaScript’da funksiyalarni:
- Oʻzgaruvchiga o‘zlashtirish mumkin
- Argument sifatida uzatish mumkin
- Qaytarish (return) mumkin

<br>

###  Funksiyani o‘zgaruvchiga o‘zlashtirish

```
const greet = function(name) {
  return `Hello, ${name}`;
};

console.log(greet('JavaScript')); // Hello, JavaScript
```

<br>

### Funksiyani argument sifatida uzatish

```
function sayHello() {
  return 'Hello';
}

function greet(func) {
  console.log(func());
}

greet(sayHello); // Hello
```

- `sayHello` funksiyasini `greet` funksiyasiga argument sifatida uzatdik
- `greet(func)` ichida `func()` chaqirilganda natija chiqadi

<br>

###  Funksiyani qaytarish `return`

- Funksiyani boshqa funksiyadan qaytarish mumkin:

```
function createNew(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createNew(2);
console.log(double(5)); // 10
```

- `createNew(2)` - ichki funksiyani qaytaradi
- `double(5)`  number * factor - 5 * 2 = 10

<hr><br><br><br><br>

# `Local scope`


> Funksiya ichida e'lon qilingan o‘zgaruvchi faqat o‘sha funksiya ichida ko‘rinadi.

```
function sayHello() {
  let message = "Hello, World!";
  console.log(message); // Hello, World!
}

sayHello();

console.log(message); // ReferenceError: message is not defined
```
<hr><br><br><br><br>

# `Anonymous functions`

> Anonymous function — nomi bo‘lmagan (anonim) funksiyadir.

> Anonymous function'ni o'zgaruvchiga o'zlashtirish yoki call-back sifatida ishlatish mumkin.

<br><br>

## IIFE (Immediately Invoked Function Expression)

- `IIFE` — bu yozilgandan so‘ng darhol bajariladigan funksiya.
- `IIFE`'ni yaratish uchun funksiya qavs ichiga olinadi va darhol `()` bilan chaqiriladi.


IIFE qoidalari:
- Funksiya qavs ichiga olinadi - `(function() { ... })`
- Funksiya darhol chaqiriladi - `()`
- Global scope ta'sirlanmaydi — `IIFE` ichidagi o‘zgaruvchilar faqat `lokal scope` ichida qoladi.



### Sintax:

IIFE sintaksisi:

```
(function() {
  // statements
})();
```

Arrow function bilan IIFE sintaksisi:

```
(() => {
  // statements
})();
```
<br><br>

## Function expression

- Funksiya o‘zgaruvchiga o‘zlashtiriladi - `const func = function() { ... }`
- Hoisting ishlamaydi — E’lon qilishdan oldin chaqirib bo‘lmaydi.
- Nomli function expression faqat funksiyaning ichida ko‘rinadi.

<br><br>

#### Funksiya o‘zgaruvchiga o‘zlashtiriladi

```
const greet = function() {
  console.log("Salom!");
};

greet(); // Salom!
```
<br>

#### Hoisting ishlamaydi

```
console.log(add(2, 3)); // ReferenceError: Cannot access 'add' before initialization

const add = function(a, b) {
  return a + b;
};
```
> Function expression e’lon qilishdan oldin chaqirib bo‘lmaydi.

<br>

#### Nomli function expression faqat funksiyaning ichida ko‘rinadi

```
const divide = function div(a, b) {
  if (b === 0) return "Nolga bo‘lish mumkin emas";
  return a / b;
};

console.log(divide(6, 2)); // 3
console.log(div(6, 2)); // ReferenceError: div is not defined
```
>div funksiyaning ichida ko‘rinadi, lekin tashqaridan ko‘rinmaydi.

<br><br>

## Arrow function

- Sintaksisi qisqaroq — function kalit so‘zi ishlatilmaydi, o‘rniga `=>` belgisi ishlatiladi.
- this konteksti yo‘q — this tashqi scope’dan meros qilib olinadi.

```
const sum = (a, b) => a + b;

console.log(sum(3, 5)); // 8
```
