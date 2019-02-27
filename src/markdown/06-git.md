---
date: "2017-11-07"
title: "Historia"
---
# Git

## History
Para poder ver los commit que se tiene en un Repository se utiliza `git log`, pero si se quiere que la información que aparezca sea más fácil de procesar se puede utilizar el comando `git log --graph --decorate --oneline`. 

Para mostrar información relacionada con un commit específico, se utiliza el comando `git show <hash-commit | name-branch | HEAD>` (el hash del commit son sus primeros 8 carácteres). A través del puntero HEAD se puede hacer referencia a commit que están por detrás de él  de la forma `git show HEAD^`, así se accede a su padre, al igual que de la forma `git show HEAD^^`, se accede al padre del padre.
Para acceder a cualquier commit a partir del HEAD sería `git show HEAD~<n>`, done `n` es el número de commit que se quiere navegar por sus padres. Si un padre tiene múltiples padres para acceder al segundo padre por ejemplo sería `git show HEAD~2^2`.

