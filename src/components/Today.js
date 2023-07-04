import './style.css'
import React, { useEffect, useState } from 'react'
import ListComponent from './ListComponent'

export default function Today(props) {
  const {todoList, setTodoList} = props
  const [todayList, setTodayList] = useState(todoList)
  useEffect(()=>{
    const date = new Date().toDateString()
    setTodayList(todoList.filter((ele)=> ele.date===date))
  },[todoList])

  const handleRemove = (index) => {
    setTodoList(todoList.filter(ele => ele.index !== index))
  }

  return (
    <div className='today'>
      <ListComponent list={todayList} todoList={todoList} setTodoList={setTodoList} handleRemove={handleRemove}/>
    </div>
  )
}
