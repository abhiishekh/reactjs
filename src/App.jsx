import React, { useEffect, useState } from 'react'

const App = () => {
 
  return (
    <div>

    <Nav></Nav>   
    {/* <Componet/> */}
    {/* <Countdown/> */}
    </div>
  )
}


function Nav(){
  const [currentTab , setCurrectTab] = useState(1)
  const [data,setData] = useState({})
  const [loading,setLoading] = useState(false)
  useEffect(function(){
    setLoading(true)
    fetch('https://dummyjson.com/posts/'+currentTab)
    .then(async res =>{
      const json = await res.json()
      setData(json)
      setLoading(false)
    })
    
  },[currentTab])
  return <div>
    <button onClick={function(){
      setCurrectTab(1)
    }} style={{color:currentTab==1?'red':'black'}}>home</button>
    <button  onClick={function(){
      setCurrectTab(2)
    }} style={{color:currentTab == 2?'red':'black'}}>notification</button>
    <button onClick={function(){
      setCurrectTab(3)
    }} style={{color:currentTab ==3?'red':'black'}}>jobs</button>
    <button onClick={function(){
      setCurrectTab(4)
    }} style={{color:currentTab ==4?'red':'black'}}>message</button>
<p>{loading ?"loading...." : data.title}</p>
  </div>
}

function Componet(){
  const [count , setCount] = useState(0)
  function increase(){
    setCount(count+1)
  }
  return <div>
    <p>{count}</p>
    <button onClick={function(){
      increase()
    }}>increase count</button>
  </div>
}

function Countdown(){
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        // console.log("count second")
          setSeconds(prev => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  useEffect(function(){
    console.log("on every second changes it will run ")
  },[seconds])

  return <div>{seconds} seconds elapsed</div>;
}

export default App

