//mirip seperti object tapi diakses pakai indeks (mulai dari 0)
let myArray = [true, "false", 1, "0"];
console.log (myArray[0]);
//untuk mengeluarkan elemen array
myArray.pop();
console.log(myArray);
//manipulai menggunakan shift
myArray.shift();
console.log(myArray);
myArray.unshift("anjay");
console.log(myArray);
myArray.unshift(true);
console.log(myArray);
//delete digunakan untuk menghapus isi array tapi state index atau elemen tersebut jadi kosong
delete myArray[1];
console.log(myArray);
//splice untuk hapus elemen
//start index 1, 2 elemen panjangnya jadi index 1 dan 2 akan terhapus
myArray.splice(1,2);
console.log(myArray);
//menambahkan pakai splice
myArray.splice(1, 0, true);
console.log(myArray);
