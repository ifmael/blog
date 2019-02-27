---
date: "2019-01-07"
title: "Git reset"
---

# Git reset

La operación `git reset` es  una operación que puede llegar a ser destructiva por lo que tiene que ser usada con cuidado. Para evitar algún problema generado por esta instrucción es conveniente conocerla.

Para entender correctamtnte `git reset` se debe de entender correctamtnte las áreas de trabajo que utiliza git así como las ramas. Una razóm por la que este comando puede llegar a ser confuso es porque puede ser utilizado en muchos contextos diferentes.

Hay bastantes comandos en git en los que se mueven ramas aunque no sea su objetivo principal como pueden ser: `git commit` crea un nuevo commit y mueve la rama actual al nuevo commit, `git pull` que nos trae los cambios alojados en el servidor de una rama específica a nuestra rama local, moviendo la rama actual a los nuevos commits, `git merge`, `git rebase` ... Sin embargo ninguna de ellas esta especilizada para mover ramas. Todos los movimientos de ramas que hacen son implicitos a otra operación que realizan.

Gracias a `git reset` se tiene un comando especilizado para mover ramas. Normalmente se trabaja con `reset` con la rama actual (HEAD). Así estando un commit nos podemos mover a otro commit y hacer que HEAD apunte a este commit, por medio de haber movido la rama. Esto es lo que hace princpialmente `reset`en el área del Repository. 

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


