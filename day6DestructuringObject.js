//untuk mengambil data dari array dan memasukkannya kedalam suatu variabel
const profil = {
    name : "Hajime Yudha",
    age : 21,
    hobby : "eat"
};

// let nama = profil.name;
// let umur = profil.age;
// let hobby = profil. hobby;
let {name, age, hobby} = profil;// harus sama dengan key object profil
console.log (name, age, hobby);
//menggunakan destructuring object untuk menambahkan key value baru ke dalam object
name = "29-01-79";
age = "Semarang";
console.log(name, age);
({name, age} = profil); //harus di dalam tanda kurung agar tidak dikira blok statement
console.log(name, age);
//assignment kalau mau nama variabelnya beda dengan object parentnya
//tambahan default values mantap
({name : localName, age : localAge, anjay = "mantap"} = profil);
console.log(localName, localAge, anjay);