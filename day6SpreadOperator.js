//spread operator untuk ngeluarin data dari array
let arrayku = [1, 2, 3, 4, 5, 6];
console.log(...arrayku);
//bisa digabungkan juga
array2 = [12, 34, 56, 78];
array3 = [...arrayku, ...array2];
console.log(array3);
//bisa dipakai untuk menggabungkan objek juga
object1 = {nama : "dwi maharotul", umur:22 };
object2 = {tinggi : 162};
object3 = {...object1, ...object2};
console.log(object3);