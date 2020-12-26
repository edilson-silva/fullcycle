FROM golang:alpine
COPY hello.go .
RUN go build --ldflags "-w -s" hello.go

FROM scratch
COPY --from=0 /go/hello .
ENTRYPOINT ["./hello"]
