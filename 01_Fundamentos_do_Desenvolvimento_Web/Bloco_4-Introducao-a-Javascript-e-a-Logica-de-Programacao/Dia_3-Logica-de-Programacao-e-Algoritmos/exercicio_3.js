let n = 5;
let piramide = '';
let espaco = ' ';

for(let a = 1; a <= n; a += 1){
for(let i = 1; i <= n - a; i+= 1){
    piramide += espaco;
}
for(let index = 1; index <= a; index += 1 ){
    piramide += '*'
}
console.log(piramide);
piramide = ''
}
