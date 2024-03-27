import {useEffect, useState} from "react";
import './cursor.css'
export const Cursor=()=>{

    const [mousePosition,setMousePosition]=useState({
        x:0,
        y:0
    })


  useEffect(()=>{
      document.addEventListener("mousemove",e=>{
          console.log(e);

          const {clientX:x,clientY:y}=e;
          setMousePosition({
              x,y
          })
      })
  },[]);


    return(
        <>
            <div className={"cursor"} style={{left:mousePosition.x+'px',top:mousePosition.y+'px'}}></div>
        <h1>Cursor Position</h1>
            <p><strong>X :</strong> {mousePosition.x}</p>
            <p><strong>Y :</strong> {mousePosition.y}</p>
        </>
    )
}