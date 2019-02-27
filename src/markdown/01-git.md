---
date: "2017-11-07"
title: "My first git article"
---

# GIT

Git almacena información en 4 áres, Working Area, Index, Repository y el Stash. 

* El Working Directory es la área directorio donde se trabaja y corresponde con el sistema de ficheros del SO. Es un área de trabajo temporal puesto que el gtivo final es almacenar los ficheros  y directorios en el Repository.
* El Repository contiene la historia de nuestro proyecto. Cuando se realiza un commit, es en esta área donde se ve reflejado.
* Entre el Working Directory y el Repository se situa el index, y es el área donde se ponen los ficheros previamente al commit.
* El stasth es una área de almacenamiento temporal. Es util.

Es importante preguntarse como los comandos de git mueven información entre estas áreas y también que comandos hacen cambios en el Repository puesto que es la área más importante de las cuatro.

## Repository

Extendiendo un poco la información sobre Repository, en el directorio de trabajo se puede encontrar un directorio oculto llamado `.git`.  En este directorio, git almacenará toda la información necesaria para trabajar. Más concretamete hay un directorio llamado `objects` bastante interesante.

Hay diferentes tipos de objetos así algunos de ellos representan el contenido de un fichero en un punto específico en el la historia del proyecto, se denominan `blob`.  Otros objetos llamados `tree` representan  directorios en el proyecto y también hay `commit`. Todos estos objetos son inmutables, se puede crear o borrar pero nunca van a cambiar. Estos objetos están linkador para construir la historia del proyecto. 

![Git history](./images/git-history.png "Git history")


Los commit son como una instantánea en el tiempo. Cada uno de ellos apunta a un commit padre

![Commit tree](./images/commit-tree.png "Commit tree")

Así cuando estamos apuntan a un commit en particular, indirectamente tenemos la referencia del resto. 

![Commit Reference](./images/commit-reference.png "Commit Reference")

Todos estos commit juntos, conforma un una instánea en el tiempo. La referencia a este commit es una entidad importante, llamada `branch`. Básicamente una rama es un punto de entrada al historial de commit. Por supuesto se pueden tener múltiples `branches`

![Branch reference](./images/branch-reference.png "Branch reference")

Un mismo commit puede ser compartido por 2 `branches` distintas.

Hay un punto especial llamado `HEAD` y solo hay una. Es una referencia a una `branch`, y es la `branch` actual. Y ya que las ramas apunta a `commit`, el `HEAD` indirectamente está apuntando a un `commit`. El `HEAD` se puede ir moviendo a diferentes `branches` para apuntar a diferentes `commits`.

Se puede desear borrar una `branch`, dando lugar a que algunos `commits` ya no se puedan alcanzar. Cuando sucede esto, el recolector de basura de git elimina estos `commits`.

![BCommits unreacheable](./images/commits-unreacheable.png "Commits unreacheable")

## Index

Se puede ver el Index como una zonae entre el Working Area y el Repository. Para mover datos desde el Working Area al Repository se hace por medio del Index, también es conocido Staging Area,  añadidendo los cambios del Working Area al Index y desde este se realizan los commits paa el Repository. Podemos ver el fichero de index dentro del directorio .git (es un fichero binario por lo que no podemos visualizarlo en un editor de textos).