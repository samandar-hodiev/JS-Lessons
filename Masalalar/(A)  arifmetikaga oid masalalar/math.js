

// 1 - masala

/*
 Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.

 L = 2 * π * R
 S = π * R^2
 π = 3.14
*/


// let R = Number(prompt('R:'));

// let L  = 2 * 3.14 * R;
// let S = 3.14 * R**2;

// alert(`Radiusi ${R} bo'lgan doiraning uzunligi L = ${L} ga, yuzais S = ${S} ga teng.!`);



//  2 - masala

/*
   Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin.

   G = (a*b)^1/2;
   G = Math.sqt(x);
*/

// let  a = Number(prompt("a:"));
// let b = Number(prompt("b:"));

// let G = (a*b)**0.5;


// if(a>0 && b>0){
//     alert(`${a} va ${b} sonlarining o'rta geometrigi ${G} ga teng`);
// }else{
//     alert(`a va b ning qiymatlari musbat bo'lishi kerak.!`)
// }



// 3-masala

/*
x ning qiymati berilganda y funksiyaning qiymati aniqlansin.

y = 3 * x^6 - 6 * x^2 - 7
*/

// let x = Number(prompt("x:"));

// let y = 3 * x**6 - 6 * x**2 - 7;
// // let y2 = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;

// alert(`x ning qiymati ${x} ga teng bo'lganida y funksiyaning natijasi ${y} ga teng bo'ladi.!`);





//  4 - masala

/*
X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.
*/

// let x = Number(prompt('1 kg konfet narxi necha so\'m'));
// let y = Number(prompt(`Necha kg konfet olmoqchisiz.?`));

// let oneKg = x;
// let priceMyKg = x*y;

// alert(`Bir kilogram konfet nrxi ${oneKg} so'm, ${y}kg konfet narxi ${priceMyKg}so'm ga teng.!`);





//  5 - masala

/*
Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.
*/

// let a = Number(prompt('A:'));
// let b = Number(prompt("B:"));

// alert(`
// Asl ko'rinishi
// A = ${a}
// B = ${b}

// Yangilangan ko'rinishi
// A = ${b}
// B = ${a}
// `);




//  6 - masala

/*
Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini, so`ng birlar xonasidagi raqamini hamda ularning yig’indisini chiqaruvchi programma tuzilsin.


ab -> ikki xonasi son sintaksisi
a  -> o'nliklar xonasi
b  -> birliklar xonasi

prompt(ab) -> a, b, a+b;
*/



// let ab = prompt('Ikki xonali son kiriting');

// let strNum = ab.split('');

// let onlar = strNum[0];
// let birlar = strNum[1];
// let onlarVaBirlar = Number(onlar) + Number(birlar);

// alert(`Kiritilgan ${ab} ning o'nlar xonasi ${onlar}, birlar xonasi ${birlar} va o'nlar va birlar xonasi raqamlar yi'g'indisi ${onlarVaBirlar}`);








//  7 - masala

/*
Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.

prompt(ab) -> ba;
*/

// let ab = prompt('Ikki xonali son kiriting:');
// let arrNum = ab.split('');
// alert(`${arrNum[1]}${arrNum[0]}`);






//  8 - masala

/*
 Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.

 abc

 c - birlar
 b - onlar
 a - yuzlar
*/

// let abc = prompt('Uch xonasi son kiriting:');

// let arrNum = abc.split('');

// alert(`Kiritilgan ${abc} sonining yuzlar xonasidagi raqam bu ${arrNum[0]}`);




// 9 - masala

/*
 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan
 foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.

 Input: 1239
 Output: 2
*/


// let number = Number(prompt(`999 dan katta bo'lgan son kiriting.!`));
// let yuzlar = Math.trunc(number / 100) % 10;

// if(number>999){
//     alert(`Kiritilgan ${number} ning yuzlar xonasidagi raqam ${yuzlar} ga teng`);
// }else{
//     alert(`Siz 999 dan katta bo'lmagan son kiritdingiz.!`)
// };


//  10 - masala

/*
Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.

1m = 60s
1h = 60m
1h = 3600s
*/

// let N = Number(prompt('Kun boshidan boshlab necha sikund vaqt o\'tdi.?'));

// let h = Math.trunc(N / 3600);
// let m = Math.trunc((N % 3600) / 60);
// let s = N % 60;

// alert(`Kun boshidan boshlab ${h} soat ${m} minut va ${s} sikund vaqt o'tdi`);




//  11 - masala

/*
To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.


S = a * b
P = 2 * (a + b)
*/

// let a = Number(prompt('A:'));
// let b = Number(prompt("B:"));

// let S = a*b;
// let P = 2*(a+b);

// alert(`Tomonlari ${a} va ${b} bo'lgan to'g'ri to'rtburchakning yuzasi S = ${S} ga perimetri P = ${P} ga teng`);





//  12 - masala

/*
Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.

L = π * d
π = 3.14
r = d / 2;
S = π * r^2
*/

// let d = Number(prompt("Aylananing diametri D ning qiymatini kiriting."));

// let L = 3.14 * d;
// let S = 3.14 * (d/2)**2;

// alert(`Diametri ${d} bo'lgan aylananing uzunligi L = ${L} ga yuzais S = ${S} ga teng`);



//  13 = masala

/*
Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.

V = a^3
S = 6 * a^2
*/

// let a = Number(prompt(`Kubning tomoni uzunligini kiriting`));

// let v = Math.pow(a, 3);
// let s = 6 * Math.pow(a, 2);

// if(a>0){
//     alert(`Tomoni ${a} bo'lgan kubning hajmi V = ${v} ga to'la sirti S = ${s} ga teng bo'ladi.!`);
// }else{
//     alert(`qiymat kiritmadingiz.!`)
// };



//  14 - masala

/*
Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.

V = a * b * c
S = 2 * (a * b + b * c + a * c)
*/


// let a = Number(prompt(`Paralelepepidning a tomoni kiriting`));
// let b = Number(prompt(`Paralelepepidning b tomoni kiriting`));
// let c = Number(prompt(`Paralelepepidning c tomoni kiriting`));


// let v = a*b*c;
// let s = 2 * (a*b + b*c + a*c);


// alert(`Tomonlari ${a}, ${b}, ${c} bo'lgan Paralelepepidning hajmi V = ${v} to'la sirti S = ${s} ga teng.!`);




//  15 - masala

/*
Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.

M = (a + b) / 2
*/

// let a = Number(prompt('A:'));
// let b = Number(prompt("B:"));

// let M = (a+b)/2;

// alert(`Kiritilgan ${a} va ${b} sonlarining o'rta arifmetigi ${M} ga teng bo'ladi.!`);



//  16 - masala

/*
To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.

c = (a^2+b^2)^0.5
P = a + b + c
*/


// let a = Number(prompt('A:'));
// let b = Number(prompt("B:"));

// let c = (a ** 2 + b ** 2) ** 0.5;
// let p = a + b + c;

// alert(`Katetlari ${a} va ${b} bo'lgan uchburchakning gipotenuzasi ${c} ga teng perimetri ${p} ga teng.`);




// 17 - masala

/*
Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.

S1 = π * r1
S2 = π * r2
S = π * (r1^2 − r2^2).
*/


// let r1 = Number(prompt('R1:'));
// let r2 = Number(prompt('R2:'));

// let s1 = 3.14 * r1;
// let s2 = 3.14 * r2;

// let S = 3.14 * (r1**2 - r2**2);

// if(r1>r2){
//     alert(`S = ${S}`);
// }else{
//     alert(`R1 R2 dan katta bo'lishi kerak.!`)
// }



//  18 - masala

/*
Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.

L = 2 * π * R

R = L/(2*3.14)

S = π * R^2
π = 3.14
*/

// let L = Number(prompt("Aylananing uzunligi L ning qiymatini kiriting"));
// let r = L / (2 * 3.14);
// let s = 3.14 * r ** 2;
// alert(`Uzunligi ${L} bo'lgan doiraning radiusi R = ${r} yuzasi S = ${s} ga teng bo'ladi.!`);




//  19 - masala;

/*
Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.

L = ((x1-x2)^2 + (y1 - y2)^2)^0.5
*/

// let x1 = Number(prompt("X1:"));
// let y1 = Number(prompt("Y1:"));
// let x2 = Number(prompt("X2:"));
// let y2 = Number(prompt("Y2:"));

// let L = ((x1 - x2)**2 + (y1-y2)**2)**0.5;


// alert(`Kordinatalari (${x1}, ${x2}) va (${y1}, ${y2}) bo'lgan tekstliklar orasidagi masofa ${L} ga teng.!`);




//  20  - masala

/*
A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.
*/

// let a = Number(prompt('A:'));
// let b = Number(prompt('B:'));
// let c = Number(prompt('C:'));


// alert(`
// Asl xolati
// A = ${a}
// B = ${b}
// C = ${c}

// O'zgargan xoladi
// A = ${c}
// B = ${a}
// C = ${b}
// `);




//  21 - masala

/*
x ning qiymati berilganda y funksiyaning qiymati aniqlansin.

y = 4 * (x - 3)^6 - 7 * (x - 3)^3 + 2
*/

// let x = Number(prompt("X:"));
// let y = 4 * (x - 3)**6 - 7 * (x - 3)**3 +2;
// alert(`X ning qiymati ${x} ga teng bo'lsa y funksiyaning natijasi ${y} ga teng bo'ladi.!`);



//  22 - masala

/*
A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
A^3‚ A^6‚ A^9, A^15
*/

// let a = Number(prompt('A:'));

// alert(`
// A ning uchnchi  ${Math.pow(a, 3)}
// A ning oltinchi darajasi ${Math.pow(a, 6)}
// A ning to'qqizinchi darajasi ${Math.pow(a, 9)}
// A ning o'nbeshinchi darajasi ${Math.pow(a, 15)}
// `);



//  23 - masala

/*
Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin.


Tc = (Tf - 32) * 5/9
*/

// let Tf = Number(prompt('Xaroratni farengeytdagi qiymnatini kiriting'));

// let Tc = (Tf - 32)*(5/9);

// alert(`Farengeytda ${Tf} bo'lgan xarorat gradusda ${Tc} ga teng bo'ladi.!`);



// 24 - masala

/*
X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.
*/


// 25 - masala

// Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?



//  26 - masala

// Uch xonali son berilgan.Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.


//  27 - masala

// Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.

// let abc = prompt(`Uch xonali son kiriting:`);

// let arrNum = abc.split('');

// let a = Number(arrNum[0]);
// let b = Number(arrNum[1]);
// let c = Number(arrNum[2]);

// alert(`Kiritilgan ${abc} uch xonali sonning raqamlar yig'indisi ${a+b+c} ga teng bo'ladi`);
