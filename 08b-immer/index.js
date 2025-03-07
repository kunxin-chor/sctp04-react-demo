import {produce} from "immer";

// produce returns the new updated value from a current value
let fruit = "apple";

// newFruit should be the uppercase of the original `fruit` variable
// produce takes two arugments
// argument 1: the current or starting, initial value
// argument 2: an arrow function known as the recipe function
//  it will recieve one argument, which is draft
let newFruit = produce(fruit, (draft)=>{
    // whatever is done to draft will become the new value,
    // which is returned from the produce function
    draft = fruit.toUpperCase();
    return draft; // <-- the recipe function must return the updated value
})
console.log(newFruit);

const fruits = ["apples", "oranges", "bananas"];
const newFruits = produce(fruits, (draft)=>{
    draft.push("pineapples");
    return draft; // <-- if your draft is an array or object, returning is optional
                  // this is because arrays and objects are optional values
});
console.log(newFruits)