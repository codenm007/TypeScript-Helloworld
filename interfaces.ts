// function showtodo (todo: {title:string,text:string}){
//     console.log(todo.title+ ": "+ todo.text);
// }

// let MyTodo = {title: 'trash',text : 'take it out'};

// showtodo(MyTodo);

interface Todo {
    title:string;
    text: string
}

function showtodo (todo: Todo){
         console.log(todo.title + ": "+ todo.text);
     }
    

     let MyTodo = {title: 'trash',text : 'take it out'};
showtodo(MyTodo);