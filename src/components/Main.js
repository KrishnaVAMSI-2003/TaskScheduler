import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inbox from './Inbox';
import Today from './Today';
import Upcoming from './Upcoming';

import './style.css'

export default function Main() {
  const [todoSection, setTodoSection] = useState('inbox')
  const [todoList, setTodoList] = useState([])
  const [indexVal, setIndexVal] = useState(0)
  useEffect(()=>{
    const lsdata = JSON.parse(localStorage.getItem('todo-items'))
    lsdata && setTodoList([...lsdata])
  },[])
  useEffect(()=>{
    localStorage.setItem('todo-items', JSON.stringify(todoList))
    todoList.length===0 && setIndexVal(0)
  },[todoList])
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Sidebar setSection={setTodoSection}/>
        <div className="todo-list-container">
          {todoSection==='inbox' && <Inbox todoList={todoList} setTodoList={setTodoList} indexVal={indexVal} setIndexVal={setIndexVal}/>}
          {todoSection==='today' && <Today todoList={todoList} setTodoList={setTodoList}/>}
          {todoSection==='upcoming' && <Upcoming todoList={todoList} setTodoList={setTodoList}/>}
        </div>
      </div>
    </div>
  )
}
