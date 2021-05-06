package main

import "fmt"

var collections = []map[string]interface{}{
	{
		"name":   "John",
		"age":    20,
		"gender": "male",
	},
	{
		"name":   "Jane",
		"age":    23,
		"gender": "female",
	},
	{
		"name":   "Adam",
		"age":    40,
		"gender": "male",
	},
}

func getAgeByName(name string) int {
	for _, v := range collections {
		if v["name"] == name {
			return v["age"].(int)
		}
	}
	message := fmt.Sprintf("Name %s not found in the collections", name)
	panic(message)
}

func main() {
	result := getAgeByName("John")
	fmt.Println(result)
}
