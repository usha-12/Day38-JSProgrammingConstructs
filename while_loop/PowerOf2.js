// prints a table of the powers of 2 that are less than or equal to 2^n.
let n= 256;

let i = 1, j = 1;
while(i < n){
    i = Math.pow(2,j);
    console.log(Math.pow(2,j));
    j++;
}