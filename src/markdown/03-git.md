---
date: "2017-11-07"
title: "Stash"
---
# Git

## Stash

Es la cuarta área que nos proporciona git. Todos los comando visto hasta ahora no tienen ningún efecto sobre este área. Solo hay un comando que pone datos en esta área `git stath`. La información en el Stath no cambia al menos que se haga explícitamente.

Se está trabajando en un proyecto en el que se  tienen ficheros en el Working Area e Index que ha sido modificados con respecto a los ficheros que se contiene en el Repository. Por algún tipo de necesidad tenemos que realizar cualquier otra tarea en nuestro proyecto y no queremos perder los cambios realizados, pero tampoco se quiere realizar commit sobre los cambios que tenemos ya realizados porque aún no se ha terminado de realizar la tarea. Pues el Stash nos propociona  un  area donde depositar estos cambios para luego poder recuperarlos.

Por medio del comando `git stash save`  o simplemente `git stash`, se copian los datos que se tienen en el Working Area e index en el Stash,j y posteriormente hace un checkout del commit actual para que esten las áreas Working Area, Index y Repository alineadas. Si se añade la opción `--include-untracked`

 Ahora para leer las entradas que se tienen en el Stash se utiliza `git stash list`. Aparecerá una entrada por cada vez que hemos puesto algo en esta área. Cada entrada en la lista esta compuesta por:

  * Identificador del elemento en el Stash
  * WIP + la rama donde se estabá trabajando. 
  * Identificador del commit del que parte los cambios.
  * Mesaneje del commit del que parte los cambios.

![List element Stash](./images/list-stash.png "List element Stash")

Para recuperar la información del stash al resto de áreas se utiliza `git stash apply`. Con esto se saca la información más reciente del stash. También se puede sacar un elemento en concreto a través del nombre `git stash stash@{0}`.

Tras recuperar la información del stash, esta no se borra, por lo que si se quiere eliminar la información del stash se ejecuta el comando `git stash clear`.

