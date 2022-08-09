#!/bin/bash

# Para funcionamento correto, grupos e usuarios devem existir.

echo "Definindo permissoes dos diretorios"

chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec
#chown root:publico

chmod 777 /publico
chmod 770 /adm
chmod 770 /ven
chmod 770 /sec

echo "Permissoes concedidas..."
