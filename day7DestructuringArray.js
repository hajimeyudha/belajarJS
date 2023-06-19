//mirip seperti di destructuring object

const favorit = ["takoyaki", 'Pisang krispi', 'Cilor'];

//bedanya, gak perlu didalem ()
const [makanan1, makanan2, makanan3 = "bakso"] = favorit;

console.log(makanan1, makanan2);
console.log(makanan3);

//bisa destructuring assignment juga

let makan1 = 'cabe';
let makan2 = 'garam';
let makan3;
//default values bisa dimasukkan sendiri, coontoh cireng
[makan1, ,makan2, makan3 = "cireng"] = favorit;
console.log(makan1, makan2, makan3);