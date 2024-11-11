<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar el proyecto

## 1. Instalar dependencias

```bash
$ npm install
```

## 2. Levantar base de datos con docker

```
$ docker-compose up -d
```
## 3. Clonar el archivo ```.env.template``` y renombar la copia a ```.env```

## 4. Llenar las variables de entorno definidas en el ```.env```

## 5. Compilar y correr el proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 6. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```