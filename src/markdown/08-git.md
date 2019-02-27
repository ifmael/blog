---
date: "2017-11-07"
title: "Toolbox"
---
# Git

## Git toolbox

Git se tiene que ver como una caja de herramientas donde cada instrucción tiene una acción específica, pero con esa misma instrucción se puede realizar otro tipo de cosas.

Por ejemplo `git reset`, se puede utilizar para deshacer cambios, se puede utilizar para limpiar el Working Area, eliminar commit de la historia del Repository.

Git no proporciona para todas las acciones que se pueden realizar una acción específica, si no que entendiendo lo que realizan las diferentes accciones que tiene, se pueden llegar a realiar otro tipo de acciones. No hay un comando mejor que otro para realizar un tipo de acción, si ambos puede llegar a realizarla.AD en el Repository a una branch, y copia el contenido del Repository al Working Area e Index. Pero en este caso simplemente copia datos del commit actual al Working Area y al Index del fichero que se indica. Mencionar que este comando destruye todo el trabajo que no se tiene en el Repository en el Working Area y en Index, por lo que hay que pensarselo 2 veces antes de ejecutarlo.a mover ramas. Normalmente se trabaja con `reset` con la rama actual (HEAD). Así estando un commit nos podemos mover a otro commit y hacer que HEAD apunte a este commit, por medio de haber movido la rama. Esto es lo que hace princpialmente `reset`en el área del Repository. 

Lo confuso viene cuando reset no está trabajando sobre el Repository, si no en en el Working Area y el Index. En estas áreas en función de las opciones actua de diferente manera.

Si se utiliza la opción `git reset --hard`, se copia la información del commit actual del Repository a las otrás  2 áreas.

Si se utiliza la opción `git reset --mixed`, se copia la información del  commit actual del Repository al Index. Esta es la opción por defecto.

Si se utiliza la opción `git reset --soft`, no copia información a las áreas, solo mueve la rama.

## Ejempo para realizar un `git reset --hard`

Se va mostrar con un ejemplo un caso como operar con `git reset --hard` para entender mejor su comprensión. Vamos a ver un repositorio que contiene algunos commit.

Se parte de un repositorio con 2 commit y en el que todos las áreas están alineadas.

![Initial commits](./images/reset-hard-01.png "Initial commits")

Depues por las necesidades del proyecto es neceario añadir más ficheros y directorios. En este caso se han añadido 2 commits más.

![Added commits](./images/reset-hard-02.png "Added commits")

Tras pensarlo, nos damos cuenta que nuestros 2 últimos commits no son necesarios por lo que nos queremos deshacer de ellos, por lo que se puede utilizar `git reset --hard`. Al hacer esto, la rama master se mueve al commit indicando y con ella también el puntero HEAD, por lo que los commit que quedan por encima (en el tiempo) del commit al que nos movemos dejan de estar accedibles, por lo que git los borrará.

![git reset --hard](./images/reset-hard-03.png "git reset --hard")

Revisando de nuevo el historial, se ve que solo hay 2 commits disponible en el historial del proyecto.

![final history](./images/reset-hard-04.png "final history")


## Otro ejemplo

Partiendo de que se tienen todas las áreas alineadas, es decir, contienen el mismo contenido en todas. Imagina que se hace un camnbio en el un fichero del Working Area y se añade al Index. Trás pensarlo se decide que aún no se quiere pasar los cambios al Repository por lo que se quieren descartar los cambios que se tienen en el Index pero no los del Working Area. Para realiar está tarea se puede utilizar `git reset HEAD ` Con esto se realizan dos operaciones como se han indicando con anterioridad, nos movería la rama a HEAD, pero como puesto que estamos en ya en ella, no realiza ninguna operación. Y la segunda operación sería copiar el contenido del commit actual al Index. 


