//data di set tidak berurutan, tidak diindeks dan bersifat unik (tidak sama satu sama lain)

const variabel1 = new Set([1, 4, 6, 1, 2, 4]);
console.log(variabel1);
// data yang duplikat akan otomatis dihilangkan

variabel1.add(1);
variabel1.add("anjay");
variabel1.add([1,4,2,4,1]);//array akan dianggap 1 value
console.log(variabel1);