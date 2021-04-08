// Last In First Out (LIFO)

function createStack(){
    let array = [];

    let func = {
        push(item){
            array.push(item);
        },
        pop(){
            array.pop();
        },
        peek(){
            return array[array.length - 1];
        },
        size(){
            return array.length;
        }
    }

    return func;
}

const bookStack = createStack();

bookStack.push('The Effective Engineer');
bookStack.push('The Pragmatic Programmer');
bookStack.push('Start with why');

console.log(bookStack.peek());
console.log(bookStack.size());

bookStack.pop();
bookStack.pop();
console.log(bookStack.peek());
bookStack.pop();
console.log(bookStack.size());


// createStack().push('The Effective Engineer');
// createStack().peek();