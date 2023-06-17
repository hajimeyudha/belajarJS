//komposisinya key:value
//key harus string
const user = {};
//object bisa menyimpan banyak tipe data dalam satu variabel
const variabel1 = {key1:"value1", key2:"value2", key3:"value3", "key empat":"value4"};
//cara panggilnya
let biodata = {
    nama:"Hajime Yudha",
    umur:19,
    hobi:"Programming",
    impian:"Menjadi Programmer"
};
//ada 2 cara
console.log(`Halo semua, kenalin nama aku ${biodata.nama}`);
console.log(`Aku ingin ${biodata['impian']}`);
//mengubah isinya
biodata['impian'] = 'Pemain Esports';
//kok bisa diubah? karena tidak menginisiasi ulang, jadi bisa
console.log(`Tapi sekarang ingin menjadi ${biodata.impian}`);
// bisa delete
// delete biodata.impian;
