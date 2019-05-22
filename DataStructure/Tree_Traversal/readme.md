# TRAVERSING A TREE



  **Two** **ways**
* Breath First Search
* Depth First Search
   * In Order
   * Pre Order
   * Post Order


### BFS

* Create a queue (this can be an array) and variable to store the values of nodes visited
* Place the root node in the queue
* Loop as long there is anything in the queue
    * Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    * If there is a left property on the node dequeued - add it to the queue
    * If there is a rigth property on the node dequeued - add it to the queue
* Return the variable that stores the values

# DFS PreOrder(root>left>right)

  **Speps**- Recursively
* Create a variable to store the values of nodes visited
* Store the root of the BST in a variabel called cureent
* Write a helper function which accepts a node
   * Push the value of the node to the variable that store the values
   * If the node has a left property, call the helper function with the left property on the node
   * If the node has a right property, call the helper function with the right property on the node
* Invoke the helper function with the current variable
* Return the array of values

# DFS PostOrder (left>right>root)

  **Speps**- Recursively
* Create a variable to store the values of nodes visited
* Store the root of the BST in a variabel called cureent
* Write a helper function which accepts a node
   * If the node has a left property, call the helper function with the left property on the node
   * If the node has a right property, call the helper function with the right property on the node
   * Push the value of the node to the variable that store the values
* Invoke the helper function with the current variable
* Return the array of values