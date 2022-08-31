# Fetching the latest golang image on apline linux
FROM golang:1.17 as builder

# Declaring env variables
ENV GOOS linux
ENV CGO_ENABLED 0

# Setting up the work directory
WORKDIR /docker-go

# Installing dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copying all the files in our project
COPY . .

# Building our application
RUN go build -o docker-go

# Fetching the latest nginx image
FROM alpine:3.16 as production

# Adding certificates
RUN apk add --no-cache ca-certificates

# Copying built assets from builder
COPY --from=builder docker-go .

# Starting our application
CMD ./docker-go

# Exposing server port
EXPOSE 5000
