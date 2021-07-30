let n = 10;
let piramide = '';
let espaco = ' ';

for(let a = 1; a <= n; a += 1){
piramide = ''
for(let i = 1; i <= n - a; i+= 1){
    piramide += espaco;
}
for(let index = 1; index <= a; index += 1 ){
    piramide += '*'
}
console.log(piramide);
}
