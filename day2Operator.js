//operator digunakan untuk pengoperasian aritmatika di javascript
//penjumlahan
let angka1 = 5;
let angka2 = 10;
console.log(angka1 + angka2);
//pengurangan
console.log(angka1 - angka2);
//pembagian
console.log(angka1 / angka2);
//perkalian
console.log(angka1 * angka2);
//modulo
console.log(angka1%2);//habis dibagi dengan 2. Output akan 1 karena sisanya 1
//pangkat
console.log(angka1**2);

//coba pakai string STRING CONCATENATION
let kalimat1 = "Namaku";
let kalimat2 = "Hajime";
let title = "Dragon\'s Slayer"//ini kalau pakai tanda petik
console.log(kalimat1 + " " + kalimat2 + " " + title + ".");
console.log("Windows path: C:\\Program Files\\MyProject");//source dicoding, backslash akan mengabaikan tanda setelahnya yang ambigu. Contohnya backslash itu sendiri

//String Interpolation
console.log(`Halo semuanya, kenalin namaku ${kalimat2}`);

//Assignment operator
let x = 1;
let y = 2;
x += y;
console.log(x);
/**
 * Ada yang -=
 * /=
 * *=
 * %=
 */

//Comparison

x = '1'; //string
y = 1; //number

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);