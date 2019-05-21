# What is Queue data Structure

### A FIFO data structure

## Queue implementation in Linked List

# Enqueue pseudocode

* This function accepts some value
* Create a new node using that value passed to the function
* If there are no nodes in the queue, set this node to be the firrst and last propety of the queue
* Otherwise, set the next propety on the current last to be that node, and then set the last propety of the queue to be that node
* Increment the size of the queue by 1


# Dequeue pseudocode

* If there is no first property, just return null
* Store the first property in a variable
* See if the first is the same as the last(check if there is only 1 node). If so, set the first and last to be null
* If there is more than  1 node, set the first property to be the next property of first
* Decrement the size by 1
* Return the value of the node dequeued