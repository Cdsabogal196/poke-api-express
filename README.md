# Descripción 

PokeAPI Express es una API que actúa como intermediario: consume el servicio de la API externa PokeAPI, procesa la información obtenida y la almacena en su propia base de datos. El flujo es el siguiente: al recibir una solicitud, la API consulta PokeAPI; si esta fuente externa devuelve información, la guarda en la base de datos local; si no obtiene respuesta, no almacena nada. De esta forma, la base de datos siempre contendrá solo los datos que han sido recuperados exitosamente desde PokeAPI.

## Ejecución 

Es necesario crear una base de datos PostgreSQL con el siguiente nombre:
```bash
pokeapi
```
El siguiente comando se ejecuta con el fin de construir la imagen Docker:
```bash
docker build -t express-demo .
```

Luego, ejecuta el contenedor con:
```bash
docker run -p 3000:3000 express-demo
```
La API estará disponible en:
```bash
http://localhost:3000
```
🔐 Autenticación

Antes de consumir los endpoints protegidos, debes iniciar sesión para obtener un Bearer Token.

📥 Login

Realiza una petición POST a:
```bash
http://localhost:3000/pokemon/auth/login
```
Con el siguiente body:
```bash
{
  "username": "admin",
  "password": "password"
}
```
La respuesta te devolverá un bearer token. Este se deberá incluir como header de autorización en la petición para obtener la lista de pokemones:
```bash
Authorization: Bearer TU_TOKEN
```
Sin este token, obtendrá un 401 indicando que no esta autorizado para realizar la petición.
```bash
http://localhost:3000/pokemon
```

La API también está desplegada en Azure, y puede consultarla directamente usando esta URL en la petición en lugar de localhost. Los endpoints de login y pokemon también se encuentran disponibles con esta url:

```bash
https://pokeapiexpress-fmbwgsdye0cqgqft.centralus-01.azurewebsites.net
```


## Api externa 

Para este proyecto se utilizó la API externa PokeAPI con el endpoint:
```https://pokeapi.co/api/v2/pokemon?limit=10```
, con el cual se obtiene la lista de pokémones. Fuera de eso se consulto internamente la información de cada pokemon para obtener sus atributos básicos.
