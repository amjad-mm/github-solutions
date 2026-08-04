/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

  let product=1
  let sum=0
  let result=0;

 while(n>0){
    let digits=n % 10;
    product= product * digits;
     sum += digits;  
     n = Math.floor(n/10)
     
 }
 return  result=product-sum;

};
console.log(subtractProductAndSum(4421))