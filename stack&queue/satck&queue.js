// class stack {
//     constructor(){
//         this.items = []
//     }
//     push(data){
//         this.items.push(data)
//         // console.log("added")

//     }
//     isEmpty(){
//         return this.items.length ===0;
//     }
//     pop(){
//         if(this.isEmpty()){
//             throw new Error("stack is empty")

//         }
//         return this.items.pop();

//     }

//     peek(){
//         if(this.isEmpty()){
//             throw new Error("stack is empty")

//         }
//         return this.items[this.items.length-1]

//     }
//     size(){
//         return this.items.length

//     }

// }

// // driver code

// const st1 = new stack();
// st1.push(1)
// st1.push(2)
// st1.push(3)
// // st1.push(4)

// console.log(st1.peek())
// console.log(st1.peek())
// console.log(st1.peek())
// console.log(st1.peek())

// console.log("size of stack",st1.size())
// console.log(st1.pop())
// console.log("size of stack",st1.size())

// Stack implementation using LL

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null

//     }
//     push(data){
//         const newNode = new Node(data)
//         newNode.next = this.top;
//         this.top = newNode
        
//     }
//     isEmpty(){
//         return this.top ===null
//     }
//     pop(){
//         if(this.isEmpty()){
//             throw new Error("stack is empty")

//         }
//         const poppedNode = this.top
//         this.top = this.top.next;
//         return poppedNode.data

//     }

// }
// // driver code 

// const st = new Stack();
// st.push(10)
// st.push(20)
// st.push(30)
// const popelem = st.pop()
// console.log(popelem)
// console.log(st.pop())

class Queue{
    constructor(){
        this.items = []
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        return this.items.shift()

    }
    front(){
        return this.items[0]
    }
}
//driver code

const q = new Queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log(q.front())
console.log(q.front())
console.log(q.front())





