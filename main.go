package main

import (
	"net/http"
	"os"
)

func main() {
	assetsServer := http.FileServer(http.Dir("./assets/"))
	http.Handle("/assets/", http.StripPrefix("/assets/", assetsServer))

	pagesServer := http.FileServer(http.Dir("./views/"))
	http.Handle("/", pagesServer)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.ListenAndServe(":"+port, nil)
}
