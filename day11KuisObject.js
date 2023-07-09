/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// Tulis kode di bawah ini
//Di sini kita membuat object sesuai dengan ketentuan soal di atas
let restaurant = {
    "name" : "Bakso Mang Dicoding",
    "city" : "Bandung",
    "favorite drink" : "Es Teh",
    "favorite food" : "Bakso",
    "isVegan" : false
};
//mendefinisikan variabel name dengan properti object restaurant yaitu name
let name = restaurant.name;
//mendefinisikan variabel favorite drink dengan properti object restaurant yaitu favorite drink
let favoriteDrink = restaurant["favorite drink"];
