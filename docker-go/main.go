package main

import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

func main() {
    router := mux.NewRouter()
    router.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
        response := map[string]string{
            "response": "Dockerizing Go Application",
        }
        json.NewEncoder(rw).Encode(response)
    })

    log.Println("⚡️[bootup]: Server is running at port: 5000")
    http.ListenAndServe(":5000", router)
}