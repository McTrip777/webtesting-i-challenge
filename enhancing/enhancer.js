module.exports = {
  succeed,
  fail,
  repair,
  // get,
};
const maxed = 'Already Maxed'

// The item's enhancement increases by 1.
// - If the item enhancement level is 20, 
// the enhancement level is not changed.
// - The durability of the item is not changed.

function succeed(item) {
  if(
    typeof item.name !== "string" ||
    typeof item.enhancement !== "number" ||
    typeof item.durability !== "number" ||
    item.enhancement > 20 ||
    item.enhancement < 0  ||
    item.durability > 100 ||
    item.durability < 0
    ){
    return 'Error with your enhancement';
  }
  else if(item.enhancement === 20){
    console.log(maxed)
    return (item)
  }
  else{
    let newItem = item
    newItem.enhancement++
    console.log(newItem)
    return newItem
  }
}

// If the item's enhancement is less than 15, 
// the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, 
// the durability of the item is decreased by 10.
// - If the item's enhancement level is greater 
// than 16, the enhancement level decreases by 1 
// (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  return { ...item };
}

// a `repair(item)` method 
// that accepts an `item` object 
// and **returns a new item** with 
// the durability restored to 100

function repair(item) {
  if(
    typeof item.name !== "string" ||
    typeof item.enhancement !== "number" ||
    typeof item.durability !== "number" ||
    item.enhancement > 20 ||
    item.enhancement < 0  ||
    item.durability > 100 ||
    item.durability < 0
    ){
    return 'Error with your enhancement';
  }
  else if(item.durability === 100){
    // console.log(maxed)
    return item
  }
  else{
    let newItem = item
    newItem.durability = 100
    return newItem
  }
}

// uncomment for stretch

// function get(item) {
//   return { ...item };
// }
