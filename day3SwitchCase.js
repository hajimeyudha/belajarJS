let menu = "Pasta";
let order = null;

switch(menu){
    case "Burger":
        order = "Cheese Burger";
        break;
    case "Pasta":
        order = "Spaghetti Carbonara";
        break;
    default:
        order = "Please specify your order!";
}

console.log(order);

for(let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}