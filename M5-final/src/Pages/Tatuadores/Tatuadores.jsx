import React, {useState, useEffect} from 'react'
import "./tatuadores.css"
import axios from "axios"

export default function Tatuadores() {
  const [data, setData] = useState({})

  useEffect(() => {
      axios.get(`https://m5-tattoo.herokuapp.com/tatuadores`)
        .then(response => {
          setData(response.data)
        })
  }, [])
console.log(data)
  return (
    <div>
      

    </div>
  )
}
