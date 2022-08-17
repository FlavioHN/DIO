#!/bin/bash

echo "Atualizando e instalando ferramentas!."
apt-get update

apt-get upgrade -y

echo "instalando apache2..."
apt-get install apache2 -y
echo "instalando unzip..."
apt-get install unzip -y
echo "instalando wget e curl"
apt-get install wget curl -y

echo "baixando e copiando arquivos de aplicações"
cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip

unzip main.zip
cd linux-site-dio-main
cp -R * /var/www/html/