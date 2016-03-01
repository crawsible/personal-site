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

	http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}
