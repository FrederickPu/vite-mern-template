import React from "react";

function App() {
  const [data, setData] = React.useState("")

  function handleClick(){
    fetch("http://localhost:8000/setData", {
      method: 'POST', 
      mode: 'cors',
      body: JSON.stringify({lol : "sheckles"})
    })
  }

  React.useEffect(() => {
    fetch("http://localhost:8000/getData")
      .then(response => {
        return response.json()
      }).then(res => setData(JSON.stringify(res)))
  }, [])
  return (
    <>
    <p>Your Data: {data}</p>
    <button onClick={handleClick}>Set stuff</button>
    </>
  )
}

export default App;
