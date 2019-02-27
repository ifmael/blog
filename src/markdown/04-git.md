---
date: "2017-11-07"
title: "Trabajando con Path"
---
# Git

## Trabajando con Path

Como antes se ha ha visto con `git reset HEAD`, se copia el contenido del Repository al Index pero no se copia al Working Area. Si se quiere hilar más fino y no copiar todos los ficheros del HEAD al index, se puede utilizar el siguiente comando: `git reset HEAD <filename>`.

Si se quisiera hacer un `git reset --hard HEAD <filename>`, git no realiza la operación. Esto no es muy consistente pero es la manera de trabajar de git. Si se quiere revertir un fichero o un directorio, estando en el Index y el Working Area desde el commit actual, se puede utilizar `git checkout HEAD <filename>`. Normalmente `checkout` mueve el puntero HEAD en el Repository a una branch, y copia el contenido del Repository al Working Area e Index. Pero en este caso simplemente copia datos del commit actual al Working Area y al Index del fichero que se indica. Mencionar que este comando destruye todo el trabajo que no se tiene en el Repository en el Working Area y en Index, por lo que hay que pensarselo 2 veces antes de ejecutarlo.