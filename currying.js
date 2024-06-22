

// Normal process
// function power1 (a, b){
//     return a ** b;
// }
// console.log(power1(2,4));
//-------------------------------------------//
// Currying
// function power2(b){
//     return function(a){
//         return a ** b;
//     }
// }
// const pwr = power2(2);

// console.log(pwr(4));
//-------------------------------------------//

//Pizza Pricing Example

function pizzaPricing(size){
    const baseSize = {
        small: 8.00,
        medium: 10.00,
        large: 12.00
    };
    return function(toppings) {
        const toppingsPrice = 1.50 * toppings.length;
        return function(quantity){
            const basePrice = baseSize[size];
            const totalPrice = quantity * (basePrice + toppingsPrice);
            return totalPrice.toFixed(2);
        }
    }
}

const pizzaSize = pizzaPricing('large');
const topping = ['olive', 'cheese', 'capcicum', 'bacon'];
const price = pizzaSize(topping)(2);


console.log('Total Price:', price);

