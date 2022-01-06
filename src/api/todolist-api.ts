import axios from 'axios';

type TodoType={
    id:string;
    title:string;
    addedDate:string;
    order:number;
};
type CreateTodoType={
    data:{
        item:TodoType;
    }
    fieldErrors:[];
    messages:[];
    resultCode:number;
}
type DeleteTodoType={
    resultCode:number;
    data:{};
    fieldErrors:Array<string>;
    messages:Array<string>;
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '38ccf673-39cc-47fa-a572-edc86d238c16',
    }
});
const arr:Array<number|string>=[1,3,4,'sadf'];

export const todolistApi = {
    getTodo() {
        return instance.get<Array<TodoType>>('todo-lists')
    },

    postTodo() {
        return instance.post<CreateTodoType>('todo-lists', {title: 'newTodolist'})
    },

    deleteTodo(id: string) {
        return instance.delete(`todo-lists/${id}`)
    },


}