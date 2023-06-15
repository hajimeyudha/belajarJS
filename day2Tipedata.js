//variabel yang belum diassign akan bernilai undefined (defaultnya)
let variabel;
console.log(typeof(variabel));
//variabel bertipe string (huruf)
let variabel1 = "aku";
console.log(typeof(variabel1));
//varibael bernilai angka (number)
let variabel2 = 123;
console.log(typeof(variabel2));
//variabel bernilai bigint (ini lebih panjang datanya dari number)
let variabel3 = 123n;
console.log(typeof(variabel3));
//Boolean
let Beli = true;
console.log("Apakah aku ganteng?");
console.log(`the answer is ${Beli}`);
//Null
let salary = null;
console.log("Apakah saya punya gaji?")
console.log(`the answer is ${salary}`)
//Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1==id2);