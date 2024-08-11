class Node {
    constructor(data){
        this.data = data;
        this.next =null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
    }

    // add node at the end
    append(data){
        const newNode = new Node(data);
        if(this.head == null ){
            this.head = newNode

        }
        else{
            let temp = this.head
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = newNode
        }
    }

    prepend(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode


    }

    //insertAt any position
    insertAt(data, index){
        const newNode = new Node(data);
        let temp = this.head;
        let cnt = 0;
        while(cnt<index-1){
            temp =temp.next;
            cnt++;
        }
        newNode.next = temp.next;
        temp.next = newNode

     }

    // print LL
    printLL(){
        let temp = this.head;
        let arr = []
        while(temp){
            arr.push(temp.data)
            temp = temp.next
        }
        console.log(arr.join('->'))

    }
}

//driver code 

const LL = new Linkedlist();
LL.append(1)
LL.append(2)
LL.append(3)
LL.append(4)
LL.append(5)
LL.prepend(100)
LL.insertAt(50,3)
LL.printLL()

