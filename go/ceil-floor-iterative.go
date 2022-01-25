// Go program to find floor and ceil of a given key in BST 
package main

import (
	"fmt"
)

/* A binary tree node has key, left child and right child */
type node struct {
	Data  int
	Left  *node
	Right *node
}

func newNode(data int) *node {
	var node *node = new(node)
	node.Data = data
	node.Left = nil
	node.Right = nil
	return node
}

// Declaring global variables
var (
	floor int = -1
	ceil  int = -1
)

// Helper function to find floor and ceil of a given key in BST 
func floorCeilBSTHelper(root *node, key int) {
	for root != nil {
		if root.Data == key {
			ceil = root.Data
			floor = root.Data
			return
		}
		if key > root.Data {
			floor = root.Data
			root = root.Right
		} else {
			ceil = root.Data
			root = root.Left
		}
	}
	return
}

// Display the floor and ceil of a given key in BST. 
// If key is less than the min key in BST, floor will be -1; 
// If key is more than the max key in BST, ceil will be -1; 
func floorCeilBST(root *node, key int) {
	floor, ceil = -1, -1
	floorCeilBSTHelper(root, key)
	fmt.Printf("%d %d %d\n", key, floor, ceil)
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
		floorCeilBST(root, i)
	}
	
}

// This code is contributed by Priyanshu Tiwari (ahampriyanshu)