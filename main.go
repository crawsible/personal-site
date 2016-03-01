package main

import (
	"net/http"
	"os"
)

func main() {
	fileServer := http.FileServer(http.Dir("./staticfiles/"))
	http.Handle("/staticfiles/", http.StripPrefix("/staticfiles/", fileServer))
	http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}
