let angleA = 0;
let angleB = 60;
let angleC = 60;

if(angleA < 1 || angleB < 1 || angleC < 1){
    console.log("error");
}else if (angleA + angleB + angleC == 180){
    console.log(true);
}else {
    console.log(false);
}