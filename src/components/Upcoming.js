import './style.css'
import React, { useEffect, useState } from 'react'
import ListComponent from './ListComponent'

export default function Upcoming(props) {
  const {todoList, setTodoList} = props
  const [upcomingList, setUpcomingList] = useState(todoList)
  useEffect(()=>{
    const date = new Date()
    const num = 1000*24*60*60
    setUpcomingList(todoList.filter((ele)=>{
      let eleDateArr=ele.date.split('/')
      const day = eleDateArr[0]
      eleDateArr[0] = eleDateArr[1]
      eleDateArr[1]=day
      const eleDate = eleDateArr.join('/')
      return Math.ceil((new Date(eleDate)-date)/num) > 0
    }))
  },[todoList])

  const handleRemove = (index) => {
    setTodoList(todoList.filter(ele => ele.index !== index))
  }

  return (
    <div className='next7days'>
      <ListComponent list={upcomingList} todoList={todoList} setTodoList={setTodoList} handleRemove={handleRemove}/>
    </div>
  )
}
