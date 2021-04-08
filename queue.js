// First In First Out (FIFO)

function createQueue(){
    const queue = [];

    return {
        enqueue(value){
            queue.unshift(value);
        },
        dequeue(){
            queue.pop();
        },
        peek(){
            return queue[queue.length - 1];
        },
        size(){
            return queue.length;
        }
    }
}

const q = createQueue();
q.enqueue('Create Script for data structure course');
q.enqueue('Create code example for data structure course');
q.enqueue('Record data structure course');
q.enqueue('Vacation');

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.peek())