<h1 style="text-align:center;">Lesson 13</h1>

Iteration

- `for`
- `for in`
- `for of`

<br><br>

## Iteration turlari

> JavaScript’da array yoki object ichidagi elementlarni iteratsiya qilishning asosiy 3 usuli mavjud:

<br><br>

# 1. `for` tsikli

> for tsikli indeks asosida ishlaydi va elementlarga to‘g‘ridan-to‘g‘ri murojaat qiladi.

Sintaksis:

```
for (let i = 0; i < array.length; i++) {
  // Kodlar...
}
```

Misol:

```
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Natija:

```
apple
banana
cherry
```

Xususiyatlari:

- Indeks asosida ishlaydi
- Array uzunligini o‘zgartirish mumkin
- To‘liq nazorat mumkin

<br><br>

# 2. `for...in` tsikli

> `for...in` tsikli array yoki object ichidagi indekslarni (kalitlarni) iteratsiya qiladi.

Sintaksis:

```
for (const index in array) {
  // Kodlar...
}
```

Misol:

```
const fruits = ["apple", "banana", "cherry"];

for (const index in fruits) {
  console.log(index, fruits[index]);
}
```

Natija:

```
0 apple
1 banana
2 cherry
```

Xususiyatlari:

- Indeks yoki kalitlarni olish mumkin
- Object’lar bilan ishlaydi
- Array tartibini buzmasdan ishlaydi

<br><br>

# 3. `for...of` tsikli

> `for...of` tsikli array yoki iterable object ichidagi qiymatlar bilan ishlaydi.

Sintaksis:

```
for (const value of array) {
  // Kodlar...
}
```

Misol:

```
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Natija:

```
apple
banana
cherry
```

Xususiyatlari:

- Qiymatlar bilan ishlaydi
- Indekslarga ehtiyoj qolmaydi
- Oddiy va toza kod

Farqlar

| Tsikl turi | Qiymat bilan ishlaydi | Indeks bilan ishlaydi | Object bilan ishlaydi | Array bilan ishlaydi |
| ---------- | --------------------- | --------------------- | --------------------- | -------------------- |
| for        | ✅                    | ✅                    | ❌                    | ✅                   |
| for...in   | ❌                    | ✅                    | ✅                    | ✅                   |
| for...of   | ✅                    | ❌                    | ❌                    | ✅                   |
