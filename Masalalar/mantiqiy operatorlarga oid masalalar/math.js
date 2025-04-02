

// // Ikkita butun A va B sonlari berilgan.Jumlani rostlikka tekshiring: "A>2 va B <=3"

// let A = prompt("A:");
// let B = prompt("B:");

// if(A > 2 && B <= 3){
//     alert(true)
// } else{
//     alert(false)
// }







//  Uchta A, B, C butun sonlar berilgan.Jumlani rostlikka tekshiring: "A <= B <= C"

// 1-usul
// let A = prompt("A:");
// let B = prompt("B:");
// let C = prompt(`C:`);

// if (C >= B && C >= A && B >= A) {
//     alert(true)
// } else {
//     alert(false)
// }

// 2-usul

function math(A, B, C){
    if (C >= B && C >= A && B >= A) {
        alert(true)
    } else {
        alert(false)
    }
}

math(2, 3, 9)