import React, {useEffect, useState} from 'react'

function App() {

  const [beData, setBeData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(data =>{
      setBeData(data)
    })
  }, [])

  return (
    <div>
      {(typeof beData.ex ==='undefined') ? (
          <p>Loading..</p>
        ) : (
          beData.ex.map((ex, i) => (
          <p key={i}>{ex}</p>
        ))
      )}
    </div>
  )
}

export default App