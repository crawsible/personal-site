package main

import (
	"io/ioutil"
	"net/http"
	"os"
)

var appHTML = mustReadFile("./views/index.html")

func main() {
	assetsServer := http.FileServer(http.Dir("./assets/"))
	http.Handle("/assets/", http.StripPrefix("/assets/", assetsServer))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write(appHTML)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.ListenAndServe("0.0.0.0:"+port, nil)
}

func mustReadFile(path string) []byte {
	bytes, err := ioutil.ReadFile(path)
	if err != nil {
		panic(err)
	}

	return bytes
}
