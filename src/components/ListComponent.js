import React, { useEffect, useState } from 'react'

import './style.css'

export default function ListComponent(props) {
    const {list,todoList, setTodoList,handleRemove} = props
    const [dateArr, setDateArr] = useState([])

    useEffect(()=>{
      const dateSet = [...new Set(list.map((ele)=>ele.date))]
      const arr = dateSet.sort()
      setDateArr(arr)
    },[list])

    const [check, setCheck] = useState(false)
    const handleClick = (index) => {
      let filteredList = todoList.filter((ele)=>ele.index!==index)
      let newObj = todoList.filter((ele)=>ele.index===index)[0]
      newObj={
        ...newObj,
        checked:!newObj.checked
      }
      filteredList = [...filteredList,newObj]
      setTodoList(filteredList)
      setCheck(!check)
      console.log(index)
    }
  return (
    <div className='list-view'>
      <dl>
        {dateArr.map((date,ind)=>{
          return(
            <div>
              <dt key={ind}>{date}</dt>
              {list.map((obj,ind)=>{
                return (
                  obj.date===date && <dd className='task-in-list'>
                      <input type='checkbox' checked={obj.checked} onChange={()=>handleClick(obj.index)}/> {obj.checked?<del>{obj.task}</del>:<span>{obj.task}</span>} <button onClick={()=>handleRemove(obj.index)} className='remove-btn'> - </button>
                    </dd>
                )
              })}
            </div>
          )
        })}
      </dl>      
    </div>
  )
}
