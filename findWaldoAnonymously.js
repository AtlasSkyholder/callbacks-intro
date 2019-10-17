let index = 0;

const findWaldo = function(arr, found){
  arr.forEach(function(element){
    let name = element;
    if (name === "Waldo") {
      found(index);
    }
    index++;
  }, found);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index + "!");
});