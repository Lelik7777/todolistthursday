import React, {useEffect, useState} from 'react'
import {todolistApi} from '../api/todolist-api';

export default {
    title: 'API'
}
//let id=0;
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null);

    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
            todolistApi.getTodo()
                .then((res) => {
                setState(res.data);
            })




    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       // debugger
           todolistApi.postTodo()
               .then( (res) => {
               // debugger
            setState(res.data);
        } )
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '44d70ce8-2b42-4378-baca-5d3cb7c4bf01';

        todolistApi.deleteTodo(todolistId)
            .then( (res) => {
            setState(res.data);
        })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

