# Desafio 01 - Imagem Go com menos de 2Mb
### Código fonte do arquivo hello.go
```go
package main

func main () {
	print("Code.education Rocks!")
}
```

### Código fonte do Dockerfile
```dockerfile
FROM golang:alpine
COPY hello.go .
RUN go build --ldflags "-w -s" hello.go

FROM scratch
COPY --from=0 /go/hello .
ENTRYPOINT ["./hello"]
```

### Imagem no DockerHub
```
docker pull edilsonsilva2x/codeeducation
```

##### Explicações:
Para atingir o tamanho de 831Kb na imagem, foi necessário executar a compilação do arquivo informando as flags **-w -s** para o **-ldflags**, onde os parâmetros removem a tabela de simbolos e os arquivos referentes ao modo de debug.
