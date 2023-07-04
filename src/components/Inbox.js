import React, { useRef, useState } from 'react'
import './style.css'
import ListComponent from './ListComponent'



export default function Inbox(props) {
  const todotxt = useRef()
  const tododate = useRef()
  const {todoList, setTodoList,indexVal,setIndexVal} = props
  const [addTodo, setAddTodo] = useState(false)
  let date= new Date()
  let month = date.getMonth()+1
  let day = date.getDate()
  if(month<10) {
    month = `0${month}`
  }
  if(day<10) {
    day = `0${day}`
  }
  date = `${date.getFullYear()}-${month}-${day}`

  const handleAddTodo = () => {
    const indexArr = todoList.map(ele=>ele.index)
    let stIndex = Math.max(...indexArr)
    if(indexArr.length>0) setIndexVal(stIndex)
    setAddTodo(true)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if(!todotxt.current.value){
      alert('task cannot be empty')
      return
    }
    const obj = {
      index: indexVal+1,
      task: todotxt.current.value,
      date:new Date(tododate.current.value).toLocaleDateString(),
      checked:false
    }
    setTodoList([...todoList,obj])
    setIndexVal(indexVal+1)
    todotxt.current.value=""
    setAddTodo(false)
  }

  const handleRemove = (index) => {
    setTodoList(todoList.filter((e)=>e.index!==index))
  }
  
  return (
    <div className='inbox'>
      {!addTodo && <button onClick={()=>{handleAddTodo()}} className='add-btn'>Add Todo + </button>}
      {addTodo && (
        <div className='todo-input-container'>
          <input type='text' className='todo-inp-text' placeholder='Enter task' ref={todotxt}/>
          <input type='date' defaultValue={date} className='todo-inp-date' ref={tododate}/>
          <button onClick={handleAdd} className='add-btn'>Add</button>
          <button onClick={()=>{setAddTodo(false)}} className='cancel-btn'>Cancel</button>
        </div>
      )}
      <ListComponent list={todoList} todoList={todoList} setTodoList={setTodoList} handleRemove={handleRemove}/>
    </div>
  )
}
