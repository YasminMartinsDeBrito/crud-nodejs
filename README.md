# crud-nodejs

## Post /users
```json
{
  "name":"hellena",
  "email":"hellena@mai.com"
}
```

se o **email** ja existir retornará um erro
```
"This email is already being use"
```

resposta
```json
{
  "email": "hellena@mai.com",
  "name": "hellena",
  "id": "5a99ef0b-e128-4afd-b946-64808f123691"
}
```

## Get /users
#### não precisa escrever no body

resposta
```json
[
  {
    "email": "hellena@mai.com",
    "name": "hellena",
    "id": "5a99ef0b-e128-4afd-b946-64808f123691"
  }
]
```

## Put /users/:id
```
id = 5a99ef0b-e128-4afd-b946-64808f123691
idUsuario escolhido para editar
```

```json
{
	"email":"yasmin@gmail.com",
	"name":"yasmin"
}
```
deverá escrever todas as propriedades, não escrever ficara vazia

resposta
```json
{
  "email": "yasmin@gmail.com",
  "name": "yasmin",
  "id": "5a99ef0b-e128-4afd-b946-64808f123691"
}
```

resposta sem uma propriedade
```json
{
  "email": "yasmin@gmail.com",
  "id": "5a99ef0b-e128-4afd-b946-64808f123691"
}
```

## Delete users/:id
```
id = 5a99ef0b-e128-4afd-b946-64808f123691
idUsuario escolhido para editar
```
#### não precisa escrever no body, só colocar o id na URL
resposta
```
"Usuario excluido com sucesso"
```


