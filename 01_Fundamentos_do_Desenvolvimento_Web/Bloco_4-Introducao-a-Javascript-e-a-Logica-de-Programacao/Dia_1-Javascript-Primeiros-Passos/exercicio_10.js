let costPrice = 1500;
let sellValue = 5000;
costPrice = costPrice * 1.2;
if(costPrice == 0 || sellValue == 0){
    console.log ("ERROR! Value cant be 0")
}else{
    console.log(sellValue-costPrice);
}