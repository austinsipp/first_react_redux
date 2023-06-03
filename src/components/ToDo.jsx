import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeToDo, clearList } from '../features/toDoSlice'

export default function ToDo() {
    const { items } = useSelector(state => state.todo)
    const [item, setItem] = useState('')
    const dispatch = useDispatch()
    const onSubmitItem = (e) => {
        e.preventDefault()
        e.target.reset()
        dispatch(addItem(item))
    }
    return <div>
        <h2>To Do List:</h2>
        <ul>
            {
                items.map((item, index) => {
                    return <li key={index}>
                        <span>{item.text}</span>
                        <button
                            type='text'
                            onClick={(e) => {
                                    dispatch(removeToDo(item.text))
                                }
                            }
                        >X</button>
                    </li>
                })
            }
        </ul>
        <form onSubmit={onSubmitItem}>
            <input type='text' onChange={(e) => {
                setItem(e.target.value)
            }} />
            <button type='submit'>Add to To-Do</button>
            <button type='button' onClick={(e) => {
                dispatch(clearList())
            }}>Clear</button>
        </form>
    </div>
}