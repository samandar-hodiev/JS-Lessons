
// 1 - masala

/*
 A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
*/

// let a = Number(prompt('A:'));

// if (a > 0) {
//     console.log("A musbat", true);
// } else {
//     console.log("A manfiy", false)
// };





//  2- masala

/*
A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
*/

// let a = Number(prompt('A:'));

// if (a % 2 !== 0) {
//     alert(`Kiritilgan son toq son.!`);
// } else {
//     alert(`Kiritlgan son toq son emas.!`)
// };







// 3 - masala

/*
Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
*/

// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));

// if (A > 2 && B <= 3) {
//     alert(true);
// } else {
//     alert(false);
// };





//  4 - masala

/*
    Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
*/

// function math(A, B, C) {
//     if (C >= B && C >= A && B >= A) {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
// };

// math(-8, 4, 6);




//  5 - masala

/*
  Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
*/


// let A = Number(prompt('A:'));
// let B = Number(prompt("B:"));

// if ((A % 2 !== 0 && B % 2 !== 0) || (A % 2 === 0 && B % 2 === 0)) {
//     alert(true);
// } else {
//     alert(false);
// };





//  6 - masala

/*
    Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
*/


// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));
// let C = Number(prompt('C:'));

// if (A > 0 || B > 0 || C > 0) {
//     alert(true);
// } else {
//     alert(false);
// };




//  7 - masala

/*
    Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".

    abc - uch xonasi son

    a !== b
    a !== c
    b !== c
*/


// let abc = prompt(`Uch xonasi son kiriting:`);

// let arrNum = abc.split('');

// let a = Number(arrNum[0]);
// let b = Number(arrNum[1]);
// let c = Number(arrNum[2]);

// if (a !== b && a !== c && b !== c) {
//     alert(true);
// } else {
//     alert(false);
// };




//  8 - masala

/*
   Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
*/


// let a = Number(prompt('A:'));
// let b = Number(prompt('B:'));
// let c = Number(prompt('C:'));

// if (a === b || a === c || c === b) {
//     alert(true);
// } else {
//     alert(false);
// };




// 9 - masala

/*
   A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
*/

// let a = Number(prompt('A:'));

// if (a % 2 === 0) {
//     alert(true);
// } else {
//     alert(false);
// };





//  10 - masala

/*
    Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 yoki B <=2"
*/


// let a = Number(prompt('A:'));
// let b = Number(prompt('B:'));

// if (a >= 0 || b <= 2) {
//     alert(true);
// } else {
//     alert(false);
// };



// 11 - masala

/*
   Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".

   A > B
   C > B
*/

// let A = Number(prompt('A:'));
// let B = Number(prompt("B:"));
// let C = Number(prompt('C:'))

// if (A > B && C > B) {
//     alert(true);
// } else {
//     alert(false);
// };




//  12 - masala

/*
   Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
*/

// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));

// if (A % 2 !== 0 && B % 2 !== 0) {
//     alert(true);
// } else {
//     alert(false);
// };




//  13 - masala

/*
   Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
*/

// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));

// if (A % 2 !== 0 || B % 2 !== 0) {
//     alert(true);
// } else {
//     alert(false);
// };



//  14 - masala

/*
    Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
*/


// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));


// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0)) {
//     alert(true);
// } else {
//     alert(false);
// };







//  15 - masala

/*
    Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// */

// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));
// let C = Number(prompt('C:'));

// if (A > 0 && B > 0 && C > 0) {
//     alert(true);
// } else {
//     alert(false);
// };






//  16 - masala

/*
    Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
*/


// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));
// let C = Number(prompt('C:'));


// if ((A > 0 && B < 0 && C < 0) || (A < 0 && B > 0 && C < 0) || (A < 0 && B < 0 && C > 0)) {
//     alert(true);
// } else {
//     alert(false);
// };






//  17 - masala

/*
   Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
*/



// let A = Number(prompt('A:'));
// let B = Number(prompt('B:'));
// let C = Number(prompt('C:'));


// if ((A > 0 && B > 0 && C < 0) || (A > 0 && B < 0 && C > 0) || (A < 0 && B > 0 && C > 0)) {
//     alert(true);
// } else {
//     alert(false);
// };



//  18 - masala

/*
    Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
*/


// let ab = Number(prompt('Number:'));

// if (ab % 2 === 0 && ab <= 99) {
//     alert(true);
// } else {
//     alert(false);
// };





//  19 - masala

/*
    Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
*/


// let number = Number(prompt('N:'));

// if (number % 2 !== 0 && number > 99 && number < 1000) {
//     alert(true);
// } else {
//     alert(false);
// };








//  20 - masala


/*
Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
*/

// let a = Number(prompt('A:'));
// let b = Number(prompt('B:'));
// let c = Number(prompt('C:'));


// if (a === -b || a === -c || b == -c) {
//     alert(true);
// } else {
//     alert(false);
// };





//  21 - masala

/*
    Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama - ket o'suvchi bo'lib joylashgan".

    abc

    123
    359

    C>B
    C>A
    A>B
*/


// let abc = prompt('Uch xonali son kiriting:');

// let arrNum = abc.split('');

// let a = Number(arrNum[0]);
// let b = Number(arrNum[1]);
// let c = Number(arrNum[2]);


// if (c > a && c > b && b > a) {
//     alert(true)
// } else {
//     alert(false);
// };



// 22 - malasa

/*
    Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".

    123
    ||
    321

    abs
    ||
    cba


abc
c>b
c>a
b>a

a>b
a>c
b>c

*/

// let abc = prompt("Uch xonasi son kiriting:");

// let arrNum = abc.split('');

// let a = Number(arrNum[0]);
// let b = Number(arrNum[1]);
// let c = Number(arrNum[2]);

// if ((c > a && c > b && b > a) || (a > b && a > c && b > c)) {
//     alert(true);
// } else {
//     alert(false);
// };
