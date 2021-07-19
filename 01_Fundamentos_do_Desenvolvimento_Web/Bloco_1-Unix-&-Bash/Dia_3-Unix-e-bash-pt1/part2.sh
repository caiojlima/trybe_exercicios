#Exercício 1
➜ ~ cd trybe_exercicios/01_Fundamentos_do_Desenvolvimento_Web/Bloco_1-Unix-\&-Bash/Dia_3-Unix-e-bash-pt1/unix_tests 
➜ unix_tests (exercicio/3.1) ✗ 
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
#Exercício 2
➜ unix_tests (exercicio/3.1) ✗ cat countries.txt 
#Exercício 3
➜ unix_tests (exercicio/3.1) ✗ less countries.txt
#Exercício 4
unix_tests (exercicio/3.1) ✗ less countries.txt
/Zambia
#Exercício 5
➜ unix_tests (exercicio/3.1) ✗ grep Brazil countries.txt         
#Exercício 6
➜ unix_tests (exercicio/3.1) ✗ grep -i 'brazil' countries.txt  
#Exercício 7
➜ unix_tests (exercicio/3.1) ✗ grep -iv 'fox' phrases.txt 
#Exercício 8
➜ unix_tests (exercicio/3.1) ✗ wc -w phrases.txt 
#Exercício 9
➜ unix_tests (exercicio/3.1) ✗ wc -l phrases.txt
#Exercício 10
➜ unix_tests (exercicio/3.1) ✗ touch empty.tbt      
➜ unix_tests (exercicio/3.1) ✗ touch empty.txt 
#Exercício 11
unix_tests (exercicio/3.1) ✗ ls
#Exercício 12
unix_tests (exercicio/3.1) ✗ ls *.txt
#Exercício 13
unix_tests (exercicio/3.1) ✗ ls *.txt *.tbt
#Exercício 14
➜ unix_tests (exercicio/3.1) ✗ man ls 
