const r = require("readline-sync");
var expenses = [25000,30000,30000,50000,50000];
var unique = [];
expenses.forEach((num)=>{
    if(!unique.includes(num)){
        unique.push(num);
    }
})

console.log(unique);
