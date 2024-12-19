import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
    
  const data = [
    {
      name: "Rihan",
      proffesion: "SoftWare Enginer",
      image: "https://media.istockphoto.com/id/638620962/photo/sifting-through-streams-of-data.jpg?s=2048x2048&w=is&k=20&c=Ru-T38ScZSX46JrsX65AKR7yhAp6X-jCHcgwpWDIZqA=",
      friend : false
    },
    {
      name: "Qasim",
      proffesion: "CSS Operator",
      image: "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend : false
    },
    {
      name: "Fatima",
      proffesion: "Doctor",
      image: "https://media.istockphoto.com/id/1205682886/photo/closeup-portrait-of-friendly-smiling-confident-muslim-female-nurse.jpg?s=2048x2048&w=is&k=20&c=dB4RxtfwG-gK6h-fByv76ma4R_C6h4SbjR1zwuvd5LM=",
      friend : false
    },
    {
      name: "Umar",
      proffesion: "Computer Sciencetist",
      image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend : false
    }
  ];

  const [realdata, setRealdata] = useState(data)

  const handleClickButton = (cardindex)=>{
      setRealdata((prev)=>{
        return prev.map((item, index)=>{
          if(index === cardindex){
            return {...item, friend: !item.friend }
          }
            return item 
        })
      })
  }  
  
  return (
    <>
    <div className='w-full h-screen bg-lime-200 flex items-center justify-center gap-10'>
        {realdata.map((item, index)=>(
            <Card key={index} index={index} handelClick={handleClickButton} value={item}/>
        ))}
    </div>
    </>
  )
}

export default App