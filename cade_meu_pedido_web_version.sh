#!/bin/bash
###################################################################
#Script Name    :cmp_portal_adm.sh
#Description    :script to execute pm2 portalserver
#Author         :vanderson.diniz/antonio.silva
#Email          :vanderson.lima/antonio.silva@fusiondms.com.br
#Created at     :2023.02.01
###################################################################

cd /home/fusiontrak/cade-meu-pedido-web-version

su -s /bin/sh -c 'git fetch --all && git checkout master && git reset --hard origin/master && git pull -q -X theirs origin master && chmod 777 -R .'
npm install

lsof -i:3000 > /dev/null

if [ "$?" -eq "0" ]
then
   echo "Reiniciando processo do node"
   rm -f nohup.out
   pid=$(ps aux | grep -w "start.js" | awk '{print $2}' | head -n 1)
   kill -9 $pid
   nohup node /home/fusiontrak/cade-meu-pedido-web-version/node_modules/react-scripts/scripts/start.js &
else
   echo "Iniciando processo do node"
   nohup node /home/fusiontrak/cade-meu-pedido-web-version/node_modules/react-scripts/scripts/start.js &
fi
