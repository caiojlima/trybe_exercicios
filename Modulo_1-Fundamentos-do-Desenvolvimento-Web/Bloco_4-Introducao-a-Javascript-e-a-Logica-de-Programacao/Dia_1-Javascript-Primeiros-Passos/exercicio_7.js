let nota = 101;

if (nota < 0 || nota > 100){
    console.log("Erro! Nota inválida.");
}else if(nota < 50){
    console.log("Sua nota foi F!");
}else if(nota <= 50 && nota < 60){
    console.log("Sua nota foi E!");
}else if(nota <= 60 && nota < 70){
    console.log("Sua nota foi D!");
}else if(nota <= 70 && nota < 80){
    console.log("Sua nota foi C!");
}else if(nota <= 80 && nota < 90){
    console.log("Sua nota foi B!");
}else {
    console.log("Sua nota foi A!");
}