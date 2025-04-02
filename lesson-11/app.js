

// Butun son berilgan.Agar berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.








//  Doiraning radiusi R berilgan.Uning uzunligi L va yuzasi S aniqlansin.
//     L = 2 * π * R, S = π * R ^ 2




// function math(R){
//     alert(`Doiraning uzunkligi:${2*3.14*R} ga teng.!`);
//     alert(`Doiraning yuzasi ${3.14*R**2}`);
// };

// math(4);


// let R = Number(prompt(`Doiraning uzunligi L ni va yuzasi S ni aniqlash uchun uning radiusini kiriting`));

// alert(`Doiraning uzunkligi:${2 * 3.14 * R} ga teng.!`);
// alert(`Doiraning yuzasi ${3.14 * R ** 2}`);


// Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin.  G = (a * b)**1/2


// let a = Number(prompt('A'));
// let b = Number(prompt('B'));


// if(a > 0 && b > 0){
//     alert(`Siz kiritgan sonlarning o'rta geometrigi ${Math.sqrt(a*b)}`);
// }else{
//     alert('Musbat son kiritishingiz kerak.!!!')
// }



/*
x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
y = 3 * x ^ 6 - 6 * x ^ 2 - 7
*/

// let x = Number(prompt());

// alert(`Y = ${3 * x**6 - 6 * x**2 - 7}`);




// // X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.


// // 1kg = A/X;


// let X = Number(prompt(`Necha kg konfet narxi ma'lum.?`));
// let A = Number(prompt(`${X} kg konfet narxi necha so'm ekan.?`));
// let Y = Number(prompt(`Necha kg konfet narxini hisoblamoqchisan.?`));


// let oneKg = A/X;


// alert(`Bir kg konfet narxi ${oneKg}so'm`);
// alert(`${Y}kg konfet narxi ${Y*oneKg}so'm`);



/*
999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.

Input: 1239
Output: 2
*/

/*
abcd -> 4 xonali son.!

a -> mingliklar xonasi
b -> yuzliklar xonasi
c -> o'nliklar xonasi
d -> birliklar xonasi
*/


// abcs/100

// let myNumber = Number(prompt(`999 dan katta bo'lgan number kiriting.!!!`));

// let yuzlik = Math.floor(myNumber / 100) % 10;

// console.log(yuzlik);



// let N = Number(prompt("Kun boshidan boshlab N sekundni kiriting:"));

// // Soatni hisoblash
// let hours = Math.floor(N / 3600);

// // Daqiqani hisoblash
// let minutes = Math.floor((N % 3600) / 60);

// // Sekundni hisoblash
// let seconds = N % 60;

// // Natijani chiqarish
// alert(`${N} sekund kun boshidan boshlab ${hours} soat, ${minutes} minut, ${seconds} sekundga teng.`);



// To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// S = a * b
// P = 2 * (a + b)



// let a = Number(prompt(`To'g'ri to'rtburchakning a tomonlarinin kiriting metrda.!`));

// let b = Number(prompt(`To'g'ri to'rtburchakning b tomonlarinin kiriting.!`));

// alert(`To'g'ri to'rtburchakning yuzasi ${a*b} metr kvadrat`);
// alert(`To'g'ri to'rtburchakning perimteri ${2*a + 2*b} meter`);



/*
Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.

L = π * d
π = 3.14
r = d / 2;
S = π * r^2
*/


// let d = Number(prompt(`Aylananing diametrini kiriting.!`));

// console.log(`Aylananing uzunligi L ${3.14*d}`);
// console.log(`Aylananing yuzasi S ${3.14*(d/2)**2}`);



// Kubning yon tomoni a berilgan.Uning hajmini V va to`la sirti S aniqlansin.
// V = a^3
// S = 6 * a^2


//  Ikkita son a va b berilgan.Ularning o`rta arifmetigi M aniqlansin.
// M = (a + b) / 2



// let A = Number(prompt('A'));
// let B = Number(prompt('B'));

// // alert(`Kiritgan raqamlaringizning o'rta arifmetifi ${(A+B)/2}`);


// if (A !== 0 && B !== 0) {
//     alert(`Kiritgan raqamlaringizning o'rta arifmetifi ${(A + B) / 2}`)
// } else {
//     alert("Siz kiritayotgan raqamlar nol bo'lmasligi kerak.!")
// };




/*
Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.
*/


