//map sama seperti object
//bedanya key dari map bisa tipe data apapun, sedangkan objek hanya string/simbol

const mapSaya = new Map([ //first array buat menyimpan key value
  ['1', 'a String key'],//1 adaalah key, a string key adalah value
  [1, 'a number key'],
  [true, true]
]);

console.log(mapSaya);
console.log(mapSaya.get('1'));