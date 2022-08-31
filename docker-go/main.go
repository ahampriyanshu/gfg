package main

import (
	"os"
	"github.com/gin-gonic/gin"
)

func main() {
	port := "8080"
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.String(200, "Dockerizing Go Application")
	})


	router.Run(":" + port)
}