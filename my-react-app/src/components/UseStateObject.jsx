import React, { useState } from 'react'

const UseStateObject = () => {
    const [info,setInfo] = useState({
        name:"",
        id:""  //prevent console error
    })

  return (
    <div>
        <form>
                <input value={info.name} onChange={(e)=>setInfo({...info, name:e.target.value})} />
                <input value={info.id} onChange={(e)=>setInfo({...info, id:e.target.value})} />
        </form>

        <div>
            <p>Name: {info.name}</p>
            <p>Id: {info.id}</p>
        </div>
    </div>
  )
}

export default UseStateObject