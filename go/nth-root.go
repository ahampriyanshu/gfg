// Go program to calculate Nth root of a number
package main

import (
	"fmt"
	"math"
	"math/rand"
)

// method returns Nth power of A
func nthRoot(A int, N int) float64 {

	//  initially guessing a random number between 0 and 9
	var xPre float64 = float64(rand.Intn(10) % 10)
	var eps float64 = 0.001
	var delX float64 = math.MaxInt64

	//  xK denotes current value of x
	var xK float64

	//  loop until we reach desired accuracy
	for delX > eps {
		xK = ((float64(N) - 1.0) * xPre + float64(A) / math.Pow(xPre, float64(N) - 1)) / float64(N)
    	delX = math.Abs(xK - xPre)
		xPre = xK
	}
	return xK
}

// Driver code
func main() {
	var (
		N int = 4
		A int = 81
	)

	var nthRootValue float64 = nthRoot(A, N)
	fmt.Printf("Nth root is  %g\n", math.Round(nthRootValue*1000.0)/1000.0)
}
// This code is contributed by Priyanshu Tiwari (ahampriyanshu)