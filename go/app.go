package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"html/template"
	"net/http"
	"os"
)

type User struct {
	Id    string
	Name  string
	Email string
}

type HomePageData struct {
	IntercomAppId    string
	LoggedInUser     User
	IntercomUserHash string
}

func ComputeHmac256(message string, secret string) string {
	key := []byte(secret)
	h := hmac.New(sha256.New, key)
	h.Write([]byte(message))
	return hex.EncodeToString(h.Sum(nil))
}

func main() {
	tmpl := template.Must(template.ParseFiles("layout.html"))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := HomePageData{
			IntercomAppId: os.Getenv("INTERCOM_APP_ID"),
			LoggedInUser: User{
				Id:    "1234abcd",
				Name:  "Nikola Tesla",
				Email: "nikola.tesla@intercom.io",
			},
			IntercomUserHash: ComputeHmac256("1234abcd", os.Getenv("INTERCOM_API_KEY")),
		}
		tmpl.Execute(w, data)
	})
	http.ListenAndServe(":8080", nil)
}
