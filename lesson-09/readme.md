
<h1 style="text-align:center;">Lesson 9 </h1>

# SCOPE

- What is scope.?
- Types of scopes.
- var vs let vs const in the scopes

<hr><br><br><br>

# What is scope.?

> JavaScript da `scope` (doira) o‘zgaruvchilarning ko‘rinish doirasini (ya'ni, qayerdan kirish mumkinligini) belgilaydi. JavaScript’da scope kod qaysi joyda o‘zgaruvchilarga kirish mumkinligini belgilaydi.

<hr><br><br><br>

# Types of scopes.

> JavaScript’da faqat `2 ta` asosiy `scope` mavjud:

- Global scope
- Local scope 



> Ammo chuqurroq tushuntirganda, JavaScript’da 5 ta scope mavjud deb hisoblash mumkin:

- Global scope
- Function scope
- Block scope
- Module scope
- Lexical scope



<br>

Scope turi	Ta’rif	Qanday e’lon qilinadi
- Global scope	Kodning istalgan joyidan ko‘rinadi	var, let, const
- Function scope	Faqat funksiya ichidan ko‘rinadi	var, let, const
- Block scope	Faqat {} ichidan ko‘rinadi	let, const
- Module scope	Modul ichida ko‘rinadi	import/export
- Lexical scope	Ichki funksiya tashqi scope'ni ko‘radi	Funksiya ichida

<br>
<br><br>

# 1. Global Scope

>Kodning istalgan joyidan kirish mumkin bo‘lgan o‘zgaruvchilar.
`var`, `let`, `const` bilan kodning tashqarisida e’lon qilingan o‘zgaruvchilar global hisoblanadi.

```
let x = 10; // Global scope

function test() {
  console.log(x); // 10
}

console.log(x); // 10
```

> `x` o‘zgaruvchisi global scope ichida bo‘lgani uchun hamma joydan ko‘rinadi.

<br><br>

# 2. Function Scope

- Funksiya ichida `var`, `let`, `const` bilan e’lon qilingan o‘zgaruvchilar faqat o‘sha funksiya ichida ko‘rinadi.

- Tashqaridan bunday o‘zgaruvchiga kirib bo‘lmaydi.

```
function myFunc() {
  let y = 20; // Function scope
  console.log(y); // 20
}

myFunc();
console.log(y); //ReferenceError: y is not defined
```
<br><br>

# 3. Block Scope

- `{}` (blok) ichida `let` yoki `const` bilan e’lon qilingan o‘zgaruvchilar faqat o‘sha blok ichida ko‘rinadi.
- `var` esa block scopega ega emas.

```
{
   let z = 30;
   console.log(z); // 30
}

console.log(z); //ReferenceError: z is not defined
```

<br>

```
{
  var a = 40;
}

console.log(a); // 40
```
<br><br>

# 4. Module Scope  (ES6+)
- `import`/`export` orqali modullar bilan ishlaganda yuzaga keladi.
- Modul ichidagi o‘zgaruvchilar faqat o‘sha modul ichida ko‘rinadi.
- Moduldagi o‘zgaruvchilar global scope ga chiqmaydi.

`type="module"`

<br><br>

# 5. Lexical Scope (Closure bilan bog‘liq)

- Ichki funksiya tashqi funksiyaning o‘zgaruvchilariga kira oladi.
- Tashqi funksiyaning scope'iga ichki funksiya kirishi mumkin, lekin aksincha emas.

```
function outer() {
  let count = 0;

  function inner() {
    console.log(count); // 0
  }

  inner();
}

outer();
```
>`inner()` funksiyasi `outer()` funksiyasidagi count o‘zgaruvchisiga kira oladi.


## var let const

Muhim farqlar:
- var — Global va Function scope’ni tan oladi, Block scope'ni tan olmaydi.
- let va const — Function scope va Block scope'ni tan oladi.
- Module scope va Lexical scope faqat ES6+ da qo‘llanadi.
