// Program to find ceil of a given value in BST
package main

import (
	"fmt"
)

// A binary tree node has key, left child and right child
type node struct {
	Key   int
	Left  *node
	Right *node
}

// Helper function
func newNode(key int) *node {
	var node *node = new(node)
	node.Key = key
	node.Left = nil
	node.Right = nil
	return node
}

/* Function to find ceil of a given input in BST. If input is more
 than the max key in BST, return -1 */
func Ceil(root *node, input int) int {
	if root == nil {
		return -1
	}
	if root.Key == input {
		return root.Key
	}
	if root.Key < input {
		return Ceil(root.Right, input)
	}
	var ceil int = Ceil(root.Left, input)
	if ceil >= input {
		return ceil
	}
	return root.Key
}

// Driver program to test above function
func main() {
	var root *node = newNode(8)
	root.Left = newNode(4)
	root.Right = newNode(12)
	root.Left.Left = newNode(2)
	root.Left.Right = newNode(6)
	root.Right.Left = newNode(10)
	root.Right.Right = newNode(14)
	for i := int(0); i < 16; i++ {
		fmt.Printf("%d %d\n", i, Ceil(root, i))
	}
}
// This code is contributed by Priyanshu Tiwari (ahampriyanshu)