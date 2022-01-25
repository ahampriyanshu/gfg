// Go implementation of Newton Raphson Method for
// solving equations
package main

import (
	"fmt"
	"math"
	"os"
)

const EPSILON = 0.001

// An example function whose solution is determined using
// Bisection Method. The function is x^3 - x^2  + 2
func func_(x float64) float64 {
	return x*x*x - x*x + 2
}

// Derivative of the above function which is 3*x^x - 2*x
func derivFunc(x float64) float64 {
	return x*3*x - x*2
}

// Function to find the root
func newtonRaphson(x float64) {
	var h float64 = func_(x) / derivFunc(x)
	for float64(math.Abs(h)) >= EPSILON {
		h = func_(x) / derivFunc(x)

		// x(i+1) = x(i) - f(x) / f'(x) 
		x = x - h
	}
	fmt.Printf("The value of the root is: %g", math.Round(x*100.0)/100.0)
}

// Driver program to test above
func main() {

	// Initial values assumed
	var x0 float64 = float64(-20)
	newtonRaphson(x0)
	// This code is contributed by Priyanshu Tiwari.
}
