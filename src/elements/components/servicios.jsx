// import { useState } from 'react'
// const [count, setCount] = useState(0)
import '../../CSS/servicios.css'


export function ServicesApp( { children, name } )  {

  return (
    <div className="server-content">
      <h1>{name}</h1>
        {children}
      </div>
  )
}