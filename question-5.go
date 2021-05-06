package main

import ("fmt")

func generateCross(n int) {
  for i:=1; i<=n; i++ {
    for j:=1; j<=n; j++ {
      if i == j || n-i+1 ==j {
        fmt.Printf("*")
        continue
      }
      fmt.Printf(" ")
    }
    fmt.Println()
  }
}

func main() {
  generateCross(5)
}
