import React, { useState } from 'react'

const UseStateArray = () => {
    const [lists, setLists] = useState([])

    const generateList = ()=>{
        setLists([...lists,{
            id:lists.length,
            value: Math.random()
        }])
    }


  return (
    <div>
        <button onClick={generateList}>Generate List</button>
        <ul>
            {
                lists.map(list=>{
                    return <li key={list.id}>{list.value}</li>
                })
            }
        </ul>
    </div>
  )
}

export default UseStateArray