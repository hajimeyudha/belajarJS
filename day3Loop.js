//manual 
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log("end here");
//for loop
for (let i = 0; i<10; i++){
    console.log(1);
}
console.log("For loop end here");

//for of loop

let SundayMenu = ['Ayam Bakar', 'Ayam Madu', 'Ayam Taliwang'];

for (menuSekarang of SundayMenu){
    console.log(menuSekarang);
}

//while and do while

let indexing = 1;
//while
while (indexing <= 100){
    console.log(indexing);
    indexing++;
}
console.log('while ends here');
//do while
let indexing2 = 1;
do {
    console.log(indexing2);
    indexing2++;
}while(indexing2 <= 100);
console.log("do while ends here");