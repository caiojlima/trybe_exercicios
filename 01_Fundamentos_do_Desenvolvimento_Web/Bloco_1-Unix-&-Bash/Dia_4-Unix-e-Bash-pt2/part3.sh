#Exercício 1
➜ unix_tests (exercicio/3.2) ✗ ps 
#Exercício 2
➜ unix_tests (exercicio/3.2) ✗ sleep 30 &                                   
#Exercício 3
➜ unix_tests (exercicio/3.2) ✗ ps 
➜ unix_tests (exercicio/3.2) ✗ kill 23922 
#Exercício 4                                          
➜ unix_tests (exercicio/3.2) ✗ sleep 30  
^Z
➜ unix_tests (exercicio/3.2) ✗ bg            
#Exercício 5
➜ unix_tests (exercicio/3.2) ✗ sleep 300 &
#Exercício 6
➜ unix_tests (exercicio/3.2) ✗ sleep 200
^Z
➜ unix_tests (exercicio/3.2) ✗ sleep 100
^Z
#Exercício 7
➜ unix_tests (exercicio/3.2) ✗ jobs
➜ unix_tests (exercicio/3.2) ✗ fg %2          
^Z
#Exercício 8
➜ unix_tests (exercicio/3.2) ✗ bg %3
#Exercício 9
➜ unix_tests (exercicio/3.2) ✗ kill %1 %2 %3
