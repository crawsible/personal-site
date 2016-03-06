package main

import (
	"net/http"
	"os"
)

func main() {
	assetsServer := http.FileServer(http.Dir("./assets/"))
	http.Handle("/assets/", http.StripPrefix("/assets/", assetsServer))

	viewsServer := http.FileServer(http.Dir("./views/"))
	http.Handle("/", viewsServer)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.ListenAndServe("0.0.0.0:"+port, nil)
}
