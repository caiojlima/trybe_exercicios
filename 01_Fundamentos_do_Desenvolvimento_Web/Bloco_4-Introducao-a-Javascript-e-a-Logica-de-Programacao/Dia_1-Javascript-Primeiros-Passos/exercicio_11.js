let bruteSalary = 10000;
let ali8 = 0.92;
let ali9 = 0.91;
let ali11 = 0.89;
let aliMax = 570.88;
let ali7_5 = 0.925;
let ali15 = 0.85;
let ali22_5= 0.775;
let ali27_5 = 0.725;

if (bruteSalary <= 1556.94){
    bruteSalary = bruteSalary * ali8;
}else if(2594.92 >= bruteSalary ){
    bruteSalary = bruteSalary * ali9;
}else if (5189.82 >= bruteSalary){
    bruteSalary = bruteSalary * ali11;
}else{
    bruteSalary = bruteSalary - aliMax;
}

if (bruteSalary <= 1903.98){
    console.log(bruteSalary);
}else if (2826.65 >= bruteSalary){
    bruteSalary = (bruteSalary * ali7_5) + 142.8;
    console.log(bruteSalary);
}else if (3751.05 >= bruteSalary ){
    bruteSalary = (bruteSalary * ali15) + 354.8;
    console.log(bruteSalary);
}else if (4664.68>= bruteSalary){
    bruteSalary = (bruteSalary * ali22_5) + 636.13;
    console.log(bruteSalary);
}else {
    bruteSalary = (bruteSalary * ali27_5) + 869.36;
    console.log(bruteSalary);
}