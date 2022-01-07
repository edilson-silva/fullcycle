# Nginx como proxy reverso para aplicação node
### Iniciar aplicação
```
docker-compose up -d --build
```

##### Explicações:
A porta de acesso da aplicação através do Nginx é a 8080, que está redirecionando para a porta 3000 da aplicação.
