// The second argument/parameter is expected to be a (callback) function
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       let index = i;
//       found(index);   // execute callback
//     }
//   }
// }

const actionWhenFound = function(index) {
  console.log("Found Waldo at index " + index + "!");
}

let findWaldo = ["Alice", "Bob", "Waldo", "Winston"];
let index = 0;

findWaldo.forEach(function(element){
  let name = element;
  if (name === "Waldo") {
    actionWhenFound(index);
  }
  index++;
}, actionWhenFound);