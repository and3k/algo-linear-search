function linearSearch(searchTerm, arr) {
 
 for (let i = 0; i < arr.length; i++){
 
  if (searchTerm === arr[i]){
     return i
  }
  
 }
 
}
let bananaList = "bananas".split(""); // ["b", "a", "n", "a", "n", "a", "s"]


function globalLinearSearch(searchTerm, arr) {
  let search = []
for (let i = 0; i < arr.length; i++){
  if (searchTerm === arr[i]){
    search.push(i)
  }
}
return search
}

console.log(globalLinearSearch("a", bananaList)); // [ 1, 3, 5 ]

module.exports = { linearSearch, globalLinearSearch };
