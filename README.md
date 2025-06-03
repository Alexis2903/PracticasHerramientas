# PracticasHerramientas (1)

-npm create vite@latest
# Se crea el nombre
-cd nombre_del_proyecto
-npm install
# Para comprobar colocamos el comando:
-npm run dev

# Proyecto Node.js con Docker (2)

# Aplicación Node.js usando Docker en una instancia Ubuntu.
1. Actualizar e instalar dependencias necesarias
-sudo apt update
-sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

2. Agregar la clave GPG oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

3. Agregar el repositorio de Docker
-sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

4. Instalar Docker
-sudo apt update
-sudo apt install docker-ce -y

5. Verificar que Docker está instalado correctamente
-sudo systemctl status docker

6. Crear un archivo llamado Dockerfile dentro de la carpeta Backend con este contenido
echo 'FROM node:20.10.0-alpine3.18
WORKDIR /app
COPY package.json ./
RUN npm i
COPY index.js ./
EXPOSE 3000
CMD ["node", "index.js"]' > Dockerfile

7. Construir la imagen Docker
-sudo docker build -t node-hello .

8. Ejecutar el contenedor Docker
-sudo docker run -d -p 8080:8080 --name hello --restart on-failure node-hello:latest

9. Verificar que el contenedor está en ejecución
-sudo docker ps

10. Acceder a la app desde el navegador
-echo "Accede desde el navegador en http://<IP_PUBLICA>:8080"

# Proyecto Node.js con Docker Practica libros (3)

1. Actualizar e instalar dependencias necesarias en la carpeta de libros
-sudo apt update
-sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

2. Agregar la clave GPG oficial de Docker
-curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

3. Agregar el repositorio de Docker
-sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

4. Instalar Docker
-sudo apt update
-sudo apt install docker-ce -y

5. Verificar que Docker está instalado correctamente
-sudo systemctl status docker

6. Crear un archivo llamado Dockerfile dentro de la carpeta Backend con este contenido
echo 'FROM node:20.10.0-alpine3.18
WORKDIR /app
COPY package.json ./
RUN npm i
COPY index.js ./
EXPOSE 3000
CMD ["node", "index.js"]' > Dockerfile

7. Construir la imagen Docker (se cambió el nombre a hello2)
-sudo docker build -t node-hello2 .

8. Ejecutar el contenedor Docker (modificado el nombre a hello2)
-sudo docker run -d -p 8080:8080 --name hello2 --restart on-failure node-hello2:latest

9. Verificar que el contenedor está en ejecución
-sudo docker ps

10. Acceder a la app desde el navegador
echo "Accede desde el navegador en http://<IP_PUBLICA>:8080"

Endpoints de la API de libros
-"Listar libros: http://localhost:8080/"
-"Agregar un libro (POST): http://localhost:3000/libros"
-"Eliminar un libro (DELETE): http://localhost:3000/libros/4"
-"Buscar un libro: http://localhost:3000/libros/4"
echo "Editar un libro (PATCH): http://localhost:3000/libros/3"
